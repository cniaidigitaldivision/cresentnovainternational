'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Icon } from './Icon'

/**
 * CEO message player, shared by the home page banner and the About page.
 *
 * The frame is landscape while the source clip is 1440x2560 (9:16 portrait), so the
 * video is object-cover: measured against the speaker's position, the landscape crop
 * keeps his head and torso in frame at every breakpoint and only loses ceiling above
 * and desk below.
 *
 * The file is ~108 MB for 61 seconds, so preload is "none" -- Saif's photo stands in as
 * the thumbnail and not a single video byte is fetched until the play button is pressed.
 */
export function CeoVideo({ label = 'Watch the message' }: { label?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  function play() {
    setStarted(true)
    videoRef.current?.play()
  }

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-ink shadow-md lg:h-80">
      <video
        ref={videoRef}
        src="/ceo-message.mp4"
        poster="/saif-ur-rehman.png"
        preload="none"
        playsInline
        controls={started}
        controlsList="nodownload"
        onPlay={() => setStarted(true)}
        onEnded={() => setStarted(false)}
        className="h-full w-full object-cover"
      >
        Your browser does not support embedded video.
      </video>

      {!started && (
        <>
          {/* Thumbnail sits over the video until playback starts, so it can use
              next/image (responsive sources) rather than the raw poster attribute. */}
          <Image
            src="/saif-ur-rehman.png"
            alt="Saif ur Rehman, Chief Executive Officer"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            style={{ objectPosition: '50% 28%' }}
            className="object-cover"
          />
          <button
            type="button"
            onClick={play}
            aria-label={`${label} from Saif ur Rehman`}
            className="group absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors hover:bg-ink/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-bright text-white shadow-xl transition-all group-hover:scale-110 group-hover:bg-tertiary group-hover:text-ink">
              <Icon name="play_arrow" className="text-3xl" />
            </span>
            <span className="absolute bottom-3 left-3 rounded-md bg-ink/75 px-space-xs py-1 font-label-md text-label-md font-bold text-white backdrop-blur-sm">
              {label} · 1:01
            </span>
          </button>
        </>
      )}
    </div>
  )
}
