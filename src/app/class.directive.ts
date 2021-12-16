import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { 
    //  // never do this!!!!
    //  setTimeout(() => {
    //   this.element.nativeElement.style.backgroundColor= this.backgroundColor;
    //  },50)
    


  }

  @Input('appClass') set classNames(classObj: any) {
    for(let key in classObj) {
      if(classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }




}



// const directive = new ClassDirective();
// directive.backgroundColor = 'red';


// Comunicate from parent child component.....app-root -->
// parent component template  -->
// <app-card [title]="'SnowyMountains' "></app-card>

// // Child component class -->

// class ChildComponent {
//   @Input() title: string;
// }


