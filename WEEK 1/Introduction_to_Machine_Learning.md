# WEEK 1: Foundations of Machine Learning

Machine Learning (ML) is the systematic study of algorithms and statistical models that computer systems use to perform a specific task without using explicit instructions, relying instead on patterns and inference. Mathematically, it involves the approximation of a target function $f$ that maps inputs to outputs.

---

## 1. Formal Definition and Framework

At its core, Machine Learning is about finding a function $h$ (the hypothesis) from a hypothesis space $\mathcal{H}$ that minimizes a predefined objective.

### The Mathematical Components
- **Feature Space ($\mathcal{X}$):** A $d$-dimensional space where each instance is represented as a vector $\mathbf{x} \in \mathbb{R}^d$.
- **Label Space ($\mathcal{Y}$):** The set of all possible outputs. For regression, $\mathcal{Y} = \mathbb{R}$. For binary classification, $\mathcal{Y} = \{0, 1\}$.
- **Dataset ($\mathcal{D}$):** A collection of $n$ samples drawn from an unknown distribution $P(\mathbf{x}, y)$:
  $$\mathcal{D} = \{(\mathbf{x}^{(i)}, y^{(i)})\}_{i=1}^n$$

### Real-Life Application (Short Example)
**Credit Scoring:** A bank uses a feature vector $\mathbf{x}$ (containing income, age, and debt) to predict the probability $y$ of a loan default. The goal is to learn the relationship between financial history and repayment reliability.

---

## 2. The Three Pillars of Machine Learning

Every ML algorithm consists of three fundamental components: **Data**, **Model**, and **Loss Function**.

### A. The Model (Hypothesis)
The model $h(\mathbf{x}; \theta)$ is a mathematical function parameterized by $\theta$. A common example is the **Linear Model**:
$$h(\mathbf{x}; \mathbf{w}, b) = \mathbf{w}^T \mathbf{x} + b$$
Where:
- $\mathbf{w} \in \mathbb{R}^d$ is the **Weight Vector** (representing feature importance).
- $b \in \mathbb{R}$ is the **Bias** (intercept).

### B. The Loss Function ($L$)
The loss function measures the discrepancy between the true label $y$ and the prediction $\hat{y} = h(\mathbf{x})$.

| Task | Loss Function Name | Mathematical Form |
| :--- | :--- | :--- |
| **Regression** | Squared Error | $L(y, \hat{y}) = (y - \hat{y})^2$ |
| **Classification** | 0/1 Loss | $L(y, \hat{y}) = \mathbb{1}[y \neq \hat{y}]$ |
| **Classification** | Cross-Entropy | $L(y, \hat{y}) = -(y \log(\hat{y}) + (1-y) \log(1-\hat{y}))$ |

### C. Optimization (Empirical Risk Minimization)
The goal is to find parameters $\theta^*$ that minimize the **Empirical Risk** (average loss over the training set):
$$\theta^* = \arg\min_{\theta} \frac{1}{n} \sum_{i=1}^n L(y^{(i)}, h(\mathbf{x}^{(i)}; \theta))$$

---

## 3. Paradigms of Learning

### Supervised Learning
The algorithm learns from a labeled dataset $\mathcal{D}$. The goal is to generalize to unseen data.
- **Goal:** Minimize $\mathbb{E}_{(\mathbf{x}, y) \sim P} [L(y, h(\mathbf{x}))]$.

### Unsupervised Learning
The algorithm finds hidden structures in unlabeled data $\mathcal{D} = \{\mathbf{x}^{(i)}\}_{i=1}^n$.
- **Example (Autoencoders):** Learning an identity mapping through a bottleneck.
  $$z = f_{enc}(\mathbf{x}), \quad \hat{\mathbf{x}} = g_{dec}(z)$$
  Minimize $\| \mathbf{x} - \hat{\mathbf{x}} \|^2$.

### Reinforcement Learning
Learning through interaction with an environment to maximize cumulative rewards.

---

## 4. Mathematical Problem Solving

### Example 1: Calculating Mean Squared Error (MSE)
Given a dataset with 3 samples:
1. $(x_1, y_1) = (2, 5)$
2. $(x_2, y_2) = (4, 9)$
3. $(x_3, y_3) = (5, 12)$

