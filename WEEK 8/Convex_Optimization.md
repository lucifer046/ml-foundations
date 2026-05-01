# WEEK 8: Convex Optimization

Convexity is a fundamental property that makes optimization problems computationally tractable. In a convex optimization problem, any local minimum is guaranteed to be the global minimum, ensuring that algorithms like gradient descent converge to the optimal solution.

---

## 1. Convex Sets

A set $S \subseteq \mathbb{R}^n$ is **Convex** if the line segment connecting any two points in $S$ lies entirely within $S$.

### Mathematical Definition
For all $\mathbf{x}, \mathbf{y} \in S$ and all $\theta \in [0, 1]$:
$$\theta \mathbf{x} + (1-\theta) \mathbf{y} \in S$$

### Common Convex Sets
- **Hyperplanes:** $\{\mathbf{x} \mid \mathbf{a}^T \mathbf{x} = b\}$
- **Half-spaces:** $\{\mathbf{x} \mid \mathbf{a}^T \mathbf{x} \leq b\}$
- **Norm Balls:** $\{\mathbf{x} \mid \|\mathbf{x}\| \leq r\}$
- **Polyhedra:** The intersection of a finite number of half-spaces and hyperplanes.

---

## 2. Convex Functions

A function $f: \mathbb{R}^n \to \mathbb{R}$ is **Convex** if its domain is a convex set and the line segment between any two points on the graph of the function lies above or on the graph.

### Jensen's Inequality
$$f(\theta \mathbf{x} + (1-\theta) \mathbf{y}) \leq \theta f(\mathbf{x}) + (1-\theta) f(\mathbf{y})$$

### Conditions for Convexity
1.  **First-Order Condition:** $f$ is convex iff $f(\mathbf{y}) \geq f(\mathbf{x}) + \nabla f(\mathbf{x})^T (\mathbf{y} - \mathbf{x})$ for all $\mathbf{x}, \mathbf{y}$. (The tangent line is a global under-estimator).
2.  **Second-Order Condition:** A twice-differentiable function is convex iff its Hessian is positive semi-definite (PSD) for all $\mathbf{x}$:
    $$\nabla^2 f(\mathbf{x}) \succeq 0$$

---

## 3. Convex Optimization Problems

A convex optimization problem is one of the form:
$$\min f_0(\mathbf{x})$$
$$\text{subject to } f_i(\mathbf{x}) \leq 0, \quad i=1, \dots, m$$
$$\mathbf{a}_j^T \mathbf{x} = b_j, \quad j=1, \dots, p$$
Where $f_0, \dots, f_m$ are convex functions.

### Property of Global Optimality
For a convex optimization problem, if $\mathbf{x}^*$ is a local minimum, then $\mathbf{x}^*$ is also a global minimum. This property eliminates the risk of getting stuck in sub-optimal valleys.

---

## 4. Real-Life Application (Short Example)

**Resource Allocation:** A company wants to distribute its budget across different marketing channels to maximize total reach. If the cost functions are linear (convex) and the constraints are budgetary (linear), this becomes a convex optimization problem where the global optimal strategy can be found efficiently.

---

## 5. Mathematical Problem Solving

### Example 1: Proving Convexity
Show that $f(x) = e^{ax}$ is convex for any $a \in \mathbb{R}$.

**Solution:**
1. Compute first derivative: $f'(x) = a e^{ax}$.
2. Compute second derivative: $f''(x) = a^2 e^{ax}$.
3. Since $a^2 \geq 0$ and $e^{ax} > 0$ for all $x$, then $f''(x) \geq 0$.
4. By the second-order condition, $f(x)$ is **Convex**.

### Example 2: Operations that Preserve Convexity
Is the sum of two convex functions $f(\mathbf{x}) = g(\mathbf{x}) + h(\mathbf{x})$ also convex?

**Solution:**
1. By definition: $g(\theta \mathbf{x} + (1-\theta) \mathbf{y}) \leq \theta g(\mathbf{x}) + (1-\theta) g(\mathbf{y})$.
2. And: $h(\theta \mathbf{x} + (1-\theta) \mathbf{y}) \leq \theta h(\mathbf{x}) + (1-\theta) h(\mathbf{y})$.
3. Adding the inequalities: $(g+h)(\theta \mathbf{x} + (1-\theta) \mathbf{y}) \leq \theta(g(\mathbf{x}) + h(\mathbf{x})) + (1-\theta)(g(\mathbf{y}) + h(\mathbf{y}))$.
4. **Yes**, the sum is convex.

---

## 6. Advanced Question: Intersection of Convex Sets

**Problem:** Prove that the intersection of any number of convex sets is also a convex set.

**Solution:**
1. Let $S = \bigcap_{i \in I} C_i$, where each $C_i$ is a convex set.
2. Pick any two points $\mathbf{x}, \mathbf{y} \in S$.
3. Since $\mathbf{x}, \mathbf{y} \in S$, it must be that $\mathbf{x}, \mathbf{y} \in C_i$ for every $i \in I$.
4. Because each $C_i$ is convex, the line segment $\mathbf{L} = \{\theta \mathbf{x} + (1-\theta) \mathbf{y} \mid \theta \in [0, 1]\}$ is contained in $C_i$ for every $i$.
5. Since $\mathbf{L} \subseteq C_i$ for all $i$, then $\mathbf{L} \subseteq \bigcap C_i = S$.
6. Therefore, $S$ is convex. (Q.E.D.)
