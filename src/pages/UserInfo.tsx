import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const UserInfo: React.FC = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2>Informações do Usuário</h2>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserInfo;
