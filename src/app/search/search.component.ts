import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  allcity:any[];
  allcat:any[];

  ngOnInit() {
    this.getcat();
    this.getcity();
    this.getproduct();
  }


  getcity()
  {
    this.obj.get("../assets/city.json").subscribe(
      data =>{
         this.allcity = data as string[];
      }
    );
  }

  getcat()
  {
    this.obj.get("../assets/category.json").subscribe(
      data =>{
         this.allcat = data as string[];
      }
    );
  }

  allproduct:any;
  myproduct:any[]=[];
  getproduct()
  {
    this.obj.get("../assets/product.json").subscribe(
      data =>{
         this.allproduct = data as string[];
      }
    );

  }
  norecord:string="";
  searchdata(catid:string, cityid:string)
  {
    //alert("city index is :" + cityid);
    //alert("cat index is :" + catid);
    //alert(catid);
    //alert(cityid);
    this.myproduct=[];
    for(var i=0; i<this.allproduct.length; i++)
    {
      //alert(this.allproduct[i].name);
      var loc = this.allproduct[i].loc;
      var cat = this.allproduct[i].cat;

      if((catid !="" ) && (cityid !=""))
      {
      if((catid == cat) && (cityid == loc))
      {
          this.myproduct = this.myproduct.concat(this.allproduct[i]);
      }
      } 

      else if((catid=="") && (cityid !="")) //location wise
      {
        if(cityid == loc)
      {
          this.myproduct = this.myproduct.concat(this.allproduct[i]);
      }
      }

      else if((catid !="") && (cityid =="")) //location wise
      {
        if(catid == cat)
      {
          this.myproduct = this.myproduct.concat(this.allproduct[i]);
      }
      }
      else{
        alert("Please provide Search keyword");
      }


    }//for loop end
    if(this.myproduct.length==0)
    {
      this.norecord = "Sorry ! 0 Record Found !";
    }
    else{
      this.norecord = this.myproduct.length + "- Matching Record Found";
    }
     


  }


}
