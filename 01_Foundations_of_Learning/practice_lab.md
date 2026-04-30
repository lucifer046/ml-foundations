# Practice Lab



---

This section combines everything we've learned so far: Definitions, Types of Learning, and Performance Measurement.

---

## Part 1: Scenario Analysis

**Case Study: The Smart Sprinkler**
A company builds a sprinkler that turns on only when the soil is dry. They use a camera to look at the soil color.

1. **Feature ($x$):** The color values from the camera.
2. **Label ($y$):** "Dry" (1) or "Wet" (0).
3. **Task:** Is this Regression or Classification?
4. **Learning Type:** Is this Supervised or Unsupervised?

<details>
<summary><b>View Solution</b></summary>

1. **Classification:** Because the answer is a category (Dry or Wet).
2. **Supervised Learning:** Because we need to tell the computer which colors mean "Dry" and which mean "Wet" using labeled examples.
</details>

---

## Part 2: Math Checkup

**Problem:** Calculate the Loss for the following model.
- Model: $\hat{y} = 2x + 1$
- Training Data Point: $x=3, y=10$

1. What is the prediction $\hat{y}$?
2. What is the Squared Error?

<details>
<summary><b>View Solution</b></summary>

1. **Prediction:** $\hat{y} = 2(3) + 1 = 6 + 1 = 7$.
2. **Squared Error:** $(10 - 7)^2 = 3^2 = 9$.
</details>

---

## Part 3: Architecture Choice

**Question:** You want to find "weird" behavior in a computer network to stop hackers. You have 10 years of data but no one has ever labeled it as "hacker" or "not hacker."

Which technique should you use?
- A. Regression
- B. Supervised Classification
- C. Density Estimation

<details>
<summary><b>View Solution</b></summary>

**C. Density Estimation.** 
Since you have no labels, you cannot use Supervised learning. You want to find "weird" (low density) behavior, which is exactly what Density Estimation is for.
</details>

---

## Part 4: Conceptual Challenge

Explain **Overfitting** using the example of a student named "Memory Mark" who is studying for a history test.

> [!TIP]
> **Suggested Explanation:**
> Memory Mark doesn't understand History. He just memorizes the exact sentences in his textbook.
> - On the practice test, the questions are exactly the same as the book. Mark gets **100%**.
> - On the real test, the teacher asks the same questions but in a different way.
> - Mark fails! He **Overfitted** to the book's sentences instead of learning the actual History.

---

Test your understanding of the core concepts!

---

## Exercise 1: Identify the Pillars
**Scenario:** A farmer wants to predict the weight of a pumpkin based on how much water it received. He has records of 50 pumpkins from last year. He uses a simple formula: $Weight = 2.5 \times Water$.

**Task:** Identify the following:
1. What is the **Data**?
2. What is the **Feature** ($x$)?
3. What is the **Weight** ($w$)?
4. What is the **Label** ($y$)?

<details>
<summary><b>View Solution</b></summary>

1. **Data:** The records of the 50 pumpkins.
2. **Feature ($x$):** The amount of water.
3. **Weight ($w$):** 2.5 (the importance given to water).
4. **Label ($y$):** The actual weight of the pumpkin.
</details>

---

## Exercise 2: Calculate the Loss
A model predicts that a house will cost **$300,000** ($\hat{y}$).
The house actually sells for **$310,000** ($y$).

**Task:** Calculate the **Squared Error Loss**.

<details>
<summary><b>View Solution</b></summary>

**Formula:** $L = (y - \hat{y})^2$
$L = (310,000 - 300,000)^2$
$L = (10,000)^2$
**$L = 100,000,000$**
</details>

---

## Exercise 3: Supervised or Unsupervised?
Decide which type of learning is being used in each case:

1. A computer identifies groups of similar news articles without being told the categories.
2. An app predicts if a photo shows a cat or a dog based on 50,000 labeled photos.
3. A robot learns to navigate a maze by trying different paths and getting "rewards" when it reaches the exit.

<details>
<summary><b>View Solution</b></summary>

1. **Unsupervised Learning** (Finding groups without labels).
2. **Supervised Learning** (Learning from labeled photos).
3. **Reinforcement Learning** (Learning from rewards in an environment).
</details>

---

## Challenge: The 5th Grade Test
How would you explain the difference between a **Weight** and a **Bias** to your 10-year-old cousin?

> [!TIP]
> **Suggested Explanation:**
> Imagine you are trying to guess how heavy a backpack is. 
> - **The Weight** is how much each book adds to the total. If a book is heavy, the weight is high!
> - **The Bias** is how much the backpack weighs when it is empty. Even with zero books, the backpack still has some weight!