import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getcategory();
  }

   //to find total category
   totalcategory:any[];
   getcategory()
  {
    var url = "http://globalleads.in/api/getcategory.php";
    this.obj.get(url).subscribe(
      data=>{
        this.totalcategory = data as string[];
        
        
      }
    );
 
  }

  savecat(catname:string)
  {
    var jsondata = {"name":catname};
    var url = "http://globalleads.in/api/savecategory.php";
    this.obj.post(url, jsondata).subscribe(
      data=>{
        this.getcategory();//to reload the list
        
        
      }
    );

  }

  changeStatus(catid:number, status:string)
  {
    var jsondata = {"id":catid, "val":status};
    var url = "http://globalleads.in/api/changecatstatus.php";
    this.obj.post(url,jsondata).subscribe(
      data=>{
        this.getcategory();//to reload the list
        
        
      }
    );

  }

}
