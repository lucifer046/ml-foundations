# WEEK 9: Constrained Optimization and Logistic Regression

Many modern machine learning algorithms rely on optimizing objective functions under specific mathematical or physical constraints. The **Method of Lagrange Multipliers** provides a robust framework for finding extrema in these equality-constrained environments.

---

## 1. Geometric Intuition

### The Paraboloid and the Line
Consider minimizing $f(x,y) = x^2 + y^2$ subject to $y = x$.
*   **Objective:** The paraboloid $f$ has circular contours expanding from the origin.
*   **Constraint:** The line $y=x$ slices through the $xy$-plane.
*   **Solution:** The smallest contour circle tangent to the line is at the origin **$(0,0)$**.

### First-Order Analysis and Inconclusive Cases
The first-order analysis of $f(x, y) = x^3 + y^2$ shows that $(0, 0)$ is a critical point ($\nabla f = 0$). However, the **second-order (Hessian) test is inconclusive** at this point — it does not confirm whether $(0,0)$ is a minimum, maximum, or saddle point.

---

## 2. Constrained Optimization with Equality Constraints

**General Problem:**
<div class="formula-box">
$$\min_{x, y} f(x, y) \quad \text{subject to} \quad g(x, y) = 0$$
</div>

### Example 1: Minimize $f = x^2+y^2$ subject to $y-x=0$
The dotted contours of $f$ are circles. The constraint $y=x$ is a line. The optimal point is where the smallest contour is tangent to the line.

### Example 2: Minimize $x+y$ subject to $x^2+y^2=1$
$$\min_{x,y} x+y \quad \text{s.t.} \quad x^2+y^2-1=0$$
Geometrically, slicing a plane (the objective) with another surface (the constraint circle) produces lines of intersection.

### Example 3: Minimize $x^2+y^2$ subject to $xy=1$
$$\min_{x,y} x^2+y^2 \quad \text{s.t.} \quad xy-1=0$$
The hyperbola $xy=1$ is the constraint. We seek the point on the hyperbola closest to the origin.

### Example 4: Complex Exponential Objective on a Circle
$$\min_{x,y} 5e^{-(x^2+y^2)} + 8e^{-((x-4)^2+(y-4)^2)} \quad \text{s.t.} \quad (x-2)^2+(y-2)^2-8=0$$

---

## 3. Gradient Dynamics: Descent vs. Feasibility

Using Taylor series, near a point $x^*$ we approximate:
<div class="formula-box">
$$f(x^* + \eta d) \approx f(x^*) + \nabla f(x^*) \cdot (\eta d)$$
</div>
A **descent direction** $d$ satisfies $\nabla f(x^*) \cdot d < 0$ — it makes an obtuse angle with $\nabla f$.

### Contours and Gradients
The gradient $\nabla g$ at any point is **perpendicular** to the contour of $g$ passing through that point.

*   **Descent Direction:** Direction along which the objective function decreases.
*   **Feasible Direction:** Direction along which the constraint $g(x,y)=0$ remains satisfied.

> [!IMPORTANT]
> **Key Insight:** If $x^*$ is a local minimum, then **no direction can be simultaneously a descent direction and a feasible direction**. The gradient $\nabla f$ and $\nabla g$ must be **parallel** at the optimum.

---

## 4. Necessary Conditions: Lagrange Multipliers

If $x^*$ is a constrained minimum and $\nabla g(x^*) \neq 0$ (constraint qualification), then:
<div class="formula-box">
$$\nabla f(x^*) = \lambda \nabla g(x^*)$$
</div>
for some $\lambda \in \mathbb{R}$.

We solve this by finding stationary points of the **Lagrangian**:
<div class="formula-box">
$$\mathcal{L}(x, y, \lambda) = f(x, y) + \lambda g(x, y)$$
</div>

**First-Order Necessary Conditions ($\nabla \mathcal{L} = 0$):**
1.  $\nabla_x \mathcal{L} = \nabla f(x) + \lambda \nabla g(x) = 0 \implies \nabla f = -\lambda \nabla g$
2.  $\nabla_\lambda \mathcal{L} = g(x) = 0$ (the constraint is enforced automatically)

### General Steps
1.  Define $f(x,y)$ and $g(x,y)$.
2.  Form $\mathcal{L}(x, y, \lambda) = f(x,y) + \lambda g(x,y)$.
3.  Set all partial derivatives to zero: $\partial\mathcal{L}/\partial x = 0$, $\partial\mathcal{L}/\partial y = 0$, $\partial\mathcal{L}/\partial \lambda = 0$.
4.  Solve the resulting system. The solutions are **candidates** for extrema (minima and maxima).

---

## 5. Inequality Constraints: KKT Conditions

For inequality constraints ($h(\mathbf{x}) \leq 0$), we use the **Karush-Kuhn-Tucker (KKT)** conditions:
1.  **Stationarity:** $\nabla f(\mathbf{x}) + \sum \mu_j \nabla h_j(\mathbf{x}) = \mathbf{0}$
2.  **Primal Feasibility:** $h_j(\mathbf{x}) \leq 0$
3.  **Dual Feasibility:** $\mu_j \geq 0$
4.  **Complementary Slackness:** $\mu_j h_j(\mathbf{x}) = 0$

