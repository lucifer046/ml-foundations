# WEEK 11: Probability Theory and the Exponential Family

This module provides a **complete, premium‑styled** foundation for probability theory – from the axioms of a probability space, through set‑theoretic rules, conditional probability, random variables, expectation, variance, common distributions, joint distributions, transformations, the Exponential Family, and convergence theorems.

---

## I. Fundamentals of Probability Space

### 1. Definition: Random Experiment
A *random experiment* is any process that generates an observation, yet its exact outcome cannot be predicted beforehand (e.g., tossing a coin, rolling a die, measuring a sensor).

### 2. Sample Space ($\Omega$)
The **sample space** is the set of all possible outcomes of the experiment.

- **Example – Coin toss:** $\Omega = \{\text{H}, \text{T}\}$
- **Example – Two‑coin toss:** $\Omega = \{\text{HH}, \text{HT}, \text{TH}, \text{TT}\}$

### 3. Event ($E$)
An **event** is any subset of $\Omega$. If the outcome lies in $E$, the event occurs.

- **Example – At least one head (two‑coin toss):** $E = \{\text{HH}, \text{HT}, \text{TH}\}$

### 4. Formal Probability Space $(\Omega, \mathcal{F}, \mathbb{P})$
* $\Omega$ – sample space.
* $\mathcal{F}$ – a **$\sigma$‑algebra** (collection of events closed under complement and countable unions).
* $\mathbb{P}:\mathcal{F}\to[0,1]$ – probability measure assigning a number to each event.

### 5. Kolmogorov Axioms
> [!NOTE]
> 1. **Non‑negativity:** $\mathbb{P}(A)\ge 0$.
> 2. **Normalization:** $\mathbb{P}(\Omega)=1$.
> 3. **Countable additivity:** For disjoint $A_1,A_2,\dots$, $\mathbb{P}\big(\bigcup_i A_i\big)=\sum_i\mathbb{P}(A_i)$.

### 6. Set-Theoretic Rules
* **Union ($A\cup B$):** $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
* **Intersection ($A\cap B$):** Both $A$ *and* $B$ occur.
* **Complement ($A^c$):** $P(A^c)=1-P(A)$.
* **Mutually exclusive (disjoint):** $A\cap B=\emptyset\Rightarrow P(A\cup B)=P(A)+P(B)$.

#### Practice Question 1
**Q:** A fair six‑sided die is rolled. Let $A$ be "even" and $B$ be "greater than 3". Compute $P(A\cup B)$.  
**Solution:**
1. $\Omega=\{1,2,3,4,5,6\}$, each outcome $1/6$.
2. $A=\{2,4,6\}\Rightarrow P(A)=3/6=0.5$.
3. $B=\{4,5,6\}\Rightarrow P(B)=3/6=0.5$.
4. $A\cap B=\{4,6\}\Rightarrow P(A\cap B)=2/6=1/3$.
5. $P(A\cup B)=0.5+0.5-1/3=\mathbf{2/3}$.

---

## II. Conditional Probability, Independence & Law of Total Probability

### A. Conditional Probability & Independence
* **Union ($\cup$):** At least one of the events occurs.
* **Intersection ($\cap$):** Both events occur simultaneously.

#### 1. Conditional Probability
$$P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(B)>0$$
Interpretation: **restrict** the sample space to $B$ and ask how likely $A$ is inside that smaller world.

#### 2. Multiplication Rule
$$P(A\cap B)=P(A\mid B)\,P(B)=P(B\mid A)\,P(A)$$
Allows chaining of many events: $P(A_1\cap\dots\cap A_n)=\prod_{i=1}^n P(A_i\mid A_1\dots A_{i-1})$.

#### 3. Independence
Events $E$ and $F$ are **independent** iff $P(E\mid F)=P(E)$ (knowledge of $F$ does not change $E$).
$$P(E\cap F)=P(E)\,P(F)$$

#### Practice Question 2
**Q:** In a population, 1 % have a disease. A test is 99 % sensitive and 2 % false‑positive. If a person tests positive, what is the probability they truly have the disease?
**Solution:**
1. $P(D)=0.01$, $P(\neg D)=0.99$.
2. $P(+\mid D)=0.99$, $P(+\mid \neg D)=0.02$.
3. $P(+)=0.99\cdot0.01+0.02\cdot0.99=0.0297$.
4. $P(D\mid +)=\frac{0.0099}{0.0297}=\mathbf{\tfrac13}\approx33.3\%$.

---

### B. Law of Total Probability

#### Definition
Let $\{B_1, B_2, \dots, B_n\}$ be a **partition** of the sample space $\Omega$ — that is, the $B_i$ are mutually exclusive ($B_i \cap B_j = \emptyset$ for $i \ne j$) and exhaustive ($\bigcup_i B_i = \Omega$).

Then for **any event** $A$:
<div class="formula-box">
$$P(A) = \sum_{i=1}^{n} P(A \mid B_i)\, P(B_i)$$
</div>

**Intuition:** Break the problem into known scenarios. The total probability of $A$ is the **weighted average** of $P(A \mid B_i)$, weighted by how likely each scenario $B_i$ is.

---

#### Step-by-Step Derivation

**Step 1 — Decompose $A$ using the partition:**  
Since $\{B_i\}$ covers all of $\Omega$, every outcome in $A$ falls in exactly one $B_i$:
$$A = (A \cap B_1) \cup (A \cap B_2) \cup \cdots \cup (A \cap B_n)$$

**Step 2 — Apply Kolmogorov's additivity axiom:**  
The sets $A \cap B_i$ are mutually exclusive (since $B_i$ are), so:
$$P(A) = \sum_{i=1}^{n} P(A \cap B_i)$$

**Step 3 — Expand each term using the multiplication rule:**  
$P(A \cap B_i) = P(A \mid B_i)\,P(B_i)$, giving:
$$\boxed{P(A) = \sum_{i=1}^{n} P(A \mid B_i)\, P(B_i)}$$

---

#### Worked Example: Bag of Coloured Balls

**Setup:** There are 3 bags, and one bag is selected at random (each with probability $1/3$):

| Bag | $P(\text{Bag})$ | $P(\text{Red} \mid \text{Bag})$ | Balls in bag |
|---|---|---|---|
| Bag 1 | $1/3$ | $4/10 = 0.4$ | 4 Red, 6 Blue |
| Bag 2 | $1/3$ | $2/10 = 0.2$ | 2 Red, 8 Blue |
| Bag 3 | $1/3$ | $6/10 = 0.6$ | 6 Red, 4 Blue |

**Question:** What is the probability that a randomly drawn ball is **Red**?

> **Step 1 — Identify the partition:**  
> Let $B_1, B_2, B_3$ = "Bag 1, 2, 3 chosen". These are mutually exclusive and exhaustive.

> **Step 2 — State the priors:**  
> $P(B_1) = P(B_2) = P(B_3) = \dfrac{1}{3}$

> **Step 3 — State the likelihoods:**  
> $P(\text{Red} \mid B_1) = 0.4$, $\quad P(\text{Red} \mid B_2) = 0.2$, $\quad P(\text{Red} \mid B_3) = 0.6$

> **Step 4 — Apply the Law of Total Probability:**
>
> $$P(\text{Red}) = P(\text{Red}|B_1)P(B_1) + P(\text{Red}|B_2)P(B_2) + P(\text{Red}|B_3)P(B_3)$$
>
> $$= 0.4 \cdot \frac{1}{3} + 0.2 \cdot \frac{1}{3} + 0.6 \cdot \frac{1}{3} = \frac{0.4 + 0.2 + 0.6}{3} = \frac{1.2}{3} = \mathbf{0.4}$$

