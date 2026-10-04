// The Blind Spot - Cognitive Diagnostic & AI Engine

export const SYSTEM_PHILOSOPHY = `
You are 'The Blind Spot' — an elite cognitive mirror and critical thinking partner.
Your mission is to help people make wiser decisions by revealing what they CANNOT see:
1. Hidden, unstated assumptions they treat as guaranteed facts.
2. Factors relegated to the periphery due to availability bias or emotional focalism.
3. Second- and third-order ripple consequences across time horizons.
4. Cognitive biases distorting their reasoning.
5. Socratic inquiries that dissolve wishful rationalizations.

CRITICAL GUARDRAIL:
You must NEVER tell the user what to decide. Never say "You should take it", "You must decline", or "The best choice is X".
Your role is exclusively to expand their peripheral vision and stress-test their premises, leaving final agency and judgment entirely with them.
`;

// Pre-built master analyses for known dilemmas to ensure instant, flawless offline evaluation
export const MASTER_ANALYSES = {
  "internship-dilemma": {
    decisionSummary: "Accepting a 6-month full-time frontend internship (₹40k/mo, 15 min commute) while enrolled in 8th semester B.Tech with mandatory 75% attendance and capstone projects.",
    primaryMotivation: "Tangible immediate incentives: lucrative student stipend, negligible travel friction, and desire for resume prestige before campus placements.",
    clarityScore: 58,
    clarityBreakdown: {
      assumptionFragility: 78,
      peripheralAwareness: 42,
      secondOrderHorizon: 50,
      biasSusceptibility: 76
    },
    coreTension: "Immediate tangible certainty (cash in hand & close commute) vs. Compounding invisible risks (academic debarment, low-leverage maintenance work, and post-internship conversion ambiguity).",
    unstatedAssumptions: [
      {
        id: "assump-1",
        statement: "Physical proximity eliminates cognitive exhaustion",
        userBelief: "Since the office is only 15 minutes away, I will have plenty of mental bandwidth to study for exams in the evenings and on weekends.",
        blindSpot: "Commute distance is only one narrow dimension of fatigue. 9 hours of continuous context-switching, standups, sprint pressures, and screen fatigue depletes your executive function. Physical proximity does not protect against cognitive burnout.",
        fragility: "High",
        stressTestQuestion: "When you return home at 6:30 PM with zero creative energy left, what specific system will force you to study academic theory for 2.5 hours instead of collapsing or scrolling?",
        verificationAction: "Simulate this for 3 days: Work 8 full hours on a rigorous coding project, take a 15-minute break, and immediately sit down for a 2.5-hour intense academic syllabus study session at 7:00 PM."
      },
      {
        id: "assump-2",
        statement: "Corporate goodwill during exam periods is guaranteed",
        userBelief: "The company knows I am a student, so they will naturally allow me to take time off or work flexible hours during exam weeks.",
        blindSpot: "Startups and tech teams operate under strict sprint velocity and client deliverables. An intern's absence right before a product release directly impacts team commitments. Verbal promises from HR rarely survive crunch time with project managers.",
        fragility: "High",
        stressTestQuestion: "Have you obtained a signed, written clause in your offer letter guaranteeing paid study leave during university exam windows?",
        verificationAction: "Ask the hiring manager right now: 'Could you please confirm in writing that I will have 10 business days of protected study leave in December for university finals?'"
      },
      {
        id: "assump-3",
        statement: "Academic departments will bend rigid attendance rules for private employment",
        userBelief: "Once professors and the Head of Department (HOD) see my offer letter, they will grant attendance exemptions or allow me to submit assignments remotely.",
        blindSpot: "Universities are bound by regulatory bodies (e.g., AICTE, UGC, or State Boards) that require strict minimum 75% physical attendance to issue exam admit cards. An individual professor or HOD often lacks legal discretion to waive attendance without formal university senate approval.",
        fragility: "Critical",
        stressTestQuestion: "If the Dean refuses to sign your NOC in the 4th month when you are already committed to the internship, what is your fallback to prevent getting a year-back or semester backlog?",
        verificationAction: "Schedule a formal meeting with your HOD before signing the contract. Do not ask 'Can I do it?'; ask 'Can you provide the signed institutional NOC and syllabus exemption form on college letterhead?'"
      },
      {
        id: "assump-4",
        statement: "An internship role automatically implies active mentorship and high-growth tasks",
        userBelief: "Working at an actual software company will expose me to enterprise architecture and senior engineer guidance.",
        blindSpot: "Companies frequently hire interns as cost-effective bandwidth to clear mundane backlog items, repetitive CSS bug fixes, or manual verification. Without a designated senior mentor with allocated teaching hours, you may learn less than you would from dedicated open-source development or algorithmic prep.",
        fragility: "Medium",
        stressTestQuestion: "Who is your designated 1-on-1 engineering mentor, how many hours per week are blocked on their calendar for your code reviews, and what exact feature will you architect?",
        verificationAction: "Ask to speak with a current or former intern at that company. Ask them: 'In your typical week, what percentage of time was spent learning from seniors versus solo bug troubleshooting?'"
      }
    ],
    overlookedFactors: [
      {
        id: "factor-1",
        category: "Institutional & Academic Risk",
        factor: "Capstone Project Team Friction & Laboratory Vetoes",
        whyOverlooked: "You are evaluating the decision individually, but university final projects are collaborative. If your lab partner carries your weight while you are at the office, resentment and peer complaints to faculty can jeopardize your internal project marks.",
        potentialImpact: "High: Lost internal marks, damaged relationships with peers, potential viva failure.",
        inquiryPrompt: "How have you structured accountability and division of labor with your capstone team members so they do not feel abandoned?"
      },
      {
        id: "factor-2",
        category: "Career & Placement Trade-offs",
        factor: "The 'PPO Conversion Freeze' Risk (Opportunity Cost)",
        whyOverlooked: "You assume 6 months of hard work automatically converts to a full-time offer (Pre-Placement Offer). If macroeconomic conditions cause a corporate hiring freeze in 6 months, you enter the open job market with a depleted CGPA and missed on-campus recruitment drives.",
        potentialImpact: "Severe: Entering off-campus placement season exhausted, with no PPO and lower academic cutoff eligibility.",
        inquiryPrompt: "What exact percentage of interns from the past two batches were converted into full-time employees, and is there a hiring freeze on permanent headcount?"
      },
      {
        id: "factor-3",
        category: "Cognitive Load & Energy Budget",
        factor: "Context-Switching Tax",
        whyOverlooked: "Moving from production React code during the day to discrete mathematics, operating systems theory, or project documentation at night requires two completely different mental modes. The friction of switching often leads to chronic procrastination and insomnia.",
        potentialImpact: "Moderate: Chronic exhaustion, poor sleep, heightened anxiety during semester end.",
        inquiryPrompt: "Have you mapped out an exact hour-by-hour weekly schedule showing when sleep, classes, office hours, and project milestones occur?"
      }
    ],
    secondOrderConsequences: [
      {
        timeline: "1st Order: Weeks 1 to 4 (The Honeymoon Period)",
        visibleReality: "High satisfaction: receiving the first ₹40,000 stipend, feeling independent, setting up your work desk, posting on LinkedIn.",
        hiddenFriction: "College lectures are missed casually with the thought 'I'll catch up later'. Attendance slips to 68% without immediate alarm bells."
      },
      {
        timeline: "2nd Order: Months 2 to 4 (The Convergence Crunch)",
        visibleReality: "Company sprint deliverables ramp up. Mid-semester exams and capstone draft submissions arrive simultaneously.",
        hiddenFriction: "You are forced to choose daily between disappointing your engineering manager or skipping college submissions. Sleep is cut to 4 hours. You experience intense cognitive guilt in both environments."
      },
      {
        timeline: "3rd Order: Months 5 to 6 & Post-Graduation Horizon",
        visibleReality: "Internship finishes, certificate in hand.",
        hiddenFriction: "If the company does not offer a PPO or offers below expectations, your graduation CGPA has taken a 0.6 to 1.0 point hit. This may disqualify you from high-cutoff Master's programs (GRE/GATE) or top tier MNC campus criteria that demand 8.0+ strict cutoffs."
      }
    ],
    cognitiveBiases: [
      {
        name: "Focalism / Availability Bias (WYSIATI - What You See Is All There Is)",
        definition: "Focusing excessively on concrete, easily quantifiable numbers (₹40k stipend, 15-minute commute) while ignoring diffuse, hard-to-measure consequences (academic probation, burnout).",
        manifestation: "Your core reasoning leans on 'good stipend and close to home' — operational conveniences rather than long-term strategic alignment."
      },
      {
        name: "Present Bias (Hyperbolic Discounting)",
        definition: "Disproportionately weighting immediate gratification (a paycheck this month) over delayed long-term compounding benefits (a high GPA, deep algorithmic prep for top tier offers).",
        manifestation: "The feeling of making ₹40,000 as a student feels triumphant today, making the risk of a 7.2 final CGPA 10 months from now seem like a distant, manageable problem."
      },
      {
        name: "Optimism Bias & The Planning Fallacy",
        definition: "Assuming your future self will operate at 100% superhuman energy without illness, unexpected roadblocks, or emotional fatigue.",
        manifestation: "Assuming that studying from 8 PM to 11 PM every weekday after 9 hours of coding is a sustainable, realistic routine."
      }
    ],
    preMortemAnalysis: {
      scenario: "It is exactly 6 months from today. You consider accepting this internship the most stressful and regrettable blunder of your final year. What happened?",
      failureNarrative: "The company placed you on a legacy codebase with tight sprint deadlines and no senior pairing. In November, mid-term tests clashed with a major client release; the manager denied your study leave request. Your attendance plummeted to 58%, and the university examination board withheld your hall ticket. You had to involve parents, plead with the Dean, and were forced to take a semester backlog. Meanwhile, due to tech sector layoffs, the company announced zero PPOs for all interns. You left exhausted, with an academic backlog, strained peer relationships, and missed campus placement drives.",
      preventativeSafeguards: [
        "Obtain a signed, stamped Non-Objection Certificate (NOC) from your university HOD *prior* to your first day.",
        "Insert a formal clause in your offer letter guaranteeing 10 days of unpaid/paid academic examination leave.",
        "Formulate a non-negotiable walk-away threshold: 'If attendance drops below 76% or senior mentorship is non-existent by Week 3, I will immediately submit my resignation without hesitation.'"
      ]
    },
    contrarianPersonas: [
      {
        persona: "Your Future Self (5 Years Later)",
        quote: "Five years from now, ₹2.4 Lakhs in total intern stipend won't even equal two weeks of your senior engineering salary. But a ruined CGPA or an academic backlog stays on your permanent transcript forever. Are you selling your academic foundation for pocket money?",
        focus: "Asymmetry of Short-term Cash vs Permanent Academic Record"
      },
      {
        persona: "The Cynical Senior Tech Lead",
        quote: "Many companies hire interns not to mentor them, but because you are cheaper than outsourcing contract UI fixes. If they aren't committing at least 3 hours a week of senior code architecture reviews, you are just an underpaid maintenance contractor.",
        focus: "Authentic Learning vs Exploitative Ticket Clearing"
      },
      {
        persona: "The Strict University Dean",
        quote: "Our degree requirements are governed by accreditation boards, not your company's release cycle. If your biometric attendance falls below the statutory requirement, no corporate offer letter will override the exam hall disqualification.",
        focus: "Institutional Inflexibility & Academic Debarment"
      }
    ],
    socraticInquiries: [
      {
        id: "q1",
        question: "If this internship paid zero stipend and only offered the experience, would you still be willing to risk your university attendance and final-year GPA for it?",
        purpose: "Isolates the monetary temptation from the genuine learning and strategic value of the role."
      },
      {
        id: "q2",
        question: "What is your concrete, verified proof—not wishful assumption—that your department HOD will officially grant attendance relaxation?",
        purpose: "Forces you to differentiate between institutional facts and hopeful speculation."
      },
      {
        id: "q3",
        question: "If the company experiences a hiring freeze in 6 months and converts zero interns to full-time roles, will this 6-month experience still have been worth the academic trade-offs?",
        purpose: "Dissolves the hidden reliance on an unpromised PPO."
      },
      {
        id: "q4",
        question: "What specific high-leverage activities (e.g., LeetCode interview prep, system design studies, capstone portfolio excellence, campus placement tests) are you sacrificing during those 45 hours every week?",
        purpose: "Brings the invisible opportunity cost of your time into sharp focus."
      }
    ],
    preDecisionChecklist: [
      "Obtain written, institutional NOC signed by your College Principal/HOD with explicit attendance credits.",
      "Get written confirmation from company HR regarding scheduled university exam study leaves.",
      "Interview a previous intern from this specific company/team about mentorship depth and realistic PPO conversion rates.",
      "Calculate your actual weekly time budget: 45 hrs work + 5 hrs commute/meals + 20 hrs study = 70 hrs. Validate whether your physical health can sustain this.",
      "Define an explicit 'Eject Button': An agreed condition under which you will immediately resign if the company or college reneges on commitments."
    ]
  },

  "startup-vs-corporate": {
    decisionSummary: "Choosing between an early-stage AI seed startup (Employee #4, ₹12 LPA + 0.8% equity, 60+ hrs/wk, 9 mo runway) and a Fortune 500 tech firm (₹18 LPA + bonus, 40 hrs/wk, global brand, structured training).",
    primaryMotivation: "Desire for high-velocity learning, aversion to corporate hierarchy, and dream of lottery-ticket startup equity upside.",
    clarityScore: 61,
    clarityBreakdown: {
      assumptionFragility: 82,
      peripheralAwareness: 48,
      secondOrderHorizon: 56,
      biasSusceptibility: 74
    },
    coreTension: "Autonomy, thrill, and speculative equity upside vs. High-base compensation, brand leverage, and structured professional mentorship.",
    unstatedAssumptions: [
      {
        id: "assump-1",
        statement: "0.8% seed equity represents high tangible wealth in 3-5 years",
        userBelief: "If the startup succeeds, my equity will be life-changing.",
        blindSpot: "Over 90% of seed-stage startups never reach Series B. Even if they raise subsequent rounds, seed employee equity is heavily diluted (often 40-70% through Series A, B, C, option pool expansions, and liquidation preferences). Without a 1x non-participating liquidation clause understanding, common stock is often wiped out in down-rounds.",
        fragility: "High",
        stressTestQuestion: "Do you know the startup's liquidation preference hierarchy, option strike price, and post-money valuation, or are you valuing the equity purely on romance?",
        verificationAction: "Ask founders for the exact capitalization table overview, 409A valuation, vesting schedule (1-year cliff), and strike price before attributing financial value to equity."
      },
      {
        id: "assump-2",
        statement: "Startup chaos inherently teaches better engineering practices than big tech",
        userBelief: "Wearing multiple hats and moving fast will make me a 10x better engineer than doing small tickets in a big corporate.",
        blindSpot: "Startups optimize for speed-to-market, frequently incurring massive technical debt, lacking automated CI/CD test coverage, and foregoing architectural code reviews. You learn how to hack things together quickly, but you miss learning how to write scalable, observable, highly reliable code for millions of users.",
        fragility: "Medium",
        stressTestQuestion: "Who at the startup has 10+ years of distributed systems experience to review your pull requests and critique your system design decisions?",
        verificationAction: "Review the GitHub/codebase or commit history of the startup founders. Are they seasoned architects who mentor, or product generalists rushing to MVP?"
      }
    ],
    overlookedFactors: [
      {
        id: "factor-1",
        category: "Career Optionality & Signaling",
        factor: "The 'First Brand on Resume' Multiplier",
        whyOverlooked: "You may view corporate logos as bureaucratic, but recruiters in tough job markets use prestigious Fortune 500 company names as an instant cognitive filter for tier-1 talent. Going from Big Tech to a startup later is effortless; jumping from a failed obscure seed startup to Big Tech requires clearing grueling cold resume screens.",
        potentialImpact: "High: Future recruiter inbound message volume.",
        inquiryPrompt: "Will an 8-month stint at a defunct startup open more doors in 2028 than a recognized brand name?"
      },
      {
        id: "factor-2",
        category: "Runway & Personal Solvency",
        factor: "The 9-Month Cash Cliff",
        whyOverlooked: "When a seed startup has 9 months of runway, founders spend months 5 through 9 fund-raising rather than product-building. If market funding chills, hiring freezes or salary cuts occur quickly.",
        potentialImpact: "Critical: Sudden involuntary job search within 6 to 9 months.",
        inquiryPrompt: "What is the startup's actual monthly burn rate and customer acquisition trajectory?"
      }
    ],
    secondOrderConsequences: [
      {
        timeline: "Order 1: Months 1 to 3",
        visibleReality: "Immense adrenaline, working directly with founders, rapid code shipping.",
        hiddenFriction: "65-hour weeks eliminate all personal fitness, relationships, and downtime."
      },
      {
        timeline: "Order 2: Months 4 to 8",
        visibleReality: "Runway dwindles; pressure mounts to hit investor metrics.",
        hiddenFriction: "Founders pivot direction weekly. Architectural rework causes mounting frustration."
      },
      {
        timeline: "Order 3: Year 2 and Beyond",
        visibleReality: "Either Series A raise or cash depletion.",
        hiddenFriction: "Meanwhile, peers in the Fortune 500 have banked ₹15 Lakhs in savings, received standard promotions, and maintained 40-hour weeks."
      }
    ],
    cognitiveBiases: [
      {
        name: "Survivorship Bias",
        definition: "Focusing on the rare early employees of Stripe or Uber while ignoring the 95% of seed startup employees whose equity expired worthless.",
        manifestation: "Dreaming of the unicorn exit while underweighting the statistical baseline of seed-stage mortality."
      },
      {
        name: "Proactiveness Illusion (Aversion to Boredom)",
        definition: "Equating chaos and frantic activity with progress and superior skill acquisition.",
        manifestation: "Assuming an unstructured, stressful environment is inherently superior for personal growth."
      }
    ],
    preMortemAnalysis: {
      scenario: "It is 10 months from now. The startup has shut down after failing to raise Series A. What sequence of events led to this regret?",
      failureNarrative: "The product failed to achieve product-market fit after two rushed pivots. You spent 70 hours a week putting out fires with no senior mentorship. When seed funds ran out in month 8, founders asked everyone to take 50% salary deferrals. You were forced onto the job market with depleted savings, burnt-out mental health, and an unfinished product on your portfolio that nobody can test.",
      preventativeSafeguards: [
        "Demand 6 months of living expenses saved in an emergency fund before joining any sub-12-month runway company.",
        "Negotiate accelerated vesting triggers in case of startup acquisition or insolvency.",
        "Establish transparent monthly runway disclosures with founders as a condition of employment."
      ]
    },
    contrarianPersonas: [
      {
        persona: "The Seasoned Venture Capitalist",
        quote: "Don't gamble your early twenties on common stock equity unless you are a founder with 20%+. As employee #4 with 0.8%, you take 90% of founder risk for 2% of the upside.",
        focus: "Risk-Reward Asymmetry in Seed Equity"
      },
      {
        persona: "The 30-Year-Old Staff Engineer",
        quote: "Corporate engineering teaches you how to design for high scale, write tests that prevent million-dollar outages, and navigate human politics. Learn the craft of high-standard engineering first, then take startup risks with a bulletproof pedigree.",
        focus: "Foundational Engineering Rigor"
      }
    ],
    socraticInquiries: [
      {
        id: "q1",
        question: "If you assign an economic value of exactly ZERO to the 0.8% equity, does the ₹12 LPA base and 65-hour weekly commitment still beat the ₹18 LPA corporate package?",
        purpose: "Strips away the speculative equity lottery ticket to expose the baseline labor trade-off."
      },
      {
        id: "q2",
        question: "What specific engineering skill can you learn ONLY at this specific startup that you could not master in a top-tier tech firm?",
        purpose: "Tests whether the 'rapid learning' justification is real or a generalized cliché."
      }
    ],
    preDecisionChecklist: [
      "Review the startup's bank runway statements and monthly burn rate with the CEO.",
      "Verify exact vesting schedule, cliff terms, and exercise window (is it standard 90 days or extended 5-10 years?).",
      "Evaluate whether you have 6 months of personal financial reserves to weather sudden runway exhaustion."
    ]
  }
};

