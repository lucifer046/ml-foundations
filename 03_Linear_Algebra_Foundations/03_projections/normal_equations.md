# The Normal Equations: Solving the Unsolvable

If $Ax = b$ has no solution, we "cheat" by multiplying both sides by $A^T$. This creates a new system that **always** has a solution!

---

## Conceptual Intuition

Imagine you are trying to fit a giant square block into a small round hole. It won't fit! 
- $Ax = b$ is like that block.
- Multiplying by $A^T$ is like taking a **shadow** of the block.
- The shadow is flat and fits into the hole perfectly!

The **Normal Equations** find the "Shadow" of the answer.

---

## The Formula

To find the best $\hat{x}$, we solve:
$A^T A \hat{x} = A^T b$

### Why does this work?
By multiplying by $A^T$, we ensure that the error (the part that didn't fit) is **perpendicular** to everything our matrix can do. 

> [!IMPORTANT]
> If $A^T A$ is a good matrix (invertible), we can find the answer directly:
> $\hat{x} = (A^T A)^{-1} A^T b$$

---

## Step-by-Step Summary

1.  **Start:** You have a system $Ax = b$ that is impossible to solve.
2.  **Step 1:** Calculate $A^T A$ (This is a square matrix).
3.  **Step 2:** Calculate $A^T b$ (This is a vector).
4.  **Step 3:** Solve the new, simpler system.
5.  **End:** You have the "Best Guess" ($\hat{x}$).

---

## Example Case

**Matrix:** $A = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, b = \begin{bmatrix} 4 \\ 6 \end{bmatrix}$. 
*(Note: $Ax = b$ is impossible because $1x=4$ and $1x=6$ can't both be true!)*

**Task:** Solve the Normal Equations.

**Solution:**
1. $A^T A = \begin{bmatrix} 1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = [1+1] = \mathbf{2}$.
2. $A^T b = \begin{bmatrix} 1 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 6 \end{bmatrix} = [4+6] = \mathbf{10}$.
3. Solve $2\hat{x} = 10 \to \mathbf{\hat{x} = 5}$.

**Check:** Our best guess is 5. It's exactly halfway between the two targets (4 and 6)!