---

## 6. Higher Dimensions and Second-Order Analysis

### The Hessian Test
<div class="formula-box">
$$H = \begin{bmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{bmatrix}, \quad D = \det(H)$$
</div>
*   **Local Minimum:** $D > 0$ and $f_{xx} > 0$.
*   **Local Maximum:** $D > 0$ and $f_{xx} < 0$.
*   **Saddle Point:** $D < 0$.
*   **Inconclusive:** $D = 0$.

### Convexity
A problem is **convex** if the feasible set is convex and $f$ is convex. This guarantees any local minimum is the **global minimum**.

---

## 7. Convex Sets, Hyperplanes, and Halfspaces

### Hyperplanes
In $\mathbb{R}^n$, a **hyperplane** is the set $\{x : w \cdot x + b = 0\}$.
*   In $\mathbb{R}^3$: $S = \{(x,y,z) : 2x + 3y + 5z = 7\}$ is a plane.

### Halfspaces
A **halfspace** is defined by an inequality: $S = \{x : w \cdot x + b \geq 0\}$.

### Convex Sets
A set $S$ is **convex** if for any two points $x_1, x_2 \in S$, the entire line segment lies within $S$:
<div class="formula-box">
$$S \text{ is convex} \iff \lambda x_1 + (1-\lambda) x_2 \in S \quad \forall\, \lambda \in [0,1]$$
</div>

**1D examples:** The empty set, all of $\mathbb{R}$, and intervals $[a,b]$ are the only convex sets in $\mathbb{R}$.

**2D examples:** Balls, ellipses, and convex polygons.

### Convex Combinations and Convex Hull
A **convex combination** of $x_1,\dots,x_n$ is $\sum_{i=1}^n \lambda_i x_i$ where $\lambda_i \geq 0$ and $\sum \lambda_i = 1$.

The **convex hull** $\text{conv}(S)$ is the smallest convex set containing $S$:
<div class="formula-box">
$$\text{conv}(S) = \left\{ \sum_{i=1}^n \lambda_i x_i : x_i \in S,\; \lambda_i \geq 0,\; \sum \lambda_i = 1 \right\}$$
</div>
The convex hull of three non-collinear points is the filled triangle; of four corner points, the filled square.

---

## 8. Machine Learning Application: Logistic Regression

Logistic regression minimizes the **Binary Cross-Entropy (BCE) Loss** using the sigmoid function $\sigma(z) = \frac{1}{1+e^{-z}}$.

<div class="theory-box graph-container">
<svg viewBox="0 0 500 300" class="technical-graph">
<line x1="60" y1="240" x2="460" y2="240" stroke="currentColor" stroke-width="2" />
<line x1="260" y1="40" x2="260" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.3" />
<line x1="60" y1="40" x2="60" y2="240" stroke="currentColor" stroke-width="2" />
<line x1="60" y1="140" x2="460" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.2" />
<line x1="60" y1="40" x2="460" y2="40" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.2" />
<path d="M 60 230 C 160 230 160 40 460 40" fill="none" stroke="var(--graph-accent)" stroke-width="3" stroke-linecap="round" />
<text x="260" y="280" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600">Input (z)</text>
<text x="20" y="140" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600" transform="rotate(-90 20 140)">Probability σ(z)</text>
<text x="50" y="145" font-family="var(--font-ui)" font-size="10" text-anchor="end">0.5</text>
<text x="50" y="45" font-family="var(--font-ui)" font-size="10" text-anchor="end">1.0</text>
<text x="260" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">0</text>
</svg>
</div>

**Sigmoid Properties:**
1.  **Asymptotes:** $\sigma(z) \to 1$ as $z \to +\infty$; $\sigma(z) \to 0$ as $z \to -\infty$.
2.  **Midpoint:** $\sigma(0) = 0.5$ — the default decision boundary.
3.  **Gradient Saturation:** Curve flattens at extremes; $\sigma'(z) \approx 0$ for large $|z|$ (vanishing gradient risk).

**BCE Loss:**
<div class="formula-box">
$$J(\mathbf{w}) = -\frac{1}{n} \sum_{i=1}^n \left[ y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i) \right]$$
</div>
This function is **convex**, allowing global optimization via gradient descent.

**Support Vector Machines (SVM):** SVMs maximize the classification margin by minimizing $\|\mathbf{w}\|^2$ subject to linear constraints — solved via **Lagrange Duality**.

---

## 9. Guided Problem Sets

### Problem Set A: Lagrange Multipliers — 2D
**Goal:** Minimize $f(x, y) = x^2 + y^2$ subject to $x + y = 2$.

1. Lagrangian: $\mathcal{L} = x^2 + y^2 + \lambda(x + y - 2)$
2. $\partial\mathcal{L}/\partial x = 2x + \lambda = 0 \implies x = -\lambda/2$
3. $\partial\mathcal{L}/\partial y = 2y + \lambda = 0 \implies y = -\lambda/2$
4. Constraint: $x + y = 2 \implies -\lambda = 2 \implies \lambda = -2$
5. **Result:** $x=1,\; y=1$. Minimum value $f(1,1) = \mathbf{2}$.

