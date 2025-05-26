'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function CalTriggerButton({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  const handleOpenCal = async () => {
    const cal = await getCalApi({ namespace: '30min' });
    cal('modal', {
      calLink: 'faizan-rauf/30min',
    });
  };

  return (
    <div onClick={handleOpenCal} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}
