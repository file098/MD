import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sections: string[] = [];
  color: string = "#fff";

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
    //  since the ids have spaces i need to confront them here with a str compare
    let sectionCollection: NodeListOf<Element> = document.querySelectorAll('main section');
    sectionCollection.forEach(node => {
      if (node.id.includes(el)) {
        node.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
      }
    });
  }
}
