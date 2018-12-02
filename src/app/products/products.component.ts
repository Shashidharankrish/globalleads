import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getcategory();
  }

   //to find total products
   allcat:any[];
   getcategory()
   {
     var url = "http://globalleads.in/api/getcategory.php";
     this.obj.get(url).subscribe(
       data=>{
         this.allcat = data as string[];
        
         
       }
     );
 
   }
   
   msg:string;
   saveproducts(name:string,details:string,price:number,cat:number)
   {
      var jsondata = {"name":name, "price":price, "catid":cat, "details":details};
      var url = "http://globalleads.in/api/saveproduct.php";
      this.obj.post(url, jsondata).subscribe(
        data=>{
          this.msg="Product Save Successfully !";
         
          
        }
      );
   }
   proloading:string;
   allproduct:any[];
   getproduct(catid:number)
   {
    this.allproduct=[]; // setting by empty
     this.proloading = "Please Wait Searching...";
     
    var jsondata = {"catid":catid};
    var url = "http://globalleads.in/api/getproductbycat.php";
    this.obj.post(url, jsondata).subscribe(
      data=>{
        this.allproduct= data as string[];
        this.proloading = "";
      }
    );


   }


   changeStatus(id:number, status:string, catid:number)
   {
     var jsondata = {"id":id, "val":status};
     var url = "http://globalleads.in/api/changeprostatus.php";
     this.obj.post(url,jsondata).subscribe(
       data=>{
         this.getproduct(catid);//to reload the list
         //alert(this.allproduct.length);
         
       }
     );
 
   }

  
}
