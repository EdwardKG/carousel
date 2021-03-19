import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent { 
  items : Array<any> = [];

  constructor() {
		this.items = [
			{ name: 'TEXT' },
			{ name: 'Hello' },
			{ name: 'My name is' },
			{ name: 'Edward' },
			{ name: 'I am' },
			{ name: '18 years' },
			{ name: 'And' },
			{ name: 'Thats My' }, 
			{ name: 'Image carousel' },
			{ name: 'Made with' },
			{ name: 'Angular' }
		];
	}
}