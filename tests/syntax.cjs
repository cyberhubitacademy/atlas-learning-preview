process.chdir(require('path').resolve(__dirname,'..'));
const fs=require('fs'),vm=require('vm');
for(const file of ['assets/app.js','assets/demo-pages.js','demo-store.js','assets/lessons.js','assistant-engine.js']){
 let code=fs.readFileSync(''+file,'utf8');
 code=code.replace(/^import .*?;\r?\n/,'').replace('export function','function');
 new vm.Script(code,{filename:file});console.log('PASS syntax: '+file);
}
