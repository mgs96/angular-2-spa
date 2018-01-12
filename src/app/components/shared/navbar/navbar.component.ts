import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes:any[];

  constructor(private _heroesService:HeroesService, private _router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string) {
    //this.heroes = this._heroesService.buscarHeroes(termino);
    this._router.navigate(['/resultados', termino]);
  }

}
