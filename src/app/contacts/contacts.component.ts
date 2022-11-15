import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {} // the element that you are observing (just add #yourElement in the template) for this  query to work

  @ViewChild('contacts') yourElement: ElementRef | undefined;

  ngAfterViewInit() {
    const threshold = 0.1; // how much % of the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let cardsCollection: NodeListOf<HTMLElement> = document.querySelectorAll('#vertical-contacts p');
            cardsCollection.forEach((p, index) => {
              p.classList.add('fadeIn');
              p.style.animationDelay = index/1.5 + "s";
            })
            observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
          }
        });
      },
      { threshold }
    );
    observer.observe(this.yourElement!.nativeElement);
  }
}
