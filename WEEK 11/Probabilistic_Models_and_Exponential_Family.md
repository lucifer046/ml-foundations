# WEEK 11: Probability Theory and the Exponential Family

This module provides a rigorous, complete foundation for probability theory — from the formal axioms of probability spaces through Bayes' Theorem, continuous random variables, joint distributions, transformations, key distributions, and the Exponential Family framework.

---

## 1. Foundations of Probability

### A. The Probability Space $(\Omega, \mathcal{F}, \mathbb{P})$
*   **Sample Space ($\Omega$):** The set of all possible outcomes (e.g., all possible heights of a randomly picked person).
*   **Events ($\mathcal{F}$):** A collection of subsets of $\Omega$ called a **$\sigma$-algebra**.
*   **Probability Measure ($\mathbb{P}$):** A function $\mathbb{P}: \mathcal{F} \to [0, 1]$ assigning probabilities to events.

### B. Axioms of the Sigma-Algebra ($\mathcal{F}$)
1.  $\Omega \in \mathcal{F}$
2.  If $A \in \mathcal{F}$, then $A^c \in \mathcal{F}$
3.  If $A_1, A_2, \dots \in \mathcal{F}$, then $\bigcup_{i=1}^\infty A_i \in \mathcal{F}$

### C. Axioms of Probability Measure ($\mathbb{P}$)
1.  **Non-negativity:** $\mathbb{P}(A) \geq 0$
2.  **Normalization:** $\mathbb{P}(\Omega) = 1$
3.  **Countable Additivity:** For disjoint events $A_1, A_2, \dots$:
    $$\mathbb{P}\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty \mathbb{P}(A_i)$$

### D. Conditional Probability and Independence
The probability of $A$ occurring given $B$ has occurred:
<div class="formula-box">
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
</div>
Two events are **independent** if $P(A \cap B) = P(A)P(B)$, which implies $P(A \mid B) = P(A)$.

---

## 2. Bayes' Theorem

Bayes' Theorem allows models to update beliefs based on new evidence.

<div class="formula-box">
$$P(H \mid D) = \frac{P(D \mid H)\, P(H)}{P(D)}$$
</div>

| Component | Symbol | Meaning |
|---|---|---|
| **Prior** | $P(H)$ | Initial belief before observing data |
| **Likelihood** | $P(D \mid H)$ | Probability of data given hypothesis |
| **Posterior** | $P(H \mid D)$ | Updated belief after observing data |
| **Evidence** | $P(D)$ | Total probability: $\sum_i P(D \mid H_i) P(H_i)$ |

**Real-Life Application — Spam Filtering (Naive Bayes):** A classifier computes $P(\text{Spam} \mid \text{Words})$ by multiplying likelihoods of individual words (independence assumption) with the prior $P(\text{Spam})$, then normalizes by the evidence.

---

## 3. Random Variables: Mappings to $\mathbb{R}$

A **Random Variable $X$** maps the sample space to the real line: $X: \Omega \to \mathbb{R}$

### A. Discrete vs. Continuous

| Type | Values | Tool |
|---|---|---|
| **Discrete** | Countable (e.g., coin flips) | Probability Mass Function (PMF) |
| **Continuous** | Uncountable (e.g., waiting time) | Probability Density Function (PDF) |

### B. PDF and CDF for Continuous Random Variables
1.  **PDF ($f_X(x)$):** Density at point $x$: $P(X \in [x, x+dx]) \approx f_X(x)\,dx$
    *   $f_X(x) \geq 0$ and $\int_{-\infty}^{\infty} f_X(x)\,dx = 1$
2.  **CDF ($F_X(x)$):** Cumulative probability $P(X \leq x)$:
    <div class="formula-box">
$$F_X(x) = \int_{-\infty}^{x} f_X(t)\,dt$$
</div>
    *   $\lim_{x\to-\infty} F_X(x) = 0$, $\lim_{x\to\infty} F_X(x) = 1$, $F_X$ is non-decreasing.

---

## 4. Expectation and Variance

### A. Expected Value ($E[X]$)
<div class="formula-box">
$$E[X] = \int_{-\infty}^{\infty} x\, f_X(x)\,dx$$
</div>
**Properties:**
*   **Linearity:** $E[aX + bY] = aE[X] + bE[Y]$
*   **Functions of RVs:** $E[g(X)] = \int_{-\infty}^{\infty} g(x)\, f_X(x)\,dx$

### B. Variance ($\text{Var}[X]$)
<div class="formula-box">
$$\text{Var}[X] = E[X^2] - (E[X])^2$$
</div>
**Properties:**
*   $\text{Var}[aX] = a^2\,\text{Var}[X]$
*   $\text{Var}[X] \geq 0$
*   $\text{Var}[X+Y] = \text{Var}[X] + \text{Var}[Y]$ only if $X, Y$ are independent.

