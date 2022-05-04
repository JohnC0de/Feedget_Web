import { ArrowLeft, Camera } from 'phosphor-react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'
import ScreenshotButton from '../ScreenshotButton'

interface FeedbackTypeStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackTypeStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 text-lg leading-6 ">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </div>

        <CloseButton />
      </header>
      <form className="w-full my-4">
        <textarea
          className="scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md focus:border-brand focus:border-1 focus:ring-brand focus:ring-1 resize-none focus:outline-none focus:ring-"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton />
          <button
            className="flex items-center justify-center flex-1 p-2 text-sm transition-colors border-transparent rounded-md focus:ring-2 bg-brand hover:bg-brandHover focus:outline-none focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand"
            type="submit"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
