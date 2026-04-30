# Example: Calculus for Machine Learning

Test your skills on limits, derivatives, and optimization!

---

## Exercise 1: Continuity Check
A piecewise function is defined as:
- $f(x) = 3x + 1$ for $x \leq 1$
- $f(x) = x^2 + c$ for $x > 1$

**Task:** Find the value of $c$ that makes the function continuous at $x = 1$.

<details>
<summary><b>View Solution</b></summary>

1. Left side at $x=1$: $3(1) + 1 = 4$.
2. Right side at $x=1$: $1^2 + c = 1 + c$.
3. For continuity, $4 = 1 + c \to \mathbf{c = 3}$.
</details>

---

## Exercise 2: The Steepness Test
**Question:** If $f(x) = x^3$, what is the slope of the function at $x = 2$? Is the function going up or down?

<details>
<summary><b>View Solution</b></summary>

1. Derivative of $x^3$ is $3x^2$.
2. At $x = 2$, slope = $3(2^2) = 3(4) = \mathbf{12}$.
3. Since the slope is positive, the function is going **Up**.
</details>

---

## Exercise 3: Finding the Valley
**Question:** Find the minimum point of the function $f(x) = x^2 - 10x + 25$.

<details>
<summary><b>View Solution</b></summary>

1. Derivative: $2x - 10$.
2. Set to zero: $2x - 10 = 0 \to 2x = 10 \to \mathbf{x = 5}$.
3. Check height: $f(5) = 5^2 - 10(5) + 25 = 25 - 50 + 25 = 0$.
4. **The valley is at (5, 0).**
</details>

---

## Part 4: High-Level Summary
Why do we care about the derivative of the **Loss Function**?

> [!TIP]
> **Suggested Explanation:**
> The Loss Function is like a giant bowl. We are a marble at the top of the bowl and we want to roll to the bottom. The **derivative** is the gravity that tells the marble which way is down. Without it, the marble (the computer) wouldn't know where to go!
