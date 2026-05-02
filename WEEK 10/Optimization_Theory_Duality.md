# WEEK 10: Optimization Theory, Convexity, and Duality

This module explores the geometry of feasible regions, formal proofs of convexity properties, and the **Duality Theory** framework — with full KKT worked examples.

---

## 1. Feasible Regions (Constraints)

The **feasible region** is the set of all points satisfying the given constraints.

### A. Inequality vs. Equality
*   **Inequality ($g(x, y) \leq 0$):** Defines an interior region (halfspace).
*   **Equality ($g(x, y) = 0$):** Defines a specific boundary curve or line.

### B. Example Problems

**Example 1: Linear Inequality**
$$g(x, y) = y - x \leq 0$$
All points $(x, y)$ satisfying $y \leq x$ form the feasible halfspace.

**Example 2: Nonlinear Inequality**
$$g(x, y) = x^2 - y \leq 0$$
All points on or below the parabola $y = x^2$.

### C. Affine Constraints
A constraint $a^T x \leq b$ is **affine** and always results in a convex halfspace.

---

## 2. Active and Inactive Constraints

*   **Active Constraint:** $g(x^*) = 0$ — the optimum sits on the boundary.
*   **Inactive Constraint:** $g(x^*) < 0$ — the optimum lies in the interior.

**Feasible Directions:** A direction $d$ is feasible if $\nabla g(x)^T d \leq 0$, pointing inward or tangent to the boundary.

---

## 3. Theorems and Proofs: Convex Functions

### Property 1: Gradient Condition for a Local Minimum
If $f$ is differentiable and convex on $\mathbb{R}^n$, then at a local minimum $x^*$:
<div class="formula-box">
$$\nabla f(x^*) \cdot d \geq 0 \quad \text{for all feasible directions } d$$
</div>

### Property 2: Sum of Convex Functions is Convex
**Proof:** Let $x_1, x_2 \in S$, $\lambda \in [0,1]$. Since $f$ and $g$ are convex:
$$f(\lambda x_1 + (1-\lambda) x_2) \leq \lambda f(x_1) + (1-\lambda) f(x_2)$$
$$g(\lambda x_1 + (1-\lambda) x_2) \leq \lambda g(x_1) + (1-\lambda) g(x_2)$$
Adding both inequalities:
$$(f+g)(\lambda x_1 + (1-\lambda) x_2) \leq \lambda(f+g)(x_1) + (1-\lambda)(f+g)(x_2) \quad \blacksquare$$

*Examples:* $f(x) = x^2$ and $g(x) = e^x$ are both convex, so $h(x) = x^2 + e^x$ is convex.

### Property 3: Composition with Non-Decreasing Convex Function
If $g$ is convex and $f$ is convex and **non-decreasing**, then $f \circ g$ is convex.

**Proof:** By convexity of $g$:
$$g(\lambda x_1 + (1-\lambda)x_2) \leq \lambda g(x_1) + (1-\lambda)g(x_2)$$
Since $f$ is non-decreasing, applying $f$ preserves the inequality:
$$f(g(\lambda x_1 + (1-\lambda)x_2)) \leq f(\lambda g(x_1) + (1-\lambda)g(x_2)) \leq \lambda f(g(x_1)) + (1-\lambda)f(g(x_2)) \quad \blacksquare$$

*Example:* $g(x) = x^2$ (convex), $f(x) = e^x$ (non-decreasing and convex) $\Rightarrow$ $h(x) = e^{x^2}$ is convex.

### Property 4: Composition with Affine Function
If $f$ is convex and $g$ is **affine**, then $f \circ g$ is convex.

**Proof:** Since $g$ is affine: $g(\lambda x_1 + (1-\lambda)x_2) = \lambda g(x_1) + (1-\lambda)g(x_2)$. Then:
$$f(g(\lambda x_1 + (1-\lambda)x_2)) = f(\lambda g(x_1) + (1-\lambda)g(x_2)) \leq \lambda f(g(x_1)) + (1-\lambda)f(g(x_2)) \quad \blacksquare$$

