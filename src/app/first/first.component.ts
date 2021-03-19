import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
}) 
export class FirstComponent {
  items : Array<any> = [];

  constructor() {
		this.items = [
			{ name: 'assets/first-slider/1.jpg' },
			{ name: 'assets/first-slider/2.jpg' },
			{ name: 'assets/first-slider/3.jpg' }, 
			{ name: 'assets/first-slider/4.jpg' },
			{ name: 'assets/first-slider/5.jpg' },
			{ name: 'assets/first-slider/6.jpg' },
			{ name: 'assets/first-slider/7.jpg' },
			{ name: 'assets/first-slider/8.jpg' },
			{ name: 'assets/first-slider/9.jpg' },
			{ name: 'assets/first-slider/10.jpg' },
			{ name: 'assets/first-slider/11.jpg' },
			{ name: 'assets/first-slider/12.jpg' }
		];
	}
}