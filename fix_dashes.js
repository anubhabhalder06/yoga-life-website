const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'js', 'translations.js');
let content = fs.readFileSync(file, 'utf8');

// Replace headings dashes with simple hyphens
content = content.replace(/"cp\.yoga\.h2":\s*"Yoga — Body/g, '"cp.yoga.h2":    "Yoga - Body');
content = content.replace(/"cp\.zumba\.h2":\s*"Zumba — Dance/g, '"cp.zumba.h2":   "Zumba - Dance');
content = content.replace(/"cp\.yoga\.h2":\s*"যোগ — শরীর/g, '"cp.yoga.h2":    "যোগ - শরীর');
content = content.replace(/"cp\.zumba\.h2":\s*"জুম্বা — নাচ/g, '"cp.zumba.h2":   "জুম্বা - নাচ');

// Replace paragraph/sentence dashes with commas
content = content.replace(/ — /g, ', ');
content = content.replace(/—/g, ', ');

fs.writeFileSync(file, content);
console.log('Fixed dashes and hyphens in translations.js');
