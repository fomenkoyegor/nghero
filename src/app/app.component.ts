import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'superheroes';
  public cards = [0];
  public count = 0;

  public addCard(): void {
    this.count++;
    this.cards.push(this.count);
  }
}
