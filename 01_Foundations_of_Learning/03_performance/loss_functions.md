# Loss Functions: The Scoredcard

A **Loss Function** is a way to put a number on "how bad" the model is doing. The smaller the number, the better the model.

---

## Regression Loss: Squared Error

In regression, we care about the **distance** between the guess and the truth.

$\text{Error} = y - \hat{y}$$
$$\text{Squared Error} = (y - \hat{y})^2$$

### Why square it?
1.  **Positive only:** It doesn't matter if you guessed too high or too low; the error should count against you.
2.  **Punish big errors:** If you are off by 2, your loss is 4. If you are off by 10, your loss is **100!** The model hates big mistakes and will work hard to fix them first.

---

## Classification Loss: 0/1 Loss

In classification, we use the **Indicator Function** $\mathbb{1}$.

$\text{Loss} = \mathbb{1}[\hat{y} \neq y]$$

- If $\hat{y}$ is NOT equal to $y$, the loss is **1**.
- If they are equal, the loss is **0**.

> [!TIP]
> **Accuracy vs Loss:** 
> Accuracy is "How many did I get right?" 
> Loss is "How many did I get wrong?"
> **Accuracy = 1 - Loss**

---

## Mathematical Challenge (5th Grade Math)

**Scenario:** We have 4 predictions.
- Point 1: True=10, Guess=8
- Point 2: True=5, Guess=5
- Point 3: True=2, Guess=4
- Point 4: True=1, Guess=0

**Task:** Calculate the **Mean Squared Error (MSE)**.

**Solution:**
1. Error 1: $(10-8)^2 = 2^2 = 4$
2. Error 2: $(5-5)^2 = 0^2 = 0$
3. Error 3: $(2-4)^2 = (-2)^2 = 4$
4. Error 4: $(1-0)^2 = 1^2 = 1$

**Sum of Errors:** $4 + 0 + 4 + 1 = 9$
**Mean (Average):** $9 / 4 = \mathbf{2.25}$
