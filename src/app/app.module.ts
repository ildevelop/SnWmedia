import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {UserComponent} from "./user/user.component";
import {UserService} from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


