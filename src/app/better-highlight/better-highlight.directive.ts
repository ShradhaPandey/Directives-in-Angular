import { Directive, 
  Renderer2, 
  ElementRef, 
  HostListener, 
  HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {



  constructor( private elementReference: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementReference.nativeElement,
    //    'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elementReference.nativeElement,
      'background-color', 'yellow');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elementReference.nativeElement,
      'background-color', 'transparent');
}
}
/**/ 