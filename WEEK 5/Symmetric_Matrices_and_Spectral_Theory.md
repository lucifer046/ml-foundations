# WEEK 5: Symmetric Matrices and Spectral Theory

Symmetric matrices play a central role in machine learning, particularly in optimization and multivariate statistics (e.g., Covariance matrices). Their unique properties allow for simplified decompositions and stable computations.

---

## 1. Properties of Symmetric Matrices

A matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ is **Symmetric** if $\mathbf{A} = \mathbf{A}^T$.

### Fundamental Properties
1.  **Real Eigenvalues:** All eigenvalues of a real symmetric matrix are real ($\lambda_i \in \mathbb{R}$).
2.  **Orthogonal Eigenvectors:** Eigenvectors corresponding to distinct eigenvalues are orthogonal.
3.  **Orthogonal Diagonalization:** There exists an orthogonal matrix $\mathbf{Q}$ ($\mathbf{Q}^T\mathbf{Q} = \mathbf{I}$) such that $\mathbf{A} = \mathbf{Q} \mathbf{\Lambda} \mathbf{Q}^T$.

---

## 2. Spectral Decomposition

The **Spectral Theorem** states that any symmetric matrix can be written as a weighted sum of outer products of its eigenvectors:
$$\mathbf{A} = \sum_{i=1}^n \lambda_i \mathbf{q}_i \mathbf{q}_i^T$$
Where $\mathbf{q}_i$ are the orthonormal eigenvectors.

### Interpretation
The matrix $\mathbf{A}$ acts by scaling space along the orthogonal directions defined by its eigenvectors $\mathbf{q}_i$.

---

## 3. Quadratic Forms and Definiteness

A quadratic form is a scalar-valued function:
$$f(\mathbf{x}) = \mathbf{x}^T \mathbf{A} \mathbf{x} = \sum_{i,j} A_{ij} x_i x_j$$

### Classification of Symmetric Matrices
| Term | Condition for all $\mathbf{x} \neq \mathbf{0}$ | Eigenvalue Requirement |
| :--- | :--- | :--- |
| **Positive Definite (PD)** | $\mathbf{x}^T \mathbf{A} \mathbf{x} > 0$ | All $\lambda_i > 0$ |
| **Positive Semi-Definite (PSD)** | $\mathbf{x}^T \mathbf{A} \mathbf{x} \geq 0$ | All $\lambda_i \geq 0$ |
| **Negative Definite** | $\mathbf{x}^T \mathbf{A} \mathbf{x} < 0$ | All $\lambda_i < 0$ |
| **Indefinite** | Signs of $\mathbf{x}^T \mathbf{A} \mathbf{x}$ vary | Both positive and negative $\lambda_i$ |

---

## 4. Real-Life Application (Short Example)

**Covariance Matrices:** In statistics, the relationship between different features is captured by a symmetric covariance matrix $\mathbf{\Sigma}$. Because $\mathbf{\Sigma}$ is always positive semi-definite, we can use its spectral decomposition to find the principal directions of data variation.

---

## 5. Mathematical Problem Solving

### Example 1: Orthogonal Diagonalization
Diagonalize the symmetric matrix $\mathbf{A} = \begin{bmatrix} 3 & 1 \\ 1 & 3 \end{bmatrix}$.

**Solution:**
1. $\det(\mathbf{A} - \lambda \mathbf{I}) = (3-\lambda)^2 - 1 = 0 \implies (3-\lambda) = \pm 1$.
2. $\lambda_1 = 4, \lambda_2 = 2$.
3. **For $\lambda_1=4$:** $\begin{bmatrix} -1 & 1 \\ 1 & -1 \end{bmatrix} \mathbf{v}_1 = \mathbf{0} \implies \mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix} \to \text{Normalize: } \mathbf{q}_1 = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
4. **For $\lambda_2=2$:** $\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \mathbf{v}_2 = \mathbf{0} \implies \mathbf{v}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix} \to \text{Normalize: } \mathbf{q}_2 = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ -1 \end{bmatrix}$.
5. $\mathbf{Q} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}, \quad \mathbf{\Lambda} = \begin{bmatrix} 4 & 0 \\ 0 & 2 \end{bmatrix}$.
6. Result: $\mathbf{A} = \mathbf{Q} \mathbf{\Lambda} \mathbf{Q}^T$.

### Example 2: Checking Definiteness
Is the matrix $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 2 & 5 \end{bmatrix}$ positive definite?

**Solution:**
Using the **Leading Principal Minors** test:
1. $M_1 = |1| = 1 > 0$.
2. $M_2 = \det(\mathbf{A}) = (1)(5) - (2)(2) = 1 > 0$.
Since all leading principal minors are positive, the matrix is **Positive Definite**.

---

## 6. Advanced Question: Rayliegh Quotient

**Problem:** For a symmetric matrix $\mathbf{A}$, prove that the maximum value of the ratio $R(\mathbf{x}) = \frac{\mathbf{x}^T \mathbf{A} \mathbf{x}}{\mathbf{x}^T \mathbf{x}}$ is the largest eigenvalue $\lambda_{\max}$.

**Solution:**
1. Let $\mathbf{x} = \mathbf{Q}\mathbf{y}$, where $\mathbf{Q}$ is the matrix of eigenvectors.
2. Then $\mathbf{x}^T \mathbf{A} \mathbf{x} = (\mathbf{Q}\mathbf{y})^T \mathbf{A} (\mathbf{Q}\mathbf{y}) = \mathbf{y}^T (\mathbf{Q}^T \mathbf{A} \mathbf{Q}) \mathbf{y} = \mathbf{y}^T \mathbf{\Lambda} \mathbf{y} = \sum \lambda_i y_i^2$.
3. Also $\mathbf{x}^T \mathbf{x} = \mathbf{y}^T \mathbf{Q}^T \mathbf{Q} \mathbf{y} = \mathbf{y}^T \mathbf{y} = \sum y_i^2$.
4. $R(\mathbf{x}) = \frac{\sum \lambda_i y_i^2}{\sum y_i^2} \leq \frac{\lambda_{\max} \sum y_i^2}{\sum y_i^2} = \lambda_{\max}$.
5. Equality is achieved when $\mathbf{y}$ is a unit vector with 1 at the position of $\lambda_{\max}$ and 0 elsewhere (meaning $\mathbf{x}$ is the corresponding eigenvector). (Q.E.D.)
