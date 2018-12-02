import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getcity();
    this.getcat();
    this.getcontact();
    this.getresponse();
    this.getproduct();
    this.getclient();

  }

  totalresponse:any='Loading...';
  totalcontact:any='Loading...';
  totalcity:any='Loading...';
  totalcat:any='Loading...';
  totalproducts:any='Loading...';
  totalclient:any='Loading...';

  a:any;
  getcity()
  {
    var url = "http://globalleads.in/api/getcity.php";
    this.obj.get(url).subscribe(
      data=>{
        this.a = data as string[];
        this.totalcity = this.a.length;
        
      }
    );
  }


  b:any;
  getcat()
  {
    var url = "http://globalleads.in/api/getcategory.php";
    this.obj.get(url).subscribe(
      data=>{
        this.b = data as string[];
        this.totalcat = this.b.length;
        
      }
    );
  }

  //to find total contact
  getcontact()
  {
    var url = "http://globalleads.in/api/getcontact.php";
    this.obj.get(url).subscribe(
      data=>{
        this.b = data as string[];
        this.totalcontact = this.b.length;
        
      }
    );

  }

    //to find total response
    getresponse()
    {
      var url = "http://globalleads.in/api/getresponse.php";
      this.obj.get(url).subscribe(
        data=>{
          this.b = data as string[];
          this.totalresponse = this.b.length;
          
        }
      );
  
    }


     //to find total products
     getproduct()
     {
       var url = "http://globalleads.in/api/getproduct.php";
       this.obj.get(url).subscribe(
         data=>{
           this.b = data as string[];
           this.totalproducts = this.b.length;
           
         }
       );
   
     }

      //to find total clients
      getclient()
      {
        var url = "http://globalleads.in/api/getclient.php";
        this.obj.get(url).subscribe(
          data=>{
            this.b = data as string[];
            this.totalclient = this.b.length;
            
          }
        );
    
      }



}
