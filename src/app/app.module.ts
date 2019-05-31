import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InMemoryDataService } from './services/InMemoryData/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { imports } from './app.imports';
import { declarations } from './app.declarations';

@NgModule({
  declarations,
  imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
