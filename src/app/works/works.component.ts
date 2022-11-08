import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  rect: DOMRect | undefined = undefined;

  contentPassed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.rect = document
    //   .querySelector('.even-columns')!
    //   .getBoundingClientRect();
  }

  isInViewport() {
    const offset = 600;
    const box = document
      .querySelector('.even-columns')!
      .getBoundingClientRect();

    const result = box!.top <= offset;

    if(!this.contentPassed){
      this.contentPassed = true;
    }

    return result;
  }
}
