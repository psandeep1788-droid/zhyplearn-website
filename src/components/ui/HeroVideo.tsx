"use client";

import { useState } from "react";
import Image from "next/image";

const VIDEO_ID = "UEQKFsWU6mU";
const VIDEO_TITLE = "ZHYPILITY Corporate e-learning solutions";

/**
 * Click-to-load YouTube facade: ships a static thumbnail (no iframe, no
 * YouTube script) until the visitor presses play, then swaps in the real
 * embed with autoplay — avoids loading the YouTube player on every hero
 * page view just to show a thumbnail.
 */
export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_1px_2px_rgba(26,26,26,0.04),0_28px_56px_rgba(26,26,26,0.18)]"
      style={{ aspectRatio: "16 / 9" }}
    >
      {playing ? (
        <iframe
          title={VIDEO_TITLE}
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${VIDEO_TITLE}`}
          className="group absolute inset-0 block h-full w-full cursor-pointer"
        >
          <Image
            src="/zhyplearn-hero-video-thumbnail.webp"
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 500px"
            className="object-cover"
            priority
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20"
          />
          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-[0_8px_24px_rgba(26,26,26,0.3)] transition group-hover:scale-105 sm:h-20 sm:w-20">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#F5A623" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
