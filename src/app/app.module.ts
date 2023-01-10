import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { NewsitemComponent } from './components/newsitem/newsitem.component';
import { NewsserviceService } from './service/newsservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewslistComponent,
    NewsitemComponent,
    AboutComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [NewsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
