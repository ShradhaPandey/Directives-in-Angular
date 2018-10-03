# Directives-in-Angular
Structural directives: which change the structure of the dom
*ngIf and *ngFOr
Note: we cannot use more than 1 structural directive on the same dom element.

Attribute directives:
ngClass and ngStyle
ngClass: define a css class in css file and use it on an element when you want to change the styling dynamically.
ngStyle: define a css style, inline way on the element itself and use it on an element when you want to change the styling dynamically.
Since both ngClass and ngStyle directives work only when the given condition is true,
we can chnage the styling dynamically.

Custom directive: we can create our own directives.

-you can create one manually and update app.module.ts file accordingly
or can generate by running this commmand: ng g d directive-name

1. appBasicHighlight: accessing the dom elements directly using ElementRef
2. appBetterHighlight: using renderer and renderer.setStyle
  To make it even more reactive: use @HostListener to react to any event on an element.
  This will highlight the text on a mouse-over event and make background color as yellow.
3. appHlHighlight: using @HostBinding
  This will highlight the text on a mouse-over event and make background color as orange.

using custom property binding
4. unless: creating your own custom structural directive
this directive will work opposite of *ngIf, i.e. it will display the dom element only if the condition given is false.
