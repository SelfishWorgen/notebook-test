import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app-routing.config";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StorageService } from "./core/services/storage.service";
import { NotesService } from "./core/services/notes.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StorageService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
