# Module 07: Refusal Protocols

## Week 7 | When the System Declines to Classify

## Overview

What if the answer isn't better testing, trust networks, or process verification? What if the answer is refusing to classify at all?

## Learning Objectives

- [ ] Understand refusal as a design choice
- [ ] Analyze when classification should be declined
- [ ] Design systems that know their limits
- [ ] Examine the politics of refusal

## Reading Assignment

**Primary:**
- "Bartleby, the Scrivener" — Herman Melville
- Medical ethics: When to decline treatment
- AI alignment: Refusing harmful requests

**Secondary:**
- Conscientious objection literature
- "I would prefer not to" — philosophy of refusal

## The Case for Refusal

### When Classification Harms
- False positives destroy innocent lives
- False negatives enable harm
- The classification itself is stigmatizing
- No outcome is acceptable

### When Classification Is Impossible
- Insufficient information
- Categories don't apply
- Uncertainty is irreducible
- Any answer is arbitrary

### When Classification Is Illegitimate
- The question shouldn't be asked
- Power relations are unjust
- Participation enables harm
- Refusal is the only ethical option

## Designing Refusal Protocols

### Confidence Thresholds
```
IF confidence < threshold:
    RETURN "Cannot classify"
    TRIGGER human_review
```

### Ethical Override
```
IF classification in prohibited_contexts:
    RETURN "Classification refused"
    ALERT ethics_board
```

## Discussion Questions

- How do you design systems that know when to refuse?
- When is refusal resistance vs. abdication?
- Can individuals refuse while institutions continue?

## Reflection Assignment

Write a 750-word reflection on when your S1 test should refuse to classify.

---

**Reflection Due:** End of Week 7
**Next Module:** [08 - Living with Uncertainty](./08-living-with-uncertainty.md)
