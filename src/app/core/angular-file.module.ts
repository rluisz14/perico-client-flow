import { ngfModule, ngf } from 'angular-file';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
      ngfModule,
      BrowserModule
    ],
    exports: [
      ngfModule,
      BrowserModule
    ]
  })
  export class AngularfileModule {}
