# Calculus Foundations



---

Calculus is the math of "approaching" things. A **Limit** is the most basic part of that.

---

## Conceptual Intuition

Imagine you are walking toward a wall. 
- You take a step and get halfway there. 
- You take another step and get halfway again. 
- You keep doing this forever.

**Will you ever touch the wall?** Theoretically, no! But you will get so close that you are basically AT the wall. The **Limit** is that wall. It's the place you are trying to get to, even if you never actually reach it.

---

## Mathematical Definition

We write a limit like this:
$\lim_{x \to c} f(x) = L$$

This means: "As the input $x$ gets closer and closer to the number $c$, the function $f(x)$ gets closer and closer to the answer $L$."

> [!IMPORTANT]
> The limit doesn't care about what happens exactly at $c$. It only cares about the **journey** as you get near it.

---

## Why do we need this?

Sometimes, a math problem is impossible at a certain point.
- **Example:** $f(x) = \frac{x^2 - 1}{x - 1}$
- If you put $x = 1$, you get $0 / 0$. The computer explodes!
- But if you look at the **Limit** as $x$ approaches 1, you find that the answer is clearly **2**.

---

## One-Sided Limits

Imagine a broken bridge.
- If you approach from the **Left** side, you might be 10 feet high.
- If you approach from the **Right** side, the bridge has fallen and you are at 0 feet.

If the two sides don't agree, we say the **Limit does not exist**.

| Side | Math Symbol |
| :--- | :--- |
| **Left** | $\lim_{x \to c^-} f(x)$ |
| **Right** | $\lim_{x \to c^+} f(x)$ |

---

## Example Case

**Question:** What is the limit of $f(x) = 2x + 5$ as $x$ approaches 3?

**Solution:**
Since this function is simple and has no holes, we can just plug in the number!
$\lim_{x \to 3} (2x + 5) = 2(3) + 5 = 6 + 5 = \mathbf{11}$.

---

A function is **continuous** if there are no breaks, jumps, or holes in its graph.

---

## Conceptual Intuition

Imagine you are drawing a line with a crayon. 
- If you can draw the whole line **without lifting your crayon** off the paper, the line is **continuous**.
- If you have to jump to another spot to keep drawing, it is **discontinuous**.

---

## The Three Rules

