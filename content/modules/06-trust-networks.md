# Module 05: Trust Networks

## Week 5 | Replacing Tests with Relationships

## Overview

If point-in-time testing fails, what about distributed trust? This module examines trust networks as an alternative to detection.

## Learning Objectives

- [ ] Understand trust as a network property, not individual attribute
- [ ] Analyze how trust networks function in practice
- [ ] Examine the costs and benefits of reputation systems
- [ ] Design trust-based alternatives to your S1 test

## Reading Assignment

**Primary:**
- Excerpts from "Trust" — Francis Fukuyama
- "Reputation Systems" — Resnick et al.
- Web of Trust (PGP) technical documentation

**Secondary:**
- "The Evolution of Cooperation" excerpts — Robert Axelrod
- Blockchain and trustless systems overview

## From Testing to Trusting

### The Testing Model
1. Unknown entity presents itself
2. Test is administered
3. Binary outcome: pass/fail
4. Entity is classified

### The Trust Model
1. Entity has history of interactions
2. Others vouch for entity
3. Trust accumulates over time
4. Classification emerges from relationships

### Key Differences

| Testing | Trust Networks |
|---------|---------------|
| Point-in-time | Continuous |
| Binary | Gradual |
| Centralized examiner | Distributed vouching |
| Context-free | Context-dependent |
| Gaming is adversarial | Gaming is social |

## How Trust Networks Work

### Vouching/Reputation
- A trusts B
- B trusts C
- Therefore A has some transitive trust in C
- Trust degrades over distance

### Accumulation
- Entity performs many small interactions
- Each interaction provides evidence
- Reputation builds over time
- Single failure doesn't destroy trust

### Context Sensitivity
- Trust is domain-specific
- A trusts B for code review
- A may not trust B for financial advice
- Trust doesn't transfer across domains

## Real-World Trust Networks

### Academic Citation
- Papers are vouched for by citing papers
- Authors gain reputation through citation
- Retraction damages network position
- Gaming exists but is socially costly

### Open Source Software
- Contributors earn commit access over time
- Code review distributes trust decisions
- Reputation determines influence
- Gaming requires long-term social investment

### Traditional Societies
- Community vouch for members
- Strangers need introduction
- Trust is inherited and earned
- Exile is the ultimate sanction

## Discussion Questions

### Structural
- How does trust degrade over network distance?
- What happens when trusted nodes defect?
- Can trust networks scale to internet size?

### Gaming
- How do you game a trust network?
- Is gaming trust networks harder than gaming tests?
- What are Sybil attacks and how are they prevented?

### Exclusion
- Who is excluded from trust networks?
- How do newcomers enter established networks?
- Do trust networks replicate existing inequalities?

## Design Exercise

Design a trust-based alternative to your S1 test:

1. **Entry Mechanism**: How does someone enter the network?
2. **Vouching Protocol**: How is trust extended?
3. **Reputation Tracking**: How is history maintained?
4. **Violation Handling**: What happens when trust is broken?
5. **Newcomer Path**: How do strangers gain initial trust?

## Reflection Assignment

Write a 750-word reflection addressing:

1. **Comparison**: How would a trust network differ from your S1 test?
2. **Advantages**: What would trust networks handle better?
3. **Disadvantages**: What would trust networks handle worse?
4. **Hybrid**: Could you combine testing and trust?

## Faculty Dialogue

After completing readings and exercise:
- **a.arendt** — Trust and political community
- **a.foucault-soci** — Power in distributed systems
- **a.shannon** — Information in reputation signals

## The Blade Runner Question

Could trust networks have worked for replicant detection?

### Arguments For
- Replicants have limited lifespans
- Long-term relationship building is costly
- Community vouching requires social investment
- Harder to fake years of relationships

### Arguments Against
- Implanted memories include relationships
- Corporate resources can manufacture histories
- Replicants in trust positions can vouch for others
- The problem recurses

### The Deeper Issue
Trust networks assume the community is trustworthy. If the community itself is compromised, trust networks fail just as tests do.

---

**Reflection Due:** End of Week 5
**Next Module:** [06 - Process Verification](./06-process-verification.md)
