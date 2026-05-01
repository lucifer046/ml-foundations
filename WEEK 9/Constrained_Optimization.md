# WEEK 9: Constrained Optimization and Logistic Regression

Many machine learning problems involve minimizing an objective function subject to physical, logical, or mathematical constraints. Lagrange multipliers provide a powerful framework for solving such equality-constrained problems.

---

## 1. Lagrange Multipliers

The method of Lagrange multipliers allows us to find the local maxima and minima of a function $f(\mathbf{x})$ subject to equality constraints $g(\mathbf{x}) = 0$.

### The Lagrangian Function
$$\mathcal{L}(\mathbf{x}, \lambda) = f(\mathbf{x}) - \lambda g(\mathbf{x})$$
Where $\lambda$ is the **Lagrange Multiplier**.

### Optimality Condition
The necessary condition for a constrained minimum is that the gradient of the Lagrangian with respect to both $\mathbf{x}$ and $\lambda$ must be zero:
1. $\nabla_{\mathbf{x}} \mathcal{L} = \nabla f(\mathbf{x}) - \lambda \nabla g(\mathbf{x}) = \mathbf{0} \implies \nabla f(\mathbf{x}) = \lambda \nabla g(\mathbf{x})$
2. $\frac{\partial \mathcal{L}}{\partial \lambda} = -g(\mathbf{x}) = 0 \implies g(\mathbf{x}) = 0$

**Intuition:** At the optimal point, the gradient of the objective function points in the same direction as the gradient of the constraint.

---

## 2. KKT Conditions (Inequality Constraints)

When constraints are inequalities ($h(\mathbf{x}) \leq 0$), we use the **Karush-Kuhn-Tucker (KKT)** conditions:
1. **Stationarity:** $\nabla f(\mathbf{x}) + \sum \lambda_i \nabla g_i(\mathbf{x}) + \sum \mu_j \nabla h_j(\mathbf{x}) = \mathbf{0}$
2. **Primal Feasibility:** $g_i(\mathbf{x}) = 0$ and $h_j(\mathbf{x}) \leq 0$
3. **Dual Feasibility:** $\mu_j \geq 0$
4. **Complementary Slackness:** $\mu_j h_j(\mathbf{x}) = 0$

---

## 3. Logistic Regression as Optimization

Logistic regression is a binary classification model where the objective is to maximize the likelihood of the labels given the features.

### The Sigmoid Visualization
The sigmoid function $\sigma(z)$ maps any real-valued number into the range $(0, 1)$, making it ideal for modeling probabilities.

<div class="theory-box graph-container">
<svg viewBox="0 0 500 300" class="technical-graph">
<!-- Axes -->
<line x1="60" y1="240" x2="460" y2="240" stroke="currentColor" stroke-width="2" />
<line x1="260" y1="40" x2="260" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.3" />
<line x1="60" y1="40" x2="60" y2="240" stroke="currentColor" stroke-width="2" />
<!-- Y-axis Guidelines (0.5 and 1.0) -->
<line x1="60" y1="140" x2="460" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.2" />
<line x1="60" y1="40" x2="460" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.2" />
<!-- Sigmoid Curve -->
<path d="M 60 230 C 160 230 160 40 460 40" fill="none" stroke="var(--graph-accent)" stroke-width="3" stroke-linecap="round" />
<!-- Labels -->
<text x="260" y="280" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600">Input (z)</text>
<text x="20" y="140" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600" transform="rotate(-90 20 140)">Probability σ(z)</text>
<!-- Tick Labels -->
<text x="50" y="145" font-family="var(--font-ui)" font-size="10" text-anchor="end">0.5</text>
<text x="50" y="45" font-family="var(--font-ui)" font-size="10" text-anchor="end">1.0</text>
<text x="260" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">0</text>
</svg>
</div>

**Step-by-Step Explanation of the Graph:**
1.  **Asymptotes (z → ±∞):** As $z$ becomes very large ($z > 4$), $\sigma(z)$ approaches $1$. As $z$ becomes very small ($z < -4$), $\sigma(z)$ approaches $0$. The output never exactly reaches $0$ or $1$.
2.  **The Midpoint (z = 0):** At exactly $z=0$, $\sigma(0) = 0.5$. In classification, this is typically the **decision boundary**.
3.  **The "S-Curve" Region:** Between $z=-2$ and $z=2$, the function is most sensitive to changes in input. This is where the model transition between classes happens.
4.  **Gradient Saturation:** Note how the curve flattens at the ends. This means that for very large or very small inputs, the derivative $\sigma'(z)$ is nearly zero, which can lead to vanishing gradients in deep learning.

