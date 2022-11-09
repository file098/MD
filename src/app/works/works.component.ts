import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  rect: DOMRect | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}

  isInViewport() {
    const offset = 600;
    const box = document
      .querySelector('.even-columns')!
      .getBoundingClientRect();

    const result = box!.top <= offset;

    // Add the controll for scrolling back up

    console.log(result);

    return result;
  }
}
