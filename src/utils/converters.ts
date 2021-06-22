import { Converter } from 'showdown'
import { convert } from 'html-to-text'

export const MarkdownConverter = {
  makeUnsafeHtml: (markdown: string): string => {
    return new Converter({
      tables: false,
      openLinksInNewWindow: false,
      strikethrough: true,
      emoji: true,
      literalMidWordUnderscores: true
    }).makeHtml(markdown)
  },
  makeSafeHtml: (markdown: string): string => {
    const unsafeHtml = MarkdownConverter.makeUnsafeHtml(markdown)
    return unsafeHtml
  }
}

export const HtmlConverter = {
  makePlainText: (html: string): string => {
    return convert(html, {
      wordwrap: 130
    })
  }
}