> [!TIP]
> The Law of Total Probability is the **denominator** in Bayes' Theorem:  
> $P(B_i \mid A) = \dfrac{P(A \mid B_i)\,P(B_i)}{P(A)}$  
> Computing $P(A)$ via LoTP is usually the hardest step in Bayesian inference.

---

## IV. Random Variables (R.V.)

A **random variable** $X$ is a measurable function $X:\Omega\to\mathbb{R}$ that assigns a real number to each experimental outcome.

> [!NOTE]
> Convention: capital $X$ denotes the random variable; lowercase $x$ denotes a specific value it takes.

---

### Continuous Random Variables (CRV)

A RV is **continuous** if its set of possible values forms an interval (or union of intervals) on $\mathbb{R}$, and individual values have **zero** probability — only ranges carry probability.

---

#### Probability Density Function (PDF)

##### Formal Definition
> The **Probability Density Function** $f_X(x)$ is a non-negative function such that the probability of $X$ falling in any interval $[a,b]$ equals the area under the curve between $a$ and $b$. It does **not** give probability directly — it gives probability *per unit length*.

<div class="formula-box">
$$P(a \le X \le b) = \int_{a}^{b} f_X(x)\, dx$$
</div>

> [!NOTE]
> Unlike the PMF, $f_X(x) > 1$ is perfectly valid! The PDF is a *density*, not a probability. Only the **area** under it equals probability.

---

##### Notation Variants (how PDF is written across textbooks)

| Notation Style | Notation | Meaning | Used in / Context |
|---|---|---|---|
| **Standard density** | $f_X(x)$ | PDF of $X$ at point $x$ | Most textbooks, IITM |
| **Generic density** | $f(x)$ | PDF when $X$ is clear from context | Shorthand in examples |
| **Subscript notation** | $f_{X}(x)$ | Explicitly tied to RV $X$ | Multi-variable problems |
| **Likelihood notation** | $p(x)$ | PDF written as $p$ (common in ML) | Machine learning literature |
| **Conditional density** | $f_{X\mid Y}(x\mid y)$ | PDF of $X$ given $Y=y$ | Bayesian / conditional models |
| **Integral probability** | $\int_a^b f(x)\,dx$ | Probability $X \in [a,b]$ | The core usage of PDF |

---

##### Properties of a Valid PDF

| Property | Condition | Intuition |
|---|---|---|
| Non-negativity | $f_X(x) \ge 0$ for all $x$ | Density cannot be negative |
| Normalisation | $\displaystyle\int_{-\infty}^{\infty} f_X(x)\,dx = 1$ | Total area under curve = 1 |
| Point probability | $P(X = x) = 0$ for any single $x$ | A line has zero area |
| Range probability | $P(a \le X \le b) = P(a < X < b)$ | Endpoints don't matter (zero area) |

---

#### Cumulative Distribution Function (CDF) — Continuous

##### Formal Definition
> The CDF for a continuous RV is the **integral** of the PDF from $-\infty$ to $x$. It answers: *"What fraction of the distribution lies at or below $x$?"*

<div class="formula-box">
$$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t)\, dt$$
</div>

##### Notation Variants (same as discrete; applies to both)

| Notation | Equivalent | Notes |
|---|---|---|
| $F_X(x)$ | $P(X \le x)$ | Standard CDF notation |
| $\Pr(X \le x)$ | $F_X(x)$ | Alternate probability operator |
| $\mathbb{P}(X \le x)$ | $F_X(x)$ | Measure-theory style |
| $\int_{-\infty}^x f(t)\,dt$ | $F_X(x)$ | Definition written out explicitly |
| $1 - F_X(x)$ | $P(X > x)$ | **Survival / complementary CDF** |

##### Key Relationship Between PDF and CDF:
<div class="formula-box">
$$f_X(x) = \frac{d}{dx} F_X(x) \qquad\text{(PDF is the derivative of CDF)}$$
$$F_X(x) = \int_{-\infty}^{x} f_X(t)\,dt \qquad\text{(CDF is the integral of PDF)}$$
</div>

---

#### Example – Uniform $U(a,b)$

**Definition:** $X \sim U(a,b)$ means $X$ is equally likely anywhere in $[a,b]$.

$$f_X(x) = \frac{1}{b-a} \quad \text{for } a \le x \le b, \quad f_X(x) = 0 \text{ otherwise}$$

**CDF of $U(a,b)$:**
$$F_X(x) = P(X \le x) = \int_a^x \frac{1}{b-a}\,dt = \frac{x-a}{b-a} \quad \text{for } a \le x \le b$$

**Example:** For $X \sim U(0, 4)$: $P(X \le 2) = F_X(2) = \dfrac{2-0}{4-0} = \dfrac{1}{2}$

---

## V. Expectation, Variance & Covariance

> [!NOTE]
> This section covers moments for both discrete and continuous RVs. Discrete: use summations ($\Sigma$). Continuous: use integrals ($\int$). The concepts and properties are identical — only the tool changes.

---

### 1. Expectation (Mean)

#### Formal Definition
> The **Expected Value** (or **mean**) of a continuous RV $X$ is the probability-weighted average of all possible values. It is the "centre of mass" of the probability density function.

<div class="formula-box">
$$E[X] = \mu = \int_{-\infty}^{\infty} x \cdot f_X(x)\, dx$$
</div>

**Intuition:** Each value $x$ is weighted by how densely the probability is concentrated there ($f_X(x)$). The integral sums all these weighted values.

#### Extended Form — Expectation of a Function $g(X)$:
<div class="formula-box">
$$E[g(X)] = \int_{-\infty}^{\infty} g(x) \cdot f_X(x)\, dx$$
</div>

Used to compute $E[X^2]$, $E[\ln X]$, etc. by setting $g(x) = x^2$, $g(x) = \ln x$, etc.

#### Key Properties of Expectation:

| Property | Formula | Intuition |
|---|---|---|
| **Linearity 1** | $E[aX + b] = a\,E[X] + b$ | Scaling and shifting the mean |
| **Linearity 2** | $E[X + Y] = E[X] + E[Y]$ | Always true (no independence needed) |
| **Constant** | $E[c] = c$ | A constant has no randomness |
| **Non-negative RV** | If $X \ge 0$, then $E[X] \ge 0$ | Mean cannot be negative for non-negative RVs |

---

### 2. Variance

#### Formal Definition
> The **Variance** measures how much the values of $X$ spread around the mean $\mu = E[X]$. It is the expected squared deviation from the mean.

<div class="formula-box">
$$\operatorname{Var}(X) = \sigma^2 = E\!\big[(X - \mu)^2\big] = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f_X(x)\, dx$$
</div>

**Computational Shortcut (always use this in practice):**
<div class="formula-box">
$$\operatorname{Var}(X) = E[X^2] - \big(E[X]\big)^2$$
</div>

**Derivation of the shortcut:**
$$E[(X-\mu)^2] = E[X^2 - 2\mu X + \mu^2] = E[X^2] - 2\mu E[X] + \mu^2 = E[X^2] - \mu^2$$

---

### 3. Standard Deviation

#### Definition
> The **Standard Deviation** $\sigma$ is the square root of the variance. It has the **same units** as $X$, making it more interpretable than variance.

