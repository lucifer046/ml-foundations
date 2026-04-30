# Unsupervised & Density



---

In Unsupervised Learning, there are **no answers provided**. The computer must explore the data and find hidden groups or structures by itself.

---

## The 5th Grade Explanation

Imagine I give you a big box of random buttons. I don't tell you how to sort them. 
- You might group them by **Color**.
- You might group them by **Size**.
- You might group them by **How many holes they have**.

You found a pattern without me telling you what to look for! That is **Unsupervised Learning**.

---

## Key Technique: Clustering

The most common unsupervised task is **Clustering**. We group data points that are "close" to each other in some way.

- **Example:** Netflix looks at all the movies you've watched. It notices that you like movies with "Space" and "Lasers." It groups you with other people who like the same things and calls that cluster "Sci-Fi Fans."

---

## Key Technique: Dimensionality Reduction

Sometimes we have too much information (too many "features"). **Dimensionality Reduction** is like making a summary of a long book. You keep the important parts and throw away the rest.

- **Example:** Instead of recording a student's score in 20 different subjects, we might just use two numbers: "Math Skill" and "Reading Skill." This makes the data much easier to handle.

---

## Example Case

**Scenario:** A library has 10,000 books but no categories (no "Mystery," no "History"). They use an AI to group books that use similar words.

**Question:** Is this Supervised or Unsupervised? Why?

**Solution:**
- **Unsupervised Learning.**
- **Reason:** There were no "answer labels" (categories) provided to the computer. It had to find the groups entirely by looking at the patterns in the words.

---

Density Estimation is about understanding the "landscape" of your data. It tells us which areas are common (high density) and which are rare (low density).

---

## The 5th Grade Explanation

Imagine you live in a town where almost everyone wears blue shirts. If you see someone wearing a bright neon pink suit, you would think, "Whoa, that's unusual!"

**Density Estimation** is the computer's way of learning that "Blue shirts are normal" and "Pink suits are weird."

---

## Mathematical Concept: $p(x)$

We represent the "density" or probability as $p(x)$.

- If $p(x)$ is **High** $\to$ This is a normal, expected data point.
- If $p(x)$ is **Low** $\to$ This is an unusual, rare data point.

$p(x) = \text{Probability of seeing data point } x$

---

## Key Application: Anomaly Detection

This is how banks catch people stealing credit cards. 
- The bank knows your "normal" behavior ($p(x)$ is high for your usual grocery store).
- Suddenly, a charge for \$5,000 appears from a country you've never visited at 4 AM.
- The computer calculates the probability $p(\text{this charge})$ and finds it is **extremely low**.
- **Result:** It blocks the card! This is **Anomaly Detection**.

---

## Example Case

**Scenario:** You are monitoring a factory machine. Usually, it vibrates at 50-60 Hz. Today, it starts vibrating at 120 Hz.

**Question:** If you are using Density Estimation, what would the computer think about the 120 Hz vibration?

**Solution:**
- The computer would see that 120 Hz is a **Low Density** area (unusual). 
- It would flag this as an **Anomaly** or an outlier, suggesting the machine might be broken.