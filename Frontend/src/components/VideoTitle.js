import React from "react";

function VideoTitle({ original_title, overview }) {
  return (
    <div className="text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        {original_title}
      </h1>

      <p className="mt-4 text-base md:text-lg text-gray-200 max-w-xl leading-relaxed drop-shadow">
        {overview}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-3 bg-white text-black font-semibold px-5 py-2.5 rounded-md shadow hover:bg-gray-100 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 2v20l16-10L4 2z" />
          </svg>
          <span>Play</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 bg-gray-700/70 text-white px-5 py-2.5 rounded-md border border-white/20 hover:bg-gray-600 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16h.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
