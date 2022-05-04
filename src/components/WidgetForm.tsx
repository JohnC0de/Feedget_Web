import { CloseButton } from './CloseButton'

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: { source: bugImageUrl, alt: 'Imagem de um inseto' }
  },
  IDEA: {
    title: 'Idéia',
    image: { source: ideaImageUrl, alt: 'Imagem de uma lâmpada' }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export function WidgetForm() {
  return (
    <div className="relative flex flex-col items-center p-4 mb-4 shadow-lg bg-zinc-900 rounded-2xl w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-lg leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button className="flex flex-col items-center">
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com ❤️ por{' '}
        <a
          className="underline underline-offset-2"
          href="https://github.com/johnc0de"
        >
          JohnC0de
        </a>
      </footer>
    </div>
  )
}
