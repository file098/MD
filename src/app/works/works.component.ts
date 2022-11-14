import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isInViewport() {
    if (document.querySelector('body')!.clientWidth < 500) {
      // console.log('mobile');
    }

    const offset = 600;
    const offsetBottom =
      document.querySelector('.even-columns')!.clientHeight - 400;
    const box = document
      .querySelector('.even-columns')!
      .getBoundingClientRect();

    //TODO: Add the controll for scrolling back up
    const result = box!.top <= offset;

    if (offsetBottom > box.bottom) {
      // console.log('over');
    }

    return result;
  }

  // the element that you are observing (just add #yourElement in the template) for this  query to work
  @ViewChild('columns') yourElement: ElementRef | undefined;

  ngAfterViewInit() {
    const threshold = 0.2; // how much % of the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let cardsCollection = document.querySelectorAll(".card");
            cardsCollection[0].classList.add('slide-card-up');
            cardsCollection[1].classList.add('slide-card-down');
            observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
          }
        });
      },
      { threshold }
    );
    observer.observe(this.yourElement!.nativeElement);
  }
}
