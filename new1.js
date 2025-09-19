(async () => {
  const routes = [
    '/admin/dashboard',
    '/dashboard'

  ];
  for (const path of routes) {
    try {
      const res = await fetch(path, { credentials: 'include' });
      const text = await res.text();
      console.log(`[${res.status}] ${path} ->`, text.slice(0, 500));
    } catch (err) {
      console.log(`ERROR ${path}:`, err);
    }
  }
})();
