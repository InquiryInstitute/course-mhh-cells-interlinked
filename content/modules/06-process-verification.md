# Module 06: Process Verification

## Week 6 | Verifying How, Not What

## Overview

If we can't reliably test the output (human vs. machine), can we verify the process by which it was created?

## Learning Objectives

- [ ] Understand process verification as alternative to output testing
- [ ] Analyze provenance tracking systems
- [ ] Examine the costs and limitations of witnessed creation
- [ ] Design process-based verification for your domain

## Reading Assignment

**Primary:**
- Supply chain provenance systems overview
- Notarization and witnessing in legal contexts
- Content authenticity initiatives (C2PA standard)

**Secondary:**
- Blockchain as provenance ledger
- Academic integrity via process monitoring

## From Output to Process

### Output Verification
"Is this text human-written?"
- Analyzes the artifact itself
- Requires distinguishing features
- Fails when outputs converge

### Process Verification
"Can we confirm a human wrote this?"
- Tracks the creation process
- Requires witnesses or monitoring
- Fails when process can be faked

### The Tradeoff
Process verification trades:
- Privacy for authenticity
- Freedom for accountability
- Efficiency for verifiability

## How Process Verification Works

### Witnessed Creation
- Human observer watches creation
- Notarization of completion
- Timestamping and signing
- Third-party attestation

### Monitored Creation
- Recording during creation
- Keystroke logging
- Screen capture
- Biometric confirmation

### Provenance Chains
- Track artifact through transformations
- Each step is signed
- Chain integrity is verifiable
- Tampering breaks the chain

## Real-World Examples

### Legal Documents
- Notarization requires witness
- Signatures are verified
- Chain of custody maintained
- Forgery is a crime

### Academic Proctoring
- Exam monitoring software
- Lockdown browsers
- Identity verification
- Suspicious behavior flagging

### Content Authenticity (C2PA)
- Cameras sign images at capture
- Edits are logged cryptographically
- Chain from camera to publication
- "Nutrition label" for media

## Discussion Questions

### Privacy
- How much surveillance is acceptable for verification?
- Who has access to process data?
- Can process verification respect privacy?

### Gaming
- How do you fake a process?
- What happens when monitoring is compromised?
- Is process verification more or less gameable than output testing?

### Accessibility
- Who can afford process verification?
- Does it create two classes of content?
- What about contexts where monitoring is impossible?

## Design Exercise

Design a process verification system for your S1 test domain:

1. **What is captured**: What aspects of creation are recorded?
2. **Who witnesses**: Human, algorithmic, or distributed?
3. **How stored**: Where does verification data live?
4. **How verified**: How is authenticity confirmed later?
5. **Privacy boundaries**: What is NOT captured?

## Reflection Assignment

Write a 750-word reflection addressing:

1. **Application**: How would process verification apply to your S1 test?
2. **Surveillance Costs**: What privacy is sacrificed?
3. **Gaming Analysis**: How would adversaries defeat process verification?
4. **Hybrid Design**: Could you combine process and output verification?

## Faculty Dialogue

After completing readings and exercise:
- **a.foucault-soci** — Surveillance and discipline
- **a.weizenbaum** — Monitoring as dehumanization
- **a.shannon** — Information in process signals

## The Panopticon Problem

Process verification creates constant surveillance:
- Every creation is monitored
- Every creator is watched
- The monitoring itself changes behavior
- The "human" being verified may not be authentic

### Foucault's Warning
In *Discipline and Punish*, Foucault describes the Panopticon: a prison where inmates might be watched at any time but can never know when.

The effect: inmates internalize surveillance and police themselves.

Process verification creates the same dynamic:
- Creators know they might be monitored
- They modify their behavior accordingly
- "Authentic" creation becomes impossible
- The verification undermines what it verifies

### The Paradox
To verify human creation, we create conditions where humans can't create naturally.

## For Your Capstone

Consider process verification for your AI system:
- Could you prove your AI *didn't* pass the test?
- What process evidence would demonstrate machine authorship?
- Is transparency about AI use a form of process verification?

---

**Reflection Due:** End of Week 6
**Next Module:** [07 - Refusal Protocols](./07-refusal-protocols.md)