---

## 5. Key Probability Distributions

### A. Discrete Distributions
*   **Bernoulli($p$):** Single trial with success probability $p$. $P(X=1)=p$, $P(X=0)=1-p$.
*   **Binomial($n, p$):** Number of successes in $n$ independent Bernoulli trials.

### B. Uniform Distribution: $X \sim \text{Unif}(a, b)$
<div class="formula-box">
$$f_X(x) = \begin{cases} \frac{1}{b-a} & x \in [a, b] \\ 0 & \text{otherwise} \end{cases}$$
</div>
$$E[X] = \frac{a+b}{2}, \qquad \text{Var}[X] = \frac{(b-a)^2}{12}$$

### C. Normal (Gaussian) Distribution: $X \sim \mathcal{N}(\mu, \sigma^2)$
<div class="formula-box">
$$f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
</div>
$$E[X] = \mu, \qquad \text{Var}[X] = \sigma^2$$

**Standard Normal:** $Z \sim \mathcal{N}(0,1)$, PDF $f_Z(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$.

**Standardization:** $Z = \frac{X-\mu}{\sigma} \sim \mathcal{N}(0,1)$.

**Normalization constant** (via polar coordinates): $\int_{-\infty}^{\infty} e^{-x^2/2}\,dx = \sqrt{2\pi}$

<div class="theory-box graph-container">
<svg viewBox="0 0 500 300" class="technical-graph">
<!-- Axes -->
<line x1="60" y1="240" x2="460" y2="240" stroke="currentColor" stroke-width="2" />
<line x1="260" y1="40" x2="260" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="4" opacity="0.3" />
<!-- Gaussian Curve (Bell Curve) -->
<path d="M 60 238 C 160 238 160 40 260 40 C 360 40 360 238 460 238" fill="none" stroke="var(--graph-secondary)" stroke-width="3" stroke-linecap="round" />
<!-- Standard Deviation Lines -->
<line x1="190" y1="40" x2="190" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="2" opacity="0.4" />
<line x1="330" y1="40" x2="330" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="2" opacity="0.4" />
<!-- Labels -->
<text x="260" y="280" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600">Value (x)</text>
<text x="20" y="140" text-anchor="middle" font-family="var(--font-ui)" font-size="12" font-weight="600" transform="rotate(-90 20 140)">Density p(x)</text>
<text x="260" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">μ (Mean)</text>
<text x="190" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">-1σ</text>
<text x="330" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">+1σ</text>
</svg>
</div>

**68-95-99.7 Rule:**
1.  **Symmetry:** Distribution is symmetric around $\mu$; peak at the mean.
2.  **68%** of data falls within $\pm 1\sigma$; **95%** within $\pm 2\sigma$.
3.  **Tails** approach zero rapidly — extreme outliers are improbable.

**Multivariate Gaussian:** Generalized to $d$ dimensions with mean vector $\boldsymbol{\mu}$ and covariance matrix $\boldsymbol{\Sigma}$:
<div class="formula-box">
$$p(\mathbf{x}) = (2\pi)^{-d/2}|\boldsymbol{\Sigma}|^{-1/2}\exp\!\left(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$$
</div>

### D. Exponential Distribution: $X \sim \text{Exp}(\lambda)$
<div class="formula-box">
$$f_X(x) = \lambda e^{-\lambda x}, \quad x \geq 0$$
</div>
**Minimum of Two Exponentials:** If $X \sim \text{Exp}(\lambda)$ and $Y \sim \text{Exp}(\tau)$ are independent:
$$Z = \min(X, Y) \sim \text{Exp}(\lambda + \tau)$$
**Derivation:** $F_Z(z) = 1 - e^{-\lambda z}\cdot e^{-\tau z} = 1 - e^{-(\lambda+\tau)z}$, so $f_Z(z) = (\lambda+\tau)e^{-(\lambda+\tau)z}$.

---

## 6. Joint Distributions and Multiple Random Variables

### A. Joint PDF $f_{XY}(x, y)$
<div class="formula-box">
$$P(X \in [x, x+dx],\; Y \in [y, y+dy]) = f_{XY}(x, y)\,dx\,dy$$
</div>

### B. Marginal PDFs (Marginalization)
$$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y)\,dy, \qquad f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y)\,dx$$

### C. Conditional PDF
<div class="formula-box">
$$f_{X|Y}(x \mid y) = \frac{f_{XY}(x, y)}{f_Y(y)}$$
</div>

---

## 7. Independence, Covariance, and Correlation

