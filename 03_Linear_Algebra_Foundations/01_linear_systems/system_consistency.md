# Consistency: Does a Solution Exist?

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
