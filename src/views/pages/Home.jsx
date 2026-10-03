import React from 'react';
import { Navbar } from '../sections/Navbar.jsx';
import { Hero } from '../sections/Hero.jsx';
import { RabbitHole } from '../sections/RabbitHole.jsx';
import { About } from '../sections/About.jsx';
import { Tracks } from '../sections/Tracks.jsx';
import { EventDetails } from '../sections/EventDetails.jsx';
import { Timeline } from '../sections/Timeline.jsx';
import { RoundOne } from '../sections/RoundOne.jsx';
import { Rules } from '../sections/Rules.jsx';
import { ChessSection } from '../sections/ChessSection.jsx';
import { Prizes } from '../sections/Prizes.jsx';
import { Gallery } from '../sections/Gallery.jsx';
import { Team } from '../sections/Team.jsx';
import { Partners } from '../sections/Partners.jsx';
import { Judging } from '../sections/Judging.jsx';
import { Schedule } from '../sections/Schedule.jsx';
import { FAQ } from '../sections/FAQ.jsx';
import { Venue } from '../sections/Venue.jsx';
import { FinalCTA } from '../sections/FinalCTA.jsx';
import { Footer } from '../sections/Footer.jsx';

export function Home() {
  return (
    <main className="relative bg-[#080608] min-h-screen text-[#F4E6CE] selection:bg-[#C51F3A] selection:text-white">
      <Navbar />
      <Hero />
      <RabbitHole />
      <About />
      <Tracks />
      <EventDetails />
      <Timeline />
      <RoundOne />
      <Rules />
      <ChessSection />
      <Prizes />
      <Gallery />
      <Team />
      <Partners />
      <Judging />
      <Schedule />
      <FAQ />
      <Venue />
      <FinalCTA />
      <Footer />
    </main>
  );
}
