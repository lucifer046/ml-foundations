# Probability & Distributions



---

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

---

A **Distribution** is a rule that tells us which values are "Popular" and which values are "Rare."

---

## Conceptual Intuition

Imagine you are looking at the **Birthdays** of everyone in your school.
- If you graph them, you might see that every month has about the same number of people. This is a **Uniform Distribution** (a flat line).
- If you graph the **Heights** of the students, you will see a big "hump" in the middle and very thin ends. This is a **Normal Distribution** (a bell shape).

---

## The Gaussian (Normal) Distribution

This is the most important shape in all of science. It is defined by two numbers:
1.  **Mean ($\mu$):** The center of the hump (the average).
2.  **Variance ($\sigma^2$):** How "fat" or "skinny" the hump is.

> [!TIP]
> **The 68-95-99 Rule:**
> In a Normal Distribution:
> - 68% of data is close to the middle.
> - 95% is within 2 "steps" of the middle.
> - 99.7% is within 3 "steps." Almost everyone!

---

## Bernoulli and Binomial

These are for "Yes or No" questions.
- **Bernoulli:** A single coin flip.
- **Binomial:** A series of 10 coin flips. (How many "Heads" did you get total?)

---

## Example Case

**Question:** If the average height of a class is 5 feet, and the distribution is **Normal**, where do you expect most of the students' heights to be?

**Solution:**
In a Normal Distribution, the most "popular" value is the Mean.
**Result:** Most students will be **around 5 feet tall**. Very few will be 2 feet tall or 8 feet tall.

---

**Bayes' Theorem** is a formula that tells us how to change our mind when we see new evidence.

---

## Conceptual Intuition

Imagine you wake up and hear a **"Meow!"** 
- **Your Prior Guess:** You don't have a cat, so you think it's probably just the TV.
- **New Evidence:** You look down and see a **Tail** sticking out from under the couch.
- **Your New Guess:** Now you are 99% sure there is actually a cat in your house!

**Bayes' Theorem** is just the math version of this "Aha!" moment.

---

## The Formula

$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$

- $P(A|B)$: The **Posterior** (Your guess **after** seeing the evidence).
- $P(A)$: The **Prior** (Your guess **before** seeing the evidence).
- $P(B|A)$: The **Likelihood** (How likely is it to see this evidence if your guess was true?).
- $P(B)$: The **Evidence** (How likely is it to see this evidence in general?).

---

## Why it matters in ML

This is used in **Spam Filters**.
- **Prior:** Most emails are not spam.
- **Evidence:** The email contains the word "FREE MONEY!!!".
- **Likelihood:** "Spam" emails use that word much more than "Real" emails.
- **Posterior:** The computer updates its guess and decides the email is 99.9% Spam.

---

## Example Case

**Scenario:** 
- 1% of people have a rare disease ($P(A) = 0.01$).
- A test is 90% accurate ($P(B|A) = 0.90$).
**Question:** If you test positive, does that mean you definitely have the disease?

**Solution:**
No! Because the disease is so rare (only 1%), even with a good test, there is a high chance it is a "False Alarm." You have to use Bayes' Theorem to find the real probability.

> [!IMPORTANT]
> **Bayes' Rule of Thumb:** Extraordinary claims (like a rare disease) require extraordinary evidence!

---

Test your skills on uncertainty, shapes, and updating your guesses!

---

## Exercise 1: The Coin Flip
**Question:** You flip a fair coin 3 times. What is the probability of getting "Heads" all 3 times?

<details>
<summary><b>View Solution</b></summary>

Every flip is independent and has a $1/2$ chance.
$1/2 \times 1/2 \times 1/2 = \mathbf{1/8}$ (or 12.5%).
</details>

---

## Exercise 2: Mean and Variance
**Question:** You have a dataset of test scores: $[80, 80, 80, 80, 80]$.
1. What is the **Mean**?
2. What is the **Variance**?

<details>
<summary><b>View Solution</b></summary>

1. The average is clearly **80**.
2. Since every number is exactly 80, there is zero "spread." So the Variance is **0**.
</details>

---

## Exercise 3: Bayes in Action
**Question:** A robot is trying to identify a fruit.
- **Prior:** 50% of fruits in the basket are Apples, 50% are Oranges.
- **Evidence:** The fruit is **Red**.
- **Likelihood:** 100% of Apples are Red. 0% of Oranges are Red.

What is the probability the fruit is an Apple?

<details>
<summary><b>View Solution</b></summary>

Since only Apples can be Red, as soon as you see the "Red" evidence, the probability of it being an Apple jumps to **100%**!
</details>

---

## Part 4: Conceptual Challenge
What is the difference between **Probability** and **Statistics**?

> [!TIP]
> **Suggested Explanation:**
> Imagine a jar of jellybeans.
> - **Probability** is knowing what's in the jar (e.g., 50% Red) and guessing what you'll pull out.
> - **Statistics** is looking at the jellybeans you pulled out and trying to guess what's inside the jar!