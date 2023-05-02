// components/vibes/VibeList.tsx

import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

type Vibe = {
  id: number;
  account: string;
  vibe: string;
  location: string | null;
  created_at: string;
};

export default function VibeList() {
  const supabase = useSupabaseClient();
  const [vibes, setVibes] = useState<Vibe[]>([]);

  useEffect(() => {
    fetchVibes();
  }, []);

  async function fetchVibes() {
    const { data, error } = await supabase.from<Vibe>('vibes').select('*').order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching vibes:', error);
    } else {
      setVibes(data || []);
    }
  }

  return (
    <div className="max-w-md">
      {vibes.map((vibe) => (
        <div key={vibe.id} className="border-b border-gray-200 py-4">
          <h2 className="font-semibold">{vibe.account}</h2>
          <p>{vibe.vibe}</p>
          <p className="text-sm text-gray-500">{new Date(vibe.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
