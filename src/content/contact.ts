export const contactHtml = `<a href="#main-content" class="skip-link">Skip to content</a>

    <div class="bg left" aria-hidden="true"></div>
    <div class="bg right" aria-hidden="true"></div>

    <div class="candlestick-bg" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
    </div>

    <header class="site-header">
        <nav class="navbar" aria-label="Main navigation">
            <div class="nav-container">
                <a href="/" class="logo-box" aria-label="Capital Bull Wave home">
                <img src="/image/logo.jpg" alt="Capital Bull Wave Logo" width="58" height="58">
                    <div class="logo">Capital <span>Bull Wave</span></div>
                </a>

                <ul class="nav-menu" id="navMenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/insight">Insights</a></li>
                    <li><a href="/plans">Plans</a></li>
                    <li><a href="/contact" class="active" aria-current="page">Contact</a></li>
                    </ul>

                <button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">
                    ☰
                </button>
            </div>

            <div class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation">
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/insight">Insights</a>
                <a href="/plans">Plans</a>
                <a href="/contact" class="active">Contact</a>
            </div>
        </nav>
    </header>

    <main id="main-content">
        <section class="hero" aria-labelledby="contact-title">
            <div class="hero-glow" aria-hidden="true"></div>

            <div class="badge">📞 Contact Capital Bull Wave</div>

            <h1 id="contact-title">
                Let's Build Your <span>Financial Future</span>
            </h1>

            <p>
                Have questions about trading, investing, or market insights? Connect with Capital Bull Wave for smart financial guidance and professional support.
            </p>

            <div class="hero-buttons">
                <a href="#contactForm" class="btn">Send Message →</a>
                <a href="/plans" class="btn-outline">Explore Plans</a>
            </div>

            <div class="hero-trust-strip" aria-label="Contact highlights">
                <span>✅ Professional Guidance</span>
                <span>📍 Delhi Office</span>
                <span>⚡ Quick Response</span>
            </div>
        </section>

        <section class="contact-section" aria-label="Contact details and form">
            <div class="contact-top">
                <article class="card info-card">
                    <div class="card-header">
                        <span class="small-tag">Contact Details</span>
                        <h2>Get In Touch</h2>
                        <p>Reach out anytime for stock market guidance, investment planning, and trading support.</p>
                    </div>

                    <div class="info-grid">
                        <div class="info-box">
                            <div class="info-icon" aria-hidden="true">📍</div>
                            <div>
                                <h3>Office Address</h3>
                                <p>Unit No. 671, 6th Floor,<br>Aggarwal Millennium Tower 2,<br>NSP, Pitampura, Delhi - 110034</p>
                            </div>
                        </div>

                        <div class="info-box">
                            <div class="info-icon" aria-hidden="true">📞</div>
                            <div>
                                <h3>Phone Number</h3>
                                <p><a href="tel:+919616212526">+91 9616212526</a><br><a href="tel:+911149042936">011 4904 2936</a></p>
                            </div>
                        </div>

                        <div class="info-box">
                            <div class="info-icon" aria-hidden="true">✉️</div>
                            <div>
                                <h3>Email Address</h3>
                                <p><a href="mailto:capitalbullwave@gmail.com">capitalbullwave@gmail.com</a></p>
                            </div>
                        </div>

                        <div class="info-box">
                            <div class="info-icon" aria-hidden="true">🕒</div>
                            <div>
                                <h3>Working Hours</h3>
                                <p>Monday - Saturday<br>9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="card form-card">
                    <div class="card-header">
                        <span class="small-tag">Contact Form</span>
                        <h2>Send Message</h2>
                        <p>Fill out the form below and our team will respond shortly.</p>
                    </div>

                    <form id="contactForm" action="https://formspree.io/f/mzdwaqgp" method="POST" novalidate>
                        <input type="hidden" name="_subject" value="New Contact Message - Capital Bull Wave">

                        <div class="input-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your full name" autocomplete="name" required>
                        </div>

                        <div class="input-row">
                            <div class="input-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" autocomplete="email" required>
                            </div>

                            <div class="input-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Enter your number" autocomplete="tel" required>
                            </div>
                        </div>

                        <div class="input-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
                        </div>

                        <button type="submit" class="btn submit-btn" id="submitBtn">Send Message →</button>
                        <p id="formStatus" class="form-status" role="status" aria-live="polite"></p>
                    </form>
                </article>
            </div>
        </section>

        <section class="map-wrapper" aria-labelledby="office-title">
            <div class="map-section">
                <div class="map-image">
                    <img src="/image/map.png" alt="Capital Bull Wave office location map at NSP Pitampura, Delhi" loading="lazy">
                    <div class="map-floating-card">
                        <span>📍 Delhi Office</span>
                        <strong>NSP, Pitampura</strong>
                    </div>
                </div>

                <div class="map-content">
                    <span class="map-tag">Visit Our Office</span>
                    <h2 id="office-title">Meet Us At Our Delhi Office</h2>
                    <p>
                        We welcome investors, partners, and clients to our modern workspace located in Netaji Subhash Place, Delhi. The office is easily accessible via metro and major transport routes.
                    </p>

                    <div class="location-info">
                        <div class="location-box">
                            <div class="location-icon" aria-hidden="true">📍</div>
                            <div>
                                <strong>Office Address</strong>
                                <span>Unit No. 671, 6th Floor,<br>Aggarwal Millennium Tower 2,<br>NSP, Pitampura, Delhi - 110034</span>
                            </div>
                        </div>

                        <div class="location-box">
                            <div class="location-icon" aria-hidden="true">🕒</div>
                            <div>
                                <strong>Business Hours</strong>
                                <span>Monday - Saturday<br>9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div class="map-buttons">
                        <a href="https://www.google.com/maps/place/Aggarwal+Millenium+Tower-I/@28.6937959,77.1497203,17z/data=!3m1!4b1!4m6!3m5!1s0x390d023323c40535:0xf65f01fc5f865c34!8m2!3d28.6937959!4d77.1497203!16s%2Fg%2F1ptyhykml" target="_blank" rel="noopener noreferrer" class="map-btn primary-btn">Open Google Maps</a>
                        <a href="tel:+919616212526" class="map-btn secondary-btn">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="review-section" aria-labelledby="review-title">
            <div class="card review-card">
                <div class="card-header">
                    <span class="small-tag">Client Reviews</span>
                    <h2 id="review-title">Share Your Review</h2>
                    <p>Rate Capital Bull Wave and leave your feedback.</p>
                </div>

                <form id="reviewForm" novalidate>
                    <div class="input-group">
                        <label for="reviewEmail">Email Address</label>
                        <input type="email" id="reviewEmail" placeholder="Enter your email" autocomplete="email" required>
                    </div>

                    <div class="input-group">
                        <label>Your Rating</label>
                        <div class="stars" id="stars" role="radiogroup" aria-label="Star rating">
                            <button type="button" data-rating="1" aria-label="1 star">★</button>
                            <button type="button" data-rating="2" aria-label="2 stars">★</button>
                            <button type="button" data-rating="3" aria-label="3 stars">★</button>
                            <button type="button" data-rating="4" aria-label="4 stars">★</button>
                            <button type="button" data-rating="5" aria-label="5 stars">★</button>
                        </div>
                        <small id="ratingText" class="rating-text">Select your rating</small>
                    </div>

                    <div class="input-group">
                        <label for="reviewComment">Your Comment</label>
                        <textarea id="reviewComment" placeholder="Write your review..." required></textarea>
                    </div>

                    <button type="submit" class="btn submit-btn">Submit Review →</button>
                    <p id="reviewMsg" class="review-msg" role="status" aria-live="polite"></p>
                </form>

                <div class="reviews-list" id="reviewsList" aria-live="polite"></div>
            </div>
        </section>
    </main>

  <footer>
    <div class="footer-grid">
        <div class="footer-brand">
            <div class="footer-logo">
                <img src="/image/logo.jpg" alt="Capital Bull Wave Logo" width="52" height="52" loading="lazy">
                <div class="footer-logo-text">Capital <span>Bull Wave</span></div>
            </div>
            <p>Smart investing and professional stock market guidance designed for modern investors, traders, and financial learners.</p>
        </div>

        <div>
            <h3>Company</h3>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/services">Features</a>
        </div>

        <div>
            <h3>Quick Links</h3>
            <a href="/plans">Plans & Pricing</a>
            <a href="/insight">Market Insights</a>
            <a href="/contact">Contact Us</a>
        </div>

        <div>
            <h3>Legal</h3>
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Terms & Conditions</a>
        </div>
    </div>

    <div class="copy">© 2026 Capital Bull Wave.</div>
</footer>

    `;
