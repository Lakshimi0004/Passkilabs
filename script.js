let currentWebsiteType = '';

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

function generateDemos() {
    const websiteType = document.getElementById('websiteType').value.trim();
    
    if (!websiteType) {
        alert('Please enter a website type');
        return;
    }

    currentWebsiteType = websiteType;

    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('demoResults').style.display = 'none';

    // Simulate loading time
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('demoResults').style.display = 'block';
        
        // Generate demo cards
        generateDemoCards(websiteType);
        
        // Scroll to results
        document.getElementById('demoResults').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

function generateDemoCards(websiteType) {
    const demoCards = document.getElementById('demoCards');
    
    const demoData = [
        {
            type: 'Static',
            features: [
                'Responsive Landing Page',
                'Contact Form',
                'SEO Optimized',
                'Gallery/Portfolio',
                'Fast Loading'
            ],
            description: `A clean, professional ${websiteType.toLowerCase()} landing page with essential information and contact functionality.`
        },
        {
            type: 'Dynamic',
            features: [
                'Content Management',
                'Interactive Features',
                'Service Booking',
                'User Dashboard',
                'Admin Panel'
            ],
            description: `Interactive ${websiteType.toLowerCase()} with booking systems, user accounts, and dynamic content management.`
        },
        {
            type: 'Full-Fledged',
            features: [
                'Complete User System',
                'E-commerce Ready',
                'Advanced Dashboard',
                'Payment Integration',
                'Mobile App Ready'
            ],
            description: `Complete ${websiteType.toLowerCase()} solution with user authentication, payment systems, and full functionality.`
        }
    ];

    demoCards.innerHTML = '';

    demoData.forEach((demo, index) => {
        const card = document.createElement('div');
        card.className = 'demo-card';
        
        const featuresHtml = demo.features.map(feature => `<li>${feature}</li>`).join('');
        
        // Generate mini preview
        const previewHtml = generateMiniPreview(websiteType, demo.type);
        
        card.innerHTML = `
            <div class="demo-preview">
                ${previewHtml}
            </div>
            <div class="demo-content">
                <div class="demo-title">${demo.type} ${websiteType}</div>
                <div class="demo-description">${demo.description}</div>
                <ul class="demo-features">
                    ${featuresHtml}
                </ul>
                <button class="view-demo-btn" onclick="viewDemo('${demo.type}', '${websiteType}')">
                    <i class="fas fa-eye"></i> View Live Demo
                </button>
            </div>
        `;
        
        demoCards.appendChild(card);
    });
}

function generateMiniPreview(websiteType, demoType) {
    const planStyles = {
        'Static': { background: 'linear-gradient(135deg, #B3D4FF 0%, #4A90E2 100%)', icon: '📄', iconColor: '#1A3C5A' },
        'Dynamic': { background: 'linear-gradient(135deg, #FFD1DC 0%, #FF6B81 100%)', icon: '⚡', iconColor: '#4A202C' },
        'Full-Fledged': { background: 'linear-gradient(135deg, #B7EFC5 0%, #38A169 100%)', icon: '🚀', iconColor: '#1A3C34' }
    };

    const style = planStyles[demoType] || planStyles['Static'];
    
    return `
        <div style="width: 100%; height: 100%; background: ${style.background}; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px; color: ${style.iconColor};">${style.icon}</div>
            <div style="font-size: 1.2rem; font-weight: bold;">${demoType}</div>
            <div style="font-size: 0.9rem; opacity: 0.9;">Website</div>
        </div>
    `;
}



function viewDemo(planType, websiteType) {
    document.getElementById('demoModalTitle').textContent = `${planType} ${websiteType} - Live Demo`;
    document.getElementById('demoModal').style.display = 'block';
    
    // Generate the full demo website
    const demoContent = generateFullDemo(websiteType, planType);
    document.getElementById('demoWebsiteContainer').innerHTML = demoContent;

    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
    document.getElementById('demoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function generateFullDemo(websiteType, planType) {
    const businessName = websiteType.includes('Website') ? websiteType.replace(' Website', '') : websiteType;
    
    if (planType === 'Static') {
        return generateStaticDemo(businessName);
    } else if (planType === 'Dynamic') {
        return generateDynamicDemo(businessName);
    } else {
        return generateFullFledgedDemo(businessName);
    }
}

function generateStaticDemo(businessName) {
    return `
        <div style="font-family: 'Inter', Arial, sans-serif; margin: 0; padding: 0;">
            <style>
                @media (max-width: 768px) {
                    header nav { flex-direction: column; gap: 10px; }
                    header h1 { font-size: 1.5rem; }
                    section { padding: 3rem 1rem; }
                    .services-grid { grid-template-columns: 1fr; }
                    .hero-section h2 { font-size: 2rem; }
                    .hero-section button { padding: 0.75rem 1.5rem; font-size: 1rem; }
                    .contact-form { padding: 20px; }
                }
                @media (max-width: 480px) {
                    header { padding: 0.5rem; }
                    header nav a { font-size: 0.9rem; }
                    .hero-section p { font-size: 1rem; }
                    .contact-form input, .contact-form textarea { font-size: 0.9rem; }
                }
            </style>
            <!-- Header -->
            <header style="background: #4A90E2; color: white; padding: 1rem 0; box-shadow: 0 2px 5px rgba(0,0,0,0.15);">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h1 style="margin: 0; font-size: 1.8rem; letter-spacing: 1px;">${businessName} Pro</h1>
                    <nav style="display: flex; gap: 15px;">
                        <a href="#home" style="color: white; text-decoration: none; font-size: 1rem;">Home</a>
                        <a href="#about" style="color: white; text-decoration: none; font-size: 1rem;">About</a>
                        <a href="#services" style="color: white; text-decoration: none; font-size: 1rem;">Services</a>
                        <a href="#contact" style="color: white; text-decoration: none; font-size: 1rem;">Contact</a>
                    </nav>
                </div>
            </header>

            <!-- Hero Section -->
            <section class="hero-section" style="background: linear-gradient(rgba(88, 130, 178, 0.5), rgba(39, 85, 159, 0.5)), url('https://www.transparenttextures.com/patterns/asfalt-light.png'); color: white; text-align: center; padding: 80px 20px;">
                <div style="max-width: 800px; margin: 0 auto;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Professional ${businessName} Services</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.95;">Your trusted partner for quality ${businessName.toLowerCase()} solutions</p>
                    <button style="background: #1A3C5A; color: white; padding: 12px 24px; border: none; border-radius: 6px; font-size: 1rem; cursor: pointer; transition: transform 0.3s;">Get Started</button>
                </div>
            </section>

            <!-- Services Section -->
            <section style="padding: 60px 0; background: #F0F6FF;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #4A90E2;">Our Services</h2>
                    <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
                            <div style="font-size: 2.5rem; color: #1A3C5A; margin-bottom: 15px;">🏗️</div>
                            <h3 style="margin-bottom: 10px; color: #4A90E2;">Service One</h3>
                            <p style="color: #4A5568;">High-quality service with professional standards.</p>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
                            <div style="font-size: 2.5rem; color: #1A3C5A; margin-bottom: 15px;">⚡</div>
                            <h3 style="margin-bottom: 10px; color: #4A90E2;">Service Two</h3>
                            <p style="color: #4A5568;">Fast and efficient solutions tailored to your needs.</p>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
                            <div style="font-size: 2.5rem; color: #1A3C5A; margin-bottom: 15px;">🎯</div>
                            <h3 style="margin-bottom: 10px; color: #4A90E2;">Service Three</h3>
                            <p style="color: #4A5568;">Precision in every project.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section style="padding: 60px 0;">
                <div style="max-width: 600px; margin: 0 auto; padding: 0 20px;">
                    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #4A90E2;">Contact Us</h2>
                    <div class="contact-form" style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                        <form>
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #4A90E2;">Name</label>
                                <input type="text" style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 0.9rem;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #4A90E2;">Email</label>
                                <input type="email" style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 0.9rem;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #4A90E2;">Message</label>
                                <textarea style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 0.9rem; height: 80px; resize: vertical;"></textarea>
                            </div>
                            <button type="submit" style="background: #1A3C5A; color: white; padding: 10px 20px; border: none; border-radius: 6px; font-size: 0.9rem; cursor: pointer; width: 100%;">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer style="background: #4A90E2; color: white; padding: 30px 0; text-align: center;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <p>&copy; 2025 ${businessName} Pro. All rights reserved.</p>
                    <p>📞 (555) 123-4567 | ✉️ info@${businessName.toLowerCase()}pro.com</p>
                </div>
            </footer>
        </div>
    `;
}

function generateDynamicDemo(businessName) {
    return `
        <div style="font-family: 'Inter', Arial, sans-serif; margin: 0; padding: 0;">
            <style>
                @media (max-width: 768px) {
                    header nav { flex-direction: column; gap: 10px; }
                    header h1 { font-size: 1.5rem; }
                    .booking-grid { grid-template-columns: 1fr; }
                    .hero-section h2 { font-size: 2rem; }
                    .hero-section button { padding: 0.75rem 1.5rem; font-size: 1rem; }
                    .dashboard-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
                }
                @media (max-width: 480px) {
                    header { padding: 0.5rem; }
                    header nav a, header nav button { font-size: 0.9rem; }
                    section { padding: 3rem 1rem; }
                }
            </style>
            <!-- Header with Login -->
            <header style="background: #ea8e9cff; color: white; padding: 1rem 0; box-shadow: 0 2px 5px rgba(0,0,0,0.15);">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <h1 style="margin: 0; font-size: 1.8rem; letter-spacing: 1px;">${businessName} Pro</h1>
                    <nav style="display: flex; align-items: center; gap: 15px;">
                        <a href="#home" style="color: white; text-decoration: none; font-size: 1rem;">Home</a>
                        <a href="#services" style="color: white; text-decoration: none; font-size: 1rem;">Services</a>
                        <a href="#booking" style="color: white; text-decoration: none; font-size: 1rem;">Book Now</a>
                        <a href="#dashboard" style="color: white; text-decoration: none; font-size: 1rem;">Dashboard</a>
                        <button style="background: white; color: #FF6B81; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Login</button>
                    </nav>
                </div>
            </header>

            <!-- Hero with Interactive Elements -->
            <section class="hero-section" style="background: #FFD1DC; color: #4A202C; text-align: center; padding: 80px 20px;">
                <div style="max-width: 800px; margin: 0 auto;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: #4A202C;">Interactive ${businessName} Platform</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9;">Book services, track progress, and manage your account</p>
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <button style="background: white; color: #FF6B81; padding: 12px 24px; border: none; border-radius: 6px; font-size: 1rem; cursor: pointer; font-weight: bold;">Book Service</button>
                        <button style="background: transparent; color: white; padding: 12px 24px; border: 2px solid white; border-radius: 6px; font-size: 1rem; cursor: pointer; font-weight: bold;">View Portfolio</button>
                    </div>
                </div>
            </section>

            <!-- Interactive Booking Section -->
            <section style="padding: 60px 0; background: #FFF5F7;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #FF6B81;">Book Your Service</h2>
                    <div class="booking-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                        <!-- Booking Form -->
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                            <h3 style="margin-bottom: 15px; color: #e58694ff;">Service Booking</h3>
                            <form>
                                <div style="margin-bottom: 15px;">
                                    <label style="display: block; margin-bottom: 5px;">Service Type</label>
                                    <select style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px;">
                                        <option>Select Service</option>
                                        <option>Premium Service</option>
                                        <option>Standard Service</option>
                                        <option>Basic Service</option>
                                    </select>
                                </div>
                                <div style="margin-bottom: 15px;">
                                    <label style="display: block; margin-bottom: 5px;">Preferred Date</label>
                                    <input type="date" style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px;">
                                </div>
                                <div style="margin-bottom: 15px;">
                                    <label style="display: block; margin-bottom: 5px;">Time Slot</label>
                                    <select style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px;">
                                        <option>9:00 AM - 12:00 PM</option>
                                        <option>1:00 PM - 4:00 PM</option>
                                        <option>5:00 PM - 8:00 PM</option>
                                    </select>
                                </div>
                                <button style="background: #FF6B81; color: white; padding: 10px 20px; border: none; border-radius: 6px; width: 100%; cursor: pointer; font-weight: bold;">Book Now</button>
                            </form>
                        </div>

                        <!-- Bookings List -->
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                            <h3 style="margin-bottom: 15px; color: #d98e99ff;">Your Bookings</h3>
                            <div style="border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <strong>Premium Service</strong><br>
                                        <small style="color: #4A5568;">March 15, 2025 at 10:00 AM</small>
                                    </div>
                                    <span style="background: #48BB78; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Confirmed</span>
                                </div>
                            </div>
                            <div style="border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <strong>Standard Service</strong><br>
                                        <small style="color: #4A5568;">March 22, 2025 at 2:00 PM</small>
                                    </div>
                                    <span style="background: #ECC94B; color: #1A202C; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Pending</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Dashboard Preview -->
            <section style="padding: 60px 0;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem; color: #eda8b3ff;">User Dashboard</h2>
                    <div class="dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="background: #FF6B81; color: white; padding: 20px; border-radius: 8px; text-align: center;">
                            <h3 style="font-size: 1.5rem; margin-bottom: 10px;">12</h3>
                            <p>Total Bookings</p>
                        </div>
                        <div style="background: #ECC94B; color: #1A202C; padding: 20px; border-radius: 8px; text-align: center;">
                            <h3 style="font-size: 1.5rem; margin-bottom: 10px;">3</h3>
                            <p>Active Projects</p>
                        </div>
                        <div style="background: #48BB78; color: white; padding: 20px; border-radius: 8px; text-align: center;">
                            <h3 style="font-size: 1.5rem; margin-bottom: 10px;">9</h3>
                            <p>Completed</p>
                        </div>
                        <div style="background: #4A202C; color: white; padding: 20px; border-radius: 8px; text-align: center;">
                            <h3 style="font-size: 1.5rem; margin-bottom: 10px;">4.8</h3>
                            <p>Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer style="background: #ec8393ff; color: white; padding: 30px 0; text-align: center;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <p>&copy; 2025 ${businessName} Pro - Dynamic Platform. All rights reserved.</p>
                    <p>📞 (555) 123-4567 | ✉️ info@${businessName.toLowerCase()}pro.com | 🌐 www.${businessName.toLowerCase()}pro.com</p>
                </div>
            </footer>
        </div>
    `;
}

function generateFullFledgedDemo(businessName) {
    return `
        <div style="font-family: 'Inter', Arial, sans-serif; margin: 0; padding: 0;">
            <style>
                @media (max-width: 768px) {
                    header nav { flex-direction: column; gap: 10px; }
                    header h1 { font-size: 1.5rem; }
                    .marketplace-grid, .analytics-grid, .payment-grid { grid-template-columns: 1fr; }
                    .hero-section h2 { font-size: 2rem; }
                    .hero-section button { padding: 0.75rem 1.5rem; font-size: 1rem; }
                }
                @media (max-width: 480px) {
                    header { padding: 0.5rem; }
                    header nav a { font-size: 0.9rem; }
                    section { padding: 3rem 1rem; }
                    .payment-form input { font-size: 0.9rem; }
                }
            </style>
            <!-- Advanced Header with User Menu -->
            <header style="background: linear-gradient(135deg, #38A169, #B7EFC5); color: white; padding: 1rem 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <h1 style="margin: 0; font-size: 1.8rem;">${businessName} Enterprise</h1>
                        <nav style="display: flex; gap: 15px;">
                            <a href="#dashboard" style="color: white; text-decoration: none; font-size: 1rem;">Dashboard</a>
                            <a href="#services" style="color: white; text-decoration: none; font-size: 1rem;">Services</a>
                            <a href="#marketplace" style="color: white; text-decoration: none; font-size: 1rem;">Marketplace</a>
                            <a href="#analytics" style="color: white; text-decoration: none; font-size: 1rem;">Analytics</a>
                        </nav>
                    </div>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="background: rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 20px;">
                            <span style="font-size: 0.9rem;">$2,450 Balance</span>
                        </div>
                        <div style="position: relative;">
                            <button style="background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem;">🔔</button>
                            <span style="position: absolute; top: -5px; right: -5px; background: #1A3C34; border-radius: 50%; width: 20px; height: 20px; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;">3</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 25px;">
                            <div style="width: 30px; height: 30px; background: #1A3C34; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">JD</div>
                            <span>John Doe</span>
                            <span style="cursor: pointer;">▼</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Hero with Advanced Features -->
            <section class="hero-section" style="background: linear-gradient(135deg, #38A169, #B7EFC5); color: white; padding: 60px 0;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px; text-align: center;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Empowering Your Business</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 30px;">From analytics to marketplace, ${businessName} delivers a complete enterprise platform.</p>
                    <div style="display: flex; justify-content: center; gap: 15px;">
                        <button style="background: white; color: #38A169; padding: 12px 24px; border: none; border-radius: 6px; font-size: 1rem; cursor: pointer;">Get Started</button>
                        <button style="background: transparent; color: white; padding: 12px 24px; border: 2px solid white; border-radius: 6px; font-size: 1rem; cursor: pointer;">Learn More</button>
                    </div>
                </div>
            </section>

            <!-- Marketplace Section -->
            <section style="padding: 60px 0; background: #F0FFF4;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 30px; color: #38A169;">Marketplace</h2>
                    <div class="marketplace-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <div style="height: 150px; background: linear-gradient(45deg, #38A169, #B7EFC5); display: flex; align-items: center; justify-content: center; font-size: 2rem;">📦</div>
                            <div style="padding: 15px;">
                                <h3>Product One</h3>
                                <p>High quality service integration module.</p>
                                <button style="background: #1A3C34; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Add to Cart</button>
                            </div>
                        </div>
                        <div style="border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <div style="height: 150px; background: linear-gradient(45deg, #B7EFC5, #38A169); display: flex; align-items: center; justify-content: center; font-size: 2rem;">💼</div>
                            <div style="padding: 15px;">
                                <h3>Product Two</h3>
                                <p>AI-powered business assistant system.</p>
                                <button style="background: #1A3C34; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Add to Cart</button>
                            </div>
                        </div>
                        <div style="border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <div style="height: 150px; background: linear-gradient(45deg, #38A169, #B7EFC5); display: flex; align-items: center; justify-content: center; font-size: 2rem;">📊</div>
                            <div style="padding: 15px;">
                                <h3>Product Three</h3>
                                <p>Next-gen analytics and reporting suite.</p>
                                <button style="background: #1A3C34; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Analytics Dashboard -->
            <section style="padding: 60px 0;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 30px; color: #38A169;">Analytics Dashboard</h2>
                    <div class="analytics-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div style="background: white; border-radius: 8px; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <h3>Sales Overview</h3>
                            <div style="height: 150px; background: linear-gradient(to top, #38A169, #B7EFC5); border-radius: 8px;"></div>
                        </div>
                        <div style="background: white; border-radius: 8px; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <h3>Active Users</h3>
                            <div style="height: 150px; display: flex; align-items: flex-end; gap: 10px;">
                                <div style="background: #38A169; height: 100%; width: 25%; border-radius: 4px;"></div>
                                <div style="background: #B7EFC5; height: 70%; width: 25%; border-radius: 4px;"></div>
                                <div style="background: #38A169; height: 85%; width: 25%; border-radius: 4px;"></div>
                                <div style="background: #B7EFC5; height: 60%; width: 25%; border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="background: white; border-radius: 8px; padding: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <h3>Growth Metrics</h3>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 10px;">📈 Revenue Growth <span style="float: right; color: #1A3C34;">+24%</span></li>
                                <li style="margin-bottom: 10px;">👥 New Clients <span style="float: right; color: #1A3C34;">+132</span></li>
                                <li style="margin-bottom: 10px;">🌍 Market Expansion <span style="float: right; color: #1A3C34;">+5 Regions</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Payment Integration -->
            <section style="padding: 60px 0; background: #F0FFF4;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <h2 style="text-align: center; margin-bottom: 30px; font-size: 2rem; color: #38A169;">Secure Payment Integration</h2>
                    <div class="payment-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; align-items: start;">
                        <!-- Payment Details -->
                        <div class="payment-form" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                            <h3 style="margin-bottom: 20px; color: #38A169;">Payment Details</h3>
                            <form>
                                <div style="margin-bottom: 15px;">
                                    <label style="display: block; margin-bottom: 5px; color: #38A169;">Cardholder Name</label>
                                    <input type="text" placeholder="John Doe" style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px;"/>
                                </div>
                                <div style="margin-bottom: 15px;">
                                    <label style="display: block; margin-bottom: 5px; color: #38A169;">Card Number</label>
                                    <input type="text" placeholder="1234 5678 9012 3456" style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px;"/>
                                </div>
                                <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                                    <div style="flex: 1;">
                                        <label style="display: block; margin-bottom: 5px; color: #38A169;">Expiry</label>
                                        <input type="text" placeholder="MM/YY" style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px;"/>
                                    </div>
                                    <div style="flex: 1;">
                                        <label style="display: block; margin-bottom: 5px; color: #38A169;">CVV</label>
                                        <input type="password" placeholder="***" style="width: 100%; padding: 8px; border: 1px solid #E2E8F0; border-radius: 6px;"/>
                                    </div>
                                </div>
                                <button type="submit" style="width: 100%; background: #1A3C34; color: white; padding: 10px; border: none; border-radius: 6px; font-size: 0.9rem; cursor: pointer;">Pay Now</button>
                            </form>
                        </div>
                        
                        <!-- Payment Features -->
                        <div>
                            <h3 style="margin-bottom: 15px; color: #38A169;">Why choose our payment system?</h3>
                            <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
                                <li style="margin-bottom: 10px;">✅ <span style="color: #38A169;">Secure transactions</span></li>
                                <li style="margin-bottom: 10px;">✅ <span style="color: #38A169;">Multiple payment methods</span></li>
                                <li style="margin-bottom: 10px;">✅ <span style="color: #38A169;">Instant confirmation</span></li>
                                <li style="margin-bottom: 10px;">✅ <span style="color: #38A169;">Fraud detection</span></li>
                            </ul>
                            <div style="margin-top: 20px;">
                                <p style="margin-bottom: 10px; color: #38A169;">We accept:</p>
                                <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                                    <span style="background: white; padding: 8px 12px; border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-weight: bold; color: #38A169;">Visa</span>
                                    <span style="background: white; padding: 8px 12px; border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-weight: bold; color: #38A169;">MasterCard</span>
                                    <span style="background: white; padding: 8px 12px; border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-weight: bold; color: #38A169;">PayPal</span>
                                    <span style="background: white; padding: 8px 12px; border-radius: 6px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); font-weight: bold; color: #38A169;">Stripe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer style="background: #38A169; color: white; padding: 30px 0; text-align: center;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
                    <p>&copy; 2025 ${businessName} Enterprise. All rights reserved.</p>
                    <p>📞 (555) 123-4567 | ✉️ enterprise@${businessName.toLowerCase()}.com | 🌐 www.${businessName.toLowerCase()}enterprise.com</p>
                    <div style="margin-top: 15px;">
                        <a href="#privacy" style="color: white; text-decoration: none; margin: 0 10px; font-size: 0.9rem;">Privacy Policy</a>
                        <a href="#terms" style="color: white; text-decoration: none; margin: 0 10px; font-size: 0.9rem;">Terms of Service</a>
                        <a href="#support" style="color: white; text-decoration: none; margin: 0 10px; font-size: 0.9rem;">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    `;
}

function generateLMSDemo() {
    return `
        <div style="font-family: 'Inter', Arial, sans-serif; margin: 0; padding: 0; background: #f5f7fb;">

            <!-- LMS Header -->
            <header class="lms-header">
                <div class="lms-container">
                    <h1 class="logo">EduPlatform</h1>
                    <div class="hamburger" onclick="toggleLMSMenu()">☰</div>
                    <nav class="lms-nav" id="lmsNav">
                        <a href="#courses">Courses</a>
                        <a href="#dashboard">Dashboard</a>
                        <a href="#progress">Progress</a>
                        <a href="#videos">Video Classes</a>
                        <div class="profile" onclick="toggleProfileMenu(event)">
                            <div class="avatar">JD</div>
                            <span>NAME</span>
                            <span class="arrow">▼</span>
                            <div class="dropdown" id="profileDropdown">
                                <a href="#settings">Settings</a>
                                <a href="#logout">Logout</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <!-- LMS Hero -->
            <section class="hero">
                <div>
                    <h2>Embark on Your Learning Adventure</h2>
                    <p>Discover a world of knowledge with EduPlatform. Explore courses, track your progress, and earn certificates to showcase your skills.</p>
                    <button class="btn primary">Browse Courses</button>
                </div>
            </section>

            <!-- Course Catalog -->
            <section id="courses" class="catalog">
                <h2>Explore Our Courses</h2>
                <div class="grid">
                    <div class="card">
                        <div class="thumb">📚</div>
                        <div class="content">
                            <h3>Web Development</h3>
                            <p>Master HTML, CSS, and JavaScript to build modern, responsive websites.</p>
                            <div class="card-footer">
                                <span class="price">$99</span>
                                <button class="btn success">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="thumb">💻</div>
                        <div class="content">
                            <h3>Data Science</h3>
                            <p>Dive into Python, data analysis, and machine learning techniques.</p>
                            <div class="card-footer">
                                <span class="price">$149</span>
                                <button class="btn success">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="thumb">🎨</div>
                        <div class="content">
                            <h3>UI/UX Design</h3>
                            <p>Create user-friendly interfaces with Figma and modern design principles.</p>
                            <div class="card-footer">
                                <span class="price">$129</span>
                                <button class="btn success">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Video Classes + Quizzes -->
            <section id="videos" class="video-section">
                <h2>🎥 Interactive Video Classes + Quizzes</h2>
                <p>Learn with engaging video content and reinforce your knowledge with quizzes after each class.</p>
                <div class="video-grid">
                    <div class="video-card">
                        <div class="video-thumb">▶</div>
                        <h3>Intro to Web Dev</h3>
                        <p>Watch the basics and test your knowledge with a quick quiz.</p>
                        <button class="btn play">Play & Quiz</button>
                    </div>
                    <div class="video-card">
                        <div class="video-thumb">▶</div>
                        <h3>Data Science Bootcamp</h3>
                        <p>Interactive lessons with practice quizzes after each module.</p>
                        <button class="btn play">Play & Quiz</button>
                    </div>
                    <div class="video-card">
                        <div class="video-thumb">▶</div>
                        <h3>UI/UX Workshop</h3>
                        <p>Practical design examples + quiz-based assessments.</p>
                        <button class="btn play">Play & Quiz</button>
                    </div>
                </div>
            </section>

            <!-- Progress Tracking -->
             <section style="padding: 6rem 1.5rem; background: #ffffff;">
                <div style="max-width: 1280px; margin: 0 auto; padding: 0 24px;">
                    <h2 style="text-align: center; font-size: 2.75rem; font-weight: 700; margin-bottom: 4rem; color: #1a1a1a;">Track Your Learning Progress</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
                        <div style="background: white; border-radius: 16px; padding: 1.5rem; box-shadow: 0 6px 20px rgba(0,0,0,0.08); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-8px)'" onmouseout="this.style.transform='translateY(0)'">
                            <h3 style="font-size: 1.5rem; font-weight: 600; color: #1a1a1a; margin-bottom: 1rem;">Web Development</h3>
                            <div style="margin: 1.5rem 0;">
                                <div style="background: #e2e8f0; height: 1.25rem; border-radius: 9999px; overflow: hidden;">
                                    <div style="background: linear-gradient(135deg, #4a90e2, #7b3fe4); width: 75%; height: 100%; transition: width 0.5s ease-in-out;"></div>
                                </div>
                                <p style="margin-top: 0.75rem; color: #4a5568; font-size: 1rem;">75% Complete</p>
                            </div>
                            <button style="background: linear-gradient(135deg, #4a90e2, #7b3fe4); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 9999px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='linear-gradient(135deg, #7b3fe4, #4a90e2)'" onmouseout="this.style.background='linear-gradient(135deg, #4a90e2, #7b3fe4)'" aria-label="Continue Web Development course">Continue Learning</button>
                        </div>
                        <div style="background: white; border-radius: 16px; padding: 1.5rem; box-shadow: 0 6px 20px rgba(0,0,0,0.08); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-8px)'" onmouseout="this.style.transform='translateY(0)'">
                            <h3 style="font-size: 1.5rem; font-weight: 600; color: #1a1a1a; margin-bottom: 1rem;">Data Science</h3>
                            <div style="margin: 1.5rem 0;">
                                <div style="background: #e2e8f0; height: 1.25rem; border-radius: 9999px; overflow: hidden;">
                                    <div style="background: linear-gradient(135deg, #4a90e2, #7b3fe4); width: 40%; height: 100%; transition: width 0.5s ease-in-out;"></div>
                                </div>
                                <p style="margin-top: 0.75rem; color: #4a5568; font-size: 1rem;">40% Complete</p>
                            </div>
                            <button style="background: linear-gradient(135deg, #4a90e2, #7b3fe4); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 9999px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='linear-gradient(135deg, #7b3fe4, #4a90e2)'" onmouseout="this.style.background='linear-gradient(135deg, #4a90e2, #7b3fe4)'" aria-label="Continue Data Science course">Continue Learning</button>
                        </div>
                        <div style="background: white; border-radius: 16px; padding: 1.5rem; box-shadow: 0 6px 20px rgba(0,0,0,0.08); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-8px)'" onmouseout="this.style.transform='translateY(0)'">
                            <h3 style="font-size: 1.5rem; font-weight: 600; color: #1a1a1a; margin-bottom: 1rem;">Certificates</h3>
                            <div style="margin: 1.5rem 0;">
                                <p style="color: #4a5568; font-size: 1rem;">2 Certificates Earned</p>
                                <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                                    <li style="margin-bottom: 0.75rem; color: #4a5568; font-size: 1rem;"><span style="color: #ffd166; margin-right: 0.5rem;">🏆</span> HTML & CSS</li>
                                    <li style="margin-bottom: 0.75rem; color: #4a5568; font-size: 1rem;"><span style="color: #ffd166; margin-right: 0.5rem;">🏆</span> JavaScript Basics</li>
                                </ul>
                            </div>
                            <button style="background: linear-gradient(135deg, #4a90e2, #7b3fe4); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 9999px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='linear-gradient(135deg, #7b3fe4, #4a90e2)'" onmouseout="this.style.background='linear-gradient(135deg, #4a90e2, #7b3fe4)'" aria-label="View earned certificates">View Certificates</button>
                        </div>
                    </div>
                </div>
            </section>


            <!-- Footer -->
            <footer class="footer">
                <p>&copy; 2025 EduPlatform. All rights reserved.</p>
                <p>📞 (555) 123-4567 | ✉️ support@eduplatform.com</p>
                <div class="footer-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                    <a href="#support">Support</a>
                </div>
            </footer>

            <!-- Styles -->
            <style>
                /* 🎨 General Buttons */
                .btn {
                    border: none;
                    padding: 0.8rem 1.6rem;
                    border-radius: 999px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .btn.primary { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
                .btn.success { background: linear-gradient(135deg, #06beb6, #48b1bf); color: white; }
                .btn.warning { background: linear-gradient(135deg, #f7971e, #ffd200); color: #1a1a1a; }
                .btn.play { background: linear-gradient(135deg, #00c6ff, #0072ff); color: white; }
                .btn:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 8px 15px rgba(0,0,0,0.25); }

                /* Header */
                .lms-header {
                    background: linear-gradient(135deg, #4a90e2, #7b3fe4);
                    color: white;
                    padding: 1rem 0;
                    position: relative;
                    top: 0; width: 100%;
                    z-index: 1000;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .lms-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo { font-size: 1.8rem; font-weight: 700; }
                .hamburger { display: none; font-size: 2rem; cursor: pointer; }
                .lms-nav { display: flex; align-items: center; gap: 2rem; }
                .lms-nav a { color: white; text-decoration: none; font-weight: 500; position: relative; }
                .lms-nav a::after { content: ""; position: absolute; bottom: -4px; left: 0; width: 0%; height: 2px; background: #ffd166; transition: 0.3s; }
                .lms-nav a:hover::after { width: 100%; }
                .profile { display: flex; align-items: center; gap: .5rem; position: relative; cursor: pointer; }
                .avatar { width: 2.2rem; height: 2.2rem; background: #ffd166; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #1a1a1a; }
                .dropdown { display: none; position: absolute; top: 120%; right: 0; background: white; color: #1a1a1a; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; }
                .dropdown a { display: block; padding: 0.75rem 1.25rem; color: #1a1a1a; text-decoration: none; }
                .dropdown a:hover { background: #f5f5f5; }
                .dropdown.show { display: block; }

                /* Hero */
                .hero { margin-top: 1px; padding: 6rem 1.5rem; text-align: center; background: linear-gradient(135deg, #4a90e2, #7b3fe4); color: white; }
                .hero h2 { font-size: 3rem; font-weight: 800; animation: fadeInDown 1s ease; }
                .hero p { font-size: 1.2rem; margin: 1rem 0 2rem; animation: fadeInUp 1.2s ease; }

                /* Cards / Catalog / Progress */
                .catalog, .progress, .video-section { padding: 5rem 1.5rem; background: white; }
                .catalog h2, .progress h2, .video-section h2 { text-align: center; font-size: 2.5rem; margin-bottom: 2.5rem; }
                .grid, .video-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
                .card, .progress-card, .video-card { background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden; padding: 1.5rem; transition: transform .2s; text-align: center; }
                .card:hover, .video-card:hover { transform: translateY(-6px); }
                .video-thumb { height: 150px; font-size: 3rem; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #e2e4f9ff, #8089d1ff); border-radius: 12px; margin-bottom: 1rem; }
                .thumb{ height: 150px; font-size: 3rem; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #7782e4ff, #c0cadcff); border-radius: 12px; margin-bottom: 1rem; }
                .card-footer { display: flex; justify-content: space-between; align-items: center; }
                .price { color: #ff6b6b; font-weight: bold; }

                /* Footer */
                .footer { background: linear-gradient(135deg, #1a1a1a, #4a5568); color: white; text-align: center; padding: 3rem 1rem; }
                .footer-links { display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; }
                .footer-links a { color: white; text-decoration: none; }

                /* Animations */
                @keyframes fadeInDown { from {opacity:0; transform: translateY(-20px);} to {opacity:1; transform: translateY(0);} }
                @keyframes fadeInUp { from {opacity:0; transform: translateY(20px);} to {opacity:1; transform: translateY(0);} }

                /* Mobile */
                @media (max-width: 768px) {
                    .hamburger { display: block; }
                    .lms-nav { display: none; flex-direction: column; background: #4a90e2; position: absolute; top: 100%; left: 0; width: 100%; padding: 1rem 0; }
                    .lms-nav.show { display: flex; }
                }
            </style>

            <!-- Scripts -->
            <script>
                function toggleLMSMenu() {
                    document.getElementById('lmsNav').classList.toggle('show');
                }
                function toggleProfileMenu(e) {
                    e.stopPropagation();
                    document.getElementById('profileDropdown').classList.toggle('show');
                }
                document.addEventListener('click', () => {
                    document.getElementById('profileDropdown').classList.remove('show');
                });

                // Smooth scroll
                document.querySelectorAll('.lms-nav a').forEach(a => {
                    a.addEventListener('click', function(e) {
                        e.preventDefault();
                        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                        document.getElementById('lmsNav').classList.remove('show');
                    });
                });

            </script>
        </div>
    `;
}

function selectPlan(planType, websiteType) {
    document.getElementById('planModalTitle').textContent = `Select Plan: ${planType} ${websiteType}`;
    document.getElementById('planModal').style.display = 'block';
    
    const selectElement = document.getElementById('selectedPlan');
    const options = {
        'Static': 'Static Website',
        'Dynamic': 'Dynamic Website',
        'Full-Fledged': 'Full-Fledged Website'
    };
    
    selectElement.value = options[planType] || '';
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

function closePlanModal() {
    document.getElementById('planModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function viewLMSDemo() {
    document.getElementById('lmsModal').style.display = 'block';
    
    // Generate LMS demo content
    document.getElementById('lmsModal').scrollTop = 0; // Reset modal scroll to top
    const lmsContent = generateLMSDemo();
    document.getElementById('lmsWebsiteContainer').innerHTML = lmsContent;

    // window.scrollTo(0, 0); // Reset browser scroll to top
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

function closeLMSModal() {
    document.getElementById('lmsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function requestPrice(planType) {
    document.getElementById('planModalTitle').textContent = `Request Quote: ${planType}`;
    document.getElementById('planModal').style.display = 'block';
    
    const selectElement = document.getElementById('selectedPlan');
    const options = {
        'Static Website': 'Static Website',
        'Dynamic Website': 'Dynamic Website',
        'Full-Stack Website': 'Full-Fledged Website',
        'LMS System': 'Custom LMS Development'
    };
    
    selectElement.value = options[planType] || '';
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

function contactWhatsApp(planType) {
    const message = encodeURIComponent(`Hello, I'm interested in getting a quote for a ${planType}. Can you provide more details?`);
    const whatsappUrl = `https://wa.me/917826041647?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    emailjs.send('service_uoprl49', 'template_xkm5vc9', {
        name: name,
        email: email,
        Date: new Date().toLocaleDateString(),
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
    });
});

// Handle Plan Form Submission
document.getElementById('planForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const plan = document.getElementById('selectedPlan').value;
    const message = document.getElementById('customerMessage').value;
    
    emailjs.send('service_ei4j1cu', 'template_23kddoi', {
        name: name,
        email: email,
        phone: phone,
        plan: plan,
        Date: new Date().toLocaleDateString(),
        message: message
    })
    .then(function(response) {
        alert('Request sent successfully!');
        document.getElementById('planForm').reset();
        closePlanModal();
    }, function(error) {
        alert('Failed to send request. Please try again.');
        console.error('EmailJS Error:', error);
    });
});


function generateDemos() {
    const generateBtn = document.getElementById('generateBtn'); // Assuming your button has id="generateBtn"
    const websiteType = document.getElementById('websiteType').value.trim();
    
    if (!websiteType) {
        alert('Please enter a website type');
        return;
    }

    currentWebsiteType = websiteType;

    // Disable button and show loading text
    generateBtn.disabled = true;
    const originalText = generateBtn.textContent;
    generateBtn.textContent = 'Loading...';

    // Hide demo results while loading
    document.getElementById('demoResults').style.display = 'none';

    // Simulate loading time, then show demos
    setTimeout(() => {
        // Restore button text and enable
        generateBtn.disabled = false;
        generateBtn.textContent = originalText;

        // Show demo results
        document.getElementById('demoResults').style.display = 'block';

        // Generate the demo cards
        generateDemoCards(websiteType);

        // Optionally scroll results into view
        document.getElementById('demoResults').scrollIntoView({ behavior: 'smooth' });
    }, 2000); // 2 seconds loading simulation; adjust as needed
}