And a linear model $h(x) = 2x + 1.5$. Calculate the MSE.

**Solution:**
1. $\hat{y}_1 = 2(2) + 1.5 = 5.5 \implies L_1 = (5 - 5.5)^2 = 0.25$
2. $\hat{y}_2 = 2(4) + 1.5 = 9.5 \implies L_2 = (9 - 9.5)^2 = 0.25$
3. $\hat{y}_3 = 2(5) + 1.5 = 11.5 \implies L_3 = (12 - 11.5)^2 = 0.25$
4. $MSE = \frac{0.25 + 0.25 + 0.25}{3} = \mathbf{0.25}$

### Example 2: Vectorized Loss Calculation
Let $\mathbf{X} \in \mathbb{R}^{n \times d}$ be the feature matrix, $\mathbf{y} \in \mathbb{R}^n$ the label vector, and $\mathbf{w} \in \mathbb{R}^d$ the weight vector. Express MSE in matrix form.

**Solution:**
The prediction vector is $\hat{\mathbf{y}} = \mathbf{X}\mathbf{w}$.
The error vector is $\mathbf{e} = \mathbf{y} - \mathbf{X}\mathbf{w}$.
The MSE is:
$$J(\mathbf{w}) = \frac{1}{n} \|\mathbf{y} - \mathbf{X}\mathbf{w}\|_2^2 = \frac{1}{n} (\mathbf{y} - \mathbf{X}\mathbf{w})^T (\mathbf{y} - \mathbf{X}\mathbf{w})$$

---

## 5. Advanced Concepts: Generalization and Overfitting

### The Bias-Variance Tradeoff
Total Error can be decomposed into:
$$\text{Total Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}$$

- **High Bias (Underfitting):** Model is too simple to capture the underlying trend.
- **High Variance (Overfitting):** Model captures noise in the training data, failing to generalize to the test set.

### Structural Risk Minimization (Regularization)
To prevent overfitting, we add a penalty term $R(\theta)$ to the loss function:
$$J(\theta) = \frac{1}{n} \sum L(y, h(\mathbf{x})) + \lambda R(\theta)$$
- **$L_2$ Regularization (Ridge):** $R(\mathbf{w}) = \|\mathbf{w}\|_2^2$
- **$L_1$ Regularization (Lasso):** $R(\mathbf{w}) = \|\mathbf{w}\|_1$

---

## 6. Vector Algebra Question

**Problem:** Prove that the gradient of the squared loss $J(\mathbf{w}) = \frac{1}{2} \|\mathbf{y} - \mathbf{X}\mathbf{w}\|_2^2$ with respect to $\mathbf{w}$ is $-\mathbf{X}^T(\mathbf{y} - \mathbf{X}\mathbf{w})$.

**Step-by-Step Proof:**
1. Expand the loss: $J(\mathbf{w}) = \frac{1}{2} (\mathbf{y}^T\mathbf{y} - 2\mathbf{w}^T\mathbf{X}^T\mathbf{y} + \mathbf{w}^T\mathbf{X}^T\mathbf{X}\mathbf{w})$.
2. Differentiate with respect to $\mathbf{w}$:
   - $\nabla_{\mathbf{w}} (\mathbf{y}^T\mathbf{y}) = 0$
   - $\nabla_{\mathbf{w}} (-2\mathbf{w}^T\mathbf{X}^T\mathbf{y}) = -2\mathbf{X}^T\mathbf{y}$
   - $\nabla_{\mathbf{w}} (\mathbf{w}^T\mathbf{X}^T\mathbf{X}\mathbf{w}) = 2\mathbf{X}^T\mathbf{X}\mathbf{w}$
3. Combine: $\nabla_{\mathbf{w}} J(\mathbf{w}) = \frac{1}{2} (-2\mathbf{X}^T\mathbf{y} + 2\mathbf{X}^T\mathbf{X}\mathbf{w}) = -\mathbf{X}^T\mathbf{y} + \mathbf{X}^T\mathbf{X}\mathbf{w}$.
4. Factorize: $\nabla_{\mathbf{w}} J(\mathbf{w}) = -\mathbf{X}^T(\mathbf{y} - \mathbf{X}\mathbf{w})$. (Q.E.D.)
