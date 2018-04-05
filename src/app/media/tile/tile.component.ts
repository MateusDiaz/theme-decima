import { Component } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  images: any[] = [];
  images2: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 8; this.num += 1) {
      this.images.push(this.num);
    }

    for (this.num; this.num <= 21; this.num += 1) {
      this.images2.push(this.num);
    }
  }

}
