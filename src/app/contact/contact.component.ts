import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getcontact();
  }


  //to find total contact
  totalcontact:any[];
  getcontact()
 {
   var url = "http://globalleads.in/api/getcontact.php";
   this.obj.get(url).subscribe(
     data=>{
       this.totalcontact = data as string[];
       
       
     }
   );

 }
}