### Property 5: Every Local Minimum is a Global Minimum
If $f$ is convex, then any local minimum $x_1$ is also a global minimum.

**Proof (by contradiction):** Assume $x_2$ is a global minimum with $f(x_2) < f(x_1)$. Since $x_1$ is a local minimum, there exists $\mathcal{B}_\epsilon(x_1)$ such that $f(x) \geq f(x_1)$ for all $x \in \mathcal{B}_\epsilon(x_1)$.

Pick a point $x' = \lambda x_1 + (1-\lambda)x_2 \in \mathcal{B}_\epsilon(x_1)$ on the line segment between $x_1$ and $x_2$. By convexity:
$$f(x') \leq \lambda f(x_1) + (1-\lambda)f(x_2) < \lambda f(x_1) + (1-\lambda)f(x_1) = f(x_1)$$
This gives $f(x') < f(x_1)$, contradicting $x_1$ being a local minimum. $\blacksquare$

*Examples:* $f(x) = x^2$ and $f(x) = |x|$ both have $x = 0$ as the unique global minimum.

> [!CAUTION]
> **Caution:** This property does **not** guarantee that every convex function *has* a minimum. For example, $f(x) = e^x$ is convex but has no global minimum (it decreases towards $-\infty$ as $x \to -\infty$).

### Property 6: The Set of Global Minima is a Convex Set
If $f$ is convex, the set $\mathcal{P}$ of all global minima is itself a **convex set**.

**Proof:** Let $f_{\min}$ be the minimum value, and let $x_1, x_2 \in \mathcal{P}$. By convexity:
$$f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2) = \lambda f_{\min} + (1-\lambda)f_{\min} = f_{\min}$$
Since $f_{\min}$ is the minimum, we must have $f(\lambda x_1 + (1-\lambda)x_2) = f_{\min}$. So the convex combination is also a global minimizer, and $\mathcal{P}$ is convex. $\blacksquare$

*Example:*
$$f(x) = \begin{cases} 0 & -1 \leq x \leq 1 \\ (x-1)^2 & x > 1 \\ (x+1)^2 & x < -1 \end{cases}$$
The set of all minima is $[-1, 1]$, which is a convex set.

### Property 7: First-Order Condition for Convex Functions
If $f$ is differentiable and convex on $\mathbb{R}^n$, then for any $x, y$:
<div class="formula-box">
$$f(y) \geq f(x) + \nabla f(x)^T (y - x)$$
</div>

**Consequence:** If $\nabla f(x^*) = 0$, then $f(y) \geq f(x^*)$ for all $y$ — confirming $x^*$ is a **global minimum**.

> [!NOTE]
> **Remark:** For a general (non-convex) function, $\nabla f(x^*) = 0$ only identifies a *critical point* — not necessarily a minimum. Example: $f(x) = x^3$ has $\nabla f(0) = 0$ but $x=0$ is neither a max nor min.

---

## 4. Optimization Duality Theory

### A. The Primal Problem
<div class="formula-box">
$$\min_{x} f(x) \quad \text{s.t. } g(x) \leq 0$$
</div>

### B. The Lagrangian Function
<div class="formula-box">
$$\mathcal{L}(x, \lambda) = f(x) + \lambda g(x), \quad \lambda \geq 0$$
</div>

The Lagrangian allows an equivalent reformulation:
$$J(x) = \max_{\lambda \geq 0} \mathcal{L}(x, \lambda) = \begin{cases} f(x) & \text{if } g(x) \leq 0 \\ \infty & \text{if } g(x) > 0 \end{cases}$$
So the primal becomes $\min_x J(x)$.

**Primal–Dual equivalence (min-max forms):**
<div class="formula-box">
$$\underbrace{\min_{x} \max_{\lambda \geq 0} \mathcal{L}(x, \lambda)}_{\text{Primal}} \geq \underbrace{\max_{\lambda \geq 0} \min_{x} \mathcal{L}(x, \lambda)}_{\text{Dual}}$$
</div>
When strong duality holds, the two sides are equal.

### C. The Dual Problem
<div class="formula-box">
$$d(\lambda) = \min_{x} \mathcal{L}(x, \lambda), \qquad \text{Dual: } \max_{\lambda \geq 0} d(\lambda)$$
</div>

### D. Weak and Strong Duality
*   **Weak Duality:** $d(\lambda) \leq f(x^*)$ always holds. The **duality gap** is $f(x^*) - d(\lambda^*) \geq 0$.
*   **Strong Duality:** When the gap is zero ($d(\lambda^*) = f(x^*)$), strong duality holds. For convex problems satisfying Slater's Condition, strong duality is guaranteed.

---

## 5. KKT Conditions

A point $x^*$ is optimal if and only if the four **Karush-Kuhn-Tucker (KKT)** conditions hold:

| # | Condition | Formula |
|---|---|---|
| 1 | **Stationarity** | $\nabla f(x^*) + \lambda^* \nabla g(x^*) = 0$ |
| 2 | **Primal Feasibility** | $g(x^*) \leq 0$ |
| 3 | **Dual Feasibility** | $\lambda^* \geq 0$ |
| 4 | **Complementary Slackness** | $\lambda^* g(x^*) = 0$ |

Complementary slackness means: either the constraint is inactive ($g < 0$) and $\lambda = 0$, **or** the constraint is active ($g = 0$) and $\lambda > 0$.

---

## 6. Worked Examples

### Example 1: Minimize $f(x) = x^2$ subject to $g(x) \leq 0$
**Problem:** $\min_x x^2$ subject to $(x-4)(x-2) \leq 0$

The constraint $(x-4)(x-2) \leq 0$ is satisfied when $x \in [2, 4]$ (the product of two factors is $\leq 0$ when one is non-negative and the other is non-positive).

**Feasible Region:** $x \in [2, 4]$.

Since $f(x) = x^2$ is an **increasing** function on the interval $[2, 4]$, the minimum occurs at the **left endpoint**:
$$x^* = 2, \quad f(x^*) = 4$$

### Example 2: Minimize $f(x,y) = \frac{1}{x} - \frac{x^2+y^2}{2}$ subject to $x \geq 1$

**Reformulation:** $g(x, y) = 1 - x \leq 0$.

**Lagrangian:**
$$\mathcal{L}(x, y, \lambda) = \frac{1}{x} - \frac{x^2+y^2}{2} + \lambda(1-x)$$

**Dual Function $d(\lambda)$:** Minimizing $\mathcal{L}$ over $(x, y)$ gives:
$$d(\lambda) = \frac{1}{(1+\lambda)^2} - 6\lambda$$
The dual problem is then $\max_{\lambda \geq 0} d(\lambda)$.

**KKT Conditions:**
1.  $\dfrac{\partial \mathcal{L}}{\partial x} = -\dfrac{1}{x^2} - x - \lambda = 0$
2.  $\dfrac{\partial \mathcal{L}}{\partial y} = -y = 0 \Rightarrow y^* = 0$
3.  $g(x,y) = 1 - x \leq 0 \Rightarrow x \geq 1$
4.  $\lambda \geq 0$
5.  $\lambda(1-x) = 0$ (Complementary Slackness)

**Case Analysis:**
*   **Case $\lambda = 0$:** From stationarity: $-1/x^2 - x = 0 \Rightarrow x^3 = -1 \Rightarrow x = -1$. Violates $x \geq 1$. ✗
*   **Case $x = 1$:** From stationarity: $-1 - 1 - \lambda = 0 \Rightarrow \lambda = -2$. Violates $\lambda \geq 0$. ✗

Both cases yield contradictions, indicating no KKT point exists — the problem is **unbounded** (the objective can decrease without limit as $x \to \infty$).
