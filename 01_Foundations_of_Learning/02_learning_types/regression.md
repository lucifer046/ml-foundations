# Supervised Learning: Regression

Regression is a type of learning where we predict a **continuous numerical value**.

---

## The 5th Grade Explanation

Imagine you are trying to guess how tall a tree will be based on its age. 
- A 1-year-old tree might be 2 feet tall.
- A 2-year-old tree might be 4 feet tall.
- A 3-year-old tree might be 6 feet tall.

You can guess that a 4-year-old tree will be **8 feet** tall. Because the answer can be **any number** (like 8.1, 8.5, or 7.9), we call this **Regression**.

---

## Mathematical Model

In regression, we try to fit a line (or a curve) to our data points. The simplest version is a **Linear Model**:

$f(x) = w \cdot x + b$

- $x$: The input (e.g., Age of the tree).
- $f(x)$: The predicted output (e.g., Height).
- $w$: The slope (how fast the tree grows).
- $b$: The starting height (how tall it was when planted).

---

## Measuring Error (MSE)

Since we are dealing with numbers, we measure our error by seeing how far our guess is from the real number. We use **Mean Squared Error (MSE)**:

$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

> [!NOTE]
> **Example:** 
> - True height $y = 10$
> - Guess $\hat{y} = 8$
> - Error = $10 - 8 = 2$
> - Squared Error = $2^2 = 4$

---

## Example Case

**Scenario:** You are predicting the price of a chocolate bar based on its weight.
- Weight $x = 100g$, Price $y = \$2.00$
- Weight $x = 200g$, Price $y = \$4.00$

**Question:** If you see a $150g$ chocolate bar, what is your prediction? Is this Regression or Classification?

**Solution:**
- Prediction: **$3.00**
- Type: **Regression** (because the price is a continuous number).
