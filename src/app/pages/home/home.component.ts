import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: any [] = [];
  currentTab: string;
  icon: boolean = true;
  frontendSkills: any [] = [];
  backendSkills: any [] = [];
  othersSkills: any [] = [];
  constructor() {
    this.tabs = [
    {name: 'tab1', icon: 'far fas fa-user'},
    {name: 'tab2', icon: 'fas fa-code'},
    {name: 'tab3', icon: 'far fa-comment'}
    ];
    this.currentTab = 'tab1';
    this.frontendSkills = [
      {name: 'HTML',  icon: 'fab fa-html5'},
      {name: 'CSS', icon: 'fab fa-css3-alt'},
      {name: 'JavaScript', icon: 'fab fa-js'},
      {name: 'Vue.js', icon: 'fab fa-vuejs'},
      {name: 'Angular', icon: 'fab fa-angular'},
    ];
    this.backendSkills = [ 'Node.js', 'Express', 'MongoDb', 'Mongoose'];
    this.othersSkills = ['Boostrap', 'Vuetify', 'Tailwind', 'Firebase' ];
   }

  ngOnInit(): void {
  }

}
