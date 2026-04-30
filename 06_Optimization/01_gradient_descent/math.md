# The Math of Gradient Descent

Gradient Descent is an **iterative** algorithm, which means it repeats the same step over and over until it reaches the goal.

---

## The Update Rule

The core formula for Gradient Descent is:
$w_{next} = w_{now} - \eta \nabla L(w)$

- $w_{now}$: Your current guess (parameters).
- $\eta$: The **Learning Rate** (the step size).
- $\nabla L(w)$: The **Gradient** (the direction of steepest uphill).
- $- \eta \nabla L(w)$: The "Small step downhill."

---

## Stochastic Gradient Descent (SGD)

In the real world, calculating the gradient for 1,000,000 data points is too slow. 
**SGD** is a trick: instead of looking at the whole mountain, you just look at **one random pebble** (one data point) and take a step based on that.
- It's a bit "jumpy" (noisy), but it is incredibly fast!

---

## Convergence

We say the algorithm has **Converged** when the steps become so tiny that we aren't really moving anymore. This happens when the gradient is very close to **Zero**.

> [!CAUTION]
> **The Local Minimum Trap:**
> If your mountain has multiple valleys, Gradient Descent might get stuck in a small "puddle" (local minimum) and never find the giant ocean (global minimum). 

---

## Example Case

**Question:** If your loss function is $L(w) = w^2$, your current position is $w = 5$, and your learning rate is $0.1$:
1. Calculate the gradient at $w = 5$.
2. Calculate the next position.

**Solution:**
1. Gradient of $w^2$ is $2w$. At $w=5$, gradient = $\mathbf{10}$.
2. Update: $w_{next} = 5 - (0.1 \times 10) = 5 - 1 = \mathbf{4}$.

**Result:** After one step, you moved from 5 to 4. You are rolling down the parabola!
