// components/vibes/VibeItem.tsx

import { Database } from '../../types/supabase';

interface VibeItemProps {
  vibe: Database['public']['Tables']['vibes']['Row'];
}

const VibeItem = ({ vibe }: VibeItemProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="font-bold text-lg">{vibe.vibe}</div>
      <div className="text-sm text-gray-600">
        {vibe.location ? `Location: ${vibe.location}` : 'No location specified'}
      </div>
      <div className="text-sm text-gray-500">{new Date(vibe.created_at!).toLocaleString()}</div>
    </div>
  );
};

export default VibeItem;
