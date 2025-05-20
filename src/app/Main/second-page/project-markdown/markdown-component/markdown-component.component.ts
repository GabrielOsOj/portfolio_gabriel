import { Component, effect, ElementRef, input } from '@angular/core';
import { take } from 'rxjs';
import { MarkdownSvService } from '../markdownSv/markdown-sv.service';
import highlightJs from 'highlight.js';

@Component({
  selector: 'app-markdown-component',
  standalone: true,
  imports: [],
  templateUrl: './markdown-component.component.html',
  styleUrl: './markdown-component.component.css'
})
export class MarkdownComponentComponent {

  src = input.required<string>();
  textContent = '';

  constructor(private markdownSv:MarkdownSvService,
    private elementRef: ElementRef
  ) {
    effect(() => {
      const src = this.src();
      this.setDataFromSrc(src);
    });
  }
  setDataFromSrc(src: string) {
    this.markdownSv
      .htmlContent(src)
      .pipe(take(1))
      .subscribe((htmlContent) => {
        this.updateDocument(htmlContent as string);
      });
  }
  updateDocument(rawHTML: string) {
    this.elementRef.nativeElement.innerHTML = rawHTML;
    this.textContent = this.elementRef.nativeElement.textContent;
    highlightJs.highlightAll();
  }
}
