import { useEffect, useState } from 'react';
import {useSupabaseClient } from '@supabase/auth-helpers-react';
import error from 'next/error';

type Vibe = {
  id: number;
  user_id: string;
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
    const {data, error } = await supabase.from('vibes').select('*').order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching vibes:', error);
    } else {
      setVibes(data as Vibe[] || []);
    }
  }

  return (
    <div>
      {vibes.map((vibe) => (
        <div key={vibe.id} className="border-b border-gray-200 py-4">
          <h2 className="font-semibold">{vibe.user_id}</h2>
          <p>{vibe.vibe}</p>
          <p className="text-sm text-gray-500">{new Date(vibe.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
