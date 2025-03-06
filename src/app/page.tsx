import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

export default function Home() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      >
        <source src="/higher.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center translate-y-26">
        <h1 className={`${montserrat.className} text-white text-[2vw] tracking-[0.5em] opacity-90 sm:text-[1.5vw]`}>
          RECORDINGS
        </h1>
      </div>
    </div>
  );
}
