# Finding Eigenvalues: The Characteristic Equation

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
