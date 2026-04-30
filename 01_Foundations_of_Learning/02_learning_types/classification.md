# Supervised Learning: Classification

Classification is a type of learning where we predict a **discrete category** (a label).

---

## The 5th Grade Explanation

Imagine you are sorting fruit into two baskets: **Apples** and **Oranges**.
- If a fruit is red and round, you put it in the **Apple** basket.
- If it is orange and bumpy, you put it in the **Orange** basket.

You aren't predicting a number (like "5.2 apples"). You are choosing a **category**. This is **Classification**.

---

## Mathematical Model

In classification, we often use a function that outputs a "score" for each category. If we only have two categories, we can use a **Sign Function**:

$\hat{y} = \text{sign}(w \cdot x + b)$$

- If the result is **Positive (+)** $\to$ Category 1 (e.g., Apple).
- If the result is **Negative (-)** $\to$ Category 2 (e.g., Orange).

---

## Measuring Error (0/1 Loss)

In classification, you are either **Right** or **Wrong**. There is no "close enough" like in regression. 

We use **Misclassification Error** (0/1 Loss):
- Error = 0 if you guessed correctly.
- Error = 1 if you guessed wrong.

$$\text{Total Loss} = \frac{\text{Number of Wrong Guesses}}{\text{Total Guesses}}$$

---

## Example Case

**Scenario:** You are building a system to detect if a photo shows a **Dog** or a **Cat**.
- Out of 10 photos, the computer correctly identifies 8 dogs but calls 2 cats "dogs."

**Question:** What is the Misclassification Error?

**Solution:**
- Total Incorrect: 2
- Total Photos: 10
- **Loss = 2 / 10 = 0.2 (or 20%)**
