import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.editprofile();
  }
  profile:any[];
  editprofile(){
    var jsondata = {"userid":"18"};
    var url = "http://globalleads.in/api/viewprofile.php";
    this.obj.post(url, jsondata).subscribe(
      data=>{
        this.profile  = data as string[];
      }
  
    );
  }
  msg:string;
  updateprofile(name:string,email:string,mobile:number,password:string,address:string){
    var jsondata = {"id":"18", "name":name,"email":email,"mobile":mobile,"password":password,"address":address};
    var url = "http://globalleads.in/api/updateprofile.php";
    this.obj.post(url, jsondata).subscribe(
      data=>{
        this.msg="Profile Updated Successfully !";
      }
  
    );
  }
}
