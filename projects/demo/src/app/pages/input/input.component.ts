import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  code = `<uxwb-input
                [title]="'Example:'"
                [data]="'123'"
                (event)="do($event)"
        ></uxwb-input>`;

  item: string = '';

  do($e: string): void {
    this.item = $e;
  }
}
