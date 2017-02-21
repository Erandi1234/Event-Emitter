import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent} from './child_component';
import { ParentComponent} from './parent_component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
