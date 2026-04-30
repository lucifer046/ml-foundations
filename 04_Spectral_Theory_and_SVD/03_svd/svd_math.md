# The Math of SVD

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
