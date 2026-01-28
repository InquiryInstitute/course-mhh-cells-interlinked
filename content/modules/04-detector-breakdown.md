# Module 04: Detector Breakdown Scenarios

## Week 4 | When Detection Systems Fail Catastrophically

## Overview

We've examined gradual erosion of test validity. Now we examine catastrophic failure: moments when detection systems break completely.

## Learning Objectives

- [ ] Identify conditions that cause detection systems to fail
- [ ] Analyze real-world detector breakdowns
- [ ] Understand the difference between degraded and broken
- [ ] Design for graceful failure

## Viewing Assignment

**Primary:**
- *Blade Runner* (1982), the ending
- *Blade Runner 2049* (2017), the confrontation scenes

**Reading:**
- Case studies of system failures (provided)
- "Normal Accidents" excerpts — Charles Perrow
- AI alignment failure scenarios

## Categories of Failure

### Type 1: Gradual Erosion
- Test validity declines over time
- Subjects learn to game the system
- Threshold creep accommodates failure
- System continues but means nothing

*Example: Grade inflation*

### Type 2: Adversarial Defeat
- Determined adversary finds exploit
- Single point of failure compromised
- System fails completely for prepared attackers
- System still works for naive subjects

*Example: CAPTCHA solving services*

### Type 3: Category Collapse
- The thing being detected changes
- Categories no longer map to reality
- Detection becomes impossible in principle
- System cannot be fixed, only replaced

*Example: The Rachael Rosen problem*

### Type 4: Examiner Failure
- Classifiers can no longer perform
- Psychological or ethical breakdown
- Mass refusal or resignation
- System fails from within

*Example: Content moderation burnout*

## Case Studies

### The Voight-Kampff Breakdown
In Dick's novel and the films, the Voight-Kampff fails because:
1. **Nexus-6 empathy responses** approach human levels (Type 3)
2. **Implanted memories** create genuine emotional responses (Type 3)
3. **Tyrell optimization** defeats specific test scenarios (Type 2)
4. **Deckard's doubt** undermines examiner authority (Type 4)

Multiple failure modes compound.

### LLM Detection Collapse
Current AI text detection is experiencing:
1. **Gradual erosion** as LLMs improve (Type 1)
2. **Paraphrasing attacks** defeat statistical detection (Type 2)
3. **Distribution convergence** makes detection theoretically impossible (Type 3)
4. **False positive harm** causes institutional abandonment (Type 4)

The system is failing in all four ways simultaneously.

### Credit Scoring Stress
Credit scoring systems face:
1. **Score optimization** by consumers (Type 1)
2. **Synthetic identity fraud** (Type 2)
3. **Pandemic disruption** invalidating behavioral models (Type 3)
4. **Regulatory challenges** to fairness (Type 4)

## Discussion Questions

### Technical
- Can systems be designed to fail gracefully?
- What early warning signs precede catastrophic failure?
- How do you distinguish degraded from broken?

### Institutional
- What happens to institutions when their detection fails?
- How do organizations respond to acknowledged failure?
- When should a broken system be abandoned vs. replaced?

### Ethical
- What obligations exist after detection fails?
- Who is harmed by continued use of broken systems?
- When is "some detection" worse than "no detection"?

## Reflection Assignment

Write a 750-word reflection addressing:

1. **Your Test's Failure Mode**: Which failure type is your S1 test most vulnerable to?
2. **Warning Signs**: What would indicate your test is failing?
3. **Graceful Degradation**: How could your test fail gracefully?
4. **Abandonment Criteria**: At what point should your test be abandoned?

## Faculty Dialogue

After completing readings and reflection:
- **a.turing** — Fundamental limits of detection
- **a.weizenbaum** — When to refuse to build
- **a.shannon** — Information-theoretic failure

## For Your Capstone

The capstone project is itself a detector breakdown scenario:

You are deliberately causing a peer's test to fail (Type 2).

Your documentation should include:
- Which vulnerabilities you exploited
- Whether the failure is recoverable
- What this reveals about the test's design
- Recommendations for the original designer

---

**Reflection Due:** End of Week 4
**Next Module:** [05 - Trust Networks](./05-trust-networks.md)

---

## Part 1 Complete: Collapse

You have now examined four mechanisms of detection failure:
1. Test awareness erodes validity
2. Corporate optimization defeats detection
3. Examiner doubt undermines authority
4. Systems fail in multiple compounding ways

**Part 2** asks: What replaces testing when testing fails?
