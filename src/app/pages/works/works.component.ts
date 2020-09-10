import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  works: any [] = [];
  constructor() {
    this.works = [
      {name: 'Mascotas',
       stack: ' Vue.js, Nuxt, Bootstrap, Node.js, Express, MongoDB, Mongoose.',
       img: 'assets/images/mascotas.svg', description: 'Aplicación cuya función es permitir que los historiales de las mascotas puedan ser compartidos entre los veterinarios y propietarios, permitiendo así que estos siempre estén actualizados y una mejora en la clínica de las mascotas.',
      url: 'https://apimascotas.web.app/'},
      {name: 'UVI24',
      stack: ' Vue.js, Vuetify, Firebase.',
      img: 'assets/images/uvi24.svg',
      description: 'Realización de la parte frontend, aplicación en la cual permite realizar videollamadas veterinarias y además permite la búsqueda del hospital más cercano y otros servicios que requiera el propietario.',
      url: 'https://github.com/esspego/UVI24'},
      {name: 'Pet+',
      stack: 'Angular, Tailwind, fastify, node.js, mongDB, mongoose.',
      img: 'assets/images/pet.svg',
      description: 'Consiste en la migración de la aplicación de mascotas a Angular con la introducción de otras mejoras y servicios.',
      url: 'https://petplus.xyz/'}
    ];
  }

  ngOnInit(): void {
  }

}
