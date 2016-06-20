// Import the Component and Input Decorators from Angular
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// Create the MetaData for the @Component decorator 
// where we the selector name that ids the component's element
@Component({
	selector: 'my-hero-detail',
	template: `
	<div *ngIf='hero'>
		<h2>{{hero.name}} Details</h2>
		<div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
	</div>		
	`
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}
