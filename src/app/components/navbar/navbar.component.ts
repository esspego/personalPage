import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentWindowWidth: number;
  public openMenu: boolean;

  constructor() {
    this.openMenu = true;
   }

  ngOnInit(): void {
    this.currentWindowWidth = window.innerWidth;
    console.log(this.currentWindowWidth);
    console.log(this.openMenu);
  }
}
