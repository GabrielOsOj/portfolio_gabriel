import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { markdownToHtml } from '../utils/markdownTransform';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownSvService {

  private httpClient = inject(HttpClient);
  htmlContent(src: string){
    return this.httpClient.get(src, { responseType: 'text' }).pipe(
      map((markdownContent:string) => {
        return markdownToHtml(markdownContent);
      })
    );
  }

}
