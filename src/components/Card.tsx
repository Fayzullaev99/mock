import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { updateUser } from '../services/api.js';
import { getUserDataFromLocalStorage } from '../services/storage.js';

const Card: React.FC<{ data?: string }> = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', bio: '', avatar: '' });
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      alert('Successfully');
      localStorage.setItem('userData', JSON.stringify(data));
      window.location.reload()
    },
    onError: (error) => {
      alert(`Error updating profile: ${error.message}`);
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = () => {
    const { name, email, bio } = formData;
    if (!name || !email || !bio) {
      alert('All fields are required');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email not match');
      return;
    }
    mutation.mutate(formData);
    localStorage.setItem('userData', JSON.stringify(formData));
    window.location.reload()
  };
  useEffect(() => {
    const user = getUserDataFromLocalStorage()
    if (user) {
      setFormData({ name: user.name, email: user.email, bio: user.bio, avatar: "https://avatars.githubusercontent.com/u/744487?v=4" })
    }
  }, [])
  return (
    <form className='profile__card'>
      <h2 className="profile__name">{data == "register" ? "REGISTER" : "UPDATE PROFILE"}</h2>
      <input
        type="text"
        name="name"
        placeholder='Your name'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder='Your email'
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder='Your bio'
        value={formData.bio}
        onChange={handleChange}
      ></textarea>
      <div className="profile__button">
        {data == "register" ? (
          <button onClick={handleSave}>Send</button>
        ) : (
          <>
            <button onClick={handleSave} disabled={mutation.isLoading}>{mutation.isLoading ? 'Saving...' : 'Save'}</button>
            <button type='reset'>Cancel</button>
          </>
        )}
      </div>
    </form>
  )
}

export default Card