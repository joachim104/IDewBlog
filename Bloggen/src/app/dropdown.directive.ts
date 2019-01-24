import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { AppComponent } from './app.component';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  @Output() public appDropdown = new EventEmitter();
  constructor(private _elementRef: ElementRef, private app: AppComponent) {

  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    // console.log("appdropdown", this.appDropdown)
    if (!targetElement) {
      return;
    }
    console.log("nat", this._elementRef.nativeElement)
    const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
    console.log("isClickedInside", isClickedInside)
    console.log("targetElement", targetElement.id)
    if (!isClickedInside) {
      console.log("event", event)
      this.appDropdown.emit(false);
      // this.appDropdown.emit(null);
    }
  }

}
