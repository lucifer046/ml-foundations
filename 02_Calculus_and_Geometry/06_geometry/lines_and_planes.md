# Lines and Planes: Geometric Foundations

In Machine Learning, we don't just use formulas; we use **Shapes**. The most basic shapes are lines and planes.

---

## Conceptual Intuition

- **A Line:** Think of a piece of string stretched tight. It goes in one direction.
- **A Plane:** Think of the top of your desk. It is a flat surface that goes in two directions (length and width).

In ML, we use these shapes to "cut" through our data. If you have a group of Red dots and Blue dots, you might try to draw a **Line** between them to separate them.

---

## The Normal Vector ($w$)

How do we describe a line or a plane in math? We use a **Normal Vector**.

Imagine a table. Now imagine a pencil standing perfectly upright on the table. That pencil is the **Normal Vector**. 
- It is perpendicular (at a 90-degree angle) to every direction on the table.
- If you know which way the pencil is pointing, you know exactly how the table is tilted!

---

## The Equation of a Shape

A line or a plane can be written like this:
$w^T x + b = 0$

- $w$: The **Normal Vector** (the tilt of our pencil).
- $x$: Any point on the line or plane.
- $b$: The **Bias** (how far the shape is from the center).

---

## Example Case

**Question:** If you have a line with a normal vector $w = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ and a bias $b = -2$, does the point $x = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ lie on the line?

**Solution:**
Check the formula: $w^T x + b = 0$
$(1)(1) + (1)(1) - 2 = 1 + 1 - 2 = \mathbf{0}$.
**Yes!** Since the answer is zero, the point is exactly on the line.

> [!NOTE]
> If the answer was greater than zero (like +5), the point would be on one side of the line. If it was less than zero (like -3), it would be on the other side. This is how a computer "classifies" data!
