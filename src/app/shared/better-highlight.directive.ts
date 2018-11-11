import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'cyan';

  /** HostBinding('') alternate to renderer;
   * used to bind
   * the element's built-in property
   * (eg., style or style.backgroundColor property).
   */
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    /** renderer used to it's own prop (like- setStyle())
     * to change the received element's (like - this.elRef.nativeElement) bahavior.
    */
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan', false, false);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }
}