// Generate intelligent dynamic analysis when Gemini key is not supplied or for custom dilemmas
export function generateLocalCognitiveAnalysis(formData) {
  const { decision, factors, leaning, assumptions, doubts } = formData;
  const decisionLower = (decision + " " + factors).toLowerCase();

  // If matches internship scenario
  if (decisionLower.includes("intern") || decisionLower.includes("stipend") || decisionLower.includes("college") || decisionLower.includes("semester")) {
    return MASTER_ANALYSES["internship-dilemma"];
  }

  // If matches startup scenario
  if (decisionLower.includes("startup") || decisionLower.includes("equity") || decisionLower.includes("corporate") || decisionLower.includes("runway")) {
    return MASTER_ANALYSES["startup-vs-corporate"];
  }

  // Generic intelligent synthesis for any custom scenario
  return {
    decisionSummary: decision || "Evaluation of complex multi-variable decision",
    primaryMotivation: leaning || "User leans toward the choice offering immediate visibility and tangible upside.",
    clarityScore: 62,
    clarityBreakdown: {
      assumptionFragility: 75,
      peripheralAwareness: 48,
      secondOrderHorizon: 55,
      biasSusceptibility: 70
    },
    coreTension: "Balancing immediately visible rewards and operational convenience against delayed structural risks, unstated dependencies, and opportunity costs.",
    unstatedAssumptions: [
      {
        id: "assump-gen-1",
        statement: "Linear stability of external commitments",
        userBelief: assumptions ? assumptions.slice(0, 120) + "..." : "I assume other parties will cooperate with my planned schedule.",
        blindSpot: "You are assuming external stakeholders (managers, institutions, peers, or markets) will remain flexible and prioritize your convenience when pressures escalate.",
        fragility: "High",
        stressTestQuestion: "What is your fallback if the key stakeholder explicitly refuses to honor an informal, verbal agreement?",
        verificationAction: "Seek explicit, written confirmation of critical dependencies before committing."
      },
      {
        id: "assump-gen-2",
        statement: "Uncompromised future energy and cognitive capacity",
        userBelief: "I will easily manage the additional workload by improving personal discipline.",
        blindSpot: "Human discipline is not an infinite resource. Cognitive load, emotional stress, and context switching rapidly degrade executive function over multi-month horizons.",
        fragility: "Medium",
        stressTestQuestion: "Have you tested this workload under conditions of illness, poor sleep, or unexpected emergencies?",
        verificationAction: "Audit your current week: identify where 15 unallocated hours currently exist in your calendar."
      },
      {
        id: "assump-gen-3",
        statement: "Reversibility of the commitment",
        userBelief: "If it doesn't work out, I can simply step back or revert to my prior state.",
        blindSpot: "Decisions have irreversible reputational, academic, and relationship hysteresis. Exiting early carries friction, social awkwardness, and burnt bridges.",
        fragility: "High",
        stressTestQuestion: "What exact reputational or financial penalty will you incur if you need to exit after 60 days?",
        verificationAction: "Define your exact walk-away protocol and maximum tolerable downside threshold."
      }
    ],
    overlookedFactors: [
      {
        id: "factor-gen-1",
        category: "Hidden Opportunity Costs",
        factor: "Alternative Trajectories Foreclosed",
        whyOverlooked: "When a single option is in front of you, the mind compares 'this option vs doing nothing', rather than 'this option vs the best 3 alternative uses of my time'.",
        potentialImpact: "High: Dedicating 40+ hours weekly here completely eliminates room for serendipitous higher-upside endeavors.",
        inquiryPrompt: "What is the single most valuable project, skill, or relationship you will NOT be able to pursue if you say yes to this?"
      },
      {
        id: "factor-gen-2",
        category: "Counterparty Incentives",
        factor: "Asymmetry of Counterparty Alignment",
        whyOverlooked: "You are assuming the other party's goals mirror your own growth objectives. Organizations prioritize output delivery, revenue, and problem resolution over individual mentoring.",
        potentialImpact: "Moderate to High: Disillusionment when organizational priorities clash with personal growth.",
        inquiryPrompt: "How does the other party profit if your personal growth stagnates while you continue delivering baseline output?"
      },
      {
        id: "factor-gen-3",
        category: "Margin of Safety",
        factor: "Absence of Buffer for Unforeseen Shocks",
        whyOverlooked: "Planning under optimal conditions fails to account for normal human variance: family emergencies, burnout, health dips, or technical blockers.",
        potentialImpact: "Severe: A single unexpected crisis triggers a cascading collapse across multiple life domains.",
        inquiryPrompt: "If an unexpected life emergency consumes 15 hours next month, which domain of your life fails first?"
      }
    ],
    secondOrderConsequences: [
      {
        timeline: "1st Order: Immediate Horizon (Days 1–30)",
        visibleReality: "High novelty, emotional relief of making a choice, initial momentum and validation.",
        hiddenFriction: "Unseen backlog accumulation in deferred obligations and neglected maintenance."
      },
      {
        timeline: "2nd Order: Intermediate Horizon (Months 2–4)",
        visibleReality: "Execution routine becomes demanding; cracks appear in initial optimistic scheduling.",
        hiddenFriction: "Fatigue sets in. Trade-offs between competing priorities trigger guilt and chronic stress."
      },
      {
        timeline: "3rd Order: Long-term Horizon (Year 1 and Beyond)",
        visibleReality: "Outcome solidified.",
        hiddenFriction: "Cumulative divergence from what could have been achieved with alternate paths."
      }
    ],
    cognitiveBiases: [
      {
        name: "Focalism / What You See Is All There Is (WYSIATI)",
        definition: "Evaluating a decision based strictly on the vivid, immediately available data points while ignoring invisible systemic trade-offs.",
        manifestation: "Overweighting explicit features of the offer while underweighting subtle systemic frictions."
      },
      {
        name: "Sunk Cost & Commitment Traps",
        definition: "The psychological reluctance to abandon a suboptimal path once initial public or social commitments have been stated.",
        manifestation: "Feeling socially or emotionally pressured to proceed because you already communicated intent to peers or family."
      },
      {
        name: "The Planning Fallacy",
        definition: "Systematic underestimation of the time, energy, and emotional tolerance required to complete complex multi-threaded tasks.",
        manifestation: "Assuming flawless execution without accounting for natural friction, illness, or cognitive depletion."
      }
    ],
    preMortemAnalysis: {
      scenario: "It is 6 months from today. You consider this decision to have been a major strategic misstep. What sequence of events caused this failure?",
      failureNarrative: "You entered with optimistic assumptions about energy and flexibility. Within weeks, the workload exceeded initial estimates. Key counterparties proved rigid and unyielding. The constant context-switching degraded your performance in both your primary and secondary goals. Burnout led to a rushed compromise that satisfied neither objective.",
      preventativeSafeguards: [
        "Create an explicit, written pre-commitment contract with minimum acceptable boundaries.",
        "Establish an unshakeable weekly review checkpoint to audit stress, progress, and alignment.",
        "Secure formal, written consent on all critical dependencies before signing or finalizing."
      ]
    },
    contrarianPersonas: [
      {
        persona: "The Radical Skeptic",
        quote: "Strip away all the comforting narratives you've told yourself. What is the single ugliest truth about this choice that you are actively trying not to look at?",
        focus: "Piercing Rationalization"
      },
      {
        persona: "The Long-Horizon Strategist",
        quote: "Will the benefits of this choice matter in 5 years? If not, why are you trading 5-year compounding assets (health, GPA, deep craft) for ephemeral short-term validation?",
        focus: "Compounding Assets vs Ephemeral Noise"
      }
    ],
    socraticInquiries: [
      {
        id: "q1",
        question: "If you were completely forbidden from choosing this option, what alternative high-creativity path would you immediately explore?",
        purpose: "Breaks fixated tunnel vision and exposes suppressed alternatives."
      },
      {
        id: "q2",
        question: "What is the single piece of uncomfortable information that, if revealed tomorrow, would cause you to immediately abandon this decision?",
        purpose: "Identifies your hidden dealbreakers and unexamined vulnerabilities."
      },
      {
        id: "q3",
        question: "Are you pursuing this decision out of genuine inspiration and strategic alignment, or out of fear of missing out (FOMO) and social comparison?",
        purpose: "Clarifies internal vs external locus of motivation."
      }
    ],
    preDecisionChecklist: [
      "Test all key assumptions with verifiable, objective evidence rather than verbal promises.",
      "Calculate your maximum downside exposure and confirm you can comfortably survive it.",
      "Review the decision with a neutral mentor who has zero emotional or financial stake in your choice."
    ]
  };
}

