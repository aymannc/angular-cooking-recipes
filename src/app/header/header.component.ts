import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onPageChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onPageSelected(page: string) {
    // console.log(page);
    this.onPageChanged.emit(page);
  }
}