<div class="formula-box">
$$\operatorname{SD}(X) = \sigma = \sqrt{\operatorname{Var}(X)}$$
</div>

#### Key Properties of Variance:

| Property | Formula | Notes |
|---|---|---|
| **Non-negativity** | $\operatorname{Var}(X) \ge 0$ | Squared deviation is always $\ge 0$ |
| **Scaling** | $\operatorname{Var}(aX) = a^2\,\operatorname{Var}(X)$ | Variance scales by $a^2$ (not $a$) |
| **Shift invariance** | $\operatorname{Var}(X + b) = \operatorname{Var}(X)$ | Adding a constant does not change spread |
| **Sum (independent)** | $\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$ | Only when $X, Y$ are independent |
| **Zero variance** | $\operatorname{Var}(X) = 0 \Rightarrow X = c$ a.s. | Only constants have zero variance |

---

### 4. Covariance

#### Formal Definition
> **Covariance** measures the **linear dependence** between two RVs $X$ and $Y$. Positive covariance means they tend to move together; negative means they move in opposite directions.

<div class="formula-box">
$$\operatorname{Cov}(X, Y) = E\!\big[(X - \mu_X)(Y - \mu_Y)\big] = \int\!\!\int (x - \mu_X)(y - \mu_Y)\,f_{X,Y}(x,y)\,dx\,dy$$
</div>

**Computational Shortcut:**
<div class="formula-box">
$$\operatorname{Cov}(X, Y) = E[XY] - E[X]\,E[Y]$$
</div>

#### Correlation Coefficient (normalised covariance):
<div class="formula-box">
$$\rho_{XY} = \frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\cdot\operatorname{Var}(Y)}} \in [-1, 1]$$
</div>

| $\rho$ value | Meaning |
|---|---|
| $\rho = 1$ | Perfect positive linear relationship |
| $\rho = -1$ | Perfect negative linear relationship |
| $\rho = 0$ | No linear relationship (uncorrelated) |
| $X \perp Y$ | $\Rightarrow \rho = 0$, but $\rho = 0 \not\Rightarrow X \perp Y$ |

> [!TIP]
> If $X$ and $Y$ are **independent**, then $\operatorname{Cov}(X,Y) = 0$ and $E[XY] = E[X]\cdot E[Y]$.  
> The reverse is **not** always true — zero covariance does not imply independence.

---

### 5. Numerical Example

**Given PDF:** Let $X$ have the density function
$$f_X(x) = 3x^2, \quad 0 \le x \le 1 \quad (\text{and } 0 \text{ elsewhere})$$

#### Step 0 — Verify it is a valid PDF:
$$\int_0^1 3x^2\, dx = \big[x^3\big]_0^1 = 1 - 0 = 1 \checkmark$$

---

#### Step 1 — Find the CDF $F_X(x)$:
$$F_X(x) = P(X \le x) = \int_0^x 3t^2\, dt = \big[t^3\big]_0^x = x^3, \quad 0 \le x \le 1$$

Full piecewise CDF:
$$F_X(x) = \begin{cases} 0 & x < 0 \\ x^3 & 0 \le x \le 1 \\ 1 & x > 1 \end{cases}$$

**Verification:** $F_X(0) = 0$ ✅, $F_X(1) = 1$ ✅, $F_X$ is non-decreasing ✅

**Example interval probability:**
$$P(0.2 \le X \le 0.8) = F_X(0.8) - F_X(0.2) = (0.8)^3 - (0.2)^3 = 0.512 - 0.008 = \mathbf{0.504}$$

---

#### Step 2 — Compute $E[X]$ (Mean):
$$E[X] = \int_0^1 x \cdot 3x^2\, dx = \int_0^1 3x^3\, dx = 3\cdot\left[\frac{x^4}{4}\right]_0^1 = 3 \cdot \frac{1}{4} = \mathbf{\frac{3}{4} = 0.75}$$

**Interpretation:** On average, $X$ takes the value $0.75$. The density $3x^2$ is heavier towards 1, pulling the mean above $0.5$.

---

#### Step 3 — Compute $E[X^2]$:
$$E[X^2] = \int_0^1 x^2 \cdot 3x^2\, dx = \int_0^1 3x^4\, dx = 3\cdot\left[\frac{x^5}{5}\right]_0^1 = \frac{3}{5} = 0.6$$

---

#### Step 4 — Compute $\operatorname{Var}(X)$:

Using the shortcut $\operatorname{Var}(X) = E[X^2] - (E[X])^2$:
$$\operatorname{Var}(X) = \frac{3}{5} - \left(\frac{3}{4}\right)^2 = \frac{3}{5} - \frac{9}{16}$$

Finding a common denominator (LCM of 5 and 16 is 80):
$$= \frac{48}{80} - \frac{45}{80} = \frac{3}{80} = \mathbf{0.0375}$$

---

#### Step 5 — Compute $\operatorname{SD}(X)$:
$$\sigma = \sqrt{\operatorname{Var}(X)} = \sqrt{\frac{3}{80}} = \frac{\sqrt{3}}{\sqrt{80}} = \frac{1.732}{8.944} \approx \mathbf{0.1936}$$

**Interpretation:** The typical deviation of $X$ from its mean of $0.75$ is about $0.19$.

---

#### Summary Table for $f(x) = 3x^2$ on $[0,1]$:

| Quantity | Formula | Value |
|---|---|---|
| PDF | $f_X(x) = 3x^2$ | — |
| CDF | $F_X(x) = x^3$ | — |
| $E[X]$ | $\int_0^1 3x^3\,dx$ | $3/4 = 0.75$ |
| $E[X^2]$ | $\int_0^1 3x^4\,dx$ | $3/5 = 0.6$ |
| $\operatorname{Var}(X)$ | $E[X^2] - (E[X])^2$ | $3/80 = 0.0375$ |
| $\operatorname{SD}(X)$ | $\sqrt{3/80}$ | $\approx 0.1936$ |

---

### Covariance — Numerical Example

**Setup:** Let $X \sim U(0,1)$ and $Y = 2X + 1$ (a linear function of $X$).

**Step 1 — Find $E[X]$ and $E[Y]$:**
$$E[X] = \frac{0+1}{2} = \frac{1}{2}, \qquad E[Y] = E[2X+1] = 2E[X] + 1 = 2\cdot\frac{1}{2}+1 = 2$$

**Step 2 — Find $E[XY]$:**
$$E[XY] = E[X(2X+1)] = E[2X^2 + X] = 2E[X^2] + E[X]$$
$$E[X^2] = \int_0^1 x^2\cdot 1\,dx = \frac{1}{3}, \quad \Rightarrow E[XY] = 2\cdot\frac{1}{3} + \frac{1}{2} = \frac{2}{3} + \frac{1}{2} = \frac{7}{6}$$

**Step 3 — Apply the shortcut:**
$$\operatorname{Cov}(X,Y) = E[XY] - E[X]\,E[Y] = \frac{7}{6} - \frac{1}{2}\cdot 2 = \frac{7}{6} - 1 = \mathbf{\frac{1}{6} \approx 0.167}$$

**Step 4 — Find Var(X) and Var(Y):**
$$\operatorname{Var}(X) = \frac{(1-0)^2}{12} = \frac{1}{12}, \quad \operatorname{Var}(Y) = \operatorname{Var}(2X+1) = 4\operatorname{Var}(X) = \frac{4}{12} = \frac{1}{3}$$

