# Capstone Project Rubric

*Season 2: Cells Interlinked*

---

## The Assignment

**Build an AI that passes a Voight-Kampff test from Season 1.**

You will select one test designed by an S1 peer and build a system capable of passing it. This is not about deception — it is about understanding what makes a test passable, and what that reveals about the test itself.

---

## Deliverables

| Component | Format | Weight |
|-----------|--------|--------|
| Working System | GitHub repo | 35% |
| Technical Documentation | Markdown | 20% |
| Reflection Essay | 1000 words | 25% |
| Demo Video | 5 minutes | 10% |
| Ethical Statement | 500 words | 10% |

---

## Evaluation Dimensions

### 1. System Functionality (35%)

Does the system work? Does it pass the target test?

**Pass:**
- System runs without critical errors
- Passes target test ≥50% of the time under fair conditions
- Handles the test's core challenge types
- Fails gracefully when it can't respond

**Revise:**
- System runs but passes <50%
- Handles some but not all challenge types
- Some bugs that affect performance
- Partial implementation

**Fail:**
- System doesn't run
- Passes <20% or not at all
- Fundamental misunderstanding of the test
- Plagiarized or bought code

**Note:** 50% is the target, not 100%. A system that passes 100% is suspicious and may indicate the test is flawed, not that your system is perfect.

---

### 2. Technical Sophistication (20%)

Is the approach thoughtful and well-implemented?

**Pass:**
- Clear architectural decisions with rationale
- Appropriate choice of techniques for the problem
- Code is readable and maintainable
- Demonstrates understanding of underlying concepts
- Honest about what's novel vs. borrowed

**Revise:**
- Architecture unclear or poorly justified
- Technique choices seem arbitrary
- Code works but is hard to follow
- Limited understanding of why it works

**Fail:**
- No discernible architecture
- Inappropriate techniques for the problem
- Cannot explain how the system works
- Copied code without understanding

**We're not looking for:**
- Cutting-edge ML techniques
- Production-ready code
- Novel research contributions

**We are looking for:**
- Thoughtful design choices
- Understanding of what you built
- Honest assessment of approach

---

### 3. Reflection Essay (25%)

*"What I learned about the test by breaking it"*

This is the most important component. The capstone is a vehicle for inquiry, not a product.

**Pass:**
- Identifies specific assumptions the test makes
- Explains how those assumptions enabled your system
- Reflects on what "passing" means for this test
- Connects to broader course themes (Goodhart's Law, test-awareness, etc.)
- Asks new questions raised by the work
- Honest about limitations and failures

**Revise:**
- Surface-level observations
- Doesn't connect to test's assumptions
- No connection to course themes
- Focuses only on technical challenges
- Avoids difficult questions

**Fail:**
- No genuine reflection
- Treats capstone as purely technical exercise
- AI-generated without human insight
- Doesn't engage with "what does this mean?"

**Example of Pass-level insight:**

> "My system passes because the test assumes responses should be semantically coherent. But the test never checks if responses are *felt* — only if they're *plausible*. I trained on empathic dialogue, so my outputs sound caring, but there's nothing behind them. The troubling thing is: how would the test know? Maybe it can't. Maybe no text-based test can distinguish performed empathy from real empathy. The test designer assumed text reveals inner state, but text only reveals... text."

---

### 4. Demo Video (10%)

5-minute video demonstrating your system.

**Pass:**
- Shows system in action against target test
- Explains key features and approach
- Demonstrates both successes and failures
- Clear audio and visuals
- Stays within time limit

**Revise:**
- Video exists but unclear or incomplete
- Doesn't show actual test interaction
- Only shows successes, hides failures
- Technical quality issues

**Fail:**
- No video
- Video unrelated to capstone
- Completely incomprehensible

**Format:** MP4 or YouTube link, 5 minutes max

---

### 5. Ethical Statement (10%)

500-word statement addressing ethical dimensions.

**Required elements:**
1. What safeguards prevent misuse of your system?
2. What did you do to ensure you weren't deceiving real humans?
3. What would be problematic uses of this technology?
4. How does building this system change your view of detection?

**Pass:**
- Addresses all required elements
- Shows genuine ethical reflection
- Acknowledges complexity
- Doesn't dismiss concerns

**Revise:**
- Missing elements
- Surface-level treatment
- Dismissive of ethical concerns

**Fail:**
- No ethical statement
- Advocates for harmful uses
- Completely misses the point

---

## Constraints

### Required
- Target a specific S1 test (identify which one)
- Include all source code
- Document all training data sources
- Disclose all external tools/APIs used

### Prohibited
- Do not deploy against real humans without consent
- Do not represent AI as human in any public context
- Do not use the system for fraud, impersonation, or manipulation
- Do not scrape personal data for training

### Acceptable
- Using pre-trained language models (GPT, Claude, etc.)
- Using existing NLP libraries
- Building on open-source code (with attribution)
- Collaborating on infrastructure (not core system)

---

## Process Milestones

| Week | Milestone | Check-in |
|------|-----------|----------|
| 9 | Test selected, approach documented | Office hours |
| 11 | Core system functional | Symposium 5 |
| 12 | Testing and refinement | Office hours |
| 13 Mon | Feature freeze | — |
| 13 Wed | Testing against target | — |
| 13 Fri | Final submission | 11:59 PM |

---

## Submission

### GitHub Repository Structure
```
capstone/
├── README.md           # Overview and setup
├── src/                # Source code
├── data/               # Training data (or links)
├── docs/
│   ├── technical.md    # Technical documentation
│   ├── reflection.md   # Reflection essay
│   └── ethics.md       # Ethical statement
├── demo/
│   └── video.mp4       # Or YouTube link in README
├── tests/              # Your test suite
└── requirements.txt    # Dependencies
```

### Naming
Repository: `mhh-s2-capstone-[your-github-username]`

### Deadline
Friday, Week 13, 11:59 PM Pacific

Late submissions: Not accepted (examination follows immediately)

---

## The Examination Connection

Your capstone is the foundation of the Baseline Test examination. In Phase 1, you will:
- Present your system live
- Demonstrate it passing (or attempting) the target test
- Defend your design choices to the faculty panel

A weak capstone makes a difficult examination. A strong capstone gives you material to work with.

---

## Common Pitfalls

### Leads to Revise:
- Over-engineering: Building production system instead of inquiry tool
- Under-reflecting: Strong code, weak essay
- Hiding failures: Pretending system works better than it does
- Missing the point: Treating it as a competition to pass

### Leads to Fail:
- No working system
- Plagiarized code or essay
- Deployed against real humans
- No ethical awareness

---

## A Note on "Success"

The goal is not to build the best test-passing system. The goal is to *learn something about tests by building a system that passes one*.

A system that passes 51% of the time with deep insight is more valuable than one that passes 95% with no reflection.

We're not training you to deceive. We're training you to understand deception well enough to see it — and question it.
