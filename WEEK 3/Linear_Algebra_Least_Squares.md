# WEEK 3: Linear Systems and Least Squares Regression

Linear Algebra is the language of Machine Learning. Most ML models represent data as matrices and operations as linear transformations. This week focuses on solving linear systems and handling inconsistent data through least squares.

---

## 1. Linear Systems ($\mathbf{A}\mathbf{x} = \mathbf{b}$)

A system of linear equations can be represented compactly as a matrix multiplication.

### Perspectives on $\mathbf{A}\mathbf{x} = \mathbf{b}$
1.  **Row Picture:** Each equation represents a hyperplane. The solution $\mathbf{x}$ is the intersection of all hyperplanes.
2.  **Column Picture:** $\mathbf{b}$ is a linear combination of the columns of $\mathbf{A}$.
    $$\mathbf{b} = x_1 \mathbf{a}_1 + x_2 \mathbf{a}_2 + \dots + x_n \mathbf{a}_n$$

### Solving via Gaussian Elimination
Gaussian elimination transforms $\mathbf{A}$ into an Upper Triangular matrix (U) or Reduced Row Echelon Form (RREF).
- **Consistent System:** Has at least one solution (independent or dependent).
- **Inconsistent System:** Has no solution (e.g., $0 = 1$ in RREF).

---

## 2. Fundamental Subspaces

For any matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$:

- **Column Space $C(\mathbf{A})$:** The set of all linear combinations of the columns. $\dim(C(\mathbf{A})) = \text{rank}(\mathbf{A})$.
- **Null Space $N(\mathbf{A})$:** The set of all vectors $\mathbf{x}$ such that $\mathbf{A}\mathbf{x} = \mathbf{0}$.
- **Row Space $C(\mathbf{A}^T)$:** The set of all linear combinations of the rows.
- **Left Null Space $N(\mathbf{A}^T)$:** The set of all vectors $\mathbf{y}$ such that $\mathbf{A}^T \mathbf{y} = \mathbf{0}$.

**Rank-Nullity Theorem:**
$$\text{rank}(\mathbf{A}) + \text{nullity}(\mathbf{A}) = n$$

---

## 3. Orthogonality and Projections

### Orthogonality
Two vectors $\mathbf{u}$ and $\mathbf{v}$ are orthogonal if their dot product is zero: $\mathbf{u}^T \mathbf{v} = 0$.

### Projection onto a Subspace
When a system $\mathbf{A}\mathbf{x} = \mathbf{b}$ has no solution (i.e., $\mathbf{b} \notin C(\mathbf{A})$), we find the "closest" possible solution by projecting $\mathbf{b}$ onto $C(\mathbf{A})$.

