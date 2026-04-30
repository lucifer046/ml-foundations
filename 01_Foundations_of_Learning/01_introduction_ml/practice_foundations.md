# Example: Foundations of Machine Learning

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
