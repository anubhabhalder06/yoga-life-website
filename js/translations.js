/* translations.js, EN / BN dictionary */
const TRANSLATIONS = {
  en: {
    // NAV
    "nav.home":    "Home",
    "nav.classes": "Classes",
    "nav.about":   "About",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.blog":    "Blog",
    "nav.join":    "Join Now",

    // HERO
    "hero.label":   "Baruipur · Kolkata",
    "hero.line1":   "Find Your",
    "hero.line2":   "Practice.",
    "hero.line3":   "Find Your Life.",
    "hero.sub":     "A premium yoga & Zumba studio led by qualified trainer Mrs. Runu Halder Das.",
    "hero.trust":   "<span style=\"font-weight:700;\">5.0</span> <span style=\"font-size:0.75em; margin:0 4px 0 2px; position:relative; top:-1px;\">&#9733;</span> &middot; 40 Google Reviews &middot; 200+ active students",
    "hero.cta1":    "Join Now",
    "hero.cta2":    "Explore Classes",
    "hero.corner1": "Est. Baruipur",
    "hero.corner2": "Yoga & Zumba",

    // STATS
    "stat.students":  "200+",
    "stat.students.l":"Active Students",
    "stat.trained":   "500+",
    "stat.trained.l": "Total Trained",
    "stat.rating":    "5.0<span style=\"font-size:0.6em; vertical-align:middle; position:relative; top:-2px; margin-left:4px;\">★</span>",
    "stat.rating.l":  "Google Rating",
    "stat.years":     "2+",
    "stat.years.l":   "Years of Excellence",

    // ABOUT TEASER
    "about.label":   "About the Studio",
    "about.h2":      "Where Practice Meets Purpose",
    "about.p1":      "Yoga Life is Baruipur's most trusted yoga and Zumba studio. Under the guidance of Mrs. Runu Halder Das, a qualified trainer with over 3 years of experience, more than 500 students have discovered strength, stillness, and community here.",
    "about.p2":      "We offer both offline and online live classes designed for every age and level. Whether you are a beginner finding your first breath or a seasoned practitioner deepening your practice, there is a place for you.",
    "about.link":    "Our Story",
    "about.badge.num": "500+",
    "about.badge.txt": "Lives Changed",

    // CLASSES OVERVIEW
    "classes.label":  "What We Offer",
    "classes.h2":     "Classes for Every Body",
    "classes.yoga.tag": "Yoga",
    "classes.yoga.h3":  "Yoga Practice",
    "classes.yoga.p":   "From Hatha to Pranayama, our yoga sessions build flexibility, inner calm, and long-term vitality. Suitable for all ages and fitness levels.",
    "classes.zumba.tag": "Zumba",
    "classes.zumba.h3":  "Zumba Fitness",
    "classes.zumba.p":   "High-energy dance fitness classes that feel like a party. Tone your body, lift your mood, and have the time of your life.",
    "classes.link":     "View Classes",

    // GALLERY
    "gallery.label": "Our Studio",
    "gallery.h2": "Live Classes & Community",
    "gallery.sub": "Glimpses of our daily practice, Zumba sessions, and the wonderful Yoga Life community.",
    "gallery.socials.title": "See more on our Socials",

    // STATEMENT BAND
    "statement.q1": "Movement is",
    "statement.q2": "medicine.",
    "statement.sub": "Your body knows how to heal. We help you listen.",
    "statement.cta": "Start Your Journey",

    // TIMINGS
    "timings.label":   "Class Schedule",
    "timings.h2":      "Find Your Slot",
    "timings.tab1":    "Offline",
    "timings.tab2":    "Online",
    "timings.col.time":"Time",
    "timings.col.days":"Days",
    "timings.pricing.h":"Fees",
    "timings.reg":     "Registration: ₹250 (one-time)",

    // TESTIMONIALS
    "testi.label":   "Student Stories",
    "testi.h2":      "What Our Students Say",

    // CTA BAND
    "cta.h2": "Ready to Begin?",
    "cta.p":  "Join 200+ active students transforming their lives at Yoga Life.",
    "cta.btn1": "Fill Out Form",
    "cta.btn2": "Call Us",

    // SOCIAL
    "social.label": "Follow Our Journey",

    // FOOTER
    "footer.desc": "A premium yoga & Zumba studio in Baruipur, Kolkata. Transforming lives through movement since 2024.",
    "footer.nav":  "Navigation",
    "footer.contact": "Contact",
    "footer.hours":   "Studio Hours",
    "footer.hours.val": "Daily, 6:30 am – 8:30 pm",
    "footer.address": "Ukilpara Rd, Palpara, Ward No. 14, Baruipur, Kolkata – 700144",
    "footer.rating": "<span style=\"font-weight:700;\">5.0<span style=\"font-size:0.75em; margin:0 4px 0 2px; position:relative; top:-1px;\">&#9733;</span></span> 40 Google Reviews",
    "footer.copy":   "© 2025 Yoga Life. All rights reserved.",

    // PAGES, CLASSES
    "cp.label": "Our Programs",
    "cp.h1":    "Classes",
    "cp.sub":   "Offline & online classes for all ages and levels in Baruipur.",
    "cp.yoga.label": "Yoga Program",
    "cp.yoga.h2":    "Yoga - Body, Breath & Balance",
    "cp.yoga.p1":    "Our yoga classes cater to all levels, blending postures, breathwork (Pranayama), and mindfulness.",
    "cp.yoga.p2":    "Led by qualified instructor Mrs. Runu Halder Das, each session offers a supportive environment to deepen your practice.",
    "cp.yoga.b1":    "Suitable for all ages, including 50+",
    "cp.yoga.b2":    "Hatha yoga, flexibility & strength work",
    "cp.yoga.b3":    "Pranayama & meditation techniques",
    "cp.yoga.b4":    "Weight management & stress relief",
    "cp.yoga.b5":    "Available offline & online",
    "cp.zumba.label": "Zumba Program",
    "cp.zumba.h2":   "Zumba - Dance, Fitness & Joy",
    "cp.zumba.p1":    "Experience high-energy Zumba dance fitness! Burn calories, improve coordination, and lift your mood in a fun, party-like atmosphere.",
    "cp.zumba.p2":    "No experience needed, just bring your energy. A single class leaves you energised for the whole day.",
    "cp.zumba.b1":    "High-energy cardio that doesn't feel like exercise",
    "cp.zumba.b2":    "Dance fitness for all levels, no experience needed",
    "cp.zumba.b3":    "Burn calories & improve coordination",
    "cp.zumba.b4":    "Mood-lifting community experience",
    "cp.zumba.b5":    "Available offline only",
    "cp.sched.label": "Timings & Fees",
    "cp.sched.h2":    "Schedules",
    "cp.join.cta":    "Join Now",

    // PAGES, ABOUT
    "ap.label": "About Us",
    "ap.h1":    "Mrs. Runu Halder Das",
    "ap.sub":   "Qualified yoga trainer · Baruipur, Kolkata",
    "ap.story.label": "The Studio Story",
    "ap.story.h2":    "A Decade of Dedicated Practice",
    "ap.story.p1":    "Founded by Mrs. Runu Halder Das, Yoga Life has grown from a local Baruipur studio into a thriving community of over 500 students.",
    "ap.story.p2":    "Mrs. Runu combines deep expertise with a compassionate, disciplined approach, tailoring her instruction to suit every age and ability level.",
    "ap.story.p3":    "We offer flexible in-studio schedules and live online sessions, making an authentic yoga practice accessible to everyone, anywhere.",
    "ap.qual.h2":     "Qualifications & Experience",
    "ap.qual.1.title": "Qualified Yoga Trainer",
    "ap.qual.1.desc":  "Formally certified and qualified in yoga instruction",
    "ap.qual.2.title": "3+ Years Teaching",
    "ap.qual.2.desc":  "Over a decade of teaching students of all ages and levels",
    "ap.qual.3.title": "500+ Students Trained",
    "ap.qual.3.desc":  "More than 500 students have trained under her guidance",
    "ap.qual.4.title": "Yoga & Zumba",
    "ap.qual.4.desc":  "Expertise across both yoga disciplines and Zumba fitness",
    "ap.qual.5.title": "Online & Offline",
    "ap.qual.5.desc":  "Offers live online classes alongside in-studio sessions",
    "ap.qual.6.title": "5.0★ Rated Studio",
    "ap.qual.6.desc":  "40 Google Reviews, consistently five-star rated",

    // PAGES, JOIN
    "jp.label": "Enrollment",
    "jp.h1":    "Join Yoga Life",
    "jp.sub":   "Enroll in minutes, no waiting, no complicated process.",
    "jp.intro": "Here's how it works:",
    "jp.step1.h": "Choose your class & slot",
    "jp.step1.p": "Offline (in-studio) or Online (live). Pick from available time slots listed in the form.",
    "jp.step2.h": "Pay via UPI",
    "jp.step2.p": "Transfer your fee to UPI ID: 8910393245@upi. Keep a screenshot of the transaction.",
    "jp.step3.h": "Fill out & submit the form",
    "jp.step3.p": "Complete the enrollment form below and upload your payment screenshot to confirm your spot.",
    "jp.form.btn": "Submit Application",
    "jp.form.fallback": "Open form in a new tab",
    "jp.alt.h3": "Prefer to enroll directly?",
    "jp.alt.p":  "Call or WhatsApp us and we'll get you sorted in minutes.",
    "jp.alt.wa": "WhatsApp Us",
    "jp.alt.call": "Call Us",

    // PAGES, CONTACT
    "co.label":   "Get in Touch",
    "co.h1":      "Contact",
    "co.sub":     "We'd love to hear from you. Visit the studio or reach out anytime.",
    "co.info.label": "Contact Details",
    "co.info.h2":    "Come Find Us",
    "co.addr.h":     "Address",
    "co.addr.v":     "Ukilpara Rd, Palpara, Ward No. 14, Baruipur, Kolkata – 700144",
    "co.phone.h":    "Phone",
    "co.phone.v":    "+91 89103 93245",
    "co.wa.h":       "WhatsApp",
    "co.wa.v":       "+91 98004 21238",
    "co.email.h":    "Email",
    "co.email.v":    "halderrunu5@gmail.com",
    "co.hours.h":    "Studio Hours",
    "co.hours.v":    "Daily, 6:30 am – 8:30 pm",
    "co.dir.btn":    "Get Directions",
    "co.wa.btn":     "WhatsApp",
    "co.call.btn":   "Call Now",

    // BLOG
    "blog.label": "Blog",
    "blog.h1":    "Insights & Inspiration",
    "blog.p":     "Articles on yoga, wellness, and mindful living, coming soon.",
    "blog.tag":   "Coming Soon",
    
    // DYNAMIC ISLAND
    "di.idle":    "JOIN NOW",
    "di.notice":  "Limited Seats. <strong>Enroll Fast!</strong>"
  },
  bn: {
    // NAV
    "nav.home":    "হোম",
    "nav.classes": "ক্লাস",
    "nav.about":   "আমাদের সম্পর্কে",
    "nav.gallery": "গ্যালারি",
    "nav.contact": "যোগাযোগ",
    "nav.blog":    "ব্লগ",
    "nav.join":    "যোগ দিন",

    // HERO
    "hero.label":   "বারুইপুর · কলকাতা",
    "hero.line1":   "খুঁজে নিন",
    "hero.line2":   "আপনার অনুশীলন।",
    "hero.line3":   "খুঁজে নিন আপনার জীবন।",
    "hero.sub":     "যোগ্য প্রশিক্ষক শ্রীমতী রুণু হালদার দাসের নেতৃত্বে একটি প্রিমিয়াম যোগ ও জুম্বা স্টুডিও।",
    "hero.trust":   "<span style=\"font-weight:700;\">৫.০</span> <span style=\"font-size:0.75em; margin:0 4px 0 2px; position:relative; top:-1px;\">&#9733;</span> &middot; ৪০টি গুগল রিভিউ &middot; ২০০+ সক্রিয় শিক্ষার্থী",
    "hero.cta1":    "যোগ দিন",
    "hero.cta2":    "ক্লাস দেখুন",
    "hero.corner1": "বারুইপুরে প্রতিষ্ঠিত",
    "hero.corner2": "যোগ ও জুম্বা",

    // STATS
    "stat.students":  "২০০+",
    "stat.students.l":"সক্রিয় শিক্ষার্থী",
    "stat.trained":   "৫০০+",
    "stat.trained.l": "মোট প্রশিক্ষিত",
    "stat.rating":    "৫.০<span style=\"font-size:0.6em; vertical-align:middle; position:relative; top:-2px; margin-left:4px;\">★</span>",
    "stat.rating.l":  "গুগল রেটিং",
    "stat.years":     "২+",
    "stat.years.l":   "বছরের অভিজ্ঞতা",

    // ABOUT TEASER
    "about.label":   "স্টুডিও সম্পর্কে",
    "about.h2":      "যেখানে অনুশীলন মিলে উদ্দেশ্যের সাথে",
    "about.p1":      "ইয়োগা লাইফ বারুইপুরের সবচেয়ে বিশ্বস্ত যোগ ও জুম্বা স্টুডিও। তিন বছরেরও বেশি অভিজ্ঞতাসম্পন্ন যোগ্য প্রশিক্ষক শ্রীমতী রুণু হালদার দাসের তত্ত্বাবধানে ৫০০-এরও বেশি শিক্ষার্থী এখানে শক্তি, স্থিরতা এবং সম্প্রদায় খুঁজে পেয়েছেন।",
    "about.p2":      "আমরা অফলাইন এবং অনলাইন লাইভ ক্লাস উভয়ই অফার করি, প্রতিটি বয়স ও স্তরের জন্য ডিজাইন করা হয়েছে। আপনি সবে শুরু করছেন বা আপনি একজন অভিজ্ঞ যোগী হোন না কেন, এখানে আপনার জন্য একটি স্থান রয়েছে।",
    "about.link":    "আমাদের গল্প",
    "about.badge.num": "৫০০+",
    "about.badge.txt": "জীবন পরিবর্তিত",

    // CLASSES OVERVIEW
    "classes.label":  "আমরা যা অফার করি",
    "classes.h2":     "সবার জন্য ক্লাস",
    "classes.yoga.tag": "যোগ",
    "classes.yoga.h3":  "যোগ অনুশীলন",
    "classes.yoga.p":   "হঠযোগ থেকে প্রাণায়াম পর্যন্ত, আমাদের যোগ সেশনগুলি নমনীয়তা, অভ্যন্তরীণ শান্তি এবং দীর্ঘমেয়াদী সুস্থতা তৈরি করে।",
    "classes.zumba.tag": "জুম্বা",
    "classes.zumba.h3":  "জুম্বা ফিটনেস",
    "classes.zumba.p":   "উচ্চ-শক্তির নাচের ফিটনেস ক্লাস যা পার্টির মতো মনে হয়। শরীরকে সুডৌল করুন, মেজাজ উন্নত করুন।",
    "classes.link":     "সময়সূচী দেখুন",

    // GALLERY
    "gallery.label": "আমাদের স্টুডিও",
    "gallery.h2": "সরাসরি ক্লাস এবং কমিউনিটি",
    "gallery.sub": "আমাদের দৈনন্দিন অনুশীলন, জুম্বা সেশন এবং চমৎকার যোগ লাইফ কমিউনিটির এক ঝলক।",
    "gallery.socials.title": "আমাদের সোশ্যাল মিডিয়ায় আরও দেখুন",

    // STATEMENT BAND
    "statement.q1": "শারীরিক সক্রিয়তাই",
    "statement.q2": "সুস্থতার চাবিকাঠি।",
    "statement.sub": "আপনার শরীর নিজেকে সারিয়ে তুলতে জানে। আমরা শুধু আপনাকে সেই পথটি দেখাই।",
    "statement.cta": "যাত্রা শুরু করুন",

    // TIMINGS
    "timings.label":   "ক্লাসের সময়সূচী",
    "timings.h2":      "আপনার স্লট খুঁজুন",
    "timings.tab1":    "অফলাইন",
    "timings.tab2":    "অনলাইন",
    "timings.col.time":"সময়",
    "timings.col.days":"দিন",
    "timings.pricing.h":"ফি",
    "timings.reg":     "নিবন্ধন: ₹২৫০ (একবার)",

    // TESTIMONIALS
    "testi.label":   "শিক্ষার্থীদের গল্প",
    "testi.h2":      "আমাদের শিক্ষার্থীরা কী বলেন",

    // CTA BAND
    "cta.h2": "শুরু করতে প্রস্তুত?",
    "cta.p":  "ইয়োগা লাইফে ২০০+ সক্রিয় শিক্ষার্থীর সাথে যোগ দিন।",
    "cta.btn1": "ফর্ম পূরণ করুন",
    "cta.btn2": "আমাদের কল করুন",

    // SOCIAL
    "social.label": "আমাদের যাত্রা অনুসরণ করুন",

    // FOOTER
    "footer.desc": "বারুইপুর, কলকাতায় একটি প্রিমিয়াম যোগ ও জুম্বা স্টুডিও। ২০২৪ সাল থেকে যোগাভ্যাসের মাধ্যমে জীবন রূপান্তরিত করছে।",
    "footer.nav":  "নেভিগেশন",
    "footer.contact": "যোগাযোগ",
    "footer.hours":   "স্টুডিওর সময়",
    "footer.hours.val": "প্রতিদিন, সকাল ৬:৩০ – রাত ৮:৩০",
    "footer.address": "উকিলপাড়া রোড, পালপাড়া, ওয়ার্ড নং ১৪, বারুইপুর, কলকাতা – ৭০০১৪৪",
    "footer.rating": "<span style=\"font-weight:700;\">৫.০<span style=\"font-size:0.75em; margin:0 4px 0 2px; position:relative; top:-1px;\">&#9733;</span></span> ৪০টি গুগল রিভিউ",
    "footer.copy":   "© ২০২৫ ইয়োগা লাইফ। সর্বস্বত্ব সংরক্ষিত।",

    // PAGES, CLASSES
    "cp.label": "আমাদের প্রোগ্রাম",
    "cp.h1":    "ক্লাস",
    "cp.sub":   "বারুইপুরে সব বয়স ও স্তরের জন্য অফলাইন ও অনলাইন ক্লাস।",
    "cp.yoga.label": "যোগ প্রোগ্রাম",
    "cp.yoga.h2":    "যোগ - শরীর, শ্বাস ও ভারসাম্য",
    "cp.yoga.p1":    "আমাদের যোগ সেশনগুলি সমস্ত স্তরের অনুশীলনকারীদের জন্য, প্রথমবার মাদুরে পা দেওয়া থেকে গভীর অনুশীলন খোঁজা পর্যন্ত।",
    "cp.yoga.p2":    "সমস্ত সেশন শ্রীমতী রুণু হালদার দাস পরিচালনা করেন, একটি সহায়ক ও বিচারমুক্ত পরিবেশে।",
    "cp.yoga.b1":    "সব বয়সের জন্য উপযুক্ত, ৫০+ সহ",
    "cp.yoga.b2":    "হঠযোগ, নমনীয়তা ও শক্তি কাজ",
    "cp.yoga.b3":    "প্রাণায়াম ও মেডিটেশন কৌশল",
    "cp.yoga.b4":    "ওজন ব্যবস্থাপনা ও স্ট্রেস উপশম",
    "cp.yoga.b5":    "অফলাইন ও অনলাইন উভয়ই উপলব্ধ",
    "cp.zumba.label": "জুম্বা প্রোগ্রাম",
    "cp.zumba.h2":   "জুম্বা - নাচ, ফিটনেস ও আনন্দ",
    "cp.zumba.p1":    "ইয়োগা লাইফে জুম্বা উচ্চ-শক্তির, আনন্দদায়ক এবং সত্যিকারের মজাদার।",
    "cp.zumba.p2":    "আমাদের জুম্বা সেশন ক্যালোরি পোড়ায়, সমন্বয় উন্নত করে, মেজাজ উন্নত করে এবং সম্প্রদায় গড়ে তোলে।",
    "cp.zumba.b1":    "উচ্চ-শক্তির কার্ডিও যা ব্যায়ামের মতো মনে হয় না",
    "cp.zumba.b2":    "সব স্তরের জন্য নাচ ফিটনেস",
    "cp.zumba.b3":    "ক্যালোরি পোড়ান ও সমন্বয় উন্নত করুন",
    "cp.zumba.b4":    "মেজাজ-উন্নতিকারী সম্প্রদায় অভিজ্ঞতা",
    "cp.zumba.b5":    "শুধুমাত্র অফলাইনে উপলব্ধ",
    "cp.sched.label": "সময় ও ফি",
    "cp.sched.h2":    "সময়সূচী",
    "cp.join.cta":    "যোগ দিন",

    // PAGES, ABOUT
    "ap.label": "আমাদের সম্পর্কে",
    "ap.h1":    "শ্রীমতী রুণু হালদার দাস",
    "ap.sub":   "যোগ্য যোগ প্রশিক্ষক · বারুইপুর, কলকাতা",
    "ap.story.label": "স্টুডিওর গল্প",
    "ap.story.h2":    "নিষ্ঠাবান অনুশীলনের এক দশক",
    "ap.story.p1":    "শ্রীমতী রুণু হালদার দাসের প্রতিষ্ঠিত ইয়োগা লাইফ বারুইপুরের একটি ছোট্ট স্টুডিও থেকে আজ ৫০০-এরও বেশি শিক্ষার্থীর একটি সমৃদ্ধ কমিউনিটিতে পরিণত হয়েছে।",
    "ap.story.p2":    "শ্রীমতী রুণু তাঁর গভীর দক্ষতা, শৃঙ্খলা ও সহানুভূতির মাধ্যমে প্রতিটি বয়স এবং স্তরের শিক্ষার্থীদের জন্য উপযুক্ত প্রশিক্ষণ প্রদান করেন।",
    "ap.story.p3":    "আমরা অফলাইন এবং অনলাইন উভয় মাধ্যমেই সুবিধাজনক সময়ে ক্লাসের সুযোগ দিই, যাতে যে কেউ যেকোনো জায়গা থেকে খাঁটি যোগাভ্যাস করতে পারেন।",
    "ap.qual.h2":     "যোগ্যতা ও অভিজ্ঞতা",
    "ap.qual.1.title": "যোগ্য যোগ প্রশিক্ষক",
    "ap.qual.1.desc":  "যোগ নির্দেশনায় আনুষ্ঠানিকভাবে সার্টিফাইড",
    "ap.qual.2.title": "১০+ বছর শিক্ষাদান",
    "ap.qual.2.desc":  "সব বয়স ও স্তরের শিক্ষার্থীদের দশকের বেশি শিক্ষা",
    "ap.qual.3.title": "৫০০+ শিক্ষার্থী প্রশিক্ষিত",
    "ap.qual.3.desc":  "তাঁর নির্দেশনায় ৫০০-এর বেশি শিক্ষার্থী প্রশিক্ষিত হয়েছেন",
    "ap.qual.4.title": "যোগ ও জুম্বা",
    "ap.qual.4.desc":  "যোগ এবং জুম্বা ফিটনেস উভয়ে দক্ষতা",
    "ap.qual.5.title": "অনলাইন ও অফলাইন",
    "ap.qual.5.desc":  "ইন-স্টুডিও সেশনের পাশাপাশি লাইভ অনলাইন ক্লাস",
    "ap.qual.6.title": "৫.০★ রেটেড স্টুডিও",
    "ap.qual.6.desc":  "৪০টি গুগল রিভিউ, ধারাবাহিকভাবে পাঁচ তারা রেটেড",

    // PAGES, JOIN
    "jp.label": "ভর্তি",
    "jp.h1":    "ইয়োগা লাইফে যোগ দিন",
    "jp.sub":   "মিনিটের মধ্যে ভর্তি হন, কোনো অপেক্ষা নেই, কোনো জটিল প্রক্রিয়া নেই।",
    "jp.intro": "এটি কীভাবে কাজ করে:",
    "jp.step1.h": "আপনার ক্লাস ও স্লট বেছে নিন",
    "jp.step1.p": "অফলাইন (স্টুডিওতে) বা অনলাইন (লাইভ)। ফর্মে তালিকাভুক্ত উপলব্ধ সময় স্লট থেকে বেছে নিন।",
    "jp.step2.h": "UPI-এর মাধ্যমে পেমেন্ট করুন",
    "jp.step2.p": "UPI ID: 8910393245@upi-তে আপনার ফি ট্রান্সফার করুন। লেনদেনের স্ক্রিনশট রাখুন।",
    "jp.step3.h": "ফর্ম পূরণ এবং জমা দিন",
    "jp.step3.p": "নিচের ফর্মটি পূরণ করুন এবং আপনার পেমেন্ট স্ক্রিনশট আপলোড করুন।",
    "jp.form.btn": "আবেদন জমা দিন",
    "jp.form.fallback": "নতুন ট্যাবে ফর্মটি খুলুন",
    "jp.alt.h3": "সরাসরি ভর্তি করতে চান?",
    "jp.alt.p":  "আমাদের কল বা WhatsApp করুন, আমরা মিনিটের মধ্যে সাহায্য করব।",
    "jp.alt.wa": "WhatsApp করুন",
    "jp.alt.call": "কল করুন",

    // PAGES, CONTACT
    "co.label":   "যোগাযোগ করুন",
    "co.h1":      "যোগাযোগ",
    "co.sub":     "আমরা আপনার কাছ থেকে শুনতে ভালোবাসি। স্টুডিও পরিদর্শন করুন বা যেকোনো সময় যোগাযোগ করুন।",
    "co.info.label": "যোগাযোগের বিবরণ",
    "co.info.h2":    "আমাদের খুঁজে পান",
    "co.addr.h":     "ঠিকানা",
    "co.addr.v":     "উকিলপাড়া রোড, পালপাড়া, ওয়ার্ড নং ১৪, বারুইপুর, কলকাতা – ৭০০১৪৪",
    "co.phone.h":    "ফোন",
    "co.phone.v":    "+৯১ ৮৯১০৩ ৯৩২৪৫",
    "co.wa.h":       "WhatsApp",
    "co.wa.v":       "+৯১ ৯৮০০৪ ২১২৩৮",
    "co.email.h":    "ইমেইল",
    "co.email.v":    "halderrunu5@gmail.com",
    "co.hours.h":    "স্টুডিওর সময়",
    "co.hours.v":    "প্রতিদিন, সকাল ৬:৩০ – রাত ৮:৩০",
    "co.dir.btn":    "দিকনির্দেশনা পান",
    "co.wa.btn":     "WhatsApp",
    "co.call.btn":   "এখনই কল করুন",

    // BLOG
    "blog.label": "ব্লগ",
    "blog.h1":    "অন্তর্দৃষ্টি ও অনুপ্রেরণা",
    "blog.p":     "যোগ, সুস্থতা এবং সচেতন জীবনযাপনের নিবন্ধ, শীঘ্রই আসছে।",
    "blog.tag":   "শীঘ্রই আসছে",
    
    // DYNAMIC ISLAND
    "di.idle":    "যোগ দিন",
    "di.notice":  "সীমিত আসন। <strong>দ্রুত ভর্তি হন!</strong>"
  }
};

if (typeof module !== 'undefined') module.exports = TRANSLATIONS;
