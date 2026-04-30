# Maxima and Minima: Peaks and Valleys

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
