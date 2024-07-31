export const fetchUser = async () => {
  const response = await fetch('/api/user');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const updateUser = async (userData: any) => {
  const response = await fetch('/api/user', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer token${userData.name}`
     },
    body: JSON.stringify(userData)
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
