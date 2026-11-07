const fs=require('fs'),path=require('path');
const src=fs.readdirSync('src').filter(f=>f.endsWith('.js')).sort().map(f=>fs.readFileSync(path.join('src',f),'utf8'));
// Reihenfolge der Zonen sicherstellen
const content=src.join('\n')+'\nwindow.ZONES.sort(function(a,b){return a.id<b.id?-1:1;});\n';
let html=fs.readFileSync('template.html','utf8');
html=html.replace('/*__CONTENT__*/',()=>content).replace('/*__APP__*/',()=>fs.readFileSync('app.js','utf8'));
fs.mkdirSync('dist',{recursive:true});
fs.writeFileSync('dist/index.html',html);
console.log('dist/index.html',(html.length/1024).toFixed(0)+' KB');