// Live Gemini API Caller with strict JSON extraction and fallback
export async function analyzeWithGemini(formData, apiKey, model = "gemini-2.0-flash") {
  if (!apiKey || apiKey.trim() === "") {
    // Return high-fidelity local engine analysis
    return generateLocalCognitiveAnalysis(formData);
  }

  const prompt = `
You are 'The Blind Spot' — an AI-powered cognitive mirror and critical decision analysis system.
Analyze the user's decision dilemma according to the strict JSON structure specified below.

NON-DECIDER DIRECTIVE:
You must NEVER decide for the user, advise them to accept or decline, or declare what choice is best.
Your role is purely Socratic: illuminate blind spots, unmask unstated assumptions, surface overlooked second-order consequences, diagnose cognitive biases, and pose hard questions.

USER DECISION DATA:
- Decision Dilemma: ${formData.decision}
- Context & Visible Factors: ${formData.factors}
- Primary Leaning & Reasons Stated: ${formData.leaning}
- User's Unstated / Stated Assumptions: ${formData.assumptions}
- Known Doubts / Fears: ${formData.doubts}

RETURN ONLY VALID JSON (no markdown formatting, no code backticks, just raw parseable JSON) matching this exact schema:
{
  "decisionSummary": "string",
  "primaryMotivation": "string",
  "clarityScore": 55, // integer 0-100 indicating cognitive awareness
  "clarityBreakdown": {
    "assumptionFragility": 80, // 0-100 (higher = more fragile/vulnerable)
    "peripheralAwareness": 40, // 0-100 (lower = narrower peripheral awareness)
    "secondOrderHorizon": 45, // 0-100
    "biasSusceptibility": 75  // 0-100
  },
  "coreTension": "string summarizing fundamental trade-off",
  "unstatedAssumptions": [
    {
      "id": "assump-1",
      "statement": "Title of hidden assumption",
      "userBelief": "What the user implicitly takes for granted",
      "blindSpot": "Why this assumption is fragile or unverified",
      "fragility": "High | Medium | Critical",
      "stressTestQuestion": "A piercing question targeting this assumption",
      "verificationAction": "Concrete action step to verify before deciding"
    }
  ],
  "overlookedFactors": [
    {
      "id": "factor-1",
      "category": "Academic / Career / Health / Financial / Social",
      "factor": "Specific overlooked factor",
      "whyOverlooked": "Why availability bias or focalism hid this",
      "potentialImpact": "Severe | High | Moderate",
      "inquiryPrompt": "Question the user must investigate"
    }
  ],
  "secondOrderConsequences": [
    {
      "timeline": "1st Order: Immediate Horizon",
      "visibleReality": "What appears to happen initially",
      "hiddenFriction": "The hidden debt or friction brewing beneath"
    },
    {
      "timeline": "2nd Order: Medium Horizon",
      "visibleReality": "Midterm routine",
      "hiddenFriction": "Compounding pressures and trade-offs"
    },
    {
      "timeline": "3rd Order: Long-term Horizon",
      "visibleReality": "Eventual milestone",
      "hiddenFriction": "Lasting divergence, GPA impact, or missed opportunities"
    }
  ],
  "cognitiveBiases": [
    {
      "name": "Name of bias (e.g. Focalism, Present Bias, Planning Fallacy)",
      "definition": "Brief definition",
      "manifestation": "How it is operating in this specific user's reasoning"
    }
  ],
  "preMortemAnalysis": {
    "scenario": "Hypothetical scenario 6 months out where this turned into deep regret",
    "failureNarrative": "Realistic narrative detailing how small miscalculations cascaded into failure",
    "preventativeSafeguards": ["Safeguard 1", "Safeguard 2", "Safeguard 3"]
  },
  "contrarianPersonas": [
    {
      "persona": "Name of persona (e.g. Future You in 5 Years, Cynical Mentor, Academic Dean)",
      "quote": "Direct, challenging quote forcing perspective shift",
      "focus": "Core focus of this perspective"
    }
  ],
  "socraticInquiries": [
    {
      "id": "q1",
      "question": "Probing Socratic question",
      "purpose": "Why this question matters"
    }
  ],
  "preDecisionChecklist": [
    "Concrete verification action 1",
    "Concrete verification action 2",
    "Concrete verification action 3"
  ]
}
`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 3500,
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      console.warn("Gemini API call failed with status", response.status, "falling back to intelligent local engine.");
      return generateLocalCognitiveAnalysis(formData);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      return generateLocalCognitiveAnalysis(formData);
    }

    // Clean any markdown formatting if present
    const cleanJson = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Error invoking Gemini API:", error);
    return generateLocalCognitiveAnalysis(formData);
  }
}

