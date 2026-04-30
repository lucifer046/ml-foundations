# Example: Geometry and Gradients

Test your understanding of high-dimensional dividers and multidimensional slopes!

---

## Exercise 1: The Normal Vector
**Question:** A line on a 2D graph is $x + y = 0$. 
1. What is the normal vector $w$?
2. Draw (in your mind) which way the normal vector points.

<details>
<summary><b>View Solution</b></summary>

1. The normal vector $w$ comes from the coefficients of $x$ and $y$. Here, it is $\mathbf{\begin{bmatrix} 1 \\ 1 \end{bmatrix}}$.
2. The vector $[1, 1]$ points diagonally up and to the right. The line itself is perpendicular to this direction.
</details>

---

## Exercise 2: Partial Derivative Master
**Question:** Find the partial derivatives for $f(x, y, z) = x^2 y + z$.
1. $\frac{\partial f}{\partial x}$
2. $\frac{\partial f}{\partial y}$
3. $\frac{\partial f}{\partial z}$

<details>
<summary><b>View Solution</b></summary>

1. $\frac{\partial f}{\partial x} = \mathbf{2xy}$ (Treat $y, z$ as constants).
2. $\frac{\partial f}{\partial y} = \mathbf{x^2}$ (Treat $x, z$ as constants).
3. $\frac{\partial f}{\partial z} = \mathbf{1}$ (Everything else is constant).
</details>

---

## Exercise 3: Gradient Interpretation
**Question:** You calculate the gradient of your error function and find $$\nabla L = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$. 

What does this mean for your model? Are you at a peak, a valley, or just a flat spot?

<details>
<summary><b>View Solution</b></summary>

A gradient of zero means you are at a **Critical Point**. The "Magic Compass" is spinning because there is no steepest way up — the ground is flat! 
In ML training, this usually means you have reached the **Minimum** (the bottom of the bowl) and your model is finished learning.
</details>

---

## Part 4: Conceptual Challenge
Why is the **Gradient** always perpendicular to the **Level Curves**?

> [!TIP]
> **Suggested Explanation:**
> Imagine a hill. A "Level Curve" is a path that stays at the exact same height (like walking around the hill). 
> - If you walk along the level curve, you aren't going up or down at all.
> - The **Gradient** is the direction that goes up as fast as possible. 
> - To go up as fast as possible, you have to turn **away** from the level path and go straight towards the peak. That "turning away" is a 90-degree angle (perpendicular)!
