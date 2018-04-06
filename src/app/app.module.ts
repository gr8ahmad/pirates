import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PiratesComponent } from './pirates/pirates.component';
import { PirateDetailComponent } from './pirate-detail/pirate-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PiratesComponent,
    PirateDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
