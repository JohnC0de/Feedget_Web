import { CloseButton } from '../../CloseButton'
import { FeedbackType, feedbackTypes } from '../index'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-lg leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="flex flex-col items-center flex-1 w-24 gap-2 py-5 border-2 border-transparent rounded-lg hover:border-brand focus:border-brand focus:outline-none bg-zinc-800"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
