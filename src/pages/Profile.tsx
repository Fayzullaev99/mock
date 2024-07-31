import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '../components/Card.js';
import Loader from '../components/Loader.js';
import { fetchUser } from '../services/api.js';
import { clearData } from '../services/storage.js';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, error } = useQuery({ queryKey: ['user'], queryFn: () => fetchUser() });
  if (isLoading) return <Loader />
  if (error) return <p>Error: {error?.message}</p>

  return (
    <div className="profile">
      {!isEditing ? (
        <div className="profile__card">
          <img src={data?.avatar} alt="Profile" className="profile__image" />
          <h2 className="profile__name">{data?.name}</h2>
          <a href={`mailto:${data?.email}`} className="profile__email">{data?.email}</a>
          <p className="profile__bio">{data?.bio}</p>
          <div className="profile__button">
            <button onClick={() => setIsEditing(true)}>EDIT</button>
            <button onClick={clearData}>EXIT</button>
          </div>
        </div>
      ) : (<Card />)}
    </div>
  );
};

export default Profile;
