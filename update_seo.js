const fs = require('fs');
const path = require('path');

const data = {
  'classes.html': {
    title: 'Yoga, Zumba & Pranayam Classes in Baruipur | Yoga Life',
    desc: 'Explore yoga, Zumba, meditation and pranayam class timings in Baruipur. Beginner to advanced batches, morning and evening slots, online and offline options at Yoga Life.'
  },
  'about.html': {
    title: 'About Runu Halder Das | Certified Yoga Trainer, Baruipur',
    desc: 'Meet Runu Halder Das, certified yoga instructor in Baruipur with 500+ students trained. Learn about Yoga Life\'s story, teaching philosophy, and commitment to the community.'
  },
  'gallery.html': {
    title: 'Yoga Life Studio Photos | Classes in Baruipur, West Bengal',
    desc: 'See photos from Yoga Life\'s yoga, Zumba and meditation classes in Baruipur — our students, sessions, and studio space in Palpara, Ward 14.'
  },
  'contact.html': {
    title: 'Contact Yoga Life | Yoga Centre in Baruipur, West Bengal',
    desc: 'Find Yoga Life\'s address, timings and phone number in Baruipur. Located in Palpara, Ward 14 — near Sibanipith and Madarat. Call, WhatsApp or visit us directly.'
  },
  'blog.html': {
    title: 'Yoga & Wellness Tips from Baruipur | Yoga Life Blog',
    desc: 'Tips on yoga, meditation, pranayam and healthy living from Yoga Life, Baruipur. Practical guidance for beginners and long-time students alike.'
  }
};

for (const [file, meta] of Object.entries(data)) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace title
  content = content.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
  // Replace meta desc
  content = content.replace(/<meta name="description" content=".*?">/s, `<meta name="description" content="${meta.desc}">`);
  // Replace og:title
  content = content.replace(/<meta property="og:title" content=".*?">/s, `<meta property="og:title" content="${meta.title}">`);
  // Replace og:description
  content = content.replace(/<meta property="og:description" content=".*?">/s, `<meta property="og:description" content="${meta.desc}">`);
  
  fs.writeFileSync(filePath, content);
}
console.log('Updated meta tags in all files.');
