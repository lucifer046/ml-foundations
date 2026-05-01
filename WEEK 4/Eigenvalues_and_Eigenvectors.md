# WEEK 4: Eigenvalues and Eigenvectors

Spectral theory deals with the behavior of linear transformations by identifying directions that remain invariant (up to scaling) under the transformation. This is crucial for dimensionality reduction and understanding the stability of systems.

---

## 1. The Eigenvalue Equation

For a square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, a non-zero vector $\mathbf{v}$ is an **Eigenvector** if:
$$\mathbf{A}\mathbf{v} = \lambda \mathbf{v}$$
Where:
- $\lambda$ is a scalar called the **Eigenvalue**.
- $\mathbf{v}$ is the direction that is only scaled (not rotated) by $\mathbf{A}$.

### Intuition
If we think of $\mathbf{A}$ as a transformation of space, eigenvectors are the "axes" of that transformation, and eigenvalues are the "stretch factors" along those axes.

---

## 2. Computing Eigen-Pairs

To find eigenvalues and eigenvectors, we follow two primary steps:

### Step 1: Solve the Characteristic Equation
The equation $\mathbf{A}\mathbf{v} = \lambda \mathbf{v}$ can be rewritten as $(\mathbf{A} - \lambda \mathbf{I})\mathbf{v} = \mathbf{0}$. For a non-zero solution to exist, the matrix $(\mathbf{A} - \lambda \mathbf{I})$ must be singular:
$$\det(\mathbf{A} - \lambda \mathbf{I}) = 0$$
This yields a polynomial in $\lambda$ of degree $n$.

### Step 2: Solve for Null Space
For each eigenvalue $\lambda_i$, find the corresponding eigenvectors by solving the linear system:
$$(\mathbf{A} - \lambda_i \mathbf{I})\mathbf{v} = \mathbf{0}$$

---

## 3. Matrix Diagonalization

If a matrix $\mathbf{A}$ has $n$ linearly independent eigenvectors, it can be decomposed as:
$$\mathbf{A} = \mathbf{V} \mathbf{\Lambda} \mathbf{V}^{-1}$$
Where:
- $\mathbf{V}$ is a matrix whose columns are the eigenvectors.
- $\mathbf{\Lambda}$ is a diagonal matrix of eigenvalues.

### Application: Computing Matrix Powers
Diagonalization allows for efficient calculation of $\mathbf{A}^k$:
$$\mathbf{A}^k = \mathbf{V} \mathbf{\Lambda}^k \mathbf{V}^{-1}$$
Since $\mathbf{\Lambda}^k$ simply involves raising the diagonal elements to the power of $k$.

---

## 4. Real-Life Application (Short Example)

**Google PageRank:** The PageRank algorithm treats the web as a giant graph and uses the principal eigenvector (the one with the largest eigenvalue) of a transition matrix to determine the importance (rank) of a webpage.

---

## 5. Mathematical Problem Solving

### Example 1: Finding Eigenvalues and Eigenvectors
Find the eigenvalues and eigenvectors of $\mathbf{A} = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$.

**Solution:**
1. Characteristic Equation: $\det \begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix} = (4-\lambda)(3-\lambda) - 2 = 0$.
2. $\lambda^2 - 7\lambda + 12 - 2 = \lambda^2 - 7\lambda + 10 = 0$.
3. $(\lambda - 5)(\lambda - 2) = 0 \implies \mathbf{\lambda_1 = 5, \lambda_2 = 2}$.

**For $\lambda_1 = 5$:**
$\begin{bmatrix} 4-5 & 1 \\ 2 & 3-5 \end{bmatrix} \mathbf{v} = \begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies -v_1 + v_2 = 0 \implies \mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.

**For $\lambda_2 = 2$:**
$\begin{bmatrix} 4-2 & 1 \\ 2 & 3-2 \end{bmatrix} \mathbf{v} = \begin{bmatrix} 2 & 1 \\ 2 & 1 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies 2v_1 + v_2 = 0 \implies \mathbf{v}_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$.

---

## 6. Advanced Question: Trace and Determinant

**Problem:** Prove that for any $n \times n$ matrix $\mathbf{A}$, the sum of the eigenvalues equals the trace, and the product of the eigenvalues equals the determinant.
$$\sum \lambda_i = \text{tr}(\mathbf{A}), \quad \prod \lambda_i = \det(\mathbf{A})$$

**Solution:**
Consider the characteristic polynomial $P(\lambda) = \det(\mathbf{A} - \lambda \mathbf{I})$.
By the Fundamental Theorem of Algebra, $P(\lambda) = (\lambda_1 - \lambda)(\lambda_2 - \lambda) \dots (\lambda_n - \lambda)$.
1. **Determinant:** Set $\lambda = 0$. Then $P(0) = \det(\mathbf{A}) = \lambda_1 \lambda_2 \dots \lambda_n$.
2. **Trace:** Expand both forms of $P(\lambda)$. The coefficient of $(-\lambda)^{n-1}$ in the determinant expansion is the sum of diagonal elements (Trace). In the factored form, it is the sum of the roots $\lambda_i$.
3. Thus, the identity holds. (Q.E.D.)
