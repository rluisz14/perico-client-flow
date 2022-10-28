import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      FileDropModule
    ],
    exports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      FileDropModule
    ]
  })
  export class FiledropModule { }
