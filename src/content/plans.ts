export const plansHtml = `<a href="#main-content" class="skip-link">Skip to content</a>

  <div class="page-loader" id="loader" aria-hidden="true">
    <div class="loader-ring"></div>
  </div>

  <div class="cursor-glow" aria-hidden="true"></div>
  <div class="glow glow-1" aria-hidden="true"></div>
  <div class="glow glow-2" aria-hidden="true"></div>
  <div class="glow glow-3" aria-hidden="true"></div>

  <nav class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation" aria-hidden="true">
    <button class="mobile-close" id="closeMenuBtn" type="button" aria-label="Close menu">
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>

    <a href="/">Home</a>
<a href="/services">Services</a>
<a href="/services">Features</a>
<a href="/insight">Insights</a>
<a href="/plans" class="active">Plans</a>
<a href="/contact">Contact</a>
  </nav>

  <header class="site-header">
    <nav class="navbar" id="navbar" aria-label="Main navigation">
      <div class="nav-container">
        <a href="/" class="logo-box">
          <img src="/image/logo.jpg" alt="Capital Bull Wave Logo" />
          <div class="logo-text">Capital <span>Bull Wave</span></div>
        </a>

        <ul class="nav-menu">
        <li><a href="/">Home</a></li>
<li><a href="/services">Services</a></li>
<li><a href="/insight">Insights</a></li>
<li><a href="/plans" class="active">Plans</a></li>
<li><a href="/contact" class="nav-cta">Contact</a></li>
        </ul>

        <button class="hamburger" id="hamburger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>

  <main id="main-content">
    <section class="hero">
      <div class="hero-badge reveal">
        <span class="pulse-dot" aria-hidden="true"></span>
        Flexible plans for every investor
      </div>

      <div class="hero-eyebrow reveal reveal-delay-1">Plans & Pricing</div>

      <h1 class="reveal reveal-delay-1">
        Invest Smarter,<br />
        Trade With <em>Confidence</em>
      </h1>

      <p class="reveal reveal-delay-2">
        Choose a guidance plan built for market learning, disciplined trading,
        research support and smarter decision-making.
      </p>

      <div class="hero-cta reveal reveal-delay-3">
        <a href="#plans" class="btn-primary">Explore Plans</a>
       <a href="/contact" class="btn-secondary">Talk To Expert</a>
      </div>

      <div class="hero-meta reveal reveal-delay-3" aria-label="Plan highlights">
        <div class="hero-meta-item">
          <span class="dot" aria-hidden="true"></span>
          Market learning support
        </div>
        <div class="hero-meta-item">
          <span class="dot" aria-hidden="true"></span>
          Risk-first guidance
        </div>
        <div class="hero-meta-item">
          <span class="dot" aria-hidden="true"></span>
          Cancel anytime
        </div>
      </div>
    </section>
    <div style="text-align:center;">
  <section class="toggle-wrap reveal" aria-label="Billing cycle">
     <div class="toggle-inner" role="tablist" aria-label="Choose billing period">
        <button class="toggle-btn active" id="btnMonthly" type="button" role="tab" aria-selected="true">
          Monthly
        </button>

        <button class="toggle-btn" id="btnAnnual" type="button" role="tab" aria-selected="false">
          Annual <span class="save-badge">Save 25%</span>
        </button>
      </div>
    </section>
    
    <section class="plans-section" id="plans" aria-label="Pricing plans">
      <div class="plans-grid">
        <article class="plan-card reveal reveal-delay-1">
          <div class="plan-top">
            <div class="plan-icon-wrap" aria-hidden="true">📈</div>
            <div class="plan-rating">Beginner Friendly</div>
          </div>

          <h2 class="plan-name">Starter</h2>
          <p class="plan-desc">Perfect for beginners who want structured market updates and simple guidance.</p>

          <div class="price-row" aria-label="Starter plan price">
            <span class="currency">₹</span>
            <span class="price" id="p-starter">999</span>
          </div>

          <p class="period">/ month billed <span id="bill-starter">monthly</span></p>

          <div class="divider"></div>

          <ul class="features">
            <li><span class="check-icon">✓</span> Daily market updates</li>
            <li><span class="check-icon">✓</span> Basic trading ideas</li>
            <li><span class="check-icon">✓</span> Beginner learning support</li>
            <li><span class="check-icon">✓</span> Weekly insight notes</li>
            <li><span class="check-icon">✓</span> Email assistance</li>
          </ul>

          <a href="/contact?plan=starter" class="plan-btn plan-btn-outline">Get Started</a>
        </article>

        <article class="plan-card featured reveal reveal-delay-2">
          <div class="popular-badge">★ Most Popular</div>

          <div class="plan-top">
            <div class="plan-icon-wrap" aria-hidden="true">💹</div>
            <div class="plan-rating">Active Traders</div>
          </div>

          <h2 class="plan-name">Pro Trader</h2>
          <p class="plan-desc">Advanced support for active traders who need deeper analysis and risk planning.</p>

          <div class="price-row" aria-label="Pro Trader plan price">
            <span class="currency">₹</span>
            <span class="price" id="p-pro">5,999</span>
          </div>

          <p class="period">/ month billed <span id="bill-pro">monthly</span></p>

          <div class="divider"></div>

          <ul class="features">
            <li><span class="check-icon">✓</span> Premium trading ideas</li>
            <li><span class="check-icon">✓</span> Intraday market analysis</li>
            <li><span class="check-icon">✓</span> Risk management planning</li>
            <li><span class="check-icon">✓</span> Futures & options learning</li>
            <li><span class="check-icon">✓</span> Priority support</li>
            <li><span class="check-icon">✓</span> Strategy discussion support</li>
          </ul>

         <a href="/contact?plan=pro-trader" class="plan-btn plan-btn-primary">Start Pro</a>
        </article>

        <article class="plan-card reveal reveal-delay-3">
          <div class="plan-top">
            <div class="plan-icon-wrap" aria-hidden="true">🏆</div>
            <div class="plan-rating">Premium Support</div>
          </div>

          <h2 class="plan-name">Elite Investor</h2>
          <p class="plan-desc">Premium guidance for investors who want portfolio-level planning and research support.</p>

          <div class="price-row" aria-label="Elite Investor plan price">
            <span class="currency">₹</span>
            <span class="price" id="p-elite">9,999</span>
          </div>

          <p class="period">/ month billed <span id="bill-elite">monthly</span></p>

          <div class="divider"></div>

          <ul class="features">
            <li><span class="check-icon">✓</span> Portfolio guidance</li>
            <li><span class="check-icon">✓</span> 1-on-1 consultation support</li>
            <li><span class="check-icon">✓</span> Long-term investment planning</li>
            <li><span class="check-icon">✓</span> Premium research notes</li>
            <li><span class="check-icon">✓</span> Wealth strategy guidance</li>
            <li><span class="check-icon">✓</span> Dedicated support access</li>
          </ul>

          <a href="/contact?plan=elite-investor" class="plan-btn plan-btn-gold">Go Elite</a>
        </article>
      </div>
    </section>

    <section class="guarantee reveal" aria-label="Service highlights">
      <div class="guarantee-inner">
        <div class="guarantee-item">
          <span class="gi-icon" aria-hidden="true">🛡️</span>
          Risk-first education
        </div>
        <div class="guarantee-item">
          <span class="gi-icon" aria-hidden="true">📚</span>
          Practical market learning
        </div>
        <div class="guarantee-item">
          <span class="gi-icon" aria-hidden="true">💬</span>
          Human support
        </div>
      </div>
    </section>

    <section class="stats-section reveal">
      <div class="stats-bg-blur" aria-hidden="true"></div>

      <div class="stats-container">
        <div class="section-head">
          <div class="section-eyebrow">Trusted Guidance</div>
          <h2>Built For <em>Serious Learners</em></h2>
          <p>
            Our plans are designed to help you improve market understanding,
            manage risk and build disciplined investing habits.
          </p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-users" aria-hidden="true"></i></div>
            <h3><span class="counter" data-target="500">0</span>+</h3>
            <p>Growing learners</p>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-chart-line" aria-hidden="true"></i></div>
            <h3>Daily</h3>
            <p>Market learning updates</p>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i></div>
            <h3>Risk</h3>
            <p>Focused planning</p>
          </div>

          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-headset" aria-hidden="true"></i></div>
            <h3>Support</h3>
            <p>For investor questions</p>
          </div>
        </div>
      </div>
    </section>

    

    <section class="cta-section reveal">
      <div class="cta-inner">
        <div class="cta-eyebrow">Need help choosing?</div>
        <h2>Find The Plan That Fits Your Market Journey</h2>
        <p>
          Speak with Capital Bull Wave and choose a plan based on your experience,
          goals and learning needs.
        </p>

        <div class="cta-btns">
          <a href="/contact" class="btn-white">Talk To Expert</a>
          <a href="/services" class="btn-ghost">View Features</a>
        </div>
      </div>
        </section>

  </main>

  <footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="/" class="logo-box">
        <img src="/image/logo.jpg" alt="Capital Bull Wave Logo" />
        <div class="logo-text">Capital <span>Bull Wave</span></div>
      </a>

      <p>
        Smart investing and professional stock market guidance designed for
        modern Indian investors, traders and financial learners.
      </p>

      <div class="footer-social" aria-label="Social links">
        <a class="social-btn" href="/contact" aria-label="Contact Capital Bull Wave">
          <i class="fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
        <a class="social-btn" href="/insight" aria-label="Read market insights">
          <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
        </a>
        <a class="social-btn" href="/plans" aria-label="View plans">
          <i class="fa-solid fa-indian-rupee-sign" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <div class="footer-col">
      <h4>Company</h4>
      <a href="/about">About Us</a>
      <a href="/services">Services</a>
      <a href="/services">Features</a>
      <a href="/insight">Insights</a>
    </div>

    <div class="footer-col">
      <h4>Quick Links</h4>
      <a href="/plans">Plans & Pricing</a>
      <a href="/contact">Contact Us</a>
      <a href="#plans">Compare Plans</a>
    </div>

    <div class="footer-col">
      <h4>Legal</h4>
      <a href="/contact">Privacy Policy</a>
      <a href="/contact">Terms & Conditions</a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2026 Capital Bull Wave. All rights reserved.</p>

    <div class="footer-bottom-links">
      <a href="/contact">Privacy</a>
      <a href="/contact">Terms</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
</footer>


`;
