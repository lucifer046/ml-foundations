# The PCA Algorithm: Step-by-Step

Here is exactly how a computer performs PCA.

---

## Step 1: Zero-Centering (The Shift)

Before we do anything, we must make sure our data is centered.
- We calculate the **Average** (Mean) of each feature.
- We subtract that average from every data point.

**Analogy:** If you are taking a photo of a group of people, you first ask everyone to move to the center of the frame.

---

## Step 2: Covariance Matrix

We build a matrix that shows how every feature relates to every other feature.
$S = \frac{1}{n} \tilde{X}^T \tilde{X}$

---

## Step 3: Eigen-Decomposition

We find the **Eigenvalues** and **Eigenvectors** of that covariance matrix.
- The **Eigenvectors** are the new axes (our "best angles").
- The **Eigenvalues** tell us the "Information Score" for each axis.

---

## Step 4: Projection (The Squash)

We pick the top $k$ eigenvectors (the ones with the biggest scores) and multiply our data by them.
$Z = X V_k$

**Result:** Your data has been transformed from its original messy features into a few "Super Features" (Principal Components).

---

## Example: The "Total Variance"

**Question:** If the eigenvalues of your data are $[10, 5, 3, 2]$, how many components should you keep to have at least 75% of the information?

**Solution:**
1.  Total Variance = $10 + 5 + 3 + 2 = 20$.
2.  Goal = $75\% \text{ of } 20 = 15$.
3.  If we keep 1 component: Score = 10. (Not enough).
4.  If we keep 2 components: Score = $10 + 5 = \mathbf{15}$. (Perfect!).

**Result:** You should keep the **Top 2** components.