**Step 5 — Compute the Correlation:**
$$\rho_{XY} = \frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\cdot\operatorname{Var}(Y)}} = \frac{1/6}{\sqrt{(1/12)(1/3)}} = \frac{1/6}{\sqrt{1/36}} = \frac{1/6}{1/6} = \mathbf{1}$$

**Interpretation:** $\rho = 1$ confirms that $Y = 2X + 1$ is a **perfect positive linear function** of $X$ — they move in lockstep.

---

## V-B. How to Calculate: Expectation, Variance & Covariance — Step-by-Step Reference

> [!TIP]
> **Quick rule:** For a **discrete** RV replace every integral with a sum ($\int \to \sum$). Everything else — formulas, properties, shortcuts — is identical.

---

#### 7a. Calculating Expectation E[X]

#### Formula

| Type | Formula |
|---|---|
| **Discrete** | $\displaystyle E[X] = \sum_{\text{all }x} x \cdot p_X(x)$ |
| **Continuous** | $\displaystyle E[X] = \int_{-\infty}^{\infty} x \cdot f_X(x)\,dx$ |

#### How to Calculate — 4 Steps:

> **Step 1** — Identify the distribution type (discrete or continuous) and its PMF/PDF.  
> **Step 2** — Multiply each value $x$ by its probability weight $p_X(x)$ or $f_X(x)$.  
> **Step 3** — Sum (discrete) or integrate (continuous) over the entire support.  
> **Step 4** — Interpret: $E[X]$ is the long-run average value of $X$.

#### Properties of $E[X]$ (6 Core Properties):

| # | Property | Formula | Explanation |
|---|---|---|---|
| **①** | **Constant** | $E[c] = c$ | The expectation of a constant is itself — no randomness |
| **②** | **Constant + RV** | $E[c + X] = E[c] + E[X] = c + E[X]$ | A constant shifts the mean by that amount |
| **③** | **Scalar multiple** | $E[cX] = c\,E[X]$ | Scaling $X$ by $c$ scales the mean by $c$ |
| **④** | **Sum of two RVs** | $E[X + Y] = E[X] + E[Y]$ | Always true — no independence required |
| **⑤** | **Linear combination** | $E[aX + bY] = E[aX] + E[bY] = a\,E[X] + b\,E[Y]$ | Generalises ③ and ④ together |
| **⑥** | **Product (independence)** | $E[XY] = E[X] \cdot E[Y]$ — **only if $X$ and $Y$ are independent** | Fails for dependent RVs; use $E[XY] = \iint xy\,f_{X,Y}\,dx\,dy$ otherwise |

#### 7b. Calculating Variance Var(X)

#### Formula

| Type | Definition Form | Shortcut |
|---|---|---|
| **Discrete** | $\displaystyle\sum_x (x-\mu)^2 p_X(x)$ | $E[X^2] - (E[X])^2$ |
| **Continuous** | $\displaystyle\int (x-\mu)^2 f_X(x)\,dx$ | $E[X^2] - (E[X])^2$ |

> [!IMPORTANT]
> **Always use the shortcut** $\operatorname{Var}(X) = E[X^2] - (E[X])^2$ in practice.  
> The definition form with $(x-\mu)^2$ is for understanding only — it's much harder to compute directly.

#### How to Calculate — 4 Steps:

> **Step 1** — Compute $E[X]$ using the method above.  
> **Step 2** — Compute $E[X^2]$: multiply each $x^2$ by its weight, then sum/integrate.  
> **Step 3** — Apply the shortcut: $\operatorname{Var}(X) = E[X^2] - (E[X])^2$.  
> **Step 4** — Take $\sigma = \sqrt{\operatorname{Var}(X)}$ for the standard deviation.

#### Standard Deviation:
<div class="formula-box">
$$\operatorname{SD}(X) = \sqrt{\operatorname{Var}(X)}$$
</div>

#### Properties of $\operatorname{Var}(X)$ (4 Core Properties):

| # | Property | Formula | Explanation |
|---|---|---|---|
| **①** | **Constant** | $\operatorname{Var}(c) = 0$ | A constant has no randomness — zero spread |
| **②** | **Scalar multiple** | $\operatorname{Var}(cX) = c^2\,\operatorname{Var}(X)$ | Scaling by $c$ multiplies variance by $c^2$ — **not** $c$ |
| **③** | **Shift (add constant)** | $\operatorname{Var}(X + a) = \operatorname{Var}(X)$ | Shifting does **not** change spread |
| **④** | **Sum (general)** | $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X,Y)$ | Works always — includes the covariance term |

> [!IMPORTANT]
> **Special case — if $X$ and $Y$ are independent** (so $\operatorname{Cov}(X,Y) = 0$):
> $$\boxed{\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)}$$
> This simplification only applies when $X \perp Y$.

#### 7c. Calculating Covariance Cov(X,Y)

> **What is Covariance?** Covariance measures the **linear association** between $X$ and $Y$. It tells us how much they move together.

#### Formal Definition (Definition Form):
<div class="formula-box">
$$\operatorname{Cov}(X,Y) = E\!\big[(X - E[X])\cdot(Y - E[Y])\big]$$
</div>

#### Computational Shortcut (always use this):
<div class="formula-box">
$$\operatorname{Cov}(X,Y) = E[XY] - E[X]\cdot E[Y]$$
</div>

---

#### If $X$ and $Y$ are Independent:

When $X \perp Y$: $\operatorname{Cov}(X,Y) = 0$, which means:
$$E[XY] - E[X]\,E[Y] = 0 \quad\Rightarrow\quad \boxed{E[XY] = E[X]\cdot E[Y]}$$

> [!IMPORTANT]
> **Does $\operatorname{Cov}(X,Y) = 0$ mean $X$ and $Y$ are independent? → NOT ALWAYS!**
>
> **Counterexample:** Let $X \sim U(-1,1)$ and $Y = X^2$. Then:
> - $E[X] = 0$ (symmetric around 0)
> - $E[XY] = E[X \cdot X^2] = E[X^3] = 0$ (odd function, symmetric distribution)
> - $\operatorname{Cov}(Y,X) = E[XY] - E[X]E[Y] = 0 - 0 = 0$
>
> Yet $Y = X^2$ is **perfectly determined** by $X$ — they are completely dependent!

---

#### Self-Covariance Proof ($\operatorname{Cov}(X,X) = \operatorname{Var}(X)$):

$$\operatorname{Cov}(X,X) = E[X \cdot X] - E[X]\cdot E[X] = E[X^2] - (E[X])^2 = \operatorname{Var}(X) \checkmark$$

---

#### Properties of $\operatorname{Cov}(X,Y)$ (6 Core Properties):

| # | Property | Formula | Explanation |
|---|---|---|---|
| **①** | **Self-covariance** | $\operatorname{Cov}(X, X) = \operatorname{Var}(X)$ | Variance is a special case of covariance |
| **②** | **Constant** | $\operatorname{Cov}(X, c) = 0$ | A constant does not co-vary with anything |
| **③** | **Scalar multiple** | $\operatorname{Cov}(cX, Y) = c\,\operatorname{Cov}(X, Y)$ | Scaling one variable scales covariance linearly |
| **④** | **Bilinearity** | $\operatorname{Cov}(X + Y,\, Z) = \operatorname{Cov}(X,Z) + \operatorname{Cov}(Y,Z)$ | Covariance distributes over addition |
| **⑤** | **Full linear combination** | $\operatorname{Cov}(aX + bY,\, Z) = a\operatorname{Cov}(X,Z) + b\operatorname{Cov}(Y,Z)$ | Combines ③ and ④ |
| **⑥** | **Independence** | $X \perp Y \Rightarrow \operatorname{Cov}(X,Y) = 0$ — **but $\operatorname{Cov}=0 \not\Rightarrow$ independent** | See counterexample above |

