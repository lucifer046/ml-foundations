# Introduction to Linear Systems

A **Linear System** is a collection of equations where we try to find the values of unknown variables. In Machine Learning, these unknowns are usually the **Weights** of our model.

---

## Conceptual Intuition

Imagine you go to a shop and buy snacks for your friends:
- **Bag 1:** 2 Chocolates and 1 Juice box = \$5
- **Bag 2:** 1 Chocolate and 1 Juice box = \$3

Can you guess how much 1 Chocolate costs?
- If we subtract Bag 2 from Bag 1, we see that 1 extra Chocolate makes the price go up by \$2.
- So, **1 Chocolate = \$2**.
- And that means **1 Juice box = \$1**.

You just solved a linear system!

---

## Matrix Form: $Ax = b$

Instead of writing out long equations, we use **Matrices** to keep everything organized.

$Ax = b$

- $A$ (The **Matrix**): A table of all the "counts" (e.g., how many chocolates and juices in each bag).
- $x$ (The **Unknowns**): The "prices" we are trying to find.
- $b$ (The **Targets**): The total "results" (e.g., the final bills).

---

## Why it matters in ML

Imagine you have a dataset with 1,000 students. For each student, you have their "Hours Studied" and their "Final Grade."
- Each student is like one of our "Bags" of snacks.
- The "Hours Studied" is the count ($A$).
- The "Final Grade" is the bill ($b$).
- We want to find the **Weight** ($x$) that explains how hours turn into grades!

---

## Example Case

**Scenario:** 
- Equation 1: $x + y = 10$
- Equation 2: $x - y = 2$

**Question:** What are the values of $x$ and $y$?

**Solution:**
1. Add the two equations together: $(x+y) + (x-y) = 10 + 2 \to 2x = 12 \to \mathbf{x = 6}$.
2. Put $x=6$ back into the first one: $6 + y = 10 \to \mathbf{y = 4}$.
