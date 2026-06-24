export const servicesHtml = `<div class="scroll-bar" aria-hidden="true"></div>

  <div class="bg left" aria-hidden="true"></div>
  <div class="bg right" aria-hidden="true"></div>

  <header class="navbar" id="navbar">
    <div class="container">

      <a href="/" class="logo-box" aria-label="Capital Bull Wave Home">
        <img src="/image/logo.jpg" alt="Capital Bull Wave Logo">

        <div class="logo">
          Capital <span>Bull Wave</span>
        </div>
      </a>

      <nav aria-label="Main navigation">
        <ul class="nav-menu" id="navMenu">
          <li><a href="/">Home</a></li>
          <li><a href="/services" class="active" aria-current="page">Services</a></li>
          <li><a href="/plans">Plans</a></li>
          <li><a href="/insight">Insights</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>

  <main>

    <section class="hero" id="hero">
      <div class="hero-content reveal">

        <span class="hero-badge">
          Premium Financial Solutions
        </span>

        <h1>
          Professional Stock Market
          <span>Services</span>
        </h1>

        <p>
          Capital Bull Wave provides market guidance, stock market education,
          trading insights and strategic financial learning solutions designed
          for modern investors and traders.
        </p>

        <div class="hero-buttons">
          <a href="/plans" class="btn">Explore Plans</a>
          <a href="/contact" class="btn-outline">Contact Us</a>
        </div>

      </div>
    </section>

    <section class="services-section" id="services">
      <div class="section-heading reveal">

        <span class="section-tag">
          Our Services
        </span>

        <h2>
          What We
          <span>Offer</span>
        </h2>

        <p>
          Discover premium services designed to help investors, traders and
          financial learners grow with confidence and market awareness.
        </p>

      </div>

      <div class="services-grid">

        <article class="service-card reveal">
          <div class="service-icon">📈</div>

          <h3>Market Research</h3>

          <p>
            Daily market analysis, technical insights and research-driven stock
            market updates from experienced professionals.
          </p>

          <ul>
            <li>Live Market Insights</li>
            <li>Technical Analysis</li>
            <li>Research Reports</li>
          </ul>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">🎓</div>

          <h3>Trading Education</h3>

          <p>
            Structured educational programs for beginners and advanced traders
            to improve trading discipline and strategy.
          </p>

          <ul>
            <li>Beginner Training</li>
            <li>Advanced Strategies</li>
            <li>Risk Management</li>
          </ul>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">🛡️</div>

          <h3>Risk Management</h3>

          <p>
            Learn how to manage investment risks with disciplined portfolio
            planning and strategic market approaches.
          </p>

          <ul>
            <li>Portfolio Planning</li>
            <li>Capital Protection</li>
            <li>Risk Awareness</li>
          </ul>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">🚀</div>

          <h3>Premium Signals</h3>

          <p>
            Get access to premium trading opportunities, research alerts and
            market movement notifications.
          </p>

          <ul>
            <li>Trade Alerts</li>
            <li>Entry & Exit Levels</li>
            <li>Trend Analysis</li>
          </ul>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">📊</div>

          <h3>Portfolio Guidance</h3>

          <p>
            Strategic investment guidance focused on long-term growth,
            diversification and market awareness.
          </p>

          <ul>
            <li>Investment Planning</li>
            <li>Portfolio Review</li>
            <li>Diversification Tips</li>
          </ul>
        </article>

        <article class="service-card reveal">
          <div class="service-icon">🤝</div>

          <h3>Dedicated Support</h3>

          <p>
            Professional customer assistance and trading support available for
            all active clients and learners.
          </p>

          <ul>
            <li>Client Support</li>
            <li>Learning Assistance</li>
            <li>Quick Responses</li>
          </ul>
        </article>

      </div>
    </section>

    <section class="why-section" id="why">
      <div class="why-container">

        <div class="why-image reveal">
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
            alt="Professional financial market analysis workspace"
            loading="lazy"
          >
        </div>

        <div class="why-content reveal">
          <span class="section-tag">
            Why Choose Us
          </span>

          <h2>
            Trusted Financial Learning
            <span>Platform</span>
          </h2>

          <p>
            Capital Bull Wave combines market research, educational expertise
            and modern financial learning methods to help users improve
            investment awareness and trading discipline.
          </p>

          <div class="why-grid">
            <div class="why-item">
              <h4>Professional Research</h4>
              <p>High-quality market analysis and research insights.</p>
            </div>

            <div class="why-item">
              <h4>Modern Learning</h4>
              <p>Simplified education for modern investors and traders.</p>
            </div>

            <div class="why-item">
              <h4>Risk Awareness</h4>
              <p>Strong focus on disciplined investing principles.</p>
            </div>

            <div class="why-item">
              <h4>Client Support</h4>
              <p>Reliable support for learners and subscribers.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="stats-section" aria-label="Service statistics">
      <div class="stats-grid">

        <div class="stat-card reveal">
          <h2>5K+</h2>
          <p>Active Learners</p>
        </div>

        <div class="stat-card reveal">
          <h2>150+</h2>
          <p>Research Reports</p>
        </div>

        <div class="stat-card reveal">
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>

        <div class="stat-card reveal">
          <h2>24/7</h2>
          <p>Support Access</p>
        </div>

      </div>
    </section>

    <section class="cta reveal">
      <h2>
        Start Your Financial Growth Journey
      </h2>

      <p>
        Join Capital Bull Wave and access premium market insights,
        educational programs and professional trading support.
      </p>

      <a href="/contact" class="btn">
        Get Started
      </a>
    </section>

  </main>

  <footer>
    <div class="footer-grid">

      <div>
        <div class="footer-logo">
          <img src="/image/logo.jpg" alt="Capital Bull Wave Logo">

          <div class="footer-logo-text">
            Capital <span>Bull Wave</span>
          </div>
        </div>

        <p>
          Smart investing and professional market guidance designed for modern
          investors and traders.
        </p>
      </div>

      <div>
        <h3>Company</h3>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/services">Features</a>
        <a href="/plans">Plans</a>
      </div>

      <div>
        <h3>Resources</h3>
        <a href="/insight">Market Insights</a>
        <a href="/contact">Contact</a>
        <a href="/services">Features</a>
      </div>

      <div>
        <h3>Legal</h3>
        <a href="/contact">Terms & Conditions</a>
        <a href="/contact">Privacy Policy</a>
      </div>

    </div>

    <div class="copy">
      <div>
        © 2026 Capital Bull Wave. All rights reserved.
      </div>

      <div class="copy-links">
        <a href="/contact">Terms</a>
        <a href="/contact">Privacy</a>
      </div>
    </div>
  </footer>

  `;