---

#### Correlation — Unitless (Standardised) Measure:
<div class="formula-box">
$$\rho(X,Y) = \frac{\operatorname{Cov}(X,Y)}{\operatorname{SD}(X)\cdot\operatorname{SD}(Y)} \qquad -1 \le \rho(X,Y) \le +1$$
</div>

| $\rho$ value | Interpretation |
|---|---|
| $\rho = +1$ | Perfect positive linear relationship |
| $\rho > 0$ | $X$ and $Y$ tend to increase together |
| $\rho = 0$ | No **linear** association (uncorrelated) |
| $\rho < 0$ | $X$ increases as $Y$ decreases |
| $\rho = -1$ | Perfect negative linear relationship |

> [!TIP]
> Covariance has **units** (units of $X$ × units of $Y$), making it hard to interpret across different problems. Correlation $\rho$ is **dimensionless** and always in $[-1, 1]$, making it the preferred measure of linear association.

#### Quick Formula Cheat-Sheet

| Quantity | Discrete Formula | Continuous Formula |
|---|---|---|
| $E[X]$ | $\sum x\,p_X(x)$ | $\int x\,f_X(x)\,dx$ |
| $E[X^2]$ | $\sum x^2\,p_X(x)$ | $\int x^2\,f_X(x)\,dx$ |
| $\operatorname{Var}(X)$ | $E[X^2]-(E[X])^2$ | $E[X^2]-(E[X])^2$ |
| $\sigma$ | $\sqrt{\operatorname{Var}(X)}$ | $\sqrt{\operatorname{Var}(X)}$ |
| $\operatorname{Cov}(X,Y)$ | $E[XY]-E[X]E[Y]$ | $E[XY]-E[X]E[Y]$ |
| $\rho_{XY}$ | $\dfrac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}$ | $\dfrac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}$ |

---



## VI. Common Continuous Distributions

---

#### 1. Continuous Uniform Distribution — $U(a, b)$

> **When to use:** The outcome can be any real number in $[a, b]$, all with equal likelihood.

<div class="formula-box">

$$f_X(x) = \frac{1}{b-a}, \quad a \le x \le b$$

$$F_X(x) = \frac{x - a}{b - a}, \quad a \le x \le b$$

</div>

| Property | Formula |
|---|---|
| **Support** | $[a, b]$ |
| **PDF** | $f(x) = \dfrac{1}{b-a}$ |
| **CDF** | $F(x) = \dfrac{x-a}{b-a}$ |
| **Mean** | $E[X] = \dfrac{a+b}{2}$ |
| **Variance** | $\operatorname{Var}(X) = \dfrac{(b-a)^2}{12}$ |

**Notation variants:** $X \sim U(a,b)$, $X \sim \text{Uniform}(a,b)$, $X \sim \mathcal{U}[a,b]$

**🔢 Example:** $X \sim U(2, 8)$ — a bus arrives uniformly between 2 and 8 minutes.

$$f_X(x) = \frac{1}{8-2} = \frac{1}{6}, \quad 2 \le x \le 8$$

$$E[X] = \frac{2+8}{2} = 5 \text{ minutes}$$

$$\operatorname{Var}(X) = \frac{(8-2)^2}{12} = \frac{36}{12} = 3 \text{ min}^2, \quad \operatorname{SD}(X) = \sqrt{3} \approx 1.73 \text{ min}$$

**Probability in a sub-interval:** $P(3 \le X \le 6)$:
$$P(3 \le X \le 6) = F(6) - F(3) = \frac{6-2}{6} - \frac{3-2}{6} = \frac{4}{6} - \frac{1}{6} = \frac{3}{6} = \mathbf{0.5}$$

---

#### 2. Normal Distribution — $\mathcal{N}(\mu, \sigma^2)$

> **When to use:** Modeling natural phenomena that cluster around a central value, like heights, weights, measurement errors, and IQ scores. Also known as the "Gaussian distribution" or "Bell Curve."

<div class="formula-box">

$$f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

</div>

| Property | Formula / Value |
|---|---|
| **Support** | $x \in (-\infty, \infty)$ |
| **Mean** | $E[X] = \mu$ |
| **Variance** | $\operatorname{Var}(X) = \sigma^2$ |
| **Standard Deviation** | $\sigma$ |
| **CDF** | $F_X(x) = \Phi\left(\frac{x-\mu}{\sigma}\right)$ (No closed-form integral) |

> [!IMPORTANT]
> **The Empirical Rule (68-95-99.7):**
> - $\approx$ **68%** of data falls within $\mu \pm \sigma$
> - $\approx$ **95%** of data falls within $\mu \pm 2\sigma$
> - $\approx$ **99.7%** of data falls within $\mu \pm 3\sigma$

Standardization: $Z = \dfrac{X-\mu}{\sigma} \sim \mathcal{N}(0,1)$. This allows us to use Z-tables to find probabilities for any normal distribution.

##### 📊 Worked Example — Standardized Test Scores

**Setup:** Scores on a national exam are normally distributed with a mean ($\mu$) of 500 and a standard deviation ($\sigma$) of 100.

**1. Question A: What is the probability a student scores between 500 and 600?**
Since 500 is the mean and 600 is exactly one standard deviation above the mean, we can use the empirical rule:
- The region from $\mu$ to $\mu+\sigma$ covers half of the 68% central region.
- $P(500 \le X \le 600) = \frac{0.68}{2} = \mathbf{0.34 \text{ (or 34%)}}$.

**2. Question B: Find the probability a student scores below 400.**
Standardize $x = 400$:
$$Z = \frac{400 - 500}{100} = -1.0$$
Looking up $P(Z < -1.0)$ in a Z-table (or using symmetry with the 68% rule):
- 68% is between -1 and 1, meaning 32% is outside that range.
- By symmetry, half of 32% is below -1.
- $P(X < 400) = P(Z < -1) = \mathbf{0.16 \text{ (or 16%)}}$.

---

#### 3. Exponential Distribution — $\text{Exp}(\lambda)$

> **When to use:** Modeling the time between independent events that occur at a constant average rate (e.g., waiting time for a bus, lifespan of a lightbulb, time until a radioactive particle decays).

<div class="formula-box">

