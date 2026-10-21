// Management preview: retain public reads, prevent production data changes.
const originalFetch = window.fetch.bind(window);
window.fetch = (input, init = {}) => {
 const url = new URL(typeof input === 'string' ? input : input.url, location.href);
 const method = (init.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();
 if (url.hostname.endsWith('.supabase.co') && !['GET', 'HEAD', 'OPTIONS'].includes(method)) {
  return Promise.resolve(new Response(JSON.stringify({message:'Management preview: live account and data changes are disabled. Use Enter instantly (dev) to explore.',error:'preview_read_only'}), {status:403,headers:{'Content-Type':'application/json'}}));
 }
 return originalFetch(input, init);
};
