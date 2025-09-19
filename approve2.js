(async () => {
  // 1. Load the admin dashboard
  const res = await fetch('/admin/dashboard', { credentials: 'include' });
  const html = await res.text();

  // 2. Find the approve form for "mem"
  const regex = new RegExp(`mem[\\s\\S]*?/admin/approve/([a-f0-9\\-]+)`, 'i');
  const match = html.match(regex);

  if (!match) {
    console.log('User mem not found in dashboard');
    return;
  }

  const userId = match[1];
  console.log('Found mem userId:', userId);

  // 3. Send POST to approve that userId
  const approveRes = await fetch(`/admin/approve/${userId}`, {
    method: 'POST',
    credentials: 'include'
  });

  console.log('Approve status:', approveRes.status);
})();
