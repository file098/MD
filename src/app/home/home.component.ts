import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(ContactsComponent) contacts: ContactsComponent | undefined;

  sections: string[] = [];
  color: string = '#fff';
  scrolledOver: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
    document.querySelectorAll('section').forEach((elem) => {
      this.sections.push(elem.id);
    });
  }

  scrollEvent(): boolean {
    this.scrolledOver = !(window.scrollY == 0);
    return this.scrolledOver;
  }

  scrollToSection(el: string) {
    let sectionCollection: NodeListOf<Element> =
      document.querySelectorAll('main section');
    sectionCollection.forEach((node) => {
      if (node.id.includes(el)) {
        node.scrollIntoView({
          block: 'start',
          inline: 'start',
          behavior: 'smooth',
        });
      }
    });
  }
}
