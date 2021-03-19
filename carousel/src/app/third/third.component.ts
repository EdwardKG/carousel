import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {
  items : Array<any> = [];

  constructor() { 
		this.items = [
			{ name: 'assets/second-slider/1.jpg', text: 'First' },
			{ name: 'assets/second-slider/2.jpg', text: 'Second'  },
			{ name: 'assets/second-slider/3.jpg', text: 'Third'  },
			{ name: 'assets/second-slider/4.jpg', text: 'Fourth'  },
			{ name: 'assets/second-slider/5.jpg', text: 'Fifth'  },
			{ name: 'assets/second-slider/6.jpg', text: 'Sixth'  },
			{ name: 'assets/second-slider/7.jpg', text: 'Seventh'  },
			{ name: 'assets/second-slider/8.jpg', text: 'Eighth'  },
			{ name: 'assets/second-slider/9.jpg', text: 'Ninth'  }, 
			{ name: 'assets/second-slider/10.jpg', text: 'Tenth'  },
			{ name: 'assets/second-slider/11.jpg', text: 'Eleventh'  },
			{ name: 'assets/second-slider/12.jpg', text: 'Twelveth'  }
		];
	}
}