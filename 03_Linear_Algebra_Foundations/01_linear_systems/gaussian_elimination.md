# Gaussian Elimination: The Cleaning Process

**Gaussian Elimination** is a step-by-step way to solve a giant pile of equations by "cleaning up" the numbers until the answer is obvious.

---

## Conceptual Intuition

Imagine you have a messy room full of toys. 
- You want to find your **Blue Car** and your **Red Ball**. 
- You start by putting all the "Cars" in one corner and all the "Balls" in another. 
- Once they are separated, it's very easy to count them!

**Gaussian Elimination** does this with math. It moves the numbers around so that each equation only tells you about **one** variable at a time.

---

## The Three "Legal" Moves

To clean up our equations, we are allowed to do three things (and the answers won't change!):
1.  **Swap:** Swap the order of two equations.
2.  **Multiply:** Multiply an entire equation by a number (like doubling everything).
3.  **Add/Subtract:** Add a multiple of one equation to another to "cancel out" a variable.

---

## Row Echelon Form (The Goal)

We want to reach a state where our matrix looks like a staircase. 
- The first equation has $x, y, z$.
- The second equation only has $y, z$.
- The third equation only has $z$.

Once it looks like this, we can solve for $z$, then use that to find $y$, then find $x$. This is called **Back-Substitution**.

---

## Example: A Mini Step

**Matrix:**
$\begin{bmatrix} 1 & 1 & | & 5 \\ 2 & 3 & | & 12 \end{bmatrix}$$

**Task:** Use a "Move" to get a 0 in the bottom-left corner.

**Solution:**
1.  Multiply the top row by 2: $$\begin{bmatrix} 2 & 2 & | & 10 \end{bmatrix}$$.
2.  Subtract this from the second row: $(2-2) = 0$, $(3-2) = 1$, $(12-10) = 2$.
3.  **New Matrix:**
$\begin{bmatrix} 1 & 1 & | & 5 \\ 0 & 1 & | & 2 \end{bmatrix}$$
Now we can see that **$y = 2$**! If $y=2$, then $x + 2 = 5 \to \mathbf{x = 3}$.
