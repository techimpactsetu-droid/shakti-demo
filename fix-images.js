const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);
let replacedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?q=80&w=(\d+)&auto=format&fit=crop/g;
    
    if (regex.test(content)) {
        let newContent = content.replace(regex, (match, width) => {
            let h = parseInt(width) > 1000 ? 800 : 600;
            // Use random seed to get different images
            let seed = Math.random().toString(36).substring(7);
            return `https://picsum.photos/seed/${seed}/${width}/${h}`;
        });
        fs.writeFileSync(file, newContent, 'utf8');
        replacedCount++;
        console.log(`Updated images in ${file}`);
    }
});

console.log(`Replaced unsplash URLs in ${replacedCount} files.`);
