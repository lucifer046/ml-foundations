<div class="callout callout-important" style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); border: 1px solid #ddd6fe; box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1); margin-bottom: 3rem; border-left: 5px solid #8b5cf6;">
<div class="callout-title" style="color: #6d28d9; font-size: 0.8rem; letter-spacing: 0.1em; font-weight: 900; display: flex; align-items: center; gap: 0.6rem;">
<i data-lucide="video" style="width: 16px; height: 16px;"></i>
<span>RECOMMENDED LECTURES (HINDI)</span>
</div>

<div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 1.25rem;">
<div>
<a href="https://youtu.be/WXhCy_ecSfg" target="_blank" style="color: #5b21b6; text-decoration: none; font-weight: 800; font-size: 1.15rem; display: flex; align-items: center; gap: 0.6rem; transition: all 0.2s ease;">
Duality and Lagrangian - Part 1 (Hindi)
<i data-lucide="external-link" style="width: 18px; height: 18px; opacity: 0.7;"></i>
</a>
<p style="margin: 0.4rem 0 0 0; font-size: 0.9rem; color: #7c3aed; opacity: 0.8; font-weight: 500;">
Foundational concepts of Lagrangian theory and duality in optimization.
</p>
</div>
<div>
<a href="https://youtu.be/VGJiLt0XRlI" target="_blank" style="color: #5b21b6; text-decoration: none; font-weight: 800; font-size: 1.15rem; display: flex; align-items: center; gap: 0.6rem; transition: all 0.2s ease;">
Duality and Lagrangian - Part 2 (Hindi)
<i data-lucide="external-link" style="width: 18px; height: 18px; opacity: 0.7;"></i>
</a>
<p style="margin: 0.4rem 0 0 0; font-size: 0.9rem; color: #7c3aed; opacity: 0.8; font-weight: 500;">
Matrix theory and formal derivations of the dual problem.
</p>
</div>
<div>
<a href="https://youtu.be/0rPndrfWU9Y" target="_blank" style="color: #5b21b6; text-decoration: none; font-weight: 800; font-size: 1.15rem; display: flex; align-items: center; gap: 0.6rem; transition: all 0.2s ease;">
Duality and Lagrangian - Part 3 (Hindi)
<i data-lucide="external-link" style="width: 18px; height: 18px; opacity: 0.7;"></i>
</a>
<p style="margin: 0.4rem 0 0 0; font-size: 0.9rem; color: #7c3aed; opacity: 0.8; font-weight: 500;">
Advanced matrix concepts and solving the Lagrangian dual.
</p>
</div>
<div>
<a href="https://youtu.be/H0sBZdjuego" target="_blank" style="color: #5b21b6; text-decoration: none; font-weight: 800; font-size: 1.15rem; display: flex; align-items: center; gap: 0.6rem; transition: all 0.2s ease;">
Duality & Primal-Dual Conversion (Hindi)
<i data-lucide="external-link" style="width: 18px; height: 18px; opacity: 0.7;"></i>
</a>
<p style="margin: 0.4rem 0 0 0; font-size: 0.9rem; color: #7c3aed; opacity: 0.8; font-weight: 500;">
A deep dive into duality theory and the step-by-step process of converting primal problems to dual forms.
</p>
</div>
<div>
<a href="https://youtu.be/zKyuBNPKjYY" target="_blank" style="color: #5b21b6; text-decoration: none; font-weight: 800; font-size: 1.15rem; display: flex; align-items: center; gap: 0.6rem; transition: all 0.2s ease;">
KKT Conditions - Detailed Explanation (Hindi)
<i data-lucide="external-link" style="width: 18px; height: 18px; opacity: 0.7;"></i>
</a>
<p style="margin: 0.4rem 0 0 0; font-size: 0.9rem; color: #7c3aed; opacity: 0.8; font-weight: 500;">
Understanding Karush-Kuhn-Tucker conditions for inequality constraints.
</p>
</div>
</div>

</div>

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

## 6. Matrix Concepts for Linear Regression

Before solving the practice problem, we need to understand the matrix operations that power the Normal Equation.

### 6.1 Matrix Transpose
The transpose $A^T$ of an $m \times n$ matrix $A$ is the $n \times m$ matrix formed by swapping rows and columns.
<div class="formula-box">
$$[A^T]_{ij} = [A]_{ji}$$
</div>

### 6.2 Matrix Multiplication
To multiply $A$ ($m \times k$) by $B$ ($k \times n$), the inner dimensions must match. Result shape: $m \times n$.
<div class="formula-box">
$$[AB]_{ij} = \sum_{l=1}^{k} A_{il} \cdot B_{lj}$$
</div>

### 6.3 Determinant and Inverse (2x2)
For $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the determinant is $\det(A) = ad - bc$.
The inverse is:
<div class="formula-box">
$$A^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$
</div>

### 6.4 Deriving the Normal Equation
The goal is to minimize $L(w) = \|Xw - y\|^2$. The optimal solution satisfies the **Normal Equation**:

