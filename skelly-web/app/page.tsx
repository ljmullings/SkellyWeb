"use client";
import Link from 'next/link';
import { useEffect, useRef } from 'react';
export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && videoRef.current) { // Add null check
          videoRef.current.play();
        } else if (videoRef.current) { // Add null check
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <div className="min-h-screen p-40 pb-40 sm:p-20 flex flex-col gap-16">
      {/* Video Header */}
      <header className="flex flex-col items-center mt-20 mb-40">
        <div className="relative w-full max-w-2xl h-80 overflow-hidden">
          <video
            src="/logo-animation.mp4"
            autoPlay
            muted
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Subtitles */}
        <p className="text-lg sm:text-xl text-gray-600 mt-4 text-center">
          Laura's web development playground, come and stay awhile.
        </p>
      </header>

      {/* LLM Support*/}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">Check Out My OpenAI API Integration!</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Curious to see how I've customized GPT-4 to work seamlessly in a web app? Here’s a sneak peek into my integration:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            • 🎯 <strong>Tailored Just for You:</strong> I’ve customized the API to deliver responses that match the app's specific needs, fine-tuning the prompts for ultra-precise results.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            • 📦 <strong>Built from Scratch:</strong> Starting from basic API calls, I’ve integrated OpenAI’s API to handle multiple features, from natural language understanding to context-driven responses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            • 💻 <strong>Smooth Integration:</strong> With some custom backend magic, the GPT-4 responses are lightning-fast and contextually aware, delivering intelligent answers that feel personal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            • ⚡ <strong>Enhanced for Efficiency:</strong> By optimizing the response times and minimizing the API calls, the integration is sleek and efficient—so it’s fast and doesn't miss a beat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            • 🚀 <strong>See It In Action:</strong> Want to try it out? You’re in the right place. Get ready to experience a fully customized OpenAI API implementation that works like magic!
          </p>
          <Link href="/chat" className="inline-block px-6 py-3 mt-4 text-primary bg-secondary rounded-lg hover:bg-accent transition-colors">
            Go to Chat
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <video
            ref={videoRef}
            src="/llm-feature.mp4"
            muted
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h2 className="text-2xl font-bold mb-4">Feature 2</h2>
          <p className="text-gray-700 leading-relaxed">
            text here when implemented
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/feature2.jpg"
            alt="Feature 2"
            className="rounded-lg shadow-lg w-3/4"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">Feature 3</h2>
          <p className="text-gray-700 leading-relaxed">
            text here when implemented
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/feature3.jpg"
            alt="Feature 3"
            className="rounded-lg shadow-lg w-3/4"
          />
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h2 className="text-2xl font-bold mb-4">Feature 4</h2>
          <p className="text-gray-700 leading-relaxed">
            text here when implemented
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/feature4.jpg"
            alt="Feature 4"
            className="rounded-lg shadow-lg w-3/4"
          />
        </div>
      </section>

      {/* Section 5 */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">Feature 5: Security</h2>
          <p className="text-gray-700 leading-relaxed">
            text here when implemented
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/feature5.jpg"
            alt="Feature 5"
            className="rounded-lg shadow-lg w-3/4"
          />
        </div>
      </section>

      {/* Section 6 */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h2 className="text-2xl font-bold mb-4">Feature 6: Support & Updates</h2>
          <p className="text-gray-700 leading-relaxed">
            text here when implemented
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/feature6.jpg"
            alt="Feature 6"
            className="rounded-lg shadow-lg w-3/4"
          />
        </div>
      </section>
    </div>
  );
}
