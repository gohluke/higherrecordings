import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Higher. Recordings',
  description: 'Higher. Recordings - A New York City based record label.',
  keywords: ['record label', 'music', 'NYC', 'electronic music', 'Higher Recordings'],
  openGraph: {
    title: 'Higher. Recordings',
    description: 'Higher. Recordings - A New York City based record label.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Higher. Recordings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Higher. Recordings',
    description: 'Higher. Recordings - A New York City based record label.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://higherrecordings.com'),
};

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