---

### Problem Set B: Lagrange Multipliers — 3D System (Gaussian Elimination)
**The stationarity equations reduce to:**
$$\begin{cases} 2x + y + 2z = 9 \\ 5x + 5y + 7z = 29 \\ 3x + 4y - 5z = 0 \end{cases}$$
**Solution via Gaussian elimination:** $(x, y, z) = \mathbf{(2, 1, 2)}$.

---

### Problem Set C: Full Worked Example — Closest Point on a Circle
**Problem:** Find the point on the circle $x^2+y^2=1$ closest to the origin, using Lagrange multipliers.

**Objective:** $f(x,y) = x^2 + y^2$, **Constraint:** $g(x,y) = x^2+y^2-1=0$

**Lagrangian:** $\mathcal{L} = (x^2+y^2) + \lambda(x^2+y^2-1)$

**Setting $\nabla\mathcal{L} = 0$:**
- $2x + 2\lambda x = 2x(1+\lambda) = 0$
- $2y + 2\lambda y = 2y(1+\lambda) = 0$
- $x^2 + y^2 - 1 = 0$

From the first two equations: either $x=y=0$ (contradicts the constraint) or $\lambda = -1$.

**Conclusion:** $\lambda = -1$. Any point on the unit circle satisfies the KKT conditions — there are infinitely many solutions, which makes sense since all points on the unit circle are equidistant from the origin.

---

### Problem Set D: Minimizing $x^3+y^3$ subject to $x=y$

**Lagrangian:** $\mathcal{L} = (x^3+y^3) + \lambda(x-y)$

**Setting $\nabla\mathcal{L} = 0$:**
1. $\partial\mathcal{L}/\partial x = 3x^2 + \lambda = 0$
2. $\partial\mathcal{L}/\partial y = 3y^2 - \lambda = 0$
3. $\partial\mathcal{L}/\partial \lambda = x - y = 0 \implies x = y$

Adding equations (1) and (2): $6x^2 = 0 \implies x = 0$.
Since $x=y$, we get $y=0$ and $\lambda=0$.

**Result:** The unique critical point is $(x,y) = (0,0)$ with $\lambda=0$.

---

### Problem Set E: Checking Convexity of Sets
1.  **Circle $x^2+y^2=1$:** Pick $P_1=(-1,0)$ and $P_2=(1,0)$. The midpoint $(0,0)$ is not on the circle. **Not convex.**
2.  **Interval $[a,b]$:** Any point between two members stays inside. **Convex.**
3.  **Filled disk $x^2+y^2 \leq 1$:** Any two interior points have their segment entirely inside. **Convex.**

---

### Problem Set F: Applying the Convex Function Definition
1.  **$f(x) = e^x$:** The curve lies below any secant line. **Convex.**
2.  **$f(x) = |x|$:** V-shape satisfies $f(\lambda x_1+(1-\lambda)x_2) \leq \lambda f(x_1)+(1-\lambda)f(x_2)$. **Convex.**

---

### Problem Set G: Derivative of the Sigmoid
**Prove:** $\sigma'(z) = \sigma(z)(1-\sigma(z))$

1. $\sigma(z) = (1+e^{-z})^{-1}$
2. $\sigma'(z) = -1\cdot(1+e^{-z})^{-2}\cdot(-e^{-z}) = \dfrac{e^{-z}}{(1+e^{-z})^2}$
3. $= \dfrac{1}{1+e^{-z}} \cdot \dfrac{e^{-z}}{1+e^{-z}} = \sigma(z)\cdot(1-\sigma(z))$ $\quad\blacksquare$

---

### Problem Set H: Gradient of BCE Loss
**Show:** $\nabla_\mathbf{w} J(\mathbf{w}) = (\hat{y}-y)\mathbf{x}$ for a single sample.

Let $z = \mathbf{w}^T\mathbf{x}$, $\hat{y} = \sigma(z)$, $L = -[y\log\hat{y}+(1-y)\log(1-\hat{y})]$.

By chain rule: $\dfrac{\partial L}{\partial \mathbf{w}} = \dfrac{\partial L}{\partial \hat{y}} \cdot \dfrac{\partial \hat{y}}{\partial z} \cdot \dfrac{\partial z}{\partial \mathbf{w}}$

- $\dfrac{\partial L}{\partial \hat{y}} = \dfrac{\hat{y}-y}{\hat{y}(1-\hat{y})}$
- $\dfrac{\partial \hat{y}}{\partial z} = \hat{y}(1-\hat{y})$
- $\dfrac{\partial z}{\partial \mathbf{w}} = \mathbf{x}$

**Combining:** $\dfrac{\partial L}{\partial \mathbf{w}} = \dfrac{\hat{y}-y}{\hat{y}(1-\hat{y})} \cdot \hat{y}(1-\hat{y}) \cdot \mathbf{x} = (\hat{y}-y)\mathbf{x}$ $\quad\blacksquare$
