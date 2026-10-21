/* Local retrieval and extractive study tools. No model or external AI API is used. */
(() => {
 const D=window.GowthamDemo;
 const stop=new Set('a an the what why how when where who is are was were be been do does did can could would should will to of in on at for with about me explain tell please help understand summarize summary make create generate give and or this that it my i lesson topic chapter study learn'.split(' '));
 const tokens=s=>String(s).toLowerCase().replace(/roman/g,'rome').replace(/economics/g,'econom').replace(/democracy/g,'democra').replace(/democratic/g,'democra').replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>2&&!stop.has(w));
 function rank(query){const words=tokens(query);return Object.values(window.GowthamLessons||{}).map(lesson=>{const title=tokens(lesson.title),body=tokens(lesson.content.join(' '));const score=words.reduce((sum,w)=>sum+(title.some(t=>t===w||t.startsWith(w)||w.startsWith(t))?6:body.some(t=>t===w)?1:0),0);return {lesson,score};}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3);}
 function summarize(text){const clean=String(text||'').trim();const sentences=clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[];if(!sentences.length)return 'Paste a chapter or lesson excerpt to summarize.';const freq={};tokens(clean).forEach(w=>freq[w]=(freq[w]||0)+1);const chosen=sentences.map((sentence,index)=>({sentence:sentence.trim(),index,score:tokens(sentence).reduce((a,w)=>a+(freq[w]||0),0)/Math.max(1,Math.sqrt(tokens(sentence).length))})).sort((a,b)=>b.score-a.score).slice(0,Math.min(4,sentences.length)).sort((a,b)=>a.index-b.index);return chosen.map(x=>'• '+x.sentence).join('\n');}
 function study(question,mode='Explain',excerpt=''){
  const q=String(question||'').trim().slice(0,500),text=String(excerpt||'').trim().slice(0,20000);
  const matches=rank(q),lesson=matches[0]?.lesson;
  const sources=matches.map(({lesson:l})=>({id:l.id,title:l.title,subject:l.subject,path:`/dashboard/courses/${l.subject.toLowerCase()}/lesson/${l.id}`}));
  if(mode==='Summarize')return {answer:text?`Summary of your excerpt\n\n${summarize(text)}`:lesson?`Summary: ${lesson.title}\n\n${summarize(lesson.content.join(' '))}`:'Paste an excerpt or enter a lesson topic to summarize.',sources:text?[]:sources.slice(0,1),mode};
  if(!lesson&&!text)return {answer:'I could not match that question to this demo’s Social Studies lesson library. Try a specific topic such as the Roman Empire, resources, democracy, climate, supply and demand, or the French Revolution. You can also paste an excerpt and choose Summarize.',sources:[],mode};
  const title=lesson?.title||q||'Your excerpt',material=text||lesson.content.join(' ');
  if(mode==='Practice quiz'){
   if(!lesson)return {answer:'Choose a lesson topic to create a practice quiz. You can summarize pasted material using the Summarize mode.',sources:[],mode};
   return {answer:`Practice quiz: ${title}\nChoose an answer for every question, then check your score.`,quiz:lesson.quiz.slice(0,5),sources:sources.slice(0,1),mode};
  }
  if(mode==='Mind map')return {answer:`${title}\n${(lesson?.keyPoints||[summarize(material)]).map((point,i)=>`${i===0?'├':'└'}─ ${point}`).join('\n')}\n\nConnections\n├─ Context: who, where, and when?\n├─ Evidence: what supports the explanation?\n└─ Application: compare two real examples.`,sources:text?[]:sources.slice(0,1),mode};
  if(mode==='Lesson plan'){const plan=D.teaching({topicTitle:title,topicText:material});return {answer:`Teaching plan: ${title}\n\n${plan.lessonPlan.map(step=>`${step.step} · ${step.time}\n${step.description}`).join('\n\n')}\n\nExit ticket: explain one key idea, give an example, and write one question.`,sources:text?[]:sources.slice(0,1),mode};}
  return {answer:`${title}\n\n${lesson.content.slice(0,4).join('\n\n')}\n\nCheck your understanding: explain one cause-and-effect relationship or compare two examples.`,sources:sources.slice(0,1),mode};
 }
 D.study=study;
})();
