import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})
export class SearchesComponent implements OnInit {

  termino:string;
  heroes:Heroe[];

  constructor(private _activatedRoute:ActivatedRoute, private _router:Router,
              private _heroesService:HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

  ngOnInit() {

  }

  verHeroe(idx:number) {
    this._router.navigate(['/heroe', idx]);
  }

}