### A. Independence
$X$ and $Y$ are **independent** iff $f_{XY}(x, y) = f_X(x)\cdot f_Y(y)$.

*Example:* Height and Weight are generally **not independent**.

### B. Covariance and Correlation
<div class="formula-box">
$$\text{cov}[X, Y] = E[XY] - E[X]E[Y], \qquad \rho_{XY} = \frac{\text{cov}[X, Y]}{\sqrt{\text{Var}[X]\cdot\text{Var}[Y]}}$$
</div>

> [!IMPORTANT]
> **Key Theorem:** Independent $\implies$ Uncorrelated. The converse is **not** generally true.

---

## 8. Transformations and Sum of Random Variables

### A. Change of Variables (Jacobian Method)
To transform $(X, Y) \to (W, Z)$:
<div class="formula-box">
$$f_{WZ}(w, z) = f_{XY}\!\left(g^{-1}(w, z)\right) \cdot |\det J|$$
</div>

### B. Sum of Independent Random Variables (Convolution)
If $Z = X + Y$ with $X, Y$ independent:
<div class="formula-box">
$$f_Z(z) = \int_{-\infty}^{\infty} f_X(x)\, f_Y(z - x)\,dx$$
</div>

---

## 9. The Exponential Family

Most ML distributions belong to the **Exponential Family**:
<div class="formula-box">
$$p(x \mid \eta) = h(x) \exp\!\left(\eta^T T(x) - A(\eta)\right)$$
</div>

| Component | Symbol | Role |
|---|---|---|
| Natural Parameter | $\eta$ | Defines the distribution |
| Sufficient Statistic | $T(x)$ | Captures all info for estimation |
| Log-Partition Function | $A(\eta)$ | Ensures normalization; $\nabla A(\eta) = E[T(x)]$ |
| Base Measure | $h(x)$ | Scaling factor independent of $\eta$ |

**Example — Bernoulli in exponential form:**
$$P(x) = \exp\!\left(\log\!\left(\tfrac{p}{1-p}\right)x + \log(1-p)\right), \quad \eta = \log\!\left(\tfrac{p}{1-p}\right), \quad A(\eta) = \log(1+e^\eta)$$

---

## 10. Convergence and Laws of Large Numbers

As data accumulates, sample statistics converge to true parameters:
1.  **Markov & Chebyshev Inequalities:** Provide upper bounds on tail probabilities.
2.  **Law of Large Numbers:** Sample mean $\bar{X}_n \to E[X]$ as $n \to \infty$.
3.  **Central Limit Theorem (CLT):** Standardized sum of i.i.d. variables converges to $\mathcal{N}(0,1)$, regardless of the original distribution.

---

## 11. Worked Examples

### Example 1: Medical Testing (Bayes' Theorem)
A disease affects 0.1% of the population. A test has 99% sensitivity and 98% specificity. If a person tests positive, what is $P(D \mid T^+)$?

*   $P(D) = 0.001$, $P(T^+ \mid D) = 0.99$, $P(T^+ \mid \neg D) = 0.02$
*   $P(T^+) = (0.99)(0.001) + (0.02)(0.999) = 0.02097$
*   $P(D \mid T^+) = \frac{0.00099}{0.02097} \approx \mathbf{0.047}$ (4.7%)

*Even with a 99% accurate test, the low prior makes positive results mostly false positives.*

### Example 2: Expected Value and Variance for a Die
Let $X$ be the outcome of a fair 6-sided die.
1.  $E[X] = \frac{1+2+3+4+5+6}{6} = \mathbf{3.5}$
2.  $E[X^2] = \frac{1+4+9+16+25+36}{6} = \frac{91}{6} \approx 15.17$
3.  $\text{Var}[X] = 15.17 - 3.5^2 = \mathbf{2.92}$

### Example 3: Waiting Time for a Bus (Uniform)
$X \sim \text{Unif}(0, 15)$: $f_X(x) = 1/15$, $F_X(x) = x/15$, $E[X] = 7.5$ min.

### Example 4: Triangular Distribution
$f_X(x) = x/2$ for $x \in [0,1]$. CDF: $F_X(x) = \int_0^x (t/2)\,dt = x^2/4$.

### Example 5: Multivariate Gaussian Log-Likelihood
For $n$ i.i.d. observations $\mathbf{x}_i \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$:
<div class="formula-box">
$$\ell(\boldsymbol{\mu}, \boldsymbol{\Sigma}) = -\frac{nd}{2}\log(2\pi) - \frac{n}{2}\log|\boldsymbol{\Sigma}| - \frac{1}{2}\sum_{i=1}^n (\mathbf{x}_i-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\mathbf{x}_i-\boldsymbol{\mu})$$
</div>
