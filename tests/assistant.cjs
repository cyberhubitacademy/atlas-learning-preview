process.chdir(require('path').resolve(__dirname,'..'));
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const window={GowthamDemo:{teaching:({topicTitle,topicText})=>({lessonPlan:[{step:topicTitle,time:'5 min',description:topicText}]})}};
const ctx=vm.createContext({window});
for(const file of ['assets/lessons.js','assistant-engine.js'])vm.runInContext(fs.readFileSync(''+file,'utf8'),ctx);
const d=window.GowthamDemo;
assert.equal(Object.keys(window.GowthamLessons).length,80);
for(const lesson of Object.values(window.GowthamLessons)){assert.ok(lesson.content.length>=3);assert.ok(lesson.quiz.every(q=>q.options[q.correctAnswer]));}
assert.match(d.study('Roman Empire').answer,/Rome/);
assert.equal(d.study('Supply and Demand').sources[0].id,'e2');
assert.equal(d.study('Plate Tectonics','Practice quiz').quiz.length,2);
assert.match(d.study('Unknown subject','Summarize','Rivers carry water. Water evaporates. Clouds form. Rain falls.').answer,/Rivers|Water|Clouds|Rain/);
assert.match(d.study('Federalism','Mind map').answer,/Federalism/);
assert.match(d.study('Climate Change','Lesson plan').answer,/Teaching plan/);
assert.match(d.study('xyzzztopq').answer,/could not match/);
console.log('PASS: 80 lessons and quizzes; retrieval, source matching, summaries, practice quizzes, mind maps, teaching plans, and unknown-topic handling.');
