import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LocationComponent } from './location/location.component';
import { CategoryComponent } from './category/category.component';
import { ResponseComponent } from './response/response.component';
import { ClientComponent } from './client/client.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MycontactComponent } from './mycontact/mycontact.component';
import { UpdatesComponent } from './updates/updates.component';

//routing start 
const appRoutes :Routes = [
  {path : 'response', component:ResponseComponent},
  {path : 'contact', component:ContactComponent},
  {path : 'location', component:LocationComponent},
  {path : 'category', component:CategoryComponent},
  {path : 'products', component:ProductsComponent},
  {path : 'client', component:ClientComponent},
  {path : 'dashboard', component:DashboardComponent},
  {path : 'viewprofile', component:ViewprofileComponent},
  {path : 'editprofile', component:EditprofileComponent},
  {path : 'mycontact', component:MycontactComponent},
  {path : 'updates', component:UpdatesComponent},
  {path : '', redirectTo:'/dashboard', pathMatch:'full'}
  ];

//routing end

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LocationComponent,
    CategoryComponent,
    ResponseComponent,
    ClientComponent,
    ProductsComponent,
    ContactComponent,
    DashboardComponent,
    ViewprofileComponent,
    EditprofileComponent,
    MycontactComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
