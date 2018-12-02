import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getcity();
    
  }

  totalcity:any[];
  getcity()
  {
    var url = "http://globalleads.in/api/getcity.php";
    this.obj.get(url).subscribe(
      data=>{
        this.totalcity = data as string[];
        
        
      }
    );
  }

  changeStatus(cityid:number, status:string)
  {
    var jsondata = {"id":cityid, "val":status};
    var url = "http://globalleads.in/api/changecitystatus.php";
    this.obj.post(url,jsondata).subscribe(
      data=>{
        this.getcity();//to reload the list
        
        
      }
    );

  }

  savecity(cityname:string)
  {
    var jsondata = {"name":cityname};
    var url = "http://globalleads.in/api/savecity.php";
    this.obj.post(url,jsondata).subscribe(
      data=>{
        this.getcity();//to reload the list
        
        
      }
    );

  }
}
