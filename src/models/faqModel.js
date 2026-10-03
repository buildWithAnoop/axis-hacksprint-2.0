import { eventConfig } from '../config/eventConfig.js';

export const faqModel = {
  getFAQs: () => [
    {
      id: "eligibility",
      question: "Who can participate in Axis HackSprint 2.0?",
      answer: "Undergraduate (B.Tech / BCA / B.Sc / etc.), Postgraduate (M.Tech / MCA / etc.), and Diploma engineering and technology students from recognized institutions across India are eligible to participate."
    },
    {
      id: "team-size",
      question: "What is the allowed team size?",
      answer: "Teams must consist of 2 to 4 members. Individual participation is not permitted, and a participant cannot be a member of more than one team."
    },
    {
      id: "mode",
      question: "Is the hackathon online or offline?",
      answer: "Round 1 (Idea Submission) is conducted online. Round 2 (The 12-Hour Live Coding Sprint) is conducted completely offline on-campus at AITM Campus, Axis Colleges, Kanpur."
    },
    {
      id: "venue",
      question: "Where is the venue located?",
      answer: `The hackathon will take place at ${eventConfig.campus}, ${eventConfig.city}, ${eventConfig.state}. Direct Google Maps navigation links are available in the Venue section.`
    },
    {
      id: "date",
      question: "When is the hackathon taking place?",
      answer: "Round 1 submissions close on 17 October 2026 (11:59 PM IST). Results are announced on 20 October 2026. The offline Grand Finale (Round 2) takes place on 3 November 2026."
    },
    {
      id: "tracks",
      question: "What are the official hackathon tracks?",
      answer: "There are 6 official tracks: 1. Artificial Intelligence & Machine Learning, 2. Cyber Security, 3. Blockchain Technology, 4. Agriculture / AgriTech, 5. Healthcare / HealthTech / Digital Health, and 6. Gamification & EdTech."
    },
    {
      id: "fee",
      question: "Is there any registration fee?",
      answer: "No, registration for Axis HackSprint 2.0 is 100% Free for all eligible applicants."
    },
    {
      id: "inter-college",
      question: "Can students from different colleges form a team?",
      answer: "Yes! Inter-college and cross-institutional team formations are completely allowed and encouraged."
    },
    {
      id: "inter-spec",
      question: "Can students from different branches or specializations form a team?",
      answer: "Yes! Inter-departmental and inter-specialization teams (e.g. CS, IT, AI, Mechanical, Electronics) are fully welcome."
    },
    {
      id: "hardware",
      question: "Are hardware / IoT projects allowed?",
      answer: "No. Axis HackSprint 2.0 is strictly a software-only hackathon. Hardware or physical IoT prototypes are not permitted."
    },
    {
      id: "round-1",
      question: "What is required during Round 1 (Online Submission)?",
      answer: "Teams must submit a presentation deck addressing problem scope, proposed software solution, existing work analysis, unique technical contributions, system workflow charts, tech stack, and real-world feasibility. Optional video demos are welcome."
    },
    {
      id: "round-2",
      question: "What happens during Round 2 (Offline Sprint)?",
      answer: "The Top 60 shortlisted teams will build functional software prototypes during a 12-hour continuous coding sprint at AITM Campus, with live mentorship checkpoints and GitHub commit tracking followed by jury evaluation."
    },
    {
      id: "prizes",
      question: "What is the total prize pool?",
      answer: "The total cash prize pool is ₹25,000 (Winner: ₹12,000, 1st Runner Up: ₹8,000, 2nd Runner Up: ₹5,000), alongside certificates, goodies, lunch, and refreshments."
    },
    {
      id: "judging",
      question: "What are the judging criteria?",
      answer: "Details will be announced by the organizers before the offline sprint."
    }
  ]
};