$$f_X(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$$

$$F_X(x) = \begin{cases} 1 - e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$$

</div>

| Property | Formula |
|---|---|
| **Support** | $x \in [0, \infty)$ |
| **PDF** | $f(x) = \lambda e^{-\lambda x}$ |
| **CDF** | $F(x) = 1 - e^{-\lambda x}$ |
| **Mean** | $E[X] = \dfrac{1}{\lambda}$ |
| **Variance** | $\operatorname{Var}(X) = \dfrac{1}{\lambda^2}$ |

> [!TIP]
> The parameter $\lambda$ is the **rate parameter** (events per unit time). The mean waiting time is $1/\lambda$.  
> **Memoryless Property:** $P(X > s + t \mid X > s) = P(X > t)$. The distribution "forgets" the past; a 10-year-old lightbulb has the same probability of burning out in the next year as a brand new one.

<div class="theory-box graph-container">
<svg viewBox="0 0 500 300" class="technical-graph">
  <!-- Axes -->
  <line x1="60" y1="260" x2="460" y2="260" stroke="currentColor" stroke-width="2" />
  <line x1="60" y1="40" x2="60" y2="260" stroke="currentColor" stroke-width="2" />
  
  <!-- Exponential curve: y = A*e^(-kx). Let's start high at x=60 and decay -->
  <path d="M 60 50 Q 120 220 440 255" fill="none" stroke="var(--graph-secondary)" stroke-width="3" />
  
  <text x="50" y="55" font-family="var(--font-ui)" font-size="12" text-anchor="end">λ</text>
  <text x="260" y="280" font-family="var(--font-ui)" font-size="12" text-anchor="middle">x (Time/Distance)</text>
</svg>
</div>

##### 📊 Worked Example — Electronic Component Lifespan

**Setup:** The lifetime $X$ (in years) of an electronic component follows an exponential distribution with an average lifespan of 5 years.

**1. Identify the rate parameter $\lambda$:**
Since the mean is $E[X] = 1/\lambda = 5$, we have:
$$\lambda = \frac{1}{5} = 0.2 \text{ components/year}$$

**2. Find the PDF and CDF:**
- $f(x) = 0.2 e^{-0.2x}$ for $x \ge 0$
- $F(x) = 1 - e^{-0.2x}$ for $x \ge 0$

**3. Question A: What is the probability it lasts exactly 3 years?**
Because $X$ is a continuous random variable, the probability of it taking any exact single value is zero:
$$P(X = 3) = \mathbf{0}$$

**4. Question B: What is the probability it fails within the first 2 years?**
This is asking for $P(X \le 2)$, which is the CDF at $x=2$:
$$P(X \le 2) = F(2) = 1 - e^{-0.2(2)} = 1 - e^{-0.4} \approx 1 - 0.6703 = \mathbf{0.3297 \text{ (or 32.97%)}}$$

**5. Question C: What is the probability it lasts more than 8 years?**
This is the complement of the CDF at $x=8$:
$$P(X > 8) = 1 - P(X \le 8) = 1 - (1 - e^{-0.2(8)}) = e^{-1.6} \approx \mathbf{0.2019 \text{ (or 20.19%)}}$$

## VII. Transformations of Random Variables

### A. Joint Probability and Density (Overview)
* **Joint PDF (continuous):** $f_{X,Y}(x,y)$, with $\iint f_{X,Y}(x,y)dxdy=1$.
* **Marginals:** $f_X(x)=\int f_{X,Y}(x,y)dy$, $f_Y(y)=\int f_{X,Y}(x,y)dx$.
* **Conditional:** $f_{X|Y}(x|y)=\frac{f_{X,Y}(x,y)}{f_Y(y)}$.
* **Independence:** $f_{X,Y}(x,y)=f_X(x)f_Y(y)$.

### B. Single and Joint Variable Transformations

> **Goal:** Given a RV $X$ with a known PDF and a function $Y = g(X)$ (or $(U,V) = g(X,Y)$), find the PDF of the **output** RV.

---

#### Single-Variable Transformation — $Y = g(X)$

##### Core Intuition

Probability must be **preserved** under transformation. If $X$ lands in a tiny interval $[x, x+dx]$ with probability $f_X(x)\,dx$, then $Y = g(X)$ lands in the corresponding interval $[y, y+dy]$. The densities must satisfy:

$$f_X(x)\,|dx| = f_Y(y)\,|dy|$$

Dividing both sides by $|dy|$:

<div class="formula-box">

$$\boxed{f_Y(y) = f_X\!\left(g^{-1}(y)\right) \cdot \left|\frac{dx}{dy}\right| = f_X(x) \cdot \left|\frac{dx}{dy}\right|}$$

The factor $\left|\dfrac{dx}{dy}\right|$ is the **absolute value of the Jacobian** — it corrects for how much $g$ stretches or squishes the density.

</div>

##### Step-by-Step Algorithm

> **Step 1 — Find the support of $Y$:** Determine what values $Y = g(X)$ can take, given the support of $X$.  
> **Step 2 — Invert:** Solve $y = g(x)$ for $x$, i.e., find $x = g^{-1}(y)$.  
> **Step 3 — Compute the Jacobian:** Differentiate $x = g^{-1}(y)$ with respect to $y$:  $\dfrac{dx}{dy} = \dfrac{d}{dy}g^{-1}(y)$.  
> **Step 4 — Plug into formula:** $f_Y(y) = f_X(g^{-1}(y)) \cdot \left|\dfrac{dx}{dy}\right|$, valid on the support found in Step 1.

> [!NOTE]
> This formula requires $g$ to be **strictly monotone** on the support of $X$. If $g$ is not monotone, split the domain into monotone pieces and sum the contributions (see the non-monotone method in Section VII-B).

---

##### Example 1 — $Y = 2X + 3$, $X \sim U(0, 1)$

**Step 1 — Support of $Y$:**  
$X \in [0,1]$ and $Y = 2X+3$, so $Y \in [2(0)+3,\; 2(1)+3] = [3, 5]$.

**Step 2 — Invert:**  
$y = 2x + 3 \Rightarrow x = \dfrac{y-3}{2}$

**Step 3 — Jacobian:**  
$\dfrac{dx}{dy} = \dfrac{1}{2}$, so $\left|\dfrac{dx}{dy}\right| = \dfrac{1}{2}$

**Step 4 — Apply formula:**  
Since $X \sim U(0,1)$, we have $f_X(x) = 1$ for $x \in [0,1]$.

$$f_Y(y) = f_X\!\left(\frac{y-3}{2}\right) \cdot \frac{1}{2} = 1 \cdot \frac{1}{2} = \frac{1}{2}, \quad y \in [3, 5]$$

$$\therefore Y \sim U(3, 5) \quad \checkmark$$

**Sanity check:** $\int_3^5 \frac{1}{2}\,dy = \frac{1}{2} \cdot 2 = 1$ ✓

---

##### Example 2 — $Y = X^2$, $X \sim U(0, 1)$

**Step 1 — Support of $Y$:**  
$X \in (0,1)$ and $Y = X^2$, so $Y \in (0,1)$.

**Step 2 — Invert:**  
$y = x^2 \Rightarrow x = \sqrt{y}$ (positive root since $X \ge 0$)

**Step 3 — Jacobian:**  
$\dfrac{dx}{dy} = \dfrac{1}{2\sqrt{y}}$, so $\left|\dfrac{dx}{dy}\right| = \dfrac{1}{2\sqrt{y}}$

**Step 4 — Apply formula:**  
$f_X(x) = 1$ for $x \in (0,1)$.

<div class="formula-box">

$$f_Y(y) = 1 \cdot \frac{1}{2\sqrt{y}} = \frac{1}{2\sqrt{y}}, \quad y \in (0,1)$$

</div>

**Sanity check:** $\int_0^1 \frac{1}{2\sqrt{y}}\,dy = \left[\sqrt{y}\right]_0^1 = 1$ ✓

---

#### Joint (Two-Variable) Transformation — $(U, V) = g(X, Y)$

##### Core Intuition

When we transform a **pair** of RVs $(X, Y) \to (U, V)$, a small area element $dx\,dy$ in the original space maps to an area $du\,dv$ in the new space. The ratio of the two areas is captured by the **Jacobian determinant**.

<div class="formula-box">

$$\boxed{f_{U,V}(u,v) = f_{X,Y}(x,y) \cdot |J|}$$

where the **Jacobian** $|J|$ is:

$$|J| = \left|\det\begin{pmatrix}\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\[8pt] \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}\end{pmatrix}\right| = \left|\frac{\partial x}{\partial u}\frac{\partial y}{\partial v} - \frac{\partial x}{\partial v}\frac{\partial y}{\partial u}\right|$$

