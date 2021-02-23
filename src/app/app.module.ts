import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoldersComponent } from './folders/folders.component';
import { HttpClientModule } from'@angular/common/http';
import { FoldersService } from './folders.service';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FoldersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
