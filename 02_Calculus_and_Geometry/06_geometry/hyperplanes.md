# Hyperplanes: Splitting High-Dimensional Space

A **Hyperplane** sounds like something from a sci-fi movie, but it's just a fancy name for a "divider" in high dimensions.

---

## Conceptual Intuition

- In **1D** (a line of numbers), a "hyperplane" is just a **Point**. A point splits a line into a left side and a right side.
- In **2D** (a flat piece of paper), a "hyperplane" is a **Line**. A line splits the paper into two sides.
- In **3D** (the room you are in), a "hyperplane" is a **Plane** (like a wall). A wall splits the room into two sides.

**What if you have 100 dimensions?** We can't see them, but we can still use math to build a "wall" that splits that 100D space into two sides. We call that wall a **Hyperplane**.

---

## Why do we need these "Walls"?

In Machine Learning, a hyperplane is our **Decision Boundary**.

Imagine you have data about patients. For every patient, you have 20 features (age, blood pressure, weight, etc.). This means the patient is a point in a **20-dimensional room**.
- We want to build a "Laser Wall" (Hyperplane) in that room.
- On one side of the wall, we put the "Healthy" patients.
- On the other side, we put the "Sick" patients.

---

## The Math of the Wall

Even in 100 dimensions, the math is exactly the same as for a simple line:
$w^T x + b = 0$

- $x$: A vector with 100 numbers (one for each feature).
- $w$: A vector with 100 weights (how important each feature is).
- $b$: A single number (the bias).

---

## Example Case

**Question:** If a hyperplane is defined as $3x_1 + 2x_2 - 5x_3 + 1 = 0$, how many dimensions does this space have?

**Solution:**
Look at the features ($x_i$). There are 3 of them ($x_1, x_2, x_3$).
So, this is a hyperplane in **3D space**. (Since it is in 3D, we can also just call it a "Plane").
