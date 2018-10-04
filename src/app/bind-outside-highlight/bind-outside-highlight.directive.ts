import { Directive,
  Input,
  HostBinding,
  HostListener} from '@angular/core';

@Directive({
  selector: '[appBindOutsideHighlight]'
})
export class BindOutsideHighlightDirective {
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='plum';
  
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor() { }
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
   
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    
    this.backgroundColor=this.defaultColor;

}
}