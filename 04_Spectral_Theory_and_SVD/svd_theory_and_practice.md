# SVD: Theory & Practice



---

**Singular Value Decomposition (SVD)** is the most powerful tool in all of Linear Algebra. It allows us to take **any** matrix and break it down into its simplest building blocks.

---

## Conceptual Intuition

Imagine you have a big, complicated **Lego Castle**. It's hard to move or store because it's so big. 

SVD is like a set of instructions that tells you how to break the castle into three parts:
1.  **$U$:** A set of "Baseplates" (The directions in the output space).
2.  **$\Sigma$:** A set of "Strength Bars" (How important each piece is).
3.  **$V^T$:** A set of "Original Bricks" (The directions in the input space).

If you want a smaller castle that still looks good, you just keep the pieces with the **biggest Strength Bars** and throw away the tiny ones!

---

## Why is SVD better than Eigenvalues?

Eigenvalues only work for **Square Matrices** (like $2 \times 2$ or $10 \times 10$).
But in the real world, data is almost never square. You might have 1,000 students and only 5 features ($1000 \times 5$).

**SVD works for EVERY matrix.** No matter how tall or wide it is, SVD can find its "DNA."

---

## How it's used in Machine Learning

1.  **Compression:** SVD can take a high-resolution photo and turn it into a low-resolution one that still looks great but takes up 90% less space.
2.  **Noise Removal:** If your data has "static" or "hiss," SVD can find the small, unimportant pieces (the small singular values) and delete them.
3.  **Recommendations:** Netflix uses a version of SVD to guess what movies you like by breaking your personality down into a few "core traits."

---

## Example Case

**Question:** If the singular values of a matrix are $[100, 50, 1, 0.01]$, and you want to compress the data to only 2 numbers, which ones do you keep?

**Solution:**
You keep the two biggest ones: **100 and 50**. 
The values 1 and 0.01 are so small they are probably just "noise" or unimportant details.

---

SVD takes a matrix $A$ and factors it into three special matrices.

---

## The Formula

$A = U \Sigma V^T$

- **$U$ (Left Singular Vectors):** These are the eigenvectors of $AA^T$. They represent the "directions" in the output space.
- **$\Sigma$ (Singular Values):** This is a diagonal matrix of numbers $\sigma_1, \sigma_2, \ldots$ (usually sorted from biggest to smallest). They tell you how "strong" each direction is.
- **$V$ (Right Singular Vectors):** These are the eigenvectors of $A^T A$. They represent the "directions" in the input space.

---

## The Step-by-Step Calculation

How do we find these three parts? 

1.  **Find $V$:** Calculate $A^T A$. Find its eigenvalues ($\lambda_i$) and eigenvectors ($v_i$). Put the eigenvectors into columns to make $V$.
2.  **Find $\Sigma$:** Take the square root of the eigenvalues you found: $\sigma_i = \sqrt{\lambda_i}$. Put them on the diagonal.
3.  **Find $U$:** Use the formula $u_i = \frac{A v_i}{\sigma_i}$ for each column.

---

## The "Rank-k" Approximation

If you only want to keep the most important information, you can use a **Reduced SVD**:
$A \approx \sum_{i=1}^{k} \sigma_i u_i v_i^T$

By only keeping the first $k$ pieces, you get the **best possible** $k$-dimensional version of your data. This is the math behind **PCA (Principal Component Analysis)**.

---

## Example Case

**Matrix:** $A = \begin{bmatrix} 3 & 0 \\ 0 & -2 \end{bmatrix}$

**Task:** Find the SVD.

**Solution:**
Since this matrix is already diagonal, it's very easy!
1.  **Singular Values:** We want them positive and sorted. So $\sigma_1 = 3$ and $\sigma_2 = |-2| = 2$.
    $\Sigma = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}$$.
2.  **$V$:** The directions are the standard axes. $V = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.
3.  **$U$:** We need to account for the negative sign in the second row. $U = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$.

**Result:** $A = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$.

---

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