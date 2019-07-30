import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  resize = 'full';
  dropdown = false;
  @Input() active;

  constructor() {
    this.resize = window.innerWidth < 720 ? 'small' : 'full'
  }

  ngOnInit() {
  }

  onActive(section: string) {
    if (section == this.active) {
      return 'black'
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize = window.innerWidth < 720 ? 'small' : 'full';
  }

  onPress() {
    this.dropdown = !this.dropdown;
  }

}
