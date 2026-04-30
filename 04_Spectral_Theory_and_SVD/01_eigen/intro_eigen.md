# Introduction to Eigenvalues and Eigenvectors

Eigenvalues and Eigenvectors are the "DNA" of a matrix. They tell us the most important directions and scales of any transformation.

---

## Conceptual Intuition

Imagine you have a piece of **Silly Putty** with a drawing on it. 
- You pull the Silly Putty diagonally. 
- Most of the drawing gets warped and twisted. 
- But look closely! There is one line going perfectly straight between your fingers that stays in a straight line. It just gets longer.

**That straight line is an Eigenvector.**
**How much longer it got is the Eigenvalue.**

---

## The Equation: $Ax = \lambda x$

In math, we say a vector $x$ is an eigenvector if multiplying it by a matrix $A$ doesn't change its direction. It only scales it by a number $\lambda$ (Lambda).

$Ax = \lambda x$

- $A$: The transformation (the "pulling" of the Silly Putty).
- $x$: The **Eigenvector** (the direction that stays straight).
- $\lambda$: The **Eigenvalue** (the stretching factor).

---

## Why it matters in ML

Matrices in ML can be huge (millions of numbers). Eigenvectors help us find the **Core Directions** of our data. 
- If we find the eigenvector with the biggest eigenvalue, we have found the direction where our data varies the most! 
- This is how we compress data (PCA) and how Google ranks search results (PageRank).

---

## Example Case

**Question:** If a matrix $A$ just doubles everything ($Ax = 2x$ for every $x$), what are its eigenvalues and eigenvectors?

**Solution:**
1. Since **every** direction stays straight, **every** vector is an eigenvector!
2. Since everything gets exactly twice as long, the eigenvalue is **$\lambda = 2$**.
