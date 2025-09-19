// simple fetch POST to /admin/approve/mem
fetch('/admin/approve/mem', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: '' // no body required by the route
})
.then(r => console.log('approve status', r.status))
.catch(e => console.error('approve error', e));
