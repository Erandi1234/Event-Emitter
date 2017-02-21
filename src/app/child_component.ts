import{Output, EventEmitter} from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'child',
   templateUrl: './child_component.html',
  
})
export class ChildComponent {
  title = 'app works!';
  @Output() notify: EventEmitter<string>= new EventEmitter<string>();

    onClick(): void
    {
        this.notify.emit("Message from child");
    }
}
