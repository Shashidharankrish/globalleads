import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getresponse();
  }
   //to find total response
    totalresponse:any[];
    getresponse()
   {
     var url = "http://globalleads.in/api/getresponse.php";
     this.obj.get(url).subscribe(
       data=>{
         this.totalresponse = data as string[];
         
         
       }
     );
 
   }

}
