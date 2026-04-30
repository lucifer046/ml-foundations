# Introduction to Probability

**Probability** is the math of uncertainty. It helps us answer the question: "How likely is this to happen?"

---

## Conceptual Intuition

Imagine you are playing a board game with a **6-sided die**.
- Every time you roll, you have a 1 out of 6 chance (approx 16%) of getting a "6".
- If you roll two dice, the chance of getting two "6s" is much smaller ($1/6 \times 1/6 = 1/36$).

**Rules of the Game:**
1.  **The Range:** Probability is always between 0 (Impossible) and 1 (Certain).
2.  **The Total:** If you add up the probabilities of every possible thing that could happen, the total must be **1**.

---

## Independence

Two events are **Independent** if one doesn't care about the other.
- **Example:** If you flip a coin and get "Heads," the coin doesn't "remember" that. The next flip is still a 50/50 chance.
- In ML, we often assume our data points are independent so the math stays simple.

---

## Expected Value: The "Average"

If you played a game a million times, what would your average score be? That is the **Expected Value**.

**Example:** You play a game where you win \$10 if you flip Heads and lose \$10 if you flip Tails.
- $E = (0.5 \times 10) + (0.5 \times -10) = 5 - 5 = \mathbf{0}$.
- On average, you will walk away with nothing!

---

## Example Case

**Question:** A bag has 5 Red apples and 5 Green apples. You pick one, eat it, and then pick another one. 
Are these two picks **Independent**?

**Solution:**
No! 
- The first pick has a 5/10 chance of being Red.
- But once you eat one apple, there are only 9 apples left. The "chances" for the second pick have changed!
**Result:** These events are **Dependent**.
