import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getclient();
  }

   //to find total products
   allclient:any[];
   getclient()
   {
     var url = "http://globalleads.in/api/getclient.php";
     this.obj.get(url).subscribe(
       data=>{
         this.allclient = data as string[];
        
         
       }
     );
 
   }
   name:string;
   clientdata:string;
   counter:number=0;
showdata(i:number){
  this.counter=i;
  this.clientdata="";
  if((i>=0) && (i<this.allclient.length))
  {
  this.name = this.allclient[i].name;
  this.clientdata +="<p>Name:"+ this.allclient[i].name+"</p>";
  this.clientdata +="<p>Contact to:"+ this.allclient[i].contactperson+"</p>";
  this.clientdata +="<p>Mobile No:"+ this.allclient[i].mobile+"</p>";
  this.clientdata +="<p>Address:"+ this.allclient[i].address+"</p>";
  this.clientdata +="<p>Profile:"+ this.allclient[i].profile+"</p>";
  }else{
    this.clientdata += "<h3> No Records! Out of Range, Try</h3>";
    this.name = "";
  }
}
predata()
{
  this.counter--
  this.showdata(this.counter);
}

nextdata()
  {
    this.counter++;
    this.showdata(this.counter);
  }

}
