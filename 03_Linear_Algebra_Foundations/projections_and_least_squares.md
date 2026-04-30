# Projections & Least Squares



---

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

---

If $Ax = b$ has no solution, we "cheat" by multiplying both sides by $A^T$. This creates a new system that **always** has a solution!

---

## Conceptual Intuition

Imagine you are trying to fit a giant square block into a small round hole. It won't fit! 
- $Ax = b$ is like that block.
- Multiplying by $A^T$ is like taking a **shadow** of the block.
- The shadow is flat and fits into the hole perfectly!

The **Normal Equations** find the "Shadow" of the answer.

---

## The Formula

To find the best $\hat{x}$, we solve:
$A^T A \hat{x} = A^T b$

### Why does this work?
By multiplying by $A^T$, we ensure that the error (the part that didn't fit) is **perpendicular** to everything our matrix can do. 

> [!IMPORTANT]
> If $A^T A$ is a good matrix (invertible), we can find the answer directly:
> $\hat{x} = (A^T A)^{-1} A^T b$$

---

## Step-by-Step Summary

1.  **Start:** You have a system $Ax = b$ that is impossible to solve.
2.  **Step 1:** Calculate $A^T A$ (This is a square matrix).
3.  **Step 2:** Calculate $A^T b$ (This is a vector).
4.  **Step 3:** Solve the new, simpler system.
5.  **End:** You have the "Best Guess" ($\hat{x}$).

---

## Example Case

**Matrix:** $A = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, b = \begin{bmatrix} 4 \\ 6 \end{bmatrix}$. 
*(Note: $Ax = b$ is impossible because $1x=4$ and $1x=6$ can't both be true!)*

**Task:** Solve the Normal Equations.

**Solution:**
1. $A^T A = \begin{bmatrix} 1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = [1+1] = \mathbf{2}$.
2. $A^T b = \begin{bmatrix} 1 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 6 \end{bmatrix} = [4+6] = \mathbf{10}$.
3. Solve $2\hat{x} = 10 \to \mathbf{\hat{x} = 5}$.

**Check:** Our best guess is 5. It's exactly halfway between the two targets (4 and 6)!

---

A **Projection Matrix** $P$ is a mathematical tool that takes any vector and "flattens" it onto a subspace.

---

## Conceptual Intuition

Imagine a **Flashlight**.
- You hold a vector (a stick) in the air.
- You turn on the flashlight directly above it.
- The **Shadow** on the floor is the **Projection**.
- The **Projection Matrix** is the flashlight! It does the work of squashing the stick onto the floor.

---

## Two Special Rules for $P$

If a matrix $P$ is a projection matrix, it must follow two "Common Sense" rules:

1.  **Rule 1: $P^2 = P$ (The Done-is-Done Rule).**
    If you shine a flashlight on a shadow, it's still just a shadow! Once you are on the floor, you can't be squashed any further.
2.  **Rule 2: $P = P^T$ (The Symmetric Rule).**
    The matrix must be "balanced" or symmetric.

---

## The Big Formula

For a matrix $A$ with independent columns, the matrix that projects anything onto the Column Space of $A$ is:

$P = A(A^T A)^{-1} A^T$

> [!TIP]
> This looks scary, but think of it as three steps:
> 1. $A^T$ takes the vector and checks "how much" it fits.
> 2. $(A^T A)^{-1}$ fixes the scale so the shadow is the right size.
> 3. $A$ puts the shadow back into the 3D world.

---

## Example Case

**Question:** If you project a vector that is **already** in the subspace, what happens?

**Solution:**
Nothing happens! Since the vector is already on the floor, the "flashlight" doesn't move it at all. 
**Math check:** If $b = Ax$ (it's already in the column space), then:
$Pb = P(Ax) = Ax = b$.
**Result:** $Pb = b$.