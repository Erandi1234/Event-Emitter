
import{Output, EventEmitter} from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'parent',
   templateUrl: './parent_component.html',
  
})
export class ParentComponent {
   showMessage : string;
    onNotifyClicked(message : string):void
    {
         this.showMessage = message;
    }
}
