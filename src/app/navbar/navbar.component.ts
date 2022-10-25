import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sections: string[] = [];


  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);

    document.querySelectorAll('section').forEach(elem => {
      this.sections.push(elem.id);
    });
  }

  scrollEvent(): boolean {
    return window.scrollY >= window.innerHeight;
  }

  scrollToSection(el: string) {
    let section = document.querySelector('section#'+el)
    section?.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
  }

}


