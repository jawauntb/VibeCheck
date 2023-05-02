import React, { useState } from 'react';
import { Database } from '../../types/supabase';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

const VibeForm: React.FC = () => {
  const user = useUser();
  const supabase = useSupabaseClient<Database>();
  const [vibe, setVibe] = useState('');
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!vibe) return;

    try {
      const { error } = await supabase.from('vibes').insert({
        user_id: user?.id,
        vibe,
        location: location ? `${location.latitude}, ${location.longitude}` : null,
      });

      if (error) throw error;

      setVibe('');
      setLocation(null);
      alert('Vibe check added!');
    } catch (error) {
      alert('Error adding vibe check!');
      console.log(error);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => setLocation(position.coords),
      (error) => {
        alert('Unable to retrieve your location.');
        console.log(error);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-8"
        type="text"
        placeholder="What's the vibe?"
        value={vibe}
        onChange={(e) => setVibe(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
      >
        Add Vibe Check
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
        type="button"
        onClick={getLocation}
      >
        Share Location
      </button>
    </form>
  );
};

export default VibeForm;
