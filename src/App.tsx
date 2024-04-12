import { RouterProvider, createRouter } from '@tanstack/react-router';
import './App.css';
import { routeTree } from './routeTree.gen';
import { AuthProvider } from './context/AuthContext';
import useAuth from './hooks/useAuth/useAuth';

const router = createRouter({
  routeTree,
  context: undefined!,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const { snap } = useAuth();
  return <RouterProvider router={router} context={snap} />;
}

function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

export default App;