**The Projection Matrix ($\mathbf{P}$):**
If the columns of $\mathbf{A}$ are linearly independent, the projection of $\mathbf{b}$ onto $C(\mathbf{A})$ is:
$$\mathbf{p} = \mathbf{A}(\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T\mathbf{b}$$
Where $\mathbf{P} = \mathbf{A}(\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T$ is the projection matrix.

---

## 4. Least Squares Regression

In Machine Learning, we often have more data points than parameters ($m > n$), making the system overdetermined and usually inconsistent.

### Least Squares Visualization
The goal of least squares is to find the line that minimizes the vertical distance (residuals) between the data points and the line.

<div class="theory-box graph-container">
<svg viewBox="0 0 500 300" class="technical-graph">
<!-- Axes -->
<line x1="60" y1="240" x2="460" y2="240" stroke="currentColor" stroke-width="2" />
<line x1="60" y1="40" x2="60" y2="240" stroke="currentColor" stroke-width="2" />
<!-- Regression Line -->
<line x1="60" y1="220" x2="440" y2="60" stroke="var(--graph-accent)" stroke-width="3" stroke-linecap="round" />
<!-- Data Points (Noisy) -->
<circle cx="100" cy="180" r="4" fill="var(--graph-curve)" opacity="0.6" />
<circle cx="150" cy="210" r="4" fill="var(--graph-curve)" opacity="0.6" />
<circle cx="200" cy="140" r="4" fill="var(--graph-curve)" opacity="0.6" />
<circle cx="250" cy="160" r="4" fill="var(--graph-curve)" opacity="0.6" />
<circle cx="300" cy="100" r="4" fill="var(--graph-curve)" opacity="0.6" />
<circle cx="350" cy="130" r="4" fill="var(--graph-curve)" opacity="0.6" />
<circle cx="400" cy="70" r="4" fill="var(--graph-curve)" opacity="0.6" />
<!-- Residual Lines -->
<line x1="200" y1="140" x2="200" y2="162" stroke="var(--graph-error)" stroke-width="1.5" stroke-dasharray="2" />
<line x1="300" y1="100" x2="300" y2="118" stroke="var(--graph-error)" stroke-width="1.5" stroke-dasharray="2" />
<!-- Labels -->
<text x="260" y="280" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600">Input (x)</text>
<text x="20" y="140" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600" transform="rotate(-90 20 140)">Output (y)</text>
<text x="350" y="55" font-family="var(--font-ui)" font-size="10" font-weight="700">Best Fit Line</text>
<text x="210" y="155" font-family="var(--font-ui)" font-size="9" fill="var(--graph-error)">Residual (Error)</text>
</svg>
</div>

**Step-by-Step Explanation of the Graph:**
1.  **Data Points (Scatter):** The points $(1, 2), (2, 3), (3, 5)$ represent noisy real-world data. They do not lie on a perfectly straight line passing through the origin.
2.  **The Best-Fit Line:** The solid line $y = 1.64x$ is the result of the Least Squares optimization. It represents the "consensus" of the data.
3.  **Residuals (The Error):** For each point, the distance between the actual y-value and the line's y-value is the **residual** $\epsilon_i = y_i - \hat{y}_i$.
4.  **Minimization:** Least squares works by minimizing the sum of the *squares* of these residuals ($\sum \epsilon_i^2$). Geometrically, this means we are finding a line in the column space $C(\mathbf{A})$ that is closest to the vector $\mathbf{b}$ in higher-dimensional space.

### Real-Life Application (Short Example)
**Predictive Analytics:** Predicting sales based on advertising spend across different channels. Since real-world data contains noise, the points won't perfectly fit a line; least squares finds the "best-fit" line that minimizes the overall prediction error.

---

## 5. Mathematical Problem Solving

### Example 1: Solving a $2 \times 2$ System
Solve:
$2x + y = 5$
$4x - y = 1$

**Solution:**
1. Matrix form: $\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 4 & -1 \end{bmatrix}, \mathbf{b} = \begin{bmatrix} 5 \\ 1 \end{bmatrix}$.
2. Augmented matrix: $\begin{bmatrix} 2 & 1 & | & 5 \\ 4 & -1 & | & 1 \end{bmatrix}$.
3. $R_2 \to R_2 - 2R_1$: $\begin{bmatrix} 2 & 1 & | & 5 \\ 0 & -3 & | & -9 \end{bmatrix}$.
4. $-3y = -9 \implies \mathbf{y=3}$.
5. $2x + 3 = 5 \implies 2x = 2 \implies \mathbf{x=1}$.

### Example 2: Least Squares Fit
Find the best-fit line $y = mx$ for points $(1, 2), (2, 3), (3, 5)$.

**Solution:**
1. Model: $x_i \cdot m = y_i$.
2. $\mathbf{A} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}, \mathbf{b} = \begin{bmatrix} 2 \\ 3 \\ 5 \end{bmatrix}$.
3. $\mathbf{A}^T\mathbf{A} = \begin{bmatrix} 1 & 2 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} = 1+4+9 = 14$.
4. $\mathbf{A}^T\mathbf{b} = \begin{bmatrix} 1 & 2 & 3 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \\ 5 \end{bmatrix} = 2+6+15 = 23$.
5. Normal Equation: $14m = 23 \implies m = \mathbf{23/14} \approx 1.64$.

---

## 6. Advanced Vector Question: Orthogonal Complement

**Problem:** Prove that $N(\mathbf{A})$ is the orthogonal complement of $C(\mathbf{A}^T)$.

**Solution:**
1. Let $\mathbf{x} \in N(\mathbf{A})$. By definition, $\mathbf{A}\mathbf{x} = \mathbf{0}$.
2. This means $\mathbf{r}_i^T \mathbf{x} = 0$ for every row $\mathbf{r}_i$ of $\mathbf{A}$.
3. Since every vector in the row space $C(\mathbf{A}^T)$ is a linear combination of the rows:
   $\mathbf{v} = \sum c_i \mathbf{r}_i \implies \mathbf{v}^T \mathbf{x} = (\sum c_i \mathbf{r}_i)^T \mathbf{x} = \sum c_i (\mathbf{r}_i^T \mathbf{x}) = \sum c_i (0) = 0$.
4. Thus, $\mathbf{x}$ is orthogonal to every vector in the row space.
5. This implies $N(\mathbf{A}) \perp C(\mathbf{A}^T)$. (Q.E.D.)
