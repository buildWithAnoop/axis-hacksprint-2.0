export const prizeModel = {
  getPrizePool: () => ({
    total: "₹25,000",
    totalLabel: "TOTAL PRIZE POOL",
    subtitle: "Rewarded to the most ingenious architects of the digital realm."
  }),

  getPrizes: () => [
    {
      place: "FIRST RUNNER UP",
      rank: "2ND",
      amount: "₹8,000",
      title: "Silver Crown Champion",
      description: "Awarded to the second-highest scoring finalist team demonstrating exemplary architectural and functional execution.",
      badgeColor: "border-slate-300 text-slate-200 bg-slate-400/10",
      accent: "silver",
      trophyColor: "#E2E8F0",
      perks: ["Merit Certificate", "Podium Trophy", "Exclusive Goodies", "Lunch & Refreshments"],
      order: 2,
      scale: "scale-95"
    },
    {
      place: "WINNER",
      rank: "1ST",
      amount: "₹12,000",
      title: "Grand Sovereign Champion",
      description: "The ultimate accolade for the supreme innovation powerhouse with unmatched code quality, design, and impact.",
      badgeColor: "border-amber-400 text-amber-300 bg-amber-400/15 shadow-gold-sm",
      accent: "gold",
      trophyColor: "#F59E0B",
      perks: ["Champion Trophy", "Gold Merit Certificate", "Elite Swag Kit", "Lunch & Refreshments", "Direct Mentorship Bridge"],
      order: 1,
      scale: "scale-105 z-10"
    },
    {
      place: "SECOND RUNNER UP",
      rank: "3RD",
      amount: "₹5,000",
      title: "Bronze Crown Champion",
      description: "Honoring the third-place contender showcasing remarkable technical creativity and problem-solving prowess.",
      badgeColor: "border-amber-700 text-amber-400 bg-amber-800/10",
      accent: "bronze",
      trophyColor: "#D97706",
      perks: ["Merit Certificate", "Podium Trophy", "Exclusive Goodies", "Lunch & Refreshments"],
      order: 3,
      scale: "scale-95"
    }
  ],

  getAdditionalPerks: () => [
    { title: "Participation Certificates", desc: "Recognized credential awarded to all shortlisted offline finalists.", icon: "Award" },
    { title: "Merit Certificates", desc: "Special distinction honors for podium achievers.", icon: "FileCheck" },
    { title: "Complimentary Lunch & Refreshments", desc: "Nutritious gourmet fuel provided throughout the 12-hour sprint.", icon: "Coffee" },
    { title: "Exclusive Event Goodies", desc: "Custom Axis HackSprint 2.0 stickers, badges, and memorabilia.", icon: "Gift" }
  ]
};