<div class="callout callout-important" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #cbd5e1; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); border-left: 8px solid #0f172a; margin: 2.5rem 0; padding: 2rem;">
<div class="callout-title" style="color: #0f172a; font-size: 0.85rem; letter-spacing: 0.2em; font-weight: 900; text-transform: uppercase; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
<i data-lucide="binary" style="width: 18px; height: 18px;"></i>
Major Formula: The Normal Equation
</div>
<div style="font-size: 1.75rem; text-align: center; color: #000;">
$$w^* = (X^TX)^{-1}X^Ty$$
</div>
</div>

---

## 7. Practice Problem 1: Analytical Solution (Normal Equation)

> **Problem 1:** Find the optimal $w^*$ for the following dataset:
> | $X$ | $y$ |
> |---|---|
> | $[1, 0]$ | $1.5$ |
> | $[2, 1]$ | $2.9$ |
> | $[3, 2]$ | $3.4$ |
> | $[4, 2]$ | $3.8$ |
> | $[5, 3]$ | $5.3$ |

### Step 1: Matrix Setup
<div class="formula-box">
$$X = \begin{bmatrix} 1 & 0 \\ 2 & 1 \\ 3 & 2 \\ 4 & 2 \\ 5 & 3 \end{bmatrix}, \quad y = \begin{bmatrix} 1.5 \\ 2.9 \\ 3.4 \\ 3.8 \\ 5.3 \end{bmatrix}$$
</div>

### Step 2: Compute $X^T X$
<div class="formula-box">
$$X^T X = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 0 & 1 & 2 & 2 & 3 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 2 & 1 \\ 3 & 2 \\ 4 & 2 \\ 5 & 3 \end{bmatrix} = \begin{bmatrix} 55 & 31 \\ 31 & 18 \end{bmatrix}$$
</div>

### Step 3: Compute $X^T y$
<div class="formula-box">
$$X^T y = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 0 & 1 & 2 & 2 & 3 \end{bmatrix} \begin{bmatrix} 1.5 \\ 2.9 \\ 3.4 \\ 3.8 \\ 5.3 \end{bmatrix} = \begin{bmatrix} 59.2 \\ 33.2 \end{bmatrix}$$
</div>

### Step 4: Compute $(X^T X)^{-1}$
$\det(X^TX) = (55)(18) - (31)^2 = 29$.
<div class="formula-box">
$$(X^T X)^{-1} = \frac{1}{29} \begin{bmatrix} 18 & -31 \\ -31 & 55 \end{bmatrix}$$
</div>

### Step 5: Final Solution for $w^*$
<div class="formula-box">
$$w^* = (X^T X)^{-1} X^T y = \frac{1}{29} \begin{bmatrix} 18 & -31 \\ -31 & 55 \end{bmatrix} \begin{bmatrix} 59.2 \\ 33.2 \end{bmatrix} = \begin{bmatrix} 1.255 \\ -0.317 \end{bmatrix}$$
</div>

> [!IMPORTANT]
> **Final Answer:** The optimal weight vector is $w^* \approx \begin{bmatrix} 1.255 \\ -0.317 \end{bmatrix}$.

---

## 8. Practice Problems 2 & 3: Gradient Descent

> **Context:** Using the same dataset from Problem 1, we now apply **Gradient Descent** to iteratively find the optimal $w^*$ instead of the closed-form analytical method.
>
> | $X$ | $y$ |
> |---|---|
> | $[1, 0]$ | $1.5$ |
> | $[2, 1]$ | $2.9$ |
> | $[3, 2]$ | $3.4$ |
> | $[4, 2]$ | $3.8$ |
> | $[5, 3]$ | $5.3$ |

The **Sum of Squares Error (SSE)** loss function in matrix form is:
<div class="formula-box">
$$L(w) = \|Xw - y\|^2 = (Xw - y)^T(Xw - y)$$
</div>

Its **gradient** with respect to $w$ is:
<div class="formula-box">
$$\nabla_w L = 2X^T(Xw - y)$$
</div>

---

### Problem 2: Gradient at $t = 1$

> **Problem 2:** Let $w^1$ be initialized to $\begin{bmatrix} 0.1 \\ 0.1 \end{bmatrix}$. For the first iteration $t = 1$, compute the gradient with respect to $w^1$.

#### Step 1: Identify $X$, $y$, and $w^1$

<div class="formula-box">
$$X = \begin{bmatrix} 1 & 0 \\ 2 & 1 \\ 3 & 2 \\ 4 & 2 \\ 5 & 3 \end{bmatrix}, \quad y = \begin{bmatrix} 1.5 \\ 2.9 \\ 3.4 \\ 3.8 \\ 5.3 \end{bmatrix}, \quad w^1 = \begin{bmatrix} 0.1 \\ 0.1 \end{bmatrix}$$
</div>

#### Step 2: Compute the Prediction Vector $Xw^1$

Multiply each row of $X$ by $w^1 = [0.1,\ 0.1]^T$:

$$Xw^1 = \begin{bmatrix} 1(0.1) + 0(0.1) \\ 2(0.1) + 1(0.1) \\ 3(0.1) + 2(0.1) \\ 4(0.1) + 2(0.1) \\ 5(0.1) + 3(0.1) \end{bmatrix} = \begin{bmatrix} 0.1 \\ 0.3 \\ 0.5 \\ 0.6 \\ 0.8 \end{bmatrix}$$

