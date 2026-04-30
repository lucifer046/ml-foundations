# Example: Spectral Theory and SVD

Test your understanding of the "DNA" of matrices and the power of SVD!

---

## Exercise 1: Eigen-Check
**Question:** A matrix $A$ has an eigenvector $x = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ with an eigenvalue of $\lambda = 3$. 
What is the result of multiplying $A$ by $x$?

<details>
<summary><b>View Solution</b></summary>

By the definition $Ax = \lambda x$, the result is just $3 \times \begin{bmatrix} 1 \\ 2 \end{bmatrix} = \mathbf{\begin{bmatrix} 3 \\ 6 \end{bmatrix}}$.
</details>

---

## Exercise 2: Symmetric Property
**Question:** You have a symmetric matrix $A$. You find that:
- $\lambda_1 = 10, v_1 = [1, 0]^T$
- $\lambda_2 = 2, v_2 = [0, 1]^T$

1. Write the **Diagonalized** form of $A$ ($Q \Lambda Q^T$).
2. What is the value of the Determinant of $A$?

<details>
<summary><b>View Solution</b></summary>

1. $A = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 10 & 0 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$. (Basically, $A = \begin{bmatrix} 10 & 0 \\ 0 & 2 \end{bmatrix}$).
2. $\det(A) = \lambda_1 \times \lambda_2 = 10 \times 2 = \mathbf{20}$.
</details>

---

## Exercise 3: SVD Compression
**Question:** A matrix $A$ represents a 100x100 pixel image. Its singular values are $500, 400, 300, \ldots, 1, 0.5, 0.1$. 

If you want to compress the image to save 90% of the space, but keep it looking clear, what should you do?

<details>
<summary><b>View Solution</b></summary>

You should perform a **Rank-k approximation**. 
1. Keep only the top 10 singular values ($\sigma_1$ to $\sigma_{10}$).
2. Throw away the other 90 values.
3. Re-calculate the matrix using only these 10 pieces.
**Result:** You get a very good approximation that uses 10x less data!
</details>

---

## Part 4: High-Level Summary
Why is SVD called "The Master Tool"?

> [!TIP]
> **Suggested Explanation:**
> Imagine every matrix is a messy pile of clothes. 
> - Eigenvalues only work if the pile is a perfect cube.
> - **SVD** works for every pile, even if it's tall, short, or weirdly shaped.
> SVD sorts the clothes into three bags: "Directions In," "How Big," and "Directions Out." Once you have those three bags, you understand exactly how the "Clothes Machine" works!
