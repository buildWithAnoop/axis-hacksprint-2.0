import { eventConfig } from '../config/eventConfig.js';

export const eventModel = {
  getHeroData: () => ({
    title: eventConfig.eventName,
    tagline: eventConfig.tagline,
    mainStatement: "ENTER THE WONDERLAND OF INNOVATION",
    supportingText: "Where bold ideas meet relentless builders.",
    date: eventConfig.eventDateFormatted,
    mode: eventConfig.eventMode,
    location: `${eventConfig.city}, ${eventConfig.state}`,
    teamSize: eventConfig.teamSize,
    prizeHighlight: eventConfig.totalPrizePool,
  }),

  getAboutData: () => ({
    title: "WHAT IS AXIS HACKSPRINT?",
    subtitle: "A digital realm where curious minds venture down the rabbit hole to engineer transformative software.",
    eventDescription: `${eventConfig.eventName} is a premier ${eventConfig.eventType} hosted at ${eventConfig.campus}, ${eventConfig.city}. Over 12 hours of rapid prototyping, multidisciplinary covens of developers, designers, and innovators unite to solve pressing technical challenges in an enchanting offline arena.`,
    pillars: [
      {
        title: "IDEATE",
        desc: "Synthesize bold conceptual breakthroughs that challenge existing paradigms.",
        icon: "Lightbulb",
        cardSuite: "♠"
      },
      {
        title: "BUILD",
        desc: "Transform code into functional, resilient software solutions in an offline sprint.",
        icon: "Hammer",
        cardSuite: "♦"
      },
      {
        title: "INNOVATE",
        desc: "Deliver tangible, production-grade impact evaluated by distinguished juries.",
        icon: "Sparkles",
        cardSuite: "♣"
      }
    ]
  }),

  getEventDetails: () => [
    { label: "DATE", value: eventConfig.eventDateFormatted, icon: "Calendar", highlight: true },
    { label: "MODE", value: eventConfig.eventMode, icon: "MapPin", highlight: false },
    { label: "VENUE", value: eventConfig.locationString, icon: "Building", highlight: false },
    { label: "TEAM SIZE", value: eventConfig.teamSize, icon: "Users", highlight: false },
    { label: "CATEGORY", value: eventConfig.category, icon: "Code", highlight: false },
    { label: "REGISTRATION", value: eventConfig.registrationFee, icon: "Ticket", highlight: true },
    { label: "ELIGIBILITY", value: eventConfig.eligibility, icon: "GraduationCap", highlight: false },
  ],

  getRules: () => [
    {
      id: 1,
      rule: "All development work must happen strictly during official hackathon hours.",
      detail: "No code written prior to the hackathon kickoff will be accepted.",
      seal: "Edict I"
    },
    {
      id: 2,
      rule: "Pre-built software solutions and pre-made templates are strictly prohibited.",
      detail: "All boilerplates must be standard open-source scaffolding.",
      seal: "Edict II"
    },
    {
      id: 3,
      rule: "Projects must be pushed to a PUBLIC GitHub repository.",
      detail: "Repository must be accessible to mentors and judging juries throughout.",
      seal: "Edict III"
    },
    {
      id: 4,
      rule: "Regular commit activity will be monitored throughout the offline hackathon.",
      detail: "Commit timestamps and diffs verify authentic live development.",
      seal: "Edict IV"
    },
    {
      id: 5,
      rule: "Hardware / IoT prototypes are NOT permitted.",
      detail: "This is a strictly software-only engineering tournament.",
      seal: "Edict V"
    },
    {
      id: 6,
      rule: "Organizing committee and judges' decisions are final and binding.",
      detail: "All evaluations abide by official rubrics and transparent scoring.",
      seal: "Edict VI"
    },
    {
      id: 7,
      rule: "A participant cannot be part of multiple teams.",
      detail: "Individual developers may only register under a single team roster.",
      seal: "Edict VII"
    }
  ],

  getRoundOneData: () => ({
    title: "THE FIRST CHALLENGE",
    subtitle: "Round 1: Online Idea Submission",
    deadline: eventConfig.roundOneDeadlineFormatted,
    shortlisting: eventConfig.shortlistCount,
    resultsAnnouncement: eventConfig.roundOneResultsFormatted,
    requirements: [
      "Problem being addressed with sharp contextual relevance",
      "Proposed technical solution and architecture",
      "Survey of existing similar work and comparative edge",
      "Unique technical or algorithmic contribution",
      "Workflow chart, system diagrams, and data flows",
      "Video demonstration (optional, but encouraged)",
      "Clearly articulated technology stack",
      "Real-world feasibility, scalability, and impact",
      "Credible research papers, datasets, or literature references"
    ],
    avoidList: [
      "Vague, hand-wavy ideas without technical mechanics",
      "Purely conceptual ideas lacking practical implementation paths",
      "Unnecessary, bloated presentation slides",
      "Design-heavy slide decks with little technical substance"
    ]
  }),

  getPartnersData: () => ({
    title: "THE ROYAL COURT",
    subtitle: "Partners & Organizations",
    statusText: "Coming Soon",
    description: "Our council of academic and institutional partners fostering technological excellence.",
    organizations: [
      { name: "Axis Colleges", role: "Host Institution", status: "Partner" },
      { name: "Sanganak Shila Society", role: "Technical Society", status: "Partner" },
      { name: "Computer Society of India (CSI)", role: "Professional Body", status: "Partner" },
      { name: "Institution's Innovation Council (IIC)", role: "Innovation Body", status: "Partner" },
    ]
  }),

  getJudgingData: () => ({
    title: "THE JUDGMENT OF WONDERLAND",
    subtitle: "Evaluation Framework",
    statusText: "Details will be announced soon.",
    description: "The Grand Jury will evaluate projects on technical merit, architecture, execution, and presentation during Round 2."
  }),

  getScheduleData: () => ({
    title: "THE DAY OF THE HACK",
    subtitle: "Final Day Schedule (3 Nov 2026)",
    statusText: "Detailed schedule will be announced soon.",
    description: "The 12-hour offline coding sprint schedule will encompass reporting, hacking checkpoints, mentor reviews, and jury presentations."
  })
};
