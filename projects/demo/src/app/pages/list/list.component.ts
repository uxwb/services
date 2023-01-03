import { Component } from '@angular/core';
import { ListModel } from '../../../../../uxwb/components/src/lib/list/list.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  code = `<uxwb-list
                [title]="'Example:'"
                [list]="[{ title: 'Ex1', meta: 'ex1', badge: ['a', 'b'] },{ title: 'Ex2', meta: 'ex2', description: 'ex2 desc', badge: ['c'] }]"
                (event)="do($event)"
        ></uxwb-list>`;

  item?: ListModel;

  do($e: ListModel):void {
    this.item = $e;
  }
}
