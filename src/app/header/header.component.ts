import {Component} from '@angular/core';
import {BackendStorageService} from '../shared/backend-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private backendStorageService: BackendStorageService,
              private router: Router) {
  }

  onFetchData() {
    this.router.navigate(['']);
    this.backendStorageService.onFetchData().subscribe();
  }

  onUploadData() {
    this.backendStorageService.onUploadData();
  }
}
