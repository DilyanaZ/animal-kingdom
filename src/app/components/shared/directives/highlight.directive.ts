import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  exportAs: "appHighlight"
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.backgroundColor = "dodgerblue";
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("#4a148c", "azure");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string, otherColor: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = otherColor;
  }
}
