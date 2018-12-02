import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.allupdates();

    
  }


  newupdate:any[];
  allupdates(){
    this.newupdate = [];
    var url = "http://globalleads.in/api/getupdate.php";
    this.obj.get(url).subscribe(
      data=>{
        this.newupdate  = data as string[];
      }
  
    );
  }
  savepost(title:string, details:string){
    var jsondata={"title":title, "details":details, "postedby":"SDK"};
    var url = "http://globalleads.in/api/saveblog.php";
    this.obj.post(url, jsondata).subscribe(
      data=>{
        this.allupdates();
      }
    )
  }
  mypost()
  {
    var jsondata={"postedby":"SDK"};
    var url = "http://globalleads.in/api/mypost.php";
    this.obj.post(url,jsondata).subscribe(
      data=>{
        this.newupdate = data as string[];
      }
    )
  }
}
