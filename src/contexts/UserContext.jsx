import { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(null);

  const fetchUserSession = async () => {
    const response = await axios.post('http://localhost:3000/verificar-sessao', {}, { withCredentials: true });
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['userSession'], // Use um array para a chave da query
    queryFn: fetchUserSession, // A função de busca
  });

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setIsLogged(data.sessaoIniciada)
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, isLogged , isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
