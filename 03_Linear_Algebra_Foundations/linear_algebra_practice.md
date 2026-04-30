# Linear Algebra Practice



---

Test your skills on linear systems, subspaces, and projections!

---

## Exercise 1: Gaussian Challenge
Solve the following system using the "cleaning" method:
- $x + y = 10$
- $2x - y = 2$

<details>
<summary><b>View Solution</b></summary>

1. Add the equations: $(x+y) + (2x-y) = 10 + 2 \to 3x = 12 \to \mathbf{x = 4}$.
2. Plug $x=4$ back in: $4 + y = 10 \to \mathbf{y = 6}$.
</details>

---

## Exercise 2: Column Space Check
**Matrix:** $A = \begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix}$
1. What is the **Column Space**?
2. What is the **Null Space**?

<details>
<summary><b>View Solution</b></summary>

1. **Column Space:** Both columns are the same $$(\begin{bmatrix} 1 \\ 0 \end{bmatrix})$$. So the column space is a **Line** along the x-axis.
2. **Null Space:** We want $Ax = 0$. That happens if $x_1 + x_2 = 0$. So any vector like $\mathbf{\begin{bmatrix} 1 \\ -1 \end{bmatrix}}$ is in the null space.
</details>

---

## Exercise 3: The Normal Equations
**System:** $1x = 5$ and $1x = 7$. (Impossible!)
**Task:** Use the Normal Equations to find the best-fit $\hat{x}$.

<details>
<summary><b>View Solution</b></summary>

1. $A = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, b = \begin{bmatrix} 5 \\ 7 \end{bmatrix}$.
2. $A^T A = [1+1] = 2$.
3. $A^T b = [5+7] = 12$.
4. $2\hat{x} = 12 \to \mathbf{\hat{x} = 6}$.
</details>

---

## Part 4: Conceptual Challenge
Why is the **Rank** of a matrix so important?

> [!TIP]
> **Suggested Explanation:**
> Imagine you are a detective with 100 witnesses. 
> - If all 100 witnesses tell you the **exact same thing**, you only really have **1** piece of information. (Rank = 1).
> - If every witness tells you a **new secret**, you have **100** pieces of information. (Rank = 100).
> **Rank** tells you how many "new secrets" your data actually contains!