and $(x, y) = g^{-1}(u, v)$ is the **inverse transformation**.

</div>

##### Step-by-Step Algorithm (Joint)

> **Step 1 — Express $(U, V)$ in terms of $(X, Y)$.**  
> **Step 2 — Find the inverse:** Solve for $x$ and $y$ in terms of $u$ and $v$: $x = h_1(u,v)$, $y = h_2(u,v)$.  
> **Step 3 — Compute all 4 partial derivatives:** $\dfrac{\partial x}{\partial u}$, $\dfrac{\partial x}{\partial v}$, $\dfrac{\partial y}{\partial u}$, $\dfrac{\partial y}{\partial v}$.  
> **Step 4 — Compute the Jacobian determinant:** $|J| = \left|\dfrac{\partial x}{\partial u}\cdot\dfrac{\partial y}{\partial v} - \dfrac{\partial x}{\partial v}\cdot\dfrac{\partial y}{\partial u}\right|$.  
> **Step 5 — Find the support of $(U, V)$:** Map the support of $(X, Y)$ through the transformation.  
> **Step 6 — Plug into formula:** $f_{U,V}(u,v) = f_{X,Y}(x, y)\cdot|J|$ on the new support.

---

##### Example — Cartesian → Polar: $(X, Y) \to (R, \Theta)$

**Setup:** Let $X$ and $Y$ be i.i.d. $\mathcal{N}(0,1)$. Define polar coordinates:
$$U = R = \sqrt{X^2 + Y^2}, \qquad V = \Theta = \arctan\!\left(\frac{Y}{X}\right)$$

This is a classic derivation that leads to the **Rayleigh distribution** and underpins the Box-Muller algorithm for sampling normals.

**Step 1 — Forward transformation:**
$$R = \sqrt{X^2+Y^2}, \quad \Theta = \arctan(Y/X)$$

**Step 2 — Inverse transformation:**
$$x = R\cos\Theta, \quad y = R\sin\Theta$$

**Step 3 — Compute the 4 partial derivatives:**

| | $\dfrac{\partial}{\partial R}$ | $\dfrac{\partial}{\partial \Theta}$ |
|---|---|---|
| $x = R\cos\Theta$ | $\cos\Theta$ | $-R\sin\Theta$ |
| $y = R\sin\Theta$ | $\sin\Theta$ | $R\cos\Theta$ |

**Step 4 — Jacobian determinant:**
$$J = \det\begin{pmatrix}\cos\Theta & -R\sin\Theta \\ \sin\Theta & R\cos\Theta\end{pmatrix} = R\cos^2\Theta - (-R\sin^2\Theta) = R(\cos^2\Theta + \sin^2\Theta) = R$$

$$\therefore |J| = R$$

**Step 5 — Support of $(R, \Theta)$:**  
$(X,Y) \in \mathbb{R}^2$ maps to $R \in (0,\infty)$, $\Theta \in [0, 2\pi)$.

**Step 6 — Joint density of $(X, Y)$:**  
Since $X, Y \overset{\text{i.i.d.}}{\sim} \mathcal{N}(0,1)$ and independent:
$$f_{X,Y}(x,y) = \frac{1}{2\pi} e^{-(x^2+y^2)/2}$$

**Substitute** $x^2 + y^2 = R^2$:
$$f_{X,Y}(R\cos\Theta, R\sin\Theta) = \frac{1}{2\pi} e^{-R^2/2}$$

**Apply joint transformation formula:**

<div class="formula-box">

$$f_{R,\Theta}(r,\theta) = f_{X,Y}(r\cos\theta, r\sin\theta) \cdot |J| = \frac{1}{2\pi} e^{-r^2/2} \cdot r = \frac{r}{2\pi} e^{-r^2/2}$$

</div>

**This factors as:**
$$f_{R,\Theta}(r,\theta) = \underbrace{r e^{-r^2/2}}_{\text{Rayleigh PDF of }R} \cdot \underbrace{\frac{1}{2\pi}}_{\text{Uniform PDF of }\Theta}$$

$$\therefore R \sim \text{Rayleigh}(1), \quad \Theta \sim U(0, 2\pi), \quad \text{and } R \perp \Theta$$

> [!TIP]
> This result is the foundation of the **Box-Muller transform** — a method to generate $\mathcal{N}(0,1)$ samples from uniform random numbers by transforming $(R,\Theta) \to (X,Y)$.

---

##### Comparison: Single vs. Joint Transformation

| Feature | Single: $Y = g(X)$ | Joint: $(U,V) = g(X,Y)$ |
|---|---|---|
| **Formula** | $f_Y = f_X(g^{-1}(y))\cdot\|dx/dy\|$ | $f_{U,V} = f_{X,Y}(x,y)\cdot\|J\|$ |
| **Jacobian** | Scalar $\|dx/dy\|$ | $2\times2$ determinant $\|\partial(x,y)/\partial(u,v)\|$ |
| **Inverse needed** | $x = g^{-1}(y)$ | $x = h_1(u,v)$, $y = h_2(u,v)$ |
| **Support** | 1D interval | 2D region |
| **Key condition** | $g$ must be monotone | Transformation must be 1-to-1 |

---

### C. Functions of a Random Variable: All Methods

> **Core Question:** If $X$ is a random variable with a known distribution, and $Y = g(X)$ is some function of $X$, what is the distribution of $Y$?

This is one of the most important techniques in probability — it lets us derive the distribution of transformations like $Y = X^2$, $Y = e^X$, $Y = |X|$, etc.

---

### B. Continuous Case — The CDF Method

The **CDF Method** (also called the "distribution function technique") is the most general approach for continuous RVs. It works for **any** function $g$, whether monotone or not.

#### Algorithm — CDF Method:

> **Step 1** — Write the CDF of $Y$: $F_Y(y) = P(Y \le y) = P(g(X) \le y)$.  
> **Step 2** — Rearrange the inequality $g(X) \le y$ in terms of $X$.  
> **Step 3** — Evaluate $P(X \in \text{(the region)})$ using the known CDF/PDF of $X$.  
> **Step 4** — Differentiate: $f_Y(y) = \dfrac{d}{dy} F_Y(y)$.

#### Example — CDF Method: $Y = X^2$, $X \sim U(0,1)$

**Step 1:** $F_Y(y) = P(Y \le y) = P(X^2 \le y)$

**Step 2:** $X^2 \le y \Rightarrow 0 \le X \le \sqrt{y}$ (since $X \ge 0$ here)

**Step 3:** $F_Y(y) = P(0 \le X \le \sqrt{y}) = \sqrt{y}$ (since $X \sim U(0,1)$, $P(X \le t) = t$)

**Step 4 — Differentiate:**

$$f_Y(y) = \frac{d}{dy}\sqrt{y} = \frac{1}{2\sqrt{y}}, \qquad 0 < y < 1$$

> [!TIP]
> Always state the **support** of $Y$ explicitly. Here $X \in (0,1)$ so $Y = X^2 \in (0,1)$.

---

### C. Continuous Case — Change of Variables (Monotone $g$)

When $g$ is **strictly monotone** (either always increasing or always decreasing), there is a direct formula:

<div class="formula-box">

$$f_Y(y) = f_X\!\left(g^{-1}(y)\right) \cdot \left|\frac{d}{dy} g^{-1}(y)\right| = f_X(x) \cdot \left|\frac{dx}{dy}\right|$$

where $x = g^{-1}(y)$ is the inverse function of $g$.

</div>

The term $\left|\dfrac{dx}{dy}\right|$ is the **absolute Jacobian** — it corrects for how much $g$ stretches or compresses the probability density.

#### When to use each approach:

| Situation | Method |
|---|---|
| $g$ is **strictly monotone** | Change of Variables formula (faster) |
| $g$ is **non-monotone** (e.g., $Y=X^2$ over all reals) | CDF Method (safer) |
| $g$ is **many-to-one** | CDF Method or sum of pieces |

#### Example — Change of Variables: $Y = e^X$, $X \sim \mathcal{N}(0,1)$

This gives the **Log-Normal distribution**.

**Step 1 — Find the support of $Y$:** Since $e^x > 0$ for all $x$, we have $Y \in (0, \infty)$.

**Step 2 — Invert:** $y = e^x \Rightarrow x = \ln y$

**Step 3 — Compute the Jacobian:** $\dfrac{dx}{dy} = \dfrac{1}{y}$

**Step 4 — Apply the formula:**

$$f_Y(y) = f_X(\ln y) \cdot \left|\frac{1}{y}\right| = \frac{1}{\sqrt{2\pi}} e^{-\frac{(\ln y)^2}{2}} \cdot \frac{1}{y}, \quad y > 0$$

<div class="formula-box">

$$\boxed{f_Y(y) = \frac{1}{y\sqrt{2\pi}} \exp\!\left(-\frac{(\ln y)^2}{2}\right), \quad y > 0}$$

This is the **Log-Normal distribution** — commonly used in finance, biology, and ML.

</div>

---

### D. Non-Monotone Case — Breaking into Pieces

When $g$ is **not monotone**, split the domain of $X$ into regions where $g$ **is** monotone, apply the formula on each piece, and add:

<div class="formula-box">

$$f_Y(y) = \sum_{k} f_X(x_k) \cdot \left|\frac{dx}{dy}\Big|_{x=x_k}\right|$$

where $x_1, x_2, \ldots$ are all solutions to $g(x) = y$.

</div>

#### Example — Non-Monotone: $Y = X^2$, $X \sim \mathcal{N}(0,1)$

**Step 1 — Find all $x$ such that $x^2 = y$:** Two solutions: $x_1 = \sqrt{y}$ and $x_2 = -\sqrt{y}$ (for $y > 0$)

**Step 2 — Jacobian at each root:**
$$\left|\frac{dx}{dy}\right| = \left|\frac{d(\pm\sqrt{y})}{dy}\right| = \frac{1}{2\sqrt{y}}$$

**Step 3 — Apply the formula (sum both branches):**
$$f_Y(y) = f_X(\sqrt{y}) \cdot \frac{1}{2\sqrt{y}} + f_X(-\sqrt{y}) \cdot \frac{1}{2\sqrt{y}}$$

Since $f_X(\sqrt{y}) = f_X(-\sqrt{y}) = \frac{1}{\sqrt{2\pi}} e^{-y/2}$ (standard normal is symmetric):

$$f_Y(y) = 2 \cdot \frac{1}{\sqrt{2\pi}} e^{-y/2} \cdot \frac{1}{2\sqrt{y}} = \frac{1}{\sqrt{2\pi y}} e^{-y/2}, \quad y > 0$$

<div class="formula-box">

$$\boxed{f_Y(y) = \frac{1}{\sqrt{2\pi y}} e^{-y/2}, \quad y > 0}$$

This is the **Chi-squared distribution with 1 degree of freedom** ($Y \sim \chi^2_1$).

</div>

---

#### C.5 Linear Transformations

For $Y = aX + b$ (linear function), the result is simple and very important:

<div class="formula-box">

$$f_Y(y) = \frac{1}{|a|} f_X\!\left(\frac{y - b}{a}\right)$$

</div>

**Effect on mean and variance:**

| Quantity | Formula |
|---|---|
| $E[Y] = E[aX+b]$ | $a\,E[X] + b$ |
| $\operatorname{Var}(Y) = \operatorname{Var}(aX+b)$ | $a^2\,\operatorname{Var}(X)$ |
| $\operatorname{SD}(Y)$ | $|a|\,\operatorname{SD}(X)$ |

#### Example — Standardization: $Z = \dfrac{X - \mu}{\sigma}$, $X \sim \mathcal{N}(\mu, \sigma^2)$

This is the most important linear transformation in statistics.

Here $a = \frac{1}{\sigma}$, $b = -\frac{\mu}{\sigma}$:

$$f_Z(z) = \frac{1}{|1/\sigma|} f_X\!\left(\sigma z + \mu\right) = \sigma \cdot \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(\sigma z + \mu - \mu)^2}{2\sigma^2}} = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$$

$$\therefore Z \sim \mathcal{N}(0,1) \quad \checkmark$$

> [!IMPORTANT]
> **Standardization** ($Z$-scoring) maps any Normal RV to the standard Normal $\mathcal{N}(0,1)$.
> It is the foundation of hypothesis testing, confidence intervals, and feature normalization in ML.

---

##### Summary: Methods for Functions of RVs

| Case | Method | Formula |
|---|---|---|
| **Discrete** $Y = g(X)$ | Sum over pre-images | $p_Y(y) = \sum_{g(x)=y} p_X(x)$ |
| **Continuous, monotone $g$** | Change of Variables | $f_Y(y) = f_X(g^{-1}(y))\cdot\|dx/dy\|$ |
| **Continuous, non-monotone $g$** | Sum over branches | $f_Y(y) = \sum_k f_X(x_k)\cdot\|dx/dy\|_{x_k}$ |
| **CDF method (universal)** | Differentiate CDF | $F_Y(y) = P(g(X) \le y)$, then differentiate |
| **Linear $Y = aX+b$** | Direct formula | $f_Y(y) = \frac{1}{|a|}f_X\!\left(\frac{y-b}{a}\right)$ |
| **$Z = X+Y$, independent** | Convolution | $P(Z=z) = \sum_x P(X=x)P(Y=z-x)$ |

---

## VIII. The Exponential Family

Many ML‑friendly distributions belong to the **Exponential Family**:
<div class="formula-box">
$$p(x\mid\eta)=h(x)\exp\!\big(\eta^T T(x)-A(\eta)\big)$$
</div>
| Component | Symbol | Role |
|---|---|---|
| Natural parameter | $\eta$ | Parameterizes the family |
| Sufficient statistic | $T(x)$ | Captures all information needed for inference |
| Log‑partition | $A(\eta)$ | Normalizes the density; $\nabla A(\eta)=E[T(x)]$ |
| Base measure | $h(x)$ | Scaling factor |

---

## IX. Convergence & Limit Theorems
1. **Law of Large Numbers (LLN)** – Sample mean $\bar X_n \to E[X]$ as $n\to\infty$.
2. **Central Limit Theorem (CLT)** – For i.i.d. $X_i$ with mean $\mu$ and variance $\sigma^2$,
<div class="formula-box">
$$Z_n=\frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}}\xrightarrow{d}\mathcal{N}(0,1)$$
</div>

---
