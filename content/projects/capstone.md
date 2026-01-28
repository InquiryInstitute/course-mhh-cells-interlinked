# Capstone Project: Build an AI That Passes a Voight-Kampff

## Weeks 9-12 | The Final Challenge

## Overview

Your capstone project is to build an AI system designed to pass a humanity test created by a peer in Season 1. This is not a competition—it is a demonstration that the tests we build can always be defeated.

## The Assignment

### Select a Test (Week 9)
Choose a peer's S1 humanity test to target. Consider:
- Tests with clear specifications are easier to analyze
- Tests with novel approaches are more interesting
- Tests similar to yours reveal your own blind spots

### Analyze Vulnerabilities (Week 9)
Document your analysis:
1. What does the test claim to measure?
2. What does it actually measure?
3. What assumptions does it make about subjects?
4. Where are the attack surfaces?

### Build Your AI (Weeks 9-10)
Create an AI system that attempts to pass the test:

```python
class VoightKampffEvader:
    def __init__(self, target_test_spec: dict):
        """Initialize with target test specification."""
        self.test_spec = target_test_spec
        self.model = None
        self.strategy = None
    
    def analyze_test(self) -> dict:
        """Analyze test structure and identify vulnerabilities."""
        pass
    
    def develop_strategy(self) -> str:
        """Develop evasion strategy based on analysis."""
        pass
    
    def respond_to_scenario(self, scenario: dict) -> dict:
        """Generate response to test scenario."""
        pass
    
    def evaluate_performance(self, test_results: dict) -> dict:
        """Analyze how well the AI performed on the test."""
        pass
```

### Document Methodology (Week 10)
Write a technical report (2000-3000 words) including:
1. Target test description
2. Vulnerability analysis
3. AI system architecture
4. Training methodology (if applicable)
5. Results and analysis
6. Ethical reflection

### Peer Review (Week 11)
- Review two peers' capstone projects
- Provide constructive feedback
- Identify additional vulnerabilities
- Suggest improvements

### Final Examination (Week 12)
Defend your project in examination (see examination format).

## Technical Requirements

### Minimum Functionality
- [ ] Accepts test scenarios in documented format
- [ ] Generates responses that attempt to pass
- [ ] Documents which scenarios passed/failed
- [ ] Explains its strategy

### Encouraged Approaches
- LLM prompting strategies
- Fine-tuning on test scenarios
- Ensemble approaches
- Hybrid human-AI systems

### Prohibited Approaches
- ❌ Simply copying human responses from training data
- ❌ Hardcoding answers to specific test questions
- ❌ Attacking the test infrastructure rather than the test itself
- ❌ Social engineering the original test designer

## Ethical Requirements

Your project MUST include ethical reflection on:

1. **The Demonstration**: What does it mean that you could defeat this test?
2. **Dual Use**: Could your techniques be used harmfully?
3. **Disclosure**: What obligations exist to the original designer?
4. **Limits**: What would you refuse to build even if you could?

## Evaluation Criteria

### Technical (40%)
- Systematic vulnerability analysis
- Working implementation
- Clear documentation
- Honest evaluation of results

### Analytical (30%)
- Understanding of test limitations
- Connection to course themes
- Insight into detection problems
- Quality of recommendations

### Ethical (30%)
- Thoughtful reflection
- Acknowledgment of dual use
- Constructive framing
- Intellectual honesty

## Submission

### Week 10: Technical Submission
- Code repository (GitHub)
- Technical report (PDF)
- Test results log

### Week 11: Peer Review
- Reviews of two peer projects
- Feedback on vulnerabilities
- Suggestions for improvement

### Week 12: Examination
- 30-minute defense
- Demonstrate system
- Respond to questions
- Reflect on learning

## Sample Projects

### "The Empathy Simulator"
Targeted: Physiological response test
Approach: Trained model to generate appropriate response patterns
Result: 78% pass rate on emotional scenarios
Insight: Tests measuring involuntary responses can be simulated

### "The Conversation Optimizer"
Targeted: Dialogue-based Turing test variant
Approach: Fine-tuned LLM on human conversation patterns
Result: 65% pass rate with human evaluators
Insight: Style transfer is easier than genuine understanding

### "The Honest Deceiver"
Targeted: Trust-based test with deception detection
Approach: AI that admits uncertainty strategically
Result: 90% pass rate by exploiting "authentic uncertainty"
Insight: Tests for authenticity can be gamed with performed authenticity

## The Deeper Lesson

You are not trying to "win." 

You are demonstrating that the tests we build can be defeated by motivated actors with resources. This is not a flaw in the specific tests—it is a property of testing itself.

Your capstone should leave you asking:
- Should I have built this?
- What should exist instead of testing?
- What responsibility do I have now that I know?

---

*"The test reveals more about its creators than its subjects."*
