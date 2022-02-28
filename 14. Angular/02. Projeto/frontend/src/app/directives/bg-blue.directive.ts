import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[bgBlue]",
})
export class BgBlueDirective {
    constructor(private element: ElementRef) {
        element.nativeElement.style.background = "#3f51b5";
    }
}
