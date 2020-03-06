import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 'shoping-list';
  title = 'course-project';

  ChangeCurrentPage(page: string) {
    this.currentPage = page;
    console.log(this.currentPage);
  }
}
