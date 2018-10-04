import { Directive, 
  Renderer2, 
  ElementRef, 
  HostListener, 
  HostBinding,
  Input} from '@angular/core';

@Directive({
  selector: '[appHlHighlight]'
})
export class HlHighlightDirective {



@HostBinding('style.backgroundColor') backgroundColor: string='transparent';

  constructor( private elementReference: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elementReference.nativeElement,
    //   'background-color', 'yellow');
    this.backgroundColor='orange'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementReference.nativeElement,
    //   'background-color', 'transparent');
    this.backgroundColor='transparent'
}
}