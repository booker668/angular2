import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    MenuModule,
    MegaMenuModule,
    MenubarModule
  ],
  exports: [
    InputTextModule,
    MenuModule,
    MegaMenuModule,
    MenubarModule
  ]
  //...
})
export class YourAppModule { }
