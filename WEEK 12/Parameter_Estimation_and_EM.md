# WEEK 12: Parameter Estimation and Expectation-Maximization (EM)

Parameter estimation is the process of using data to find the most likely values for the parameters of a probabilistic model. When some data is missing or hidden (latent variables), we use the Expectation-Maximization algorithm to iteratively find the optimal parameters.

---

## 1. Maximum Likelihood Estimation (MLE)

MLE is a method of estimating the parameters of a probability distribution by maximizing a likelihood function, so that under the assumed statistical model the observed data is most probable.

### The Likelihood Function
For i.i.d. data $X = \{x_1, \dots, x_n\}$, the likelihood is:
<div class="formula-box">
$$L(\theta) = P(X \mid \theta) = \prod_{i=1}^n P(x_i \mid \theta)$$
</div>
In practice, we maximize the **Log-Likelihood** $\ell(\theta) = \log L(\theta)$ because it transforms products into sums and is computationally more stable:
<div class="formula-box">
$$\hat{\theta}_{MLE} = \arg\max_{\theta} \sum_{i=1}^n \log P(x_i \mid \theta)$$
</div>

---

## 2. Maximum A Posteriori (MAP) Estimation

MAP estimation incorporates a **Prior Distribution** $p(\theta)$ over the parameters, allowing us to include domain knowledge or perform regularization.
<div class="formula-box">
$$\hat{\theta}_{MAP} = \arg\max_{\theta} P(\theta \mid X) = \arg\max_{\theta} \left[ \sum \log P(x_i \mid \theta) + \log P(\theta) \right]$$
</div>
- If the prior is uniform, MAP is equivalent to MLE.
- If the prior is Gaussian, MAP is equivalent to **Ridge Regression** ($L_2$ regularization).

---

## 3. Expectation-Maximization (EM) Algorithm

The EM algorithm is used to find MLE estimates when the model depends on unobserved **Latent Variables** $Z$.

### The Two Steps
1.  **E-Step (Expectation):** Calculate the expected value of the log-likelihood function, with respect to the conditional distribution of $Z$ given $X$ and the current estimate of the parameters $\theta^{(t)}$:
    <div class="formula-box">
$$Q(\theta \mid \theta^{(t)}) = E_{Z \mid X, \theta^{(t)}} [\log P(X, Z \mid \theta)]$$
</div>
2.  **M-Step (Maximization):** Find the parameters $\theta$ that maximize this $Q$ function:
    <div class="formula-box">
$$\theta^{(t+1)} = \arg\max_{\theta} Q(\theta \mid \theta^{(t)})$$
</div>

---

## 4. Real-Life Application (Short Example)

**Clustering with GMM:** Gaussian Mixture Models (GMM) assume that data points are generated from a mixture of several Gaussian distributions. Since we don't know which Gaussian "owns" which data point, the assignments are latent variables. The EM algorithm iteratively updates the assignments (E-step) and the means/variances of the Gaussians (M-step) to cluster the data.

---

## 5. Mathematical Problem Solving

### Example 1: MLE for the Poisson Distribution
Given $n$ samples from a Poisson distribution $P(x) = \frac{\lambda^x e^{-\lambda}}{x!}$, find the MLE for $\lambda$.

**Solution:**
1. Log-likelihood: $\ell(\lambda) = \sum_{i=1}^n [x_i \log \lambda - \lambda - \log(x_i!)]$.
2. Differentiate w.r.t. $\lambda$: $\frac{d\ell}{d\lambda} = \sum \frac{x_i}{\lambda} - n$.
3. Set to zero: $\frac{1}{\lambda} \sum x_i = n \implies \hat{\lambda} = \frac{1}{n} \sum x_i$.
4. Result: The MLE for $\lambda$ is the **Sample Mean**.

### Example 2: MLE for Gaussian Mean
Find the MLE for $\mu$ given $x \sim \mathcal{N}(\mu, \sigma^2)$.

**Solution:**
1. $\ell(\mu) = \sum [-\log(\sqrt{2\pi\sigma^2}) - \frac{(x_i-\mu)^2}{2\sigma^2}]$.
2. $\frac{\partial \ell}{\partial \mu} = \sum \frac{x_i-\mu}{\sigma^2} = \frac{1}{\sigma^2} (\sum x_i - n\mu)$.
3. Set to zero: $\sum x_i - n\mu = 0 \implies \hat{\mu} = \frac{1}{n} \sum x_i$.

---

## 6. Advanced Question: Lower Bound of Likelihood

**Problem:** Prove that the EM algorithm increases the log-likelihood $\log P(X \mid \theta)$ at every step.

**Solution:**
Using Jensen's Inequality, we can write the log-likelihood as:
$$\log P(X \mid \theta) = \log \sum_Z P(X, Z \mid \theta) = \log \sum_Z q(Z) \frac{P(X, Z \mid \theta)}{q(Z)}$$
Where $q(Z)$ is any distribution. By Jensen's:
<div class="formula-box">
$$\log P(X \mid \theta) \geq \sum_Z q(Z) \log \frac{P(X, Z \mid \theta)}{q(Z)} = \mathcal{L}(q, \theta)$$
</div>
The E-step chooses $q(Z) = P(Z \mid X, \theta^{(t)})$ to make the bound tight (equality). The M-step then increases $\theta$ to maximize $\mathcal{L}(q, \theta)$. Since the bound was tight at $\theta^{(t)}$, any increase in the bound $\mathcal{L}$ must also increase the actual likelihood $P(X \mid \theta)$. (Q.E.D.)
