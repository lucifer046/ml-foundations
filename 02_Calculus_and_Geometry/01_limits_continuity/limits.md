# Limits: Getting Closer

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
