# WEEK 11: Exponential Family of Distributions

The exponential family is a broad class of probability distributions that share a common mathematical form. Most distributions used in machine learning (Gaussian, Bernoulli, Poisson, etc.) belong to this family, allowing for unified algorithms for parameter estimation and inference.

---

## 1. General Form of the Exponential Family

A probability distribution belongs to the exponential family if its density (or mass) function can be expressed as:
$$p(x \mid \eta) = h(x) \exp\left( \eta^T T(x) - A(\eta) \right)$$

### Components:
- **$\eta$ (Natural Parameter):** A vector of parameters that define the distribution.
- **$T(x)$ (Sufficient Statistic):** A function of the data that captures all information needed to estimate $\eta$.
- **$A(\eta)$ (Log-Partition Function):** A normalization constant that ensures the total probability is 1.
- **$h(x)$ (Base Measure):** A scaling factor independent of $\eta$.

---

## 2. Common Distributions in Exponential Form

### The Bernoulli Distribution
A Bernoulli distribution with success probability $p$:
$$P(x) = p^x (1-p)^{1-x} = \exp\left( \log\left(\frac{p}{1-p}\right)x + \log(1-p) \right)$$
- $\eta = \log\left(\frac{p}{1-p}\right)$ (The Log-Odds).
- $T(x) = x$.
- $A(\eta) = \log(1+e^\eta)$.

### The Gaussian Distribution (Fixed Variance)
For $\mathcal{N}(\mu, 1)$:
$$p(x) = \frac{1}{\sqrt{2\pi}} \exp\left( -\frac{1}{2}(x-\mu)^2 \right) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \exp\left( \mu x - \frac{\mu^2}{2} \right)$$
- $\eta = \mu$.
- $T(x) = x$.
- $A(\eta) = \eta^2/2$.

---

## 3. Properties of the Log-Partition Function

The function $A(\eta)$ is a "moment generating" function. Its derivatives provide the moments of the sufficient statistic $T(x)$:
1.  **Mean:** $\nabla_{\eta} A(\eta) = E[T(x)]$
2.  **Variance:** $\nabla^2_{\eta} A(\eta) = Var(T(x))$

Since the variance is always non-negative, $\nabla^2 A(\eta) \succeq 0$, which implies that $A(\eta)$ is a **Convex Function**.

---

## 4. Real-Life Application (Short Example)

**Generalized Linear Models (GLMs):** GLMs (like Logistic or Poisson regression) extend linear models by assuming the target variable $y$ follows a distribution from the exponential family. The model predicts the natural parameter $\eta$ as a linear combination of features $\mathbf{w}^T \mathbf{x}$.

---

## 5. Mathematical Problem Solving

### Example 1: Moments of the Bernoulli Distribution
Given the log-partition function $A(\eta) = \log(1+e^\eta)$ for the Bernoulli distribution, find the mean.

**Solution:**
1. $E[x] = \frac{dA}{d\eta} = \frac{d}{d\eta} \log(1+e^\eta)$.
2. $E[x] = \frac{1}{1+e^\eta} \cdot e^\eta = \frac{e^\eta}{1+e^\eta}$.
3. Recall $\eta = \log\left(\frac{p}{1-p}\right) \implies e^\eta = \frac{p}{1-p}$.
4. $E[x] = \frac{p/(1-p)}{1 + p/(1-p)} = \frac{p/(1-p)}{(1-p+p)/(1-p)} = \mathbf{p}$.

### Example 2: Sufficient Statistics
If $x_1, \dots, x_n$ are i.i.d. samples from an exponential family, show that $\sum T(x_i)$ is a sufficient statistic for the whole dataset.

**Solution:**
1. Likelihood $L = \prod p(x_i \mid \eta) = \left(\prod h(x_i)\right) \exp\left( \eta^T \sum T(x_i) - n A(\eta) \right)$.
2. According to the Fisher-Neyman Factorization Theorem, since the likelihood depends on the data only through the sum $\sum T(x_i)$, the sum is a **Sufficient Statistic**.

---

## 6. Advanced Question: Conjugate Priors

**Problem:** Explain why distributions in the exponential family often have simple conjugate priors.

**Solution:**
1. The likelihood for $\eta$ given data $\mathbf{x}$ has the form $L(\eta) \propto \exp(\eta^T T(\mathbf{x}) - n A(\eta))$.
2. If we choose a prior $p(\eta)$ with the same functional form: $p(\eta) \propto \exp(\eta^T \boldsymbol{\alpha} - \beta A(\eta))$.
3. Then the posterior $p(\eta \mid \mathbf{x}) \propto L(\eta) p(\eta)$ is:
   $$p(\eta \mid \mathbf{x}) \propto \exp\left( \eta^T (T(\mathbf{x}) + \boldsymbol{\alpha}) - (n + \beta) A(\eta) \right)$$
4. The posterior stays in the same family as the prior, just with updated parameters. This is the definition of a **Conjugate Prior**.
