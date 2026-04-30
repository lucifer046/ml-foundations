# Eigenvalues & Spectral



---

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

---

To find the "DNA" of a matrix, we use a special formula called the **Characteristic Equation**.

---

## Conceptual Intuition

Imagine you are a detective trying to find a secret code. You know that the code follows a specific pattern: $(A - \lambda I)x = 0$. 
- We want to find a $\lambda$ that makes the matrix $(A - \lambda I)$ "useless" or "collapsed."
- When a matrix is collapsed, its **Determinant** is zero. 

So, our detective tool is: **$\det(A - \lambda I) = 0$**.

---

## Step-by-Step Guide

### Step 1: Subtract $\lambda$ from the diagonal.
If $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, then $A - \lambda I = \begin{bmatrix} a-\lambda & b \\ c & d-\lambda \end{bmatrix}$.

### Step 2: Find the Determinant.
Calculate $(a-\lambda)(d-\lambda) - (b)(c) = 0$.

### Step 3: Solve for $\lambda$.
This will usually be a quadratic equation (like $x^2 + 5x + 6 = 0$). The solutions are your **Eigenvalues**.

---

## Two Magic Properties

1.  **Trace:** The sum of the eigenvalues is equal to the sum of the numbers on the diagonal of $A$.
2.  **Determinant:** The product of the eigenvalues is equal to the determinant of $A$.

> [!TIP]
> You can use these two rules to "check your work." If your eigenvalues don't add up to the Trace, you made a mistake!

---

## Example Case

**Matrix:** $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$

**Task:** Find the eigenvalues.

**Solution:**
1.  **Subtract $$\lambda$:** $\begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix}$.
2.  **Determinant:** $(4-\lambda)(3-\lambda) - 2 = 0$.
    $\lambda^2 - 7\lambda + 12 - 2 = 0$
    $\lambda^2 - 7\lambda + 10 = 0$
3.  **Factor:** $(\lambda - 5)(\lambda - 2) = 0$.
**Result:** The eigenvalues are **5 and 2**.

*(Check: $5+2=7$. Trace is $4+3=7$. Correct!)*

---

Not all matrices are created equal. Some have special properties that make them incredibly easy to work with in Machine Learning.

---

## Symmetric Matrices: The "Mirror"

A matrix is **Symmetric** if it is its own mirror image ($A = A^T$).

### Conceptual Intuition
Imagine a butterfly. If you fold it in half, the left side matches the right side perfectly. That is symmetry.

### Why do we care? (The Spectral Theorem)
Symmetric matrices are the "Superstars" of Linear Algebra because:
1. Their eigenvalues are always **Real Numbers** (no weird imaginary numbers!).
2. Their eigenvectors are always **Perpendicular** to each other.
3. They can always be **Diagonalized**.

---

## Unitary (Orthogonal) Matrices: The "Rotators"

A matrix is **Orthogonal** (or Unitary) if its columns are all length 1 and are all perpendicular to each other ($Q^T Q = I$).

### Conceptual Intuition
Imagine you are holding a picture frame. You can rotate it 90 degrees or flip it over, but the **size and shape** of the picture never change.
**Orthogonal matrices are "Rotators."** They move things around but they never stretch or squish them.

---

## Quadratic Forms

When we multiply a vector by a symmetric matrix on both sides ($x^T A x$), we get a single number. This is called a **Quadratic Form**.

- If the result is always positive, we call the matrix **Positive Definite**.
- In ML, our "Loss Functions" are usually positive definite. This means they look like a bowl, which makes it easy to find the bottom!

---

## Example Case

**Question:** If a matrix $A$ is symmetric, and one eigenvector is $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$, what can you say about the other eigenvector?

**Solution:**
Because it is symmetric, the eigenvectors must be **Perpendicular**.
The only direction perpendicular to $$\begin{bmatrix} 1 \\ 0 \end{bmatrix}$$ in 2D is the y-axis: $$\mathbf{\begin{bmatrix} 0 \\ 1 \end{bmatrix}}$$.