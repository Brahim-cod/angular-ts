import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(hs => this.heroes = hs.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