For a function to be continuous at a point $a$, it must pass three tests:
1.  **Defined:** $f(a)$ must exist (there's a point there).
2.  **Approachable:** The limit $\lim_{x \to a} f(x)$ must exist (the two sides of the road meet).
3.  **Matches:** The place the road leads to must be the same as where the point is.

$\lim_{x \to a} f(x) = f(a)$$

---

## Why it matters in ML

Most Machine Learning models (like Neural Networks) require the functions to be continuous. If a function "jumps" suddenly, the computer gets confused and doesn't know how to improve the model. 

We like "smooth" functions because they are easy to navigate!

---

## Example Case: The Broken Road

A road is defined by two parts:
- Part 1: $y = x^2$ for $x < 2$
- Part 2: $y = x + 2$ for $x \geq 2$

**Question:** Is the road continuous at $x = 2$?

**Solution:**
1.  Check the Left Side ($x < 2$): $2^2 = 4$.
2.  Check the Right Side ($x \geq 2$): $2 + 2 = 4$.
3.  **Result:** Since both sides meet at the same height (4), the road is **continuous**!

> [!TIP]
> This is exactly how we build complex functions in AI — by stitching simple ones together so they are smooth at the joints.

---

The **Derivative** is the most important concept in all of Machine Learning. It tells us how a function is changing at any given moment.

---

## Conceptual Intuition

Imagine you are standing on a big, curvy slide at the playground.
- At the very top, the slide is **flat** (slope = 0).
- In the middle, the slide is **very steep** (slope is high).
- At the bottom, it becomes **flat** again.

The **Derivative** is just a number that tells you exactly how steep the slide is at the spot where your feet are!

---

## Mathematical Definition

The derivative of a function $f(x)$ is written as $f'(x)$ or $\frac{df}{dx}$. It represents the **slope** of the tangent line.

$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$

> [!NOTE]
> **Common Derivatives to Memorize:**
> - $x^2 \to 2x$
> - $x^3 \to 3x^2$
> - $5x \to 5$
> - Constant (like 7) $\to 0$ (Because a flat line has no slope!)

---

## Why it matters in ML: Gradient Descent

Imagine you are blindfolded on a mountain and want to get to the bottom. 
- You feel the ground with your foot. 
- If the ground slopes **Down** to the left, you step left.
- If it slopes **Down** to the right, you step right.

In ML, the "Mountain" is the **Loss Function**. We use the **Derivative** to find which way is "Down" so we can reach the minimum error!

---

## Example Case

**Question:** If your Loss Function is $L(w) = w^2$, and your current weight is $w = 3$, what is the slope (derivative)? Which way should you move $w$ to make the loss smaller?

**Solution:**
1.  **Derivative:** The derivative of $w^2$ is $2w$.
2.  **At $w=3$:** The slope is $2 \times 3 = \mathbf{6}$.
3.  **Direction:** Since the slope is positive (+6), the mountain is going **Up** as $w$ increases. To go **Down**, you should **decrease** $w$ (move toward 0).

---

Linear Approximation is a way to simplify complicated, curvy functions by pretending they are straight lines for a moment.

---

## Conceptual Intuition

Look at a globe of the Earth. It is round (curvy). 
But look at the floor in your room. It looks perfectly **flat**.

Why? Because you have **zoomed in** so much on the giant sphere of the Earth that the small part you are standing on looks like a flat plane. 

**Linear Approximation** does exactly this: it zooms in on a curve until it looks like a straight line.

---

## The Formula

We can guess the value of a function near a point $a$ using this formula:

$f(x) \approx f(a) + f'(a) \cdot (x - a)$

- $f(a)$: Where we are starting (the height).
- $f'(a)$: The slope (the direction).
- $(x - a)$: How far we have walked from the start.

---

## Why is this useful?

Computers can calculate straight lines very, very fast. They can calculate curves (like sines, logarithms, or exponents) more slowly. 

In AI, we often replace a giant, scary function with a simple line so we can make decisions quickly!

---

## Example Case

**Scenario:** $f(x) = x^2$. We are at $x = 1$.
1. What is $f(1)$?
2. What is the derivative $f'(1)$?
3. What is the linear approximation at $x = 1.1$?

**Solution:**
1.  **Height:** $f(1) = 1^2 = 1$.
2.  **Slope:** Derivative of $x^2$ is $2x$. So $2(1) = 2$.
3.  **Approximation:**
    $f(1.1) \approx 1 + 2 \cdot (1.1 - 1)$
    $f(1.1) \approx 1 + 2 \cdot (0.1)$
    $f(1.1) \approx 1 + 0.2 = \mathbf{1.2}$

*(The exact answer is $1.1^2 = 1.21$. Our "flat line" guess of 1.2 was very close!)*

---

In Machine Learning, we are always searching for the **Lowest Point** (the Minimum Loss). To do that, we need to know how to find the peaks and valleys of a function.

---

## Conceptual Intuition

Imagine a roller coaster track.
- A **Maximum** is the very top of a hill.
- A **Minimum** is the very bottom of a loop.

At both the very top and the very bottom, for just a tiny split second, the track is **perfectly flat**.

---

## How to find them (The Slope Test)

To find a peak or a valley, we look for places where the slope is **Zero**.

**Step 1:** Find the derivative $f'(x)$.
**Step 2:** Solve for $f'(x) = 0$. These points are called **Critical Points**.

---

## Which one is it? (The Concavity Test)

Once you find a flat spot, how do you know if it's a top or a bottom? We look at the **Second Derivative** $f''(x)$.

| Second Derivative | Shape | What it is |
| :--- | :--- | :--- |
| **Positive (+)** | Smily Face $\cup$ | **Minimum** (The Bottom) |
| **Negative (-)** | Frown Face $\cap$ | **Maximum** (The Top) |

---

## Example Case

**Question:** Your loss function is $L(w) = w^2 - 4w + 5$. Find the value of $w$ that makes the loss as small as possible.

**Solution:**
1.  **Find the Slope:** Derivative is $2w - 4$.
2.  **Set to Zero:** $2w - 4 = 0 \to 2w = 4 \to \mathbf{w = 2}$.
3.  **Check if Minimum:** Second derivative is $2$ (which is positive).
4.  **Result:** At $w = 2$, we have a **Minimum**. The computer is happy!

> [!TIP]
> This is exactly what the computer does when it "trains." It keeps moving until it finds a spot where the slope is zero and the shape is a "Smily Face."