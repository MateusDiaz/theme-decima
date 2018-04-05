import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  images: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 21; this.num += 1) {
      this.images.push(this.num);
    }
  }
}
