import { Directive,
   Input, TemplateRef,
ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set appUnless(condition: boolean){  /* make sure this property is of same name as the directive*/ 
if(!condition){
this.vcRef.createEmbeddedView(this.templateRef);
}else{
  this.vcRef.clear();
}
}
  constructor(private templateRef: TemplateRef<any>,
              private vcRef:ViewContainerRef ) { }

}
