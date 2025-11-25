import { Component } from '@angular/core';
import { SideMenuHeader } from "./side-menu-header/side-menu-header";
import {SideMenuOptionsComponent } from "./side-menu-options/side-menu-options";

@Component({
  selector: 'app-gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.html',
})

export class GifsSideMenu { 



}
