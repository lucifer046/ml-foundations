# WEEK 10: Probability Foundations and Bayes' Theorem

Machine Learning models often operate under conditions of uncertainty. Probability theory provides the formal framework for quantifying this uncertainty, while Bayes' Theorem allows models to update their beliefs based on new data.

---

## 1. Probability Spaces and Random Variables

### The Axioms of Probability
For a sample space $\Omega$ and an event $A \subseteq \Omega$:
1.  $P(A) \geq 0$
2.  $P(\Omega) = 1$
3.  For disjoint events $A_1, A_2, \dots$: $P(\cup A_i) = \sum P(A_i)$

### Conditional Probability and Independence
The probability of $A$ occurring given that $B$ has occurred is:
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
Two events are **Independent** if $P(A \cap B) = P(A)P(B)$, which implies $P(A \mid B) = P(A)$.

---

## 2. Bayes' Theorem

Bayes' Theorem describes the probability of an event based on prior knowledge of conditions that might be related to the event.

### The Formula
$$P(\text{Hypothesis} \mid \text{Data}) = \frac{P(\text{Data} \mid \text{Hypothesis}) P(\text{Hypothesis})}{P(\text{Data})}$$

Components:
- **Prior $P(H)$:** Initial belief before observing data.
- **Likelihood $P(D \mid H)$:** Probability of the data given the hypothesis.
- **Posterior $P(H \mid D)$:** Updated belief after observing data.
- **Evidence $P(D)$:** Total probability of the data, calculated as $\sum_i P(D \mid H_i) P(H_i)$.

---

## 3. Common Probability Distributions

### Discrete Distributions
- **Bernoulli($p$):** A single trial with success probability $p$. $P(X=1) = p, P(X=0) = 1-p$.
- **Binomial($n, p$):** Number of successes in $n$ independent Bernoulli trials.

### Continuous Distributions
### The Gaussian Visualization
The Gaussian (Normal) distribution $\mathcal{N}(\mu, \sigma^2)$ is the most important distribution in statistics due to the Central Limit Theorem.

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
<!-- Tick Labels -->
<text x="260" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">μ (Mean)</text>
<text x="190" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">-1σ</text>
<text x="330" y="255" font-family="var(--font-ui)" font-size="10" text-anchor="middle">+1σ</text>
</svg>
</div>

**Step-by-Step Explanation of the Graph:**
1.  **Symmetry:** The distribution is perfectly symmetric around the mean $\mu$ (here $\mu=0$). The peak of the curve occurs at the mean.
2.  **Mean, Median, and Mode:** In a Gaussian distribution, the mean, median, and mode are all equal and located at the center.
3.  **The Standard Deviation ($\sigma$):** The "width" of the bell is determined by $\sigma$.
    -   Approximately **68%** of the data falls within $\pm 1\sigma$ (between -1 and 1 on the x-axis).
    -   Approximately **95%** falls within $\pm 2\sigma$ (between -2 and 2).
4.  **Tails:** The tails of the distribution extend to infinity but approach zero very rapidly. This signifies that extreme outliers are highly improbable in Gaussian-distributed data.

- **Gaussian (Normal) Distribution $\mathcal{N}(\mu, \sigma^2)$:**
  $$p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
  Where $\mu$ is the mean and $\sigma^2$ is the variance.
- **Multivariate Gaussian:** Generalization to $d$ dimensions using a mean vector $\boldsymbol{\mu}$ and covariance matrix $\mathbf{\Sigma}$.

---

## 4. Real-Life Application (Short Example)

**Spam Filtering (Naive Bayes):** A classifier calculates the probability that an email is "Spam" given the words it contains. By multiplying the likelihoods of individual words (assuming independence) and incorporating the prior probability of spam, the model determines the most likely category for an incoming message.

---

## 5. Mathematical Problem Solving

### Example 1: Medical Testing (Bayes' Application)
A disease affects 0.1% of the population. A test has a 99% sensitivity (true positive rate) and a 98% specificity (true negative rate). If a person tests positive, what is the probability they actually have the disease?

**Solution:**
- $P(D) = 0.001$ (Prior)
- $P(T^+ \mid D) = 0.99$ (Likelihood)
- $P(T^+ \mid \neg D) = 1 - 0.98 = 0.02$ (False Positive Rate)
- $P(T^+) = P(T^+ \mid D)P(D) + P(T^+ \mid \neg D)P(\neg D) = (0.99)(0.001) + (0.02)(0.999) = 0.00099 + 0.01998 = 0.02097$.
- $P(D \mid T^+) = \frac{P(T^+ \mid D)P(D)}{P(T^+)} = \frac{0.00099}{0.02097} \approx \mathbf{0.0472}$ (or 4.7%).
*Even with a 99% accurate test, the low prior probability means a positive result is more likely a false positive.*

### Example 2: Expected Value and Variance
Let $X$ be a random variable representing a fair 6-sided die. Calculate $E[X]$ and $Var(X)$.

**Solution:**
1. $E[X] = \sum_{i=1}^6 i \cdot \frac{1}{6} = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = \mathbf{3.5}$.
2. $E[X^2] = \sum_{i=1}^6 i^2 \cdot \frac{1}{6} = \frac{1+4+9+16+25+36}{6} = \frac{91}{6} \approx 15.17$.
3. $Var(X) = E[X^2] - (E[X])^2 = \frac{91}{6} - (3.5)^2 = 15.17 - 12.25 = \mathbf{2.92}$.

---

## 6. Advanced Question: Multivariate Gaussian Likelihood

**Problem:** Given $n$ independent observations $\mathbf{x}_i \in \mathbb{R}^d$ from $\mathcal{N}(\boldsymbol{\mu}, \mathbf{\Sigma})$, write the log-likelihood function.

**Solution:**
1. The PDF for one point is $p(\mathbf{x}) = (2\pi)^{-d/2} |\mathbf{\Sigma}|^{-1/2} \exp\left(-\frac{1}{2} (\mathbf{x}-\boldsymbol{\mu})^T \mathbf{\Sigma}^{-1} (\mathbf{x}-\boldsymbol{\mu})\right)$.
2. For $n$ independent points, the likelihood is $L = \prod_{i=1}^n p(\mathbf{x}_i)$.
3. The Log-Likelihood $\ell(\boldsymbol{\mu}, \mathbf{\Sigma}) = \log(L)$ is:
   $$\ell = \sum_{i=1}^n \left[ -\frac{d}{2}\log(2\pi) - \frac{1}{2}\log|\mathbf{\Sigma}| - \frac{1}{2} (\mathbf{x}_i-\boldsymbol{\mu})^T \mathbf{\Sigma}^{-1} (\mathbf{x}_i-\boldsymbol{\mu}) \right]$$
4. Simplified:
   $$\ell = -\frac{nd}{2}\log(2\pi) - \frac{n}{2}\log|\mathbf{\Sigma}| - \frac{1}{2} \sum_{i=1}^n (\mathbf{x}_i-\boldsymbol{\mu})^T \mathbf{\Sigma}^{-1} (\mathbf{x}_i-\boldsymbol{\mu})$$
