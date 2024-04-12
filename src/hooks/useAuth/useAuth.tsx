import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { useSnapshot } from 'valtio';

const useAuth = () => {
  const state = useContext(AuthContext) as AuthContextType;
  const snap = useSnapshot(state);
  return { state, snap };
};

export default useAuth;
