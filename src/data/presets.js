export const DECISION_PRESETS = [
  {
    id: "internship-dilemma",
    tag: "Problem Statement Focus",
    title: "6-Month Internship vs Final Year Academics",
    category: "Career & Education",
    icon: "GraduationCap",
    summary: "Deciding whether to accept a 6-month full-time internship while balancing final-year college schedule and attendance rules.",
    decision: "Should I accept a 6-month full-time frontend engineering internship while continuing my 8th semester of B.Tech?",
    factors: "• Stipend: ₹40,000/month\n• Location: Tech Park (15 minutes from my home)\n• Working Hours: 9:00 AM – 6:00 PM, Monday to Friday (On-site)\n• Role: Frontend Development (React, bug fixing, product tickets)\n• College Constraints: Mandatory 75% attendance rule, final-year capstone project due in 4 months, semester exams scheduled for December\n• Current Standing: 8.2 CGPA",
    leaning: "I am strongly leaning towards accepting it. The stipend is very attractive for a student, the office is just 15 minutes away from my house so commute won't be an issue, and having solid industry experience on my resume before graduating will give me a massive edge in campus placements.",
    assumptions: "1. Because the office is close to home, I will still have plenty of energy to study for exams in the evenings and on weekends.\n2. The company will be accommodating during my semester exam weeks and allow study leave.\n3. The college professors and HOD will grant attendance relaxation once they see my formal corporate internship offer letter.\n4. Working on real tasks will provide high-quality mentorship from senior engineers.",
    doubts: "What if college denies the NOC or bars me from semester exams due to low attendance? What if the work is just repetitive CSS bug fixing without real mentorship?"
  },
  {
    id: "startup-vs-corporate",
    tag: "High-Stakes Career",
    title: "Early-Stage AI Startup vs Tier-1 Corporate Offer",
    category: "Career",
    icon: "Briefcase",
    summary: "Choosing between high-risk early equity & fast pace at an AI seed startup versus structured stability and brand at a Fortune 500 company.",
    decision: "Should I join an early-stage AI seed startup as Employee #4 or accept a graduate engineer offer at an established Fortune 500 tech firm?",
    factors: "• Startup Offer: ₹12 LPA base + 0.8% equity vest, 60+ hrs/week, ambiguous role, 9 months cash runway left\n• Corporate Offer: ₹18 LPA base + ₹2 LPA bonus, 40 hrs/week, hybrid, structured mentorship program, prestigious global brand\n• Personal Situation: 22 years old, no debt, living with parents",
    leaning: "Leaning towards the startup because I want to learn fast, wear multiple hats, avoid corporate bureaucracy, and build high-upside equity in the AI boom.",
    assumptions: "1. 0.8% equity will be worth substantial money within 3-4 years.\n2. I can easily sustain 60-hour work weeks without burning out because I am young.\n3. Fast-paced startup chaos automatically equates to better learning than big-tech mentorship.",
    doubts: "What if the company runs out of capital in 9 months and shuts down? How will employers view an 8-month stint at a defunct startup?"
  },
  {
    id: "relocation-jump",
    tag: "Financial & Lifestyle",
    title: "Relocate to Tech Hub for 35% Salary Hike",
    category: "Lifestyle & Finance",
    icon: "Building2",
    summary: "Evaluating whether moving to an expensive metro city for a 35% gross compensation increase makes real economic and personal sense.",
    decision: "Should I relocate to Bengaluru for a 35% salary hike or stay in my hometown with remote/hybrid flexibility?",
    factors: "• Current: ₹10 LPA, living with parents (near ₹0 rent/food expenses), good work-life balance, strong local friend circle\n• New Offer: ₹13.5 LPA in Bengaluru, in-office 4 days/week\n• Estimated Metro Expenses: Rent ₹28,000/mo, daily traffic commute ~1.5 hrs, higher living costs",
    leaning: "Leaning towards moving because a 35% hike looks great on paper and being in the tech capital will help me network and find better future opportunities.",
    assumptions: "1. A 35% gross salary bump will leave me with noticeably more disposable savings at the end of every month.\n2. I will easily adapt to living alone and build a new community from scratch.\n3. Being physically in the tech hub will guarantee my next big promotion within 18 months.",
    doubts: "Will the soaring rent and living costs completely erase my financial gain? Will the long daily traffic commute drain my personal project time?"
  },
  {
    id: "total-codebase-rewrite",
    tag: "Engineering & Strategy",
    title: "Complete System Rewrite vs Incremental Refactor",
    category: "Technology",
    icon: "Code2",
    summary: "Deciding whether an engineering team should freeze feature work to rewrite a core legacy service in a modern language.",
    decision: "Should our 6-person engineering team rewrite our core monolith in Go/Rust or continue incrementally refactoring our Node.js codebase?",
    factors: "• Current System: 4-year-old Node.js monolith, technical debt, p99 latency spikes during flash sales, but everyone knows the code\n• Proposed Rewrite: Greenfield Go microservices, projected 8x throughput and lower cloud bills\n• Business Pressures: Product team has 5 critical feature requests queued for Q3/Q4 launch",
    leaning: "Leaning towards the rewrite because the engineering team is tired of dealing with legacy spaghetti code and we want modern architecture that scales cleanly.",
    assumptions: "1. The rewrite will take 8 weeks as estimated by the senior developers.\n2. Product and sales will tolerate a temporary feature freeze without business churn.\n3. The new architecture will have zero unforeseen parity bugs or edge-case oversights.",
    doubts: "What if the rewrite blows past the deadline by 4 months (Second System Effect) and halts company revenue growth?"
  }
];
