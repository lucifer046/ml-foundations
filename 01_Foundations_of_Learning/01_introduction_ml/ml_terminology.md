# Machine Learning Terminology

To talk like a Machine Learning engineer, we need to know the specific names for the things we use. 

---

## The Building Blocks

### Features ($x$)
These are the "clues" or inputs we give to the computer. 
- **Analogy:** If you are trying to guess if a fruit is a lemon or an orange, the **features** are the *color*, the *size*, and the *weight*.
- **Math:** We usually represent features as a vector $x = [x_1, x_2, \ldots, x_d]$.

### Labels ($y$)
This is the "answer" or the output we want the computer to guess.
- **Analogy:** The **label** is the actual name of the fruit: "Lemon" or "Orange."
- **Math:** The true answer is $y$.

### Training Data
The set of examples the computer looks at to learn.
- **Math:** A dataset $D$ is a collection of pairs: $D = \{(x_i, y_i) \mid i=1 \ldots n\}$.

---

## The Learning Parts

### Model ($f$)
The "brain" of the operation. It's the mathematical function that takes the features and tries to guess the label.
- **Math:** $\hat{y} = f(x)$
- **Note:** $\hat{y}$ (read as "y-hat") means "the model's guess." We want $\hat{y}$ to be as close to $y$ as possible!

### Parameters ($w, b$)
These are the "knobs" inside the model that the computer turns to get the right answer.
- **Weights ($w$):** How much importance the model gives to each feature.
- **Bias ($b$):** A starting offset for the model.

> [!NOTE]
> **Example:** $f(x) = w \cdot x + b$
> If $w$ is large for the "color" feature, it means the model thinks color is very important for deciding if it's a lemon.

---

## Summary Table

| Term | Symbol | Intuitive Meaning |
| :--- | :--- | :--- |
| **Feature** | $x$ | The "Clue" |
| **Label** | $y$ | The "Answer" |
| **Prediction** | $\hat{y}$ | The "Guess" |
| **Weights** | $w$ | Importance of the Clue |
| **Loss** | $L$ | How wrong the guess was |

---

## Visualizing a Dataset

Imagine we are predicting if a student will pass an exam based on **Hours Studied**.

| Student | Hours ($x$) | Result ($y$) |
| :--- | :--- | :--- |
| Alice | 10 | Pass (1) |
| Bob | 2 | Fail (0) |
| Charlie | 8 | Pass (1) |

In math language, our dataset $D$ has 3 points:
$x_1=10, y_1=1$
$x_2=2, y_2=0$
$x_3=8, y_3=1$
