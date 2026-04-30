# Types of Machine Learning

Just like there are different ways for humans to learn (school, practice, playing), there are three main ways for computers to learn.

---

## Supervised Learning (The Teacher)
This is like having a teacher who gives you the answers. You get a set of questions ($x$) and the correct answers ($y$).

- **Analogy:** Studying for a test with an answer key at the back of the book.
- **Example:** Predicting house prices. You have 1,000 houses with their sizes and their final sale prices.

---

## Unsupervised Learning (The Detective)
In this type, there are no "correct answers" provided. The computer just looks at a pile of data and tries to find patterns or groups.

- **Analogy:** Giving a child a box of mixed LEGOs and asking them to "sort them." The child might sort by color, or by size, or by shape.
- **Example:** Grouping customers of a store into "big spenders" and "bargain hunters" based on their shopping history.

---

## Reinforcement Learning (The Gamer)
The computer (the "Agent") learns by interacting with an environment. It gets "points" (rewards) for good actions and "loses points" (penalties) for bad ones.

- **Analogy:** Training a dog. If the dog sits, it gets a treat (+ reward). If it barks at the mailman, it gets a "No!" (- penalty).
- **Example:** A computer learning to play Chess or Super Mario.

---

## Summary Comparison

| Feature | Supervised | Unsupervised | Reinforcement |
| :--- | :--- | :--- | :--- |
| **Data** | Questions + Answers | Questions only | Actions + Rewards |
| **Goal** | Predict the answer | Find hidden patterns | Get the most points |
| **Feedback** | Immediate (Wrong/Right) | None | Delayed (Win/Loss) |

> [!NOTE]
> **Most of this handbook will focus on Supervised Learning**, as it is the foundation for most modern AI applications like image recognition and price prediction!
