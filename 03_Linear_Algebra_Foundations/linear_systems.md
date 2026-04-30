# Linear Systems



---

A **Linear System** is a collection of equations where we try to find the values of unknown variables. In Machine Learning, these unknowns are usually the **Weights** of our model.

---

## Conceptual Intuition

Imagine you go to a shop and buy snacks for your friends:
- **Bag 1:** 2 Chocolates and 1 Juice box = \$5
- **Bag 2:** 1 Chocolate and 1 Juice box = \$3

Can you guess how much 1 Chocolate costs?
- If we subtract Bag 2 from Bag 1, we see that 1 extra Chocolate makes the price go up by \$2.
- So, **1 Chocolate = \$2**.
- And that means **1 Juice box = \$1**.

You just solved a linear system!

---

## Matrix Form: $Ax = b$

Instead of writing out long equations, we use **Matrices** to keep everything organized.

$Ax = b$

- $A$ (The **Matrix**): A table of all the "counts" (e.g., how many chocolates and juices in each bag).
- $x$ (The **Unknowns**): The "prices" we are trying to find.
- $b$ (The **Targets**): The total "results" (e.g., the final bills).

---

## Why it matters in ML

Imagine you have a dataset with 1,000 students. For each student, you have their "Hours Studied" and their "Final Grade."
- Each student is like one of our "Bags" of snacks.
- The "Hours Studied" is the count ($A$).
- The "Final Grade" is the bill ($b$).
- We want to find the **Weight** ($x$) that explains how hours turn into grades!

---

## Example Case

**Scenario:** 
- Equation 1: $x + y = 10$
- Equation 2: $x - y = 2$

**Question:** What are the values of $x$ and $y$?

**Solution:**
1. Add the two equations together: $(x+y) + (x-y) = 10 + 2 \to 2x = 12 \to \mathbf{x = 6}$.
2. Put $x=6$ back into the first one: $6 + y = 10 \to \mathbf{y = 4}$.

---

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

---

In math, just because you ask a question doesn't mean there is an answer. **Consistency** tells us if a linear system can actually be solved.

---

## Conceptual Intuition

Imagine you are playing a guessing game with three friends.

- **Case 1: The Perfect Clues.** 
  "I am thinking of a number. It is bigger than 5 and smaller than 7."
  **Result:** The number is 6! (One solution).
- **Case 2: The Liar.**
  "I am thinking of a number. It is exactly 10 AND it is exactly 2."
  **Result:** Impossible! (No solution).
- **Case 3: The Boring Friend.**
  "I am thinking of a number. It is a number."
  **Result:** Every number works! (Infinite solutions).

---

## Three Types of Systems

### Independent (Consistent)
There is exactly one answer. Geometrically, the lines intersect at a single point.

### Inconsistent
There is no answer. Geometrically, the lines are **Parallel** — they never touch!

### Dependent (Redundant)
The equations are actually the same. Geometrically, the lines are right on top of each other.

---

## Pivot and Free Variables

When we clean up our matrix (Gaussian Elimination):
- **Pivot:** A variable that has a clear value.
- **Free Variable:** A variable that can be anything (this happens when we have "infinite solutions").

> [!NOTE]
> **Rank:** The number of pivots you find is called the **Rank** of the matrix. It tells you how much "unique information" is actually in your equations.

---

## Example Case

**System:**
1. $x + y = 5$
2. $2x + 2y = 10$

**Question:** Is this system consistent? How many solutions are there?

**Solution:**
Look at Equation 2. It is just Equation 1 multiplied by 2! It doesn't give us any new information.
**Result:** This system is **Dependent** and has **Infinitely Many Solutions**. (e.g., $x=0, y=5$ or $x=1, y=4$ or $x=2.5, y=2.5$).