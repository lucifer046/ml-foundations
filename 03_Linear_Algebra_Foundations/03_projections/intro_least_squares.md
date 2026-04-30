# Introduction to Least Squares

In Machine Learning, we almost never get the "perfect" answer. Our data is messy, and our models are simple. **Least Squares** is the math we use to find the "best possible" answer.

---

## Conceptual Intuition

Imagine you are trying to draw a straight line through a bunch of points. 
- Some points are high.
- Some points are low.
- No straight line can go through **all** of them.

What do you do? You draw a line that goes right through the **middle** of the crowd. This line isn't perfect for anyone, but it is the "best fit" for everyone!

---

## The "Error" ($b - Ax$)

When we use our model ($Ax$) to guess the answer, we compare it to the real answer ($b$).
$\text{Error} = \text{Truth} - \text{Guess}$$

Our goal is to make the **Sum of all Errors** as small as possible. 

### Why "Squared"?
We square the errors (Least **Squares**) because we don't want a "too high" guess to cancel out a "too low" guess. We want every mistake to count!

---

## Why it matters in ML

This is exactly how **Linear Regression** works!
- $A$: Your features (e.g., Size of house).
- $b$: The actual prices.
- $x$: The magic weight (e.g., Price per square foot).

Since house prices aren't perfect, we use Least Squares to find the $x$ that fits the history of house prices best.

---

## Example Case

**Scenario:** You have 3 points: $(1, 1), (2, 2), (3, 2)$.
You want to fit a line $y = mx$.

1.  If $m = 1$, the guesses are: $1, 2, 3$. Errors are: $0, 0, 1$. **Sum of Squares = 1**.
2.  If $m = 0.8$, the guesses are: $0.8, 1.6, 2.4$. Errors are: $0.2, 0.4, 0.4$. **Sum of Squares = 0.04 + 0.16 + 0.16 = 0.36**.

**Result:** $m = 0.8$ is a **better fit** than $m = 1$ because the "Total Square Error" is smaller!
