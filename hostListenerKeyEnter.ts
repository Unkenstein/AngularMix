import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-keyboard-listener',
  templateUrl: './keyboard-listener.component.html',
  styleUrls: ['./keyboard-listener.component.css']
})
export class KeyboardListenerComponent {

  // Listener just for one key
  @HostListener('keydown.esc', ['$event'])
  onEsc(event: KeyboardEvent) {
    // some logic here
  }
 
  // handler of the keyup event
  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
   
    let keysToIgnore: string[] = ['PrintScreen', 'Escape', 'cControl', 'NumLock', 'PageUp', 'PageDown', 'End',
        'Home', 'Delete', 'Insert', 'ContextMenu', 'Control', 'ControlAltGraph', 'Alt', 'Meta', 'Shift', 'CapsLock',
        'TabTab', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Pause', 'ScrollLock', 'Dead', '',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];

    if(this.indexOfInArray(event.key, keysToIgnore) === -1) { // if it's not a special key
         if(event.key === 'Enter') {
           // some logic here
        } else {
           // some logic here
        }
    }
  }

}
