import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.viewprofile();
  }
profile:any[];
viewprofile(){
  var jsondata = {"userid":"18"};
  var url = "http://globalleads.in/api/viewprofile.php";
  this.obj.post(url, jsondata).subscribe(
    data=>{
      this.profile  = data as string[];
    }

  );
}
}
