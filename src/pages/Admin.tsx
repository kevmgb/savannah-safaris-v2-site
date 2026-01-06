import React, { useEffect } from 'react';

export function Admin() {
  useEffect(() => {
    // Redirect to the admin HTML page
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Loading admin panel...</p>
    </div>
  );
}

