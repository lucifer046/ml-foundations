# Example: Dimensionality Reduction (PCA)

Test your intuition on "squashing" data and finding principal components!

---

## Exercise 1: The Curse of Dimensionality
**Question:** Why does adding more features (like "Favorite Color" and "Shoe Size") to a model sometimes make it **worse** instead of better?

<details>
<summary><b>View Solution</b></summary>

This is the **Curse of Dimensionality**. 
1. The computer gets distracted by unimportant details (noise).
2. The "volume" of the space grows so fast that the data points become very far apart.
3. It becomes harder for the model to find patterns because everything looks like an "empty desert."
</details>

---

## Exercise 2: PC Calculation
**Scenario:** You have two features: $x$ and $y$. After centering, your data looks like a long diagonal line $y = x$.
1. What direction is the **First Principal Component (PC1)**?
2. What direction is **PC2**?

<details>
<summary><b>View Solution</b></summary>

1. Since the data spreads most along the line $y=x$, **PC1** is the diagonal direction $\mathbf{[1, 1]^T}$.
2. **PC2** must be perpendicular to PC1. The direction perpendicular to $[1, 1]$ is $\mathbf{[1, -1]^T}$.
</details>

---

## Exercise 3: Variance Explained
**Question:** If the first principal component explains 99% of the variance in a 100-dimensional dataset, what does that tell you about the data?

<details>
<summary><b>View Solution</b></summary>

It means your data is almost perfectly **Linear**. Even though you have 100 features, they are all basically telling the same story. Your data is essentially a 1D line floating in 100D space!
</details>

---

## Part 4: Conceptual Challenge
Why do we "center" the data (subtract the mean) before running PCA?

> [!TIP]
> **Suggested Explanation:**
> Imagine you want to measure how much a group of kids is "wiggling." 
> - If the kids are all standing 100 feet away from you, it's hard to see the wiggle.
> - But if you bring the kids to the **center** of the room (right in front of you), every little wiggle is easy to see!
> **Centering** brings the data to the "camera" so we can measure the spread accurately.