### Binary Cross-Entropy (BCE) Loss
We find the optimal weights $\mathbf{w}$ by minimizing the negative log-likelihood:
$$J(\mathbf{w}) = -\frac{1}{n} \sum_{i=1}^n \left[ y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i) \right]$$
Where $\hat{y}_i = \sigma(\mathbf{w}^T \mathbf{x}_i)$. This function is **Convex**, allowing for global optimization via gradient descent.

---

## 4. Real-Life Application (Short Example)

**Support Vector Machines (SVM):** SVMs maximize the "margin" (distance) between two classes of data. This is formulated as minimizing the norm of the weights $\|\mathbf{w}\|^2$ subject to the constraint that every data point is correctly classified outside the margin. This quadratic programming problem is solved using Lagrange duality.

---

## 5. Mathematical Problem Solving

### Example 1: Lagrange Multipliers Problem
Minimize $f(x, y) = x^2 + y^2$ subject to $x + y = 2$.

**Solution:**
1. Lagrangian: $\mathcal{L}(x, y, \lambda) = x^2 + y^2 - \lambda(x + y - 2)$.
2. $\frac{\partial \mathcal{L}}{\partial x} = 2x - \lambda = 0 \implies x = \lambda/2$.
3. $\frac{\partial \mathcal{L}}{\partial y} = 2y - \lambda = 0 \implies y = \lambda/2$.
4. $\frac{\partial \mathcal{L}}{\partial \lambda} = -(x + y - 2) = 0 \implies x + y = 2$.
5. Substituting (2) and (3) into (4): $\lambda/2 + \lambda/2 = 2 \implies \lambda = 2$.
6. Result: $x=1, y=1$. Minimum value: $1^2 + 1^2 = \mathbf{2}$.

### Example 2: Derivative of the Sigmoid Function
Prove that $\frac{d}{dz} \sigma(z) = \sigma(z)(1 - \sigma(z))$.

**Solution:**
1. $\sigma(z) = (1 + e^{-z})^{-1}$.
2. $\sigma'(z) = -1(1 + e^{-z})^{-2} \cdot (-e^{-z}) = \frac{e^{-z}}{(1 + e^{-z})^2}$.
3. $\sigma'(z) = \frac{1}{1 + e^{-z}} \cdot \frac{e^{-z}}{1 + e^{-z}}$.
4. Note that $\frac{e^{-z}}{1 + e^{-z}} = \frac{1 + e^{-z} - 1}{1 + e^{-z}} = 1 - \frac{1}{1 + e^{-z}} = 1 - \sigma(z)$.
5. Substitute: $\sigma'(z) = \sigma(z)(1 - \sigma(z))$. (Q.E.D.)

---

## 6. Advanced Question: Gradient of BCE Loss

**Problem:** Show that the gradient of the binary cross-entropy loss $J(\mathbf{w})$ for a single sample $(\mathbf{x}, y)$ with respect to $\mathbf{w}$ is $(\sigma(\mathbf{w}^T\mathbf{x}) - y)\mathbf{x}$.

**Solution:**
1. Let $z = \mathbf{w}^T\mathbf{x}$ and $\hat{y} = \sigma(z)$.
2. Loss: $L = -[y \log(\hat{y}) + (1-y) \log(1-\hat{y})]$.
3. Using the chain rule: $\frac{\partial L}{\partial \mathbf{w}} = \frac{\partial L}{\partial \hat{y}} \frac{\partial \hat{y}}{\partial z} \frac{\partial z}{\partial \mathbf{w}}$.
4. $\frac{\partial L}{\partial \hat{y}} = -\frac{y}{\hat{y}} + \frac{1-y}{1-\hat{y}} = \frac{-y(1-\hat{y}) + \hat{y}(1-y)}{\hat{y}(1-\hat{y})} = \frac{\hat{y} - y}{\hat{y}(1-\hat{y})}$.
5. $\frac{\partial \hat{y}}{\partial z} = \hat{y}(1-\hat{y})$ (from Example 2).
6. $\frac{\partial z}{\partial \mathbf{w}} = \mathbf{x}$.
7. Combine: $\frac{\partial L}{\partial \mathbf{w}} = \frac{\hat{y} - y}{\hat{y}(1-\hat{y})} \cdot \hat{y}(1-\hat{y}) \cdot \mathbf{x} = (\hat{y} - y)\mathbf{x}$. (Q.E.D.)
