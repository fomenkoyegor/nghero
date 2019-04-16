import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ApiService} from '../api.service';
import {Hero} from '../hero';
import {interval} from 'rxjs';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit, OnDestroy {
  public hero: Hero;
  public Interval;
  public Loading = 0;
  @Output() add = new EventEmitter();

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.onGetHero();
    this.Interval = interval(5000);
    this.Interval.subscribe(val => this.onGetHero());
  }

  onGetHero(): void {
    this.api.getHero().subscribe((hero: Hero) => {
      this.hero = hero;
      this.Loading = 0;
    });
  }

  onAdd() {
    this.add.emit(true);
  }

  ngOnDestroy(): void {
    this.Interval.unsubscribe();
  }


}
