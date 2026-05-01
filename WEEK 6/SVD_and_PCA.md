# WEEK 6: Singular Value Decomposition and PCA

While diagonalization is limited to square matrices, Singular Value Decomposition (SVD) provides a universal factorization for any matrix. This makes it a fundamental tool for dimensionality reduction, noise filtering, and data compression.

---

## 1. Singular Value Decomposition (SVD)

Any matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ can be factored as:
$$\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$$
Where:
- $\mathbf{U} \in \mathbb{R}^{m \times m}$ is an orthogonal matrix whose columns are the **Left Singular Vectors** (eigenvectors of $\mathbf{A}\mathbf{A}^T$).
- $\mathbf{\Sigma} \in \mathbb{R}^{m \times n}$ is a rectangular diagonal matrix containing the **Singular Values** $\sigma_1 \geq \sigma_2 \geq \dots \geq \sigma_r > 0$.
- $\mathbf{V} \in \mathbb{R}^{n \times n}$ is an orthogonal matrix whose columns are the **Right Singular Vectors** (eigenvectors of $\mathbf{A}^T\mathbf{A}$).

### Relationship with Eigenvalues
The singular values $\sigma_i$ are the square roots of the non-zero eigenvalues of $\mathbf{A}^T\mathbf{A}$:
$$\sigma_i = \sqrt{\lambda_i(\mathbf{A}^T\mathbf{A})}$$

---

## 2. Low-Rank Approximation

One of the most powerful applications of SVD is approximating a high-dimensional matrix with a simpler, lower-rank one.

### Eckart-Young-Mirsky Theorem
The best rank-$k$ approximation of $\mathbf{A}$ (in terms of Frobenius or spectral norm) is obtained by keeping only the first $k$ singular values:
$$\mathbf{A}_k = \sum_{i=1}^k \sigma_i \mathbf{u}_i \mathbf{v}_i^T$$
This allows us to compress data while retaining the most significant features (variance).

---

## 3. Principal Component Analysis (PCA)

PCA is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components.

### The PCA Algorithm
1.  **Center the Data:** Subtract the mean of each feature: $\tilde{\mathbf{X}} = \mathbf{X} - \bar{\mathbf{x}}$.
2.  **Compute Covariance Matrix:** $\mathbf{S} = \frac{1}{n-1} \tilde{\mathbf{X}}^T \tilde{\mathbf{X}}$.
3.  **Compute Eigen-Decomposition:** Find eigenvectors $\mathbf{w}_i$ and eigenvalues $\lambda_i$ of $\mathbf{S}$.
4.  **Project Data:** Transform original points into the new subspace: $\mathbf{Z} = \tilde{\mathbf{X}} \mathbf{W}_k$.

### PCA via SVD
If we center the data $\tilde{\mathbf{X}}$ and compute its SVD $\tilde{\mathbf{X}} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$, the columns of $\mathbf{V}$ are exactly the Principal Components, and the singular values $\sigma_i^2 / (n-1)$ correspond to the eigenvalues of the covariance matrix.

---

## 4. Real-Life Application (Short Example)

**Image Compression:** A digital image can be represented as a matrix of pixel values. By performing SVD and keeping only the top $k$ singular values, we can reconstruct a recognizable version of the image using significantly less storage space, filtering out high-frequency noise in the process.

---

## 5. Mathematical Problem Solving

### Example 1: Computing SVD for a $2 \times 2$ Matrix
Find the SVD of $\mathbf{A} = \begin{bmatrix} 3 & 2 \\ 2 & 3 \end{bmatrix}$.

**Solution:**
1. Compute $\mathbf{A}^T\mathbf{A} = \begin{bmatrix} 3 & 2 \\ 2 & 3 \end{bmatrix} \begin{bmatrix} 3 & 2 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 13 & 12 \\ 12 & 13 \end{bmatrix}$.
2. Eigenvalues of $\mathbf{A}^T\mathbf{A}$: $\det \begin{bmatrix} 13-\lambda & 12 \\ 12 & 13-\lambda \end{bmatrix} = (13-\lambda)^2 - 144 = 0$.
   $(13-\lambda) = \pm 12 \implies \lambda_1 = 25, \lambda_2 = 1$.
3. Singular values: $\sigma_1 = \sqrt{25} = 5, \sigma_2 = \sqrt{1} = 1$. $\mathbf{\Sigma} = \begin{bmatrix} 5 & 0 \\ 0 & 1 \end{bmatrix}$.
4. Eigenvectors of $\mathbf{A}^T\mathbf{A}$: $\mathbf{v}_1 = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \mathbf{v}_2 = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.
5. Calculate $\mathbf{u}_i = \frac{1}{\sigma_i} \mathbf{A}\mathbf{v}_i$:
   $\mathbf{u}_1 = \frac{1}{5} \begin{bmatrix} 3 & 2 \\ 2 & 3 \end{bmatrix} \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \frac{1}{5\sqrt{2}} \begin{bmatrix} 5 \\ 5 \end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
   $\mathbf{u}_2 = \frac{1}{1} \begin{bmatrix} 3 & 2 \\ 2 & 3 \end{bmatrix} \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.
6. Result: $\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T$ (where $\mathbf{U} = \mathbf{V}$ in this symmetric case).

---

## 6. Advanced Question: Total Variance Explained

**Problem:** If you have a dataset in $\mathbb{R}^{10}$ and the singular values of the centered data matrix are $\sigma = [10, 8, 5, 2, 1, 0.5, \dots]$, what is the minimum number of components $k$ required to retain 90% of the variance?

**Solution:**
Variance is proportional to $\sigma_i^2$.
1. Total Variance $V_{total} = \sum \sigma_i^2 = 10^2 + 8^2 + 5^2 + 2^2 + 1^2 + 0.5^2 = 100 + 64 + 25 + 4 + 1 + 0.25 = 194.25$.
2. Target: $0.90 \times 194.25 = 174.825$.
3. Check cumulative sums:
   - $k=1: 100$ (No)
   - $k=2: 100 + 64 = 164$ (No)
   - $k=3: 164 + 25 = 189$ (**Yes!**)
4. Minimum components required: **3**.
