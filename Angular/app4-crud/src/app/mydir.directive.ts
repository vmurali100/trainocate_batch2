import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {


  constructor(private element:ElementRef) { 
    console.log(element)
  }

  @HostListener('click') onClick(){
    console.log('clicked')
    this.element.nativeElement.style.background="red"
  }
}