#### Step 3: Compute the Residual Vector $Xw^1 - y$

$$Xw^1 - y = \begin{bmatrix} 0.1 - 1.5 \\ 0.3 - 2.9 \\ 0.5 - 3.4 \\ 0.6 - 3.8 \\ 0.8 - 5.3 \end{bmatrix} = \begin{bmatrix} -1.4 \\ -2.6 \\ -2.9 \\ -3.2 \\ -4.5 \end{bmatrix}$$

#### Step 4: Compute $X^T(Xw^1 - y)$

$$X^T = \begin{bmatrix} 1 & 2 & 3 & 4 & 5 \\ 0 & 1 & 2 & 2 & 3 \end{bmatrix}$$

**Row 1** (corresponds to $w_1$):
$$1(-1.4) + 2(-2.6) + 3(-2.9) + 4(-3.2) + 5(-4.5)$$
$$= -1.4 - 5.2 - 8.7 - 12.8 - 22.5 = -50.6$$

**Row 2** (corresponds to $w_2$):
$$0(-1.4) + 1(-2.6) + 2(-2.9) + 2(-3.2) + 3(-4.5)$$
$$= 0 - 2.6 - 5.8 - 6.4 - 13.5 = -28.3$$

So:
$$X^T(Xw^1 - y) = \begin{bmatrix} -50.6 \\ -28.3 \end{bmatrix}$$

#### Step 5: Multiply by 2 to Get the Full Gradient

<div class="formula-box">
$$\nabla_{w^1} L = 2 \cdot X^T(Xw^1 - y) = 2 \begin{bmatrix} -50.6 \\ -28.3 \end{bmatrix} = \begin{bmatrix} -101.2 \\ -56.6 \end{bmatrix}$$
</div>

> [!IMPORTANT]
> **Answer (Problem 2):** The gradient at $t = 1$ is $\nabla_{w^1} L = \begin{bmatrix} -101.2 \\ -56.6 \end{bmatrix}$.

> [!NOTE]
> **Interpretation:** Both components are **negative**, which means the loss is decreasing in the direction of increasing $w_1$ and $w_2$. Gradient descent will therefore push $w$ in the **positive** direction — towards larger values — on the next step.

---

### Problem 3: Gradient Descent Update at $t = 2$

> **Problem 3:** Using the gradient descent update equation with learning rate $\eta_t = 0.1$, compute the value of $w$ at $t = 2$.

#### Gradient Descent Update Rule
<div class="formula-box">
$$w^{t+1} = w^t - \eta_t \cdot \nabla_{w^t} L$$
</div>

#### Step 1: Identify All Known Values

- Current weights: $w^1 = \begin{bmatrix} 0.1 \\ 0.1 \end{bmatrix}$
- Learning rate: $\eta_1 = 0.1$
- Gradient from Q6: $\nabla_{w^1} L = \begin{bmatrix} -101.2 \\ -56.6 \end{bmatrix}$

#### Step 2: Apply the Update Rule

$$w^2 = w^1 - \eta_1 \cdot \nabla_{w^1} L$$

$$w^2 = \begin{bmatrix} 0.1 \\ 0.1 \end{bmatrix} - 0.1 \cdot \begin{bmatrix} -101.2 \\ -56.6 \end{bmatrix}$$

$$w^2 = \begin{bmatrix} 0.1 \\ 0.1 \end{bmatrix} - \begin{bmatrix} -10.12 \\ -5.66 \end{bmatrix}$$

$$w^2 = \begin{bmatrix} 0.1 + 10.12 \\ 0.1 + 5.66 \end{bmatrix}$$

<div class="formula-box">
$$w^2 = \begin{bmatrix} 10.22 \\ 5.76 \end{bmatrix}$$
</div>

> [!IMPORTANT]
> **Answer (Problem 3):** The value of $w$ at $t = 2$ is $w^2 = \begin{bmatrix} 10.22 \\ 5.76 \end{bmatrix}$.

> [!CAUTION]
> **Why is $w^2$ so far from $w^* \approx [1.255, -0.317]$?** The learning rate $\eta = 0.1$ is **very large** relative to the scale of this problem. The gradient magnitude is ~$101$ and ~$57$, so a step size of $0.1$ produces a jump of ~$10$ and ~$5.7$ in one iteration. In practice, a much smaller learning rate (e.g., $10^{-4}$) or **learning rate scheduling** would be required for stable convergence. This is a key contrast between the analytical method (exact, one-shot) and gradient descent (iterative, sensitive to hyperparameters).

#### Summary: Analytical vs. Gradient Descent

| Method | Result after one step | Exact? |
|---|---|---|
| **Analytical (Normal Equation)** | $w^* = [1.255, -0.317]^T$ | ✅ Yes |
| **Gradient Descent (t=2)** | $w^2 = [10.22, 5.76]^T$ | ❌ Not yet — needs many iterations |

---

## 9. Worked Examples

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
