import React, from 'react';

import api from './services/api';

export default function Main ({match}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users', {
        headers: {
          id: match.params.id,
        }
      })
      
      setUsers(response.data);
    }

      loadUsers();
  }, [match.params.id];


    return () => {
      <ul>
        {users.map(user => (
        <li>
          <ul>Nome: {user.first_name} </ul> 
          <ul>Sobrenome: {user.last_name} </ul> 
          <ul>Email: {user.email} </ul>
          <ul>Avatar: {user.avatar} </ul>  
        </li>
        ))}
      
    }
}