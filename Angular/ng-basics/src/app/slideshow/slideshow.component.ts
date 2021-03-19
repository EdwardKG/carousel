import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';


const images: string[] = [
  'https://raw.githubusercontent.com/onehungrymind/angular-rxjs-examples/master/src/assets/lion-roar.jpg',
  'https://raw.githubusercontent.com/onehungrymind/angular-rxjs-examples/master/src/assets/maxres.jpg',
  'https://raw.githubusercontent.com/onehungrymind/angular-rxjs-examples/master/src/assets/maxresdefault.jpg'
];

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @ViewChild('previous') previous;
  @ViewChild('next') next;
  position: any;
  images: any[] = images;
  currentIndex = 0;
  currentDirection = 'left';

  constructor() {}

  ngOnInit() {
    const previous$ = fromEvent(this.getNativeElement(this.previous), 'click').pipe(map(event => ({shift: -1, direction: 'right'})));
 
     const next$ = fromEvent(this.getNativeElement(this.next), 'click').pipe(map(event => ({shift: +1, direction: 'left'})));
 
     merge(previous$, next$).pipe(
         startWith({index: 0} as any),
         scan((acc, curr) => {
           const projectedIndex = acc.index + curr.shift;
 
           const adjustedIndex = projectedIndex < 0 ? this.images.length - 1
             : projectedIndex >= this.images.length ? 0
               : projectedIndex;
 
           return {index: adjustedIndex, direction: curr.direction};
         })
       )
       .subscribe(event => {
         this.currentIndex = event.index;
         this.currentDirection = event.direction;
       });
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}