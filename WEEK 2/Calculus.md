# WEEK 2: Calculus and Multivariable Geometry

Calculus provides the mathematical foundation for understanding how models change as their parameters are updated. In Machine Learning, we primarily use differentiation to navigate the "loss landscape" and find optimal solutions.

---

## 1. Fundamentals of Differentiation

The derivative of a function $f(x)$ at a point $x$ measures the instantaneous rate of change.

### Derivative Visualization
The derivative $f'(x)$ represents the slope of the **tangent line** at a specific point on the curve.

<div class="theory-box graph-container">
<svg viewBox="0 0 500 300" class="technical-graph">
<!-- Axes -->
<line x1="60" y1="240" x2="460" y2="240" stroke="currentColor" stroke-width="2" />
<line x1="60" y1="40" x2="60" y2="240" stroke="currentColor" stroke-width="2" />
<!-- Function Curve: f(x) = x^2 -->
<path d="M 60 230 Q 160 230 360 40" fill="none" stroke="var(--graph-curve)" stroke-width="2" opacity="0.6" />
<!-- Tangent Line at x=2 -->
<line x1="100" y1="200" x2="400" y2="40" stroke="var(--graph-accent)" stroke-width="3" stroke-linecap="round" />
<!-- Point of Tangency -->
<circle cx="210" cy="140" r="5" fill="var(--graph-accent)" />
<!-- Labels -->
<text x="260" y="280" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600">Input (x)</text>
<text x="20" y="140" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600" transform="rotate(-90 20 140)">f(x)</text>
<!-- Annotations -->
<text x="225" y="145" font-family="var(--font-ui)" font-size="10" font-weight="700">Point (2, 4)</text>
<text x="360" y="80" font-family="var(--font-ui)" font-size="11" font-weight="700" fill="var(--graph-accent)">Slope = f'(2) = 4</text>
<text x="320" y="180" font-family="var(--font-ui)" font-size="10" fill="var(--graph-curve)">f(x) = x²</text>
</svg>
</div>

**Step-by-Step Explanation of the Graph:**
1.  **The Blue Curve:** This represents the function $f(x) = x^2$. As $x$ increases, the function grows quadratically.
2.  **The Point of Interest (x=2):** We want to find the derivative at $x=2$. At this point, $f(2) = 4$.
3.  **The Tangent Line (Orange):** The derivative $f'(2) = 2x = 4$. The line $y = 4x - 4$ touches the curve exactly at $x=2$ and has a slope of $4$.
4.  **Local Approximation:** Near $x=2$, the tangent line is a very good approximation of the curve. This is why we use derivatives to predict how a function will change for small movements in input.

### Partial Derivatives
When a function $f(x_1, x_2, \ldots, x_d)$ depends on multiple variables, the partial derivative $\frac{\partial f}{\partial x_i}$ measures the rate of change with respect to $x_i$ while keeping all other variables constant.

**Example:** Let $f(x, y) = x^2 + 3xy + y^3$.
- $\frac{\partial f}{\partial x} = 2x + 3y$
- $\frac{\partial f}{\partial y} = 3x + 3y^2$

---

## 2. Gradient and Hessian

In multivariable calculus, we organize derivatives into vectors and matrices to handle high-dimensional data efficiently.

### The Gradient Vector ($\nabla f$)
The gradient is a vector of all partial derivatives. It points in the direction of the steepest ascent.
<div class="formula-box">
$$\nabla f(\mathbf{x}) = \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \\ \vdots \\ \frac{\partial f}{\partial x_d} \end{bmatrix}$$
</div>

### The Hessian Matrix ($\mathbf{H}$)
The Hessian is a square matrix of second-order partial derivatives, representing the curvature of the function.
<div class="formula-box">
$$\mathbf{H}_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$$
</div>
For a 2D function:
$$\mathbf{H} = \begin{bmatrix} \frac{\partial^2 f}{\partial x^2} & \frac{\partial^2 f}{\partial x \partial y} \\ \frac{\partial^2 f}{\partial y \partial x} & \frac{\partial^2 f}{\partial y^2} \end{bmatrix}$$

---

## 3. Taylor Series and Linear Approximation

Machine learning algorithms often approximate complex functions using Taylor polynomials.

### First-Order (Linear) Approximation
<div class="formula-box">
$$f(\mathbf{x} + \Delta\mathbf{x}) \approx f(\mathbf{x}) + \nabla f(\mathbf{x})^T \Delta\mathbf{x}$$
</div>
This is the basis for **Gradient Descent**, where we take a step $\Delta\mathbf{x}$ in the direction that decreases $f$ the most.

### Second-Order (Quadratic) Approximation
<div class="formula-box">
$$f(\mathbf{x} + \Delta\mathbf{x}) \approx f(\mathbf{x}) + \nabla f(\mathbf{x})^T \Delta\mathbf{x} + \frac{1}{2} \Delta\mathbf{x}^T \mathbf{H}(\mathbf{x}) \Delta\mathbf{x}$$
</div>
This is used in **Newton's Method** for optimization.

---

## 4. Geometry of Hyperplanes

A hyperplane is a subspace of one dimension less than its ambient space (e.g., a line in 2D, a plane in 3D).

### Equation of a Hyperplane
<div class="formula-box">
$$\mathbf{w}^T \mathbf{x} + b = 0$$
</div>
- $\mathbf{w}$ is the **Normal Vector** (perpendicular to the surface).
- $b$ is the **Bias**.

### Distance from a Point to a Hyperplane
The signed distance from a point $\mathbf{x}_0$ to the hyperplane defined by $(\mathbf{w}, b)$ is:
<div class="formula-box">
$$d = \frac{\mathbf{w}^T \mathbf{x}_0 + b}{\|\mathbf{w}\|_2}$$
</div>

---

## 5. Mathematical Problem Solving

### Example 1: Multivariable Chain Rule
Let $z = f(u, v) = u^2 + v^2$, where $u = x \cos(y)$ and $v = x \sin(y)$. Find $\frac{\partial z}{\partial x}$.

**Solution:**
Using the chain rule: $\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}$.
1. $\frac{\partial z}{\partial u} = 2u, \quad \frac{\partial z}{\partial v} = 2v$
2. $\frac{\partial u}{\partial x} = \cos(y), \quad \frac{\partial v}{\partial x} = \sin(y)$
3. $\frac{\partial z}{\partial x} = (2u)\cos(y) + (2v)\sin(y) = 2(x\cos(y))\cos(y) + 2(x\sin(y))\sin(y)$
4. $\frac{\partial z}{\partial x} = 2x(\cos^2(y) + \sin^2(y)) = \mathbf{2x}$.

### Example 2: Finding Critical Points
Find the critical points of $f(x, y) = x^2 - 4x + y^2 + 6y + 10$ and determine if they are minima or maxima.

**Solution:**
1. Calculate Gradient: $\nabla f = \begin{bmatrix} 2x - 4 \\ 2y + 6 \end{bmatrix}$.
2. Set $\nabla f = 0$: $2x - 4 = 0 \implies x=2$; $2y + 6 = 0 \implies y=-3$.
3. Critical point: $(2, -3)$.
4. Calculate Hessian: $\mathbf{H} = \begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$.
5. Since $\mathbf{H}$ is positive definite (eigenvalues are 2, 2), the point $(2, -3)$ is a **Local Minimum**.

---

## 6. Advanced Question: Jacobian Matrix

**Problem:** In a neural network, if we have a transformation $\mathbf{h} = \sigma(\mathbf{W}\mathbf{x} + \mathbf{b})$, where $\sigma$ is an element-wise activation function, find the Jacobian matrix $\frac{\partial \mathbf{h}}{\partial \mathbf{x}}$.

**Solution:**
Let $\mathbf{z} = \mathbf{W}\mathbf{x} + \mathbf{b}$. Then $\mathbf{h} = \sigma(\mathbf{z})$.
By the chain rule for vectors:
<div class="formula-box">
$$\frac{\partial \mathbf{h}}{\partial \mathbf{x}} = \frac{\partial \mathbf{h}}{\partial \mathbf{z}} \frac{\partial \mathbf{z}}{\partial \mathbf{x}}$$
</div>
1. $\frac{\partial \mathbf{z}}{\partial \mathbf{x}} = \mathbf{W}$.
2. $\frac{\partial \mathbf{h}}{\partial \mathbf{z}}$ is a diagonal matrix because $\sigma$ is element-wise:
   $$\text{diag}(\sigma'(\mathbf{z})) = \begin{bmatrix} \sigma'(z_1) & 0 & \dots \\ 0 & \sigma'(z_2) & \dots \\ \vdots & \vdots & \ddots \end{bmatrix}$$
3. Result: <div class="formula-box">$$\frac{\partial \mathbf{h}}{\partial \mathbf{x}} = \text{diag}(\sigma'(\mathbf{z})) \mathbf{W}$$</div>
