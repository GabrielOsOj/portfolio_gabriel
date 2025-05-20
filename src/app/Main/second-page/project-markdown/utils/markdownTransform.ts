import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { highlightCodeBlock } from './highlightCodeBlock';

marked.use(markedHighlight({ highlight: highlightCodeBlock }));
export const markdownToHtml = (content: string) => {
  return marked(content);
};