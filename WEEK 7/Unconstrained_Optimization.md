# WEEK 7: Unconstrained Optimization

Optimization is the process of finding the input $\mathbf{x}$ that results in the minimum (or maximum) value of a objective function $f(\mathbf{x})$. In unconstrained optimization, the search space is the entire domain of the function.

---

## 1. Mathematical Conditions for Optimality

To find a local minimum of a smooth function $f(\mathbf{x})$, we look at its derivatives.

### First-Order Necessary Condition (FONC)
If $\mathbf{x}^*$ is a local minimum, then the gradient at that point must be zero:
<div class="formula-box">
$$\nabla f(\mathbf{x}^*) = \mathbf{0}$$
</div>
Points where $\nabla f = \mathbf{0}$ are called **Stationary Points** (includes minima, maxima, and saddle points).

### Second-Order Sufficient Condition (SOSC)
A stationary point $\mathbf{x}^*$ is a local minimum if the Hessian matrix $\mathbf{H}(\mathbf{x}^*)$ is **Positive Definite**:
<div class="formula-box">
$$\mathbf{H}(\mathbf{x}^*) \succ 0$$
</div>
(i.e., all eigenvalues of $\mathbf{H}$ are positive).

---

## 2. Gradient Descent (First-Order Method)

Gradient Descent is an iterative algorithm used to find the minimum of a function by taking steps proportional to the negative of the gradient.

### The Update Rule
<div class="formula-box">
$$\mathbf{x}_{k+1} = \mathbf{x}_k - \alpha \nabla f(\mathbf{x}_k)$$
</div>
Where:
- $\alpha > 0$ is the **Learning Rate** (Step Size).
- $-\nabla f$ is the direction of **Steepest Descent**.

### Convergence Visualization
The following graph illustrates how the objective function value $f(\mathbf{x})$ decreases over iterations $k$.

<div class="theory-box graph-container">
<svg viewBox="0 0 500 300" class="technical-graph">
<!-- Axes -->
<line x1="60" y1="240" x2="460" y2="240" stroke="currentColor" stroke-width="2" />
<line x1="60" y1="40" x2="60" y2="240" stroke="currentColor" stroke-width="2" />
<!-- Grid Lines -->
<line x1="60" y1="190" x2="460" y2="190" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.2" />
<line x1="60" y1="140" x2="460" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.2" />
<line x1="60" y1="90" x2="460" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.2" />
<!-- Convergence Curve -->
<path d="M 60 60 Q 100 220 460 230" fill="none" stroke="var(--graph-secondary)" stroke-width="3" stroke-linecap="round" />
<!-- Data Points -->
<circle cx="60" cy="60" r="4" fill="var(--graph-accent)" />
<circle cx="100" cy="150" r="4" fill="var(--graph-accent)" />
<circle cx="160" cy="200" r="4" fill="var(--graph-accent)" />
<circle cx="240" cy="220" r="4" fill="var(--graph-accent)" />
<circle cx="340" cy="228" r="4" fill="var(--graph-accent)" />
<circle cx="460" cy="230" r="4" fill="var(--graph-accent)" />
<!-- Labels -->
<text x="260" y="280" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600">Iterations (k)</text>
<text x="20" y="140" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600" transform="rotate(-90 20 140)">Loss f(x)</text>
<!-- Annotations -->
<text x="70" y="55" font-family="var(--font-ui)" font-size="10" font-weight="700">Initial State</text>
<text x="400" y="220" font-family="var(--font-ui)" font-size="10" font-weight="700">Convergence</text>
</svg>
</div>

**Step-by-Step Explanation of the Graph:**
1.  **Initial Point (k=0):** The algorithm starts at a high loss value (e.g., 9.5). The gradient is steep here, leading to a large first step.
2.  **Rapid Descent (k=1 to 3):** During the early iterations, the function value drops significantly. This is because the gradient $\nabla f(\mathbf{x}_k)$ is large when we are far from the minimum.
3.  **Diminishing Returns (k=4 to 7):** As we approach the minimum $\mathbf{x}^*$, the gradient magnitude $\|\nabla f\|$ decreases. Consequently, the steps $-\alpha \nabla f$ become smaller.
4.  **Convergence (k=8 to 10):** The curve flattens out (plateaus). The algorithm has reached the vicinity of the stationary point where $\nabla f \approx 0$, and further iterations produce negligible changes.

---

## 3. Challenges in Unconstrained Optimization

1.  **Local Minima:** In non-convex functions, gradient descent may converge to a local minimum rather than the global one.
2.  **Saddle Points:** Points where the gradient is zero, but the function increases in some directions and decreases in others.
3.  **Conditioning:** If the Hessian has a large condition number (elliptical contours), gradient descent will oscillate rather than moving directly toward the minimum.

---

## 4. Real-Life Application (Short Example)

**Terrain Navigation:** Imagine an autonomous drone trying to find the lowest point in a valley at night using only a downward-pointing altimeter. The drone calculates the slope of the ground locally (gradient) and moves in the direction where the altitude decreases most rapidly.

---

## 5. Mathematical Problem Solving

### Example 1: Finding Stationary Points
Find the stationary points of $f(x, y) = x^3 - 3x + y^2$.

**Solution:**
1. Compute Gradient: $\nabla f = \begin{bmatrix} 3x^2 - 3 \\ 2y \end{bmatrix}$.
2. Set $\nabla f = \mathbf{0}$:
   - $3x^2 - 3 = 0 \implies x = \pm 1$
   - $2y = 0 \implies y = 0$
3. Stationary points: $(1, 0)$ and $(-1, 0)$.

### Example 2: Determining Type of Stationary Point
Classify the points from Example 1 using the Hessian.

**Solution:**
1. $\mathbf{H} = \begin{bmatrix} 6x & 0 \\ 0 & 2 \end{bmatrix}$.
2. **At $(1, 0)$:** $\mathbf{H} = \begin{bmatrix} 6 & 0 \\ 0 & 2 \end{bmatrix}$. PD $\implies$ **Local Minimum**.
3. **At $(-1, 0)$:** $\mathbf{H} = \begin{bmatrix} -6 & 0 \\ 0 & 2 \end{bmatrix}$. Indefinite $\implies$ **Saddle Point**.

---

## 6. Advanced Question: Descent Direction

**Problem:** Prove that $-\nabla f(\mathbf{x})$ is the direction of steepest descent. Specifically, find the unit vector $\mathbf{u}$ that minimizes the directional derivative $D_{\mathbf{u}} f(\mathbf{x})$.

**Solution:**
1. The directional derivative is $D_{\mathbf{u}} f(\mathbf{x}) = \nabla f(\mathbf{x})^T \mathbf{u}$.
2. Using the dot product property: $\nabla f^T \mathbf{u} = \|\nabla f\| \|\mathbf{u}\| \cos(\theta)$.
3. Since $\|\mathbf{u}\| = 1$, we have $D_{\mathbf{u}} f = \|\nabla f\| \cos(\theta)$.
4. To minimize this value, we need $\cos(\theta) = -1$.
5. This occurs when $\theta = \pi$ (180 degrees), meaning $\mathbf{u}$ must point in the direction exactly opposite to $\nabla f$.
6. Thus, $\mathbf{u} = -\frac{\nabla f}{\|\nabla f\|}$ is the direction of steepest descent. (Q.E.D.)
