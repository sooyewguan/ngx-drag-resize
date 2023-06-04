import { Component } from '@angular/core';
import { NgxResizeHandleType } from 'ngx-drag-resize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly handleType = NgxResizeHandleType;

  dragged(event: any) {
    console.log(event)
  }
}
