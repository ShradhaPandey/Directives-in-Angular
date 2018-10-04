import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective{

constructor(private elementReference: ElementRef){

}

ngOnInit(){
    this.elementReference.nativeElement.style.backgroundColor = 'lightgreen';
}
}

/*this is not the best practice access the elements directly.
thus lets try a better directive.
This is because when running the app in browser, 
accessing the elements directly can be a problem*/