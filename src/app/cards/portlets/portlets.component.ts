import { Component } from '@angular/core';

@Component({
  selector: 'app-portlets',
  templateUrl: './portlets.component.html',
  styleUrls: ['./portlets.component.scss']
})
export class PortletsComponent {
  curColor = 'info';
  isCollapsed = false;
  isCollapsed2 = false;
  isRemoved = false;

  changeColor() {
    this.curColor = (this.curColor === 'info' ? 'warning' : 'info');
  }
}
