// pages/Feed.tsx

import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../types/supabase';
import VibeItem from '../components/vibes/VibeItem';

export default function Feed() {
  const supabase = useSupabaseClient<Database>();
  const [vibes, setVibes] = useState<Database['public']['Tables']['vibes']['Row'][]>([]);

  useEffect(() => {
    fetchVibes();
  }, []);

  async function fetchVibes() {
    const { data, error } = await supabase
      .from('vibes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching vibes:', error);
      return;
    }

    if (data) {
      setVibes(data);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Vibe Feed</h1>
      <div>
        {vibes.map((vibe, index) => (
          <VibeItem key={index} vibe={vibe} />
        ))}
      </div>
    </div>
  );
}