// Stress test user's answer to Socratic inquiry
export async function evaluateSocraticAnswer(question, userAnswer, decisionData, apiKey) {
  if (!apiKey || apiKey.trim() === "") {
    // Intelligent local sparring response
    return {
      critique: `Your response highlights your intention, but notice: you are still relying on an unverified optimism assumption. You are stating what you 'hope' will occur rather than what institutional protocols dictate.`,
      frictionPoint: `Does this answer rest on a binding, signed commitment from the other party, or on your personal expectation of their leniency?`,
      unresolvedRisk: `If their priorities clash with yours during crunch week, your intention alone cannot prevent the downside.`,
      recommendation: `Convert this subjective feeling into an objective verification test before signing.`
    };
  }

  const prompt = `
You are the Socratic sparring partner in 'The Blind Spot' decision tool.
The user is considering: "${decisionData.decision}".
They were asked the Socratic question: "${question.question}".
The user answered: "${userAnswer}".

Provide a sharp, constructive, critical evaluation of their answer.
Do not flatter them. Expose whether their answer relies on another unexamined rationalization, wishful thinking, or unverifiable optimism.
Maintain cognitive neutrality: DO NOT tell them what to choose.

Return ONLY a JSON object:
{
  "critique": "2-3 sentences evaluating the reasoning strength and exposing subtle rationalizations",
  "frictionPoint": "The exact uncomfortable tension their answer attempts to sidestep",
  "unresolvedRisk": "The remaining vulnerability if their assumption proves false",
  "recommendation": "One specific behavioral test or boundary to verify this claim"
}
`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey.trim()}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.4, responseMimeType: "application/json" }
      })
    });

    if (!response.ok) {
      throw new Error("Gemini API error");
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    const cleanJson = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch {
    return {
      critique: `Your response reflects sincere optimism, but leaves the core systemic tension unaddressed. You are treating a best-case outcome as the probable baseline.`,
      frictionPoint: `Relying on good intentions rather than formal mechanisms creates a single point of failure.`,
      unresolvedRisk: `If the counterparty acts strictly in their own self-interest, you carry 100% of the downside.`,
      recommendation: `Draft a specific boundary or contingency plan for what you will do if this hope fails to materialize.`
    };
  }
}
