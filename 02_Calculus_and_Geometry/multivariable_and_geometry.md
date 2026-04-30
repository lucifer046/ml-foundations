# Multivariable & Geometry



---

In the real world, things usually depend on more than one factor. **Partial Derivatives** help us understand how each factor contributes to the final result.

---

## Conceptual Intuition

Imagine you are making a giant bowl of **Fruit Punch**. The taste of the punch depends on two things: **Orange Juice** and **Pineapple Juice**.

- **Partial Derivative with respect to Orange Juice:** If you add one more cup of Orange Juice but keep the Pineapple Juice exactly the same, how much sweeter does the punch get?
- **Partial Derivative with respect to Pineapple Juice:** If you add one more cup of Pineapple Juice but keep the Orange Juice exactly the same, how much tangier does the punch get?

---

## Mathematical Symbol

We use a special curly "d" ($\partial$) to show that we are only looking at **part** of the function.

If our function is $f(x, y)$, we write:
- $\frac{\partial f}{\partial x}$: "How $f$ changes when $x$ moves." (Treat $y$ like a constant number).
- $\frac{\partial f}{\partial y}$: "How $f$ changes when $y$ moves." (Treat $x$ like a constant number).

---

## Example

Let's say our "Taste Function" is: $f(x, y) = x^2 + 3xy + 5$
(where $x$ is Orange Juice and $y$ is Pineapple Juice).

1.  **To find $\frac{\partial f}{\partial x}$:** Pretend $y$ is just a number like 10. 
    The derivative of $x^2$ is $2x$. 
    The derivative of $3xy$ (where $3y$ is a constant) is $3y$. 
    The derivative of 5 is 0.
    **Result:** $\frac{\partial f}{\partial x} = 2x + 3y$

2.  **To find $\frac{\partial f}{\partial y}$:** Pretend $x$ is a constant.
    The derivative of $x^2$ is 0.
    The derivative of $3xy$ is $3x$.
    **Result:** $\frac{\partial f}{\partial y} = 3x$

---

## Why it matters in ML

A Machine Learning model has thousands of "knobs" (parameters). To improve the model, the computer needs to know: "If I turn knob #42 just a tiny bit, does the error go up or down?" 

The **Partial Derivative** is the math that answers that question for every single knob!

---

The **Gradient** is a vector that collects all the partial derivatives into one single package. It is the single most powerful tool for finding the "way down" in Machine Learning.

---

## Conceptual Intuition

Imagine you are standing on a giant mountain at night. You can't see anything, but you have a **Magic Compass**. 

- This compass doesn't point North. Instead, it always points in the direction where the ground is **steepest going up**.
- If you want to climb the mountain as fast as possible, you follow the compass.
- If you want to find the valley (where the Loss is zero!), you walk **exactly the opposite way** of where the compass is pointing.

**The Gradient is that Magic Compass.**

---

## Mathematical Symbol

We use the "Nabla" symbol ($\nabla$) to represent the gradient. 

If $f(x, y)$ is our mountain, then:
$\nabla f = \begin{bmatrix} \frac{\partial f}{\partial x} \\ \frac{\partial f}{\partial y} \end{bmatrix}$$

It's just a list (vector) of all the ways the function can change.

---

## Two Rules of the Gradient

1.  **Steepest Ascent:** $\nabla f$ always points in the direction of the fastest "climb."
2.  **Perpendicular to Contours:** If you are walking around the mountain at the exact same height (a contour line), the gradient will always point perfectly "sideways" (90 degrees) away from your path.

---

## Example Case

**Question:** If the gradient of a loss function at a certain point is $$\nabla L = \begin{bmatrix} 5 \\ -2 \end{bmatrix}$$, which direction should you move your parameters to make the loss smaller?

**Solution:**
To make the loss **smaller**, we move in the **opposite** direction of the gradient.
Opposite of $$\begin{bmatrix} 5 \\ -2 \end{bmatrix}$$ is $$\mathbf{\begin{bmatrix} -5 \\ 2 \end{bmatrix}}$$.

> [!TIP]
> This is called **Gradient Descent**. It is the heartbeat of modern AI. Every time a computer "learns," it is just taking a tiny step in the opposite direction of the gradient.

---

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

---

A **Hyperplane** sounds like something from a sci-fi movie, but it's just a fancy name for a "divider" in high dimensions.

---

## Conceptual Intuition

- In **1D** (a line of numbers), a "hyperplane" is just a **Point**. A point splits a line into a left side and a right side.
- In **2D** (a flat piece of paper), a "hyperplane" is a **Line**. A line splits the paper into two sides.
- In **3D** (the room you are in), a "hyperplane" is a **Plane** (like a wall). A wall splits the room into two sides.

**What if you have 100 dimensions?** We can't see them, but we can still use math to build a "wall" that splits that 100D space into two sides. We call that wall a **Hyperplane**.

---

## Why do we need these "Walls"?

In Machine Learning, a hyperplane is our **Decision Boundary**.

Imagine you have data about patients. For every patient, you have 20 features (age, blood pressure, weight, etc.). This means the patient is a point in a **20-dimensional room**.
- We want to build a "Laser Wall" (Hyperplane) in that room.
- On one side of the wall, we put the "Healthy" patients.
- On the other side, we put the "Sick" patients.

---

## The Math of the Wall

Even in 100 dimensions, the math is exactly the same as for a simple line:
$w^T x + b = 0$

- $x$: A vector with 100 numbers (one for each feature).
- $w$: A vector with 100 weights (how important each feature is).
- $b$: A single number (the bias).

---

## Example Case

**Question:** If a hyperplane is defined as $3x_1 + 2x_2 - 5x_3 + 1 = 0$, how many dimensions does this space have?

**Solution:**
Look at the features ($x_i$). There are 3 of them ($x_1, x_2, x_3$).
So, this is a hyperplane in **3D space**. (Since it is in 3D, we can also just call it a "Plane").