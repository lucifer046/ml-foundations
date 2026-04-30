# Vector Spaces



---

A **Subspace** is a "flat" region of space that follows three simple rules. 

---

## Conceptual Intuition

Think of a **Subspace** like a flat sheet of paper that passes through the center of a room.
- You can move anywhere on that paper.
- If you start on the paper and move along a straight line, you stay on the paper.
- The most important thing: The paper **must** pass through the very center of the room (the origin, (0,0,0)). 

**Examples:**
- A **Line** through the center of the room is a subspace.
- A **Plane** (flat sheet) through the center is a subspace.
- The **entire room** itself is a subspace.

---

## The Three Rules of the "Club"

To be a subspace, a set of vectors must belong to the same "club" and follow these rules:

1.  **Rule 1: The Zero Rule.** The zero vector $\vec{0}$ must be in the club. (If you don't have (0,0), you aren't a subspace!).
2.  **Rule 2: The Adding Rule.** If you take two vectors in the club and add them together, the new vector must also be in the club.
3.  **Rule 3: The Stretching Rule.** If you take a vector in the club and stretch it (multiply by a number like 2 or -5), it must still be in the club.

---

## Why do we need this?

In Machine Learning, our data often has many features (like 100 features). But sometimes the data only really lives on a small part of that 100D space. 

Finding that "small part" (the subspace) is how we simplify our models and make them faster!

---

## Example: Is it a Subspace?

**Scenario 1:** All points on a line that does **not** pass through the origin (e.g., the line $y = x + 1$).
- **Is it a subspace?** No. (It fails Rule 1: it doesn't have (0,0)).

**Scenario 2:** A flat floor that goes on forever in all directions.
- **Is it a subspace?** Yes. (It has (0,0), and if you add or stretch vectors on the floor, you stay on the floor).

---

Every matrix $A$ has two very important subspaces: the **Column Space** and the **Row Space**.

---

## Column Space: The "Possible Outputs"

Imagine a matrix is a **Paint Mixer**.
- Each column of the matrix is a tube of paint ($v_1, v_2, \ldots$).
- You can mix these tubes in any amount you want (e.g., 2 drops of $v_1$ and 5 drops of $v_2$).
- The **Column Space** is the collection of **all the colors** you could possibly create.

**In Math:** The set of all linear combinations of the columns. 
**In ML:** If $Ax = b$, then $b$ **must** be in the Column Space of $A$. If it isn't, then the system $Ax = b$ is impossible to solve perfectly!

---

## Row Space: The "Input Importance"

The Row Space is the same thing, but for the **Rows** of the matrix. 
- It represents the directions in the input data that the matrix actually "sees" or "cares about."

---

## The Magic Fact: Rank

Here is something amazing: Even if a matrix has 100 rows and only 2 columns, the "size" of the Row Space is **exactly the same** as the "size" of the Column Space!

This "size" is called the **Rank** of the matrix ($r$).
- **Rank** = The number of independent directions in the matrix.

---

## Example Case

**Matrix:**
$A = \begin{bmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{bmatrix}$

1.  What are the columns?
2.  What is the **Column Space**?
3.  What is the **Rank**?

**Solution:**
1.  **Columns:** $$\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$$ and $$\begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$$.
2.  **Column Space:** All vectors that look like $$\begin{bmatrix} x \\ y \\ 0 \end{bmatrix}$$. This is a **2D Plane** sitting inside 3D space.
3.  **Rank:** There are 2 independent columns, so **Rank = 2**.

> [!NOTE]
> This matrix "lives" in 3D, but it can only produce outputs in a 2D plane. If you ask it to produce the point $(0, 0, 5)$, it can't do it!

---

The **Null Space** is a collection of all the vectors that a matrix "deletes" or turns into zero.

---

## Conceptual Intuition

Imagine a matrix is a **Magic Tunnel**.
- You send vectors (like people) into the tunnel.
- Most people come out the other side changed.
- But there is a special group of people who, when they go in, **simply vanish**! On the other side, they are just a puff of smoke (the zero vector).

The **Null Space** is the "Waiting Room" for those vectors that the matrix is going to delete.

---

## Mathematical Definition

The Null Space $\mathcal{N}(A)$ is the set of all vectors $x$ such that:
$Ax = 0$

- If a matrix is "Full Rank" (perfectly efficient), its Null Space is just the zero vector itself.
- If a matrix has "Free Variables" (it's redundant), its Null Space will be a line or a plane.

---

## Why it matters in ML

If a feature (like "Patient Shoe Size") is in the **Null Space** of our model, it means our model doesn't care about it! No matter what the shoe size is, it contributes **zero** to the final prediction.

---

## Example Case

**Matrix:**
$A = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$

**Question:** Is the vector $x = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$ in the Null Space of $A$?

**Solution:**
Calculate $Ax$:
$$\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 1 - 1 \\ 1 - 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$.

**Result:** **Yes!** This vector is "killed" by the matrix, so it belongs to the Null Space.

> [!TIP]
> **Rank-Nullity Theorem:**
> (Number of Directions it keeps) + (Number of Directions it kills) = (Total Dimensions).

---

In linear algebra, "Orthogonal" is just a fancy word for **Perpendicular** (at a 90-degree angle).

---

## Conceptual Intuition

Imagine you are standing in the corner of your room.
- One wall goes **North**.
- The other wall goes **East**.
- These two walls are **Orthogonal**. They meet at a perfect square corner.

The amazing thing in math is that the **Fundamental Subspaces** always meet at perfect square corners too!

---

## The Orthogonal Pairs

The four subspaces of a matrix $A$ come in two "Best Friend" pairs. In each pair, the two spaces are perfectly orthogonal to each other.

### Pair 1 (In the Input Space $\mathbb{R}^n$)
- **Row Space** $\perp$ **Null Space**
- Everything the matrix "Cares about" is perpendicular to everything the matrix "Kills."

### Pair 2 (In the Output Space $\mathbb{R}^m$)
- **Column Space** $\perp$ **Left Null Space**
- Everything the matrix "Can do" is perpendicular to everything the matrix "Can't do."

---

## Why is this useful?

If you have a vector that isn't in your subspace, you can **Project** it onto the subspace. This is like looking at the **Shadow** of the vector. 

This "Shadow" (Projection) is the closest possible point in the subspace to the original vector. This is how we solve problems that are otherwise "Impossible"!

---

## Summary Table

| Space | Perpendicular To... |
| :--- | :--- |
| **Row Space** | Null Space |
| **Column Space** | Left Null Space |

> [!IMPORTANT]
> If you know one space, you automatically know the "other half" of the world by looking at its orthogonal complement!