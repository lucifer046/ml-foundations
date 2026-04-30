# Example: Optimization

Test your skills on Gradient Descent, Constraints, and Convexity!

---

## Exercise 1: Gradient Descent Step
**Scenario:** $L(w) = w^2 - 4w + 4$. You are currently at $w = 0$.
1. What is the gradient $\nabla L$ at $w = 0$?
2. If the learning rate is $\eta = 0.5$, what is your next position?

<details>
<summary><b>View Solution</b></summary>

1. Derivative is $2w - 4$. At $w = 0$, gradient is $\mathbf{-4}$. (The hill is tilting down towards the right).
2. Update: $w_{next} = 0 - (0.5 \times -4) = 0 + 2 = \mathbf{2}$.
**Fun fact:** The minimum of this function is actually at $w=2$. You reached it in one step!
</details>

---

## Exercise 2: Learning Rate Troubles
**Question:** What happens if your learning rate is **too big**?

<details>
<summary><b>View Solution</b></summary>

If the learning rate is too big, you will "overshoot" the valley. You might jump from one side of the hill to the other, and instead of getting closer to the bottom, you might actually start moving **away** from it!
</details>

---

## Exercise 3: Convex or Not?
**Question:** A loss function has a second derivative $f''(x) = -5$ for all $x$. Is this function easy for Gradient Descent to minimize?

<details>
<summary><b>View Solution</b></summary>

No! A negative second derivative means the function is "frowning" $\cap$. It is **Concave**, not convex. It looks like a mountain top, not a bowl. Gradient Descent would walk **away** from the top and keep going forever.
</details>

---

## Part 4: Conceptual Challenge
What is **"Stochastic"** Gradient Descent (SGD)?

> [!TIP]
> **Suggested Explanation:**
> Imagine you are trying to guess the weight of a giant bag of marbles. 
> - **Regular GD:** You count every single marble one by one. It's accurate, but it takes all day.
> - **Stochastic GD:** You just grab **one** random marble, weigh it, and make a guess for the whole bag. Then you grab another random one and update your guess. 
> It's a bit of a "messy" way to work, but it's much, much faster!
