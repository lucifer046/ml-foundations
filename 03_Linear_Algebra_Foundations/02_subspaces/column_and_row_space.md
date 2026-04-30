# Column Space and Row Space

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
