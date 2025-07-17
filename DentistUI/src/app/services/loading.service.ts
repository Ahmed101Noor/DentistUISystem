import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loading = false;

  showLoading() {
    this.loading = true;
    // Optionally, trigger a loading spinner here
  }

  hideLoading() {
    this.loading = false;
    // Optionally, hide the loading spinner here
  }

  isLoading(): boolean {
    return this.loading;
  }
}