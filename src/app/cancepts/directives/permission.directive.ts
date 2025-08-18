import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]',
  standalone: true
})
export class PermissionDirective {

  requiredPermission=2

  constructor( private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
   
   }

   //Whenever the input value changes in the template (*appPermission="2"), this setter method runs automatically.
   @Input() set appPermission(currentPermission: number) {

    if (this.requiredPermission == currentPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
     else {
      this.viewContainer.clear();
    }

  }

}
