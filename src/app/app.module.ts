import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPaginatorComponent } from './my-paginator/my-paginator.component';
import { FormsModule } from '@angular/forms';
import { MyDevicesListComponent } from './my-devices-list/my-devices-list.component';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [		
    AppComponent,
      MyPaginatorComponent,
      MyDevicesListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
