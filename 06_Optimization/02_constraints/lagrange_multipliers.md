# Constrained Optimization: Lagrange Multipliers

Usually, we want to find the minimum of a function. But sometimes, we have **Rules** (Constraints) that we must follow.

---

## Conceptual Intuition

Imagine you are playing a game of **Tag**.
- You want to run to the other side of the field as fast as possible.
- **BUT**, you are tied to a rope that is only 10 feet long.

You can't just run anywhere! You have to find the fastest way that **stays within the 10 feet**. 
**Lagrange Multipliers** is the math that balances "Going where you want" vs "Staying on the rope."

---

## The Lagrangian Formula

To solve a problem like: 
"Minimize $f(x)$ while following the rule $g(x) = 0$"

We create a new "Super Function" called the **Lagrangian**:
$\mathcal{L}(x, \lambda) = f(x) + \lambda g(x)$$

- $f(x)$: What you want (the Goal).
- $g(x)$: The rule you must follow (the Constraint).
- $\lambda$: The **Lagrange Multiplier**. It measures how much the rule is "pulling" on you.

---

## The Solution

To find the answer, we set the gradient of the Lagrangian to zero:
$\nabla \mathcal{L} = 0$$

This means: $\nabla f = -\lambda \nabla g$.
**Intuition:** At the best point, the direction you **want** to go is perfectly balanced by the direction the **rule** is pulling you.

---

## Example Case

**Scenario:** You want to minimize $x + y$ (total cost) but you must satisfy $x^2 + y^2 = 1$ (you must stay on a circle).

**Task:** Write the Lagrangian.

**Solution:**
1. Goal: $f(x, y) = x + y$.
2. Rule: $g(x, y) = x^2 + y^2 - 1 = 0$.
**Result:** $\mathcal{L} = (x + y) + \lambda(x^2 + y^2 - 1)$.

> [!NOTE]
> In Support Vector Machines (SVMs), we use this to find the widest "road" between two classes while making sure no data points are standing in the middle of the road!
