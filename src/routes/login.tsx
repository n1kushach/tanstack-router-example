import {
  createFileRoute,
  getRouteApi,
  useNavigate,
  useRouter,
} from '@tanstack/react-router';
import useAuth from '../hooks/useAuth/useAuth';
import { Login } from '../utils/login';
import { flushSync } from 'react-dom';

export const Route = createFileRoute('/login')({
  component: () => <LoginPage />,
});

const routeApi = getRouteApi('/login');

const LoginPage = () => {
  const { state } = useAuth();
  const router = useRouter();
  const search = routeApi.useSearch() as { redirect: string };
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = await Login();
    flushSync(() => {
      Object.keys(login)?.map(item => {
        state[item] = login[item];
      });
    });
    await router.invalidate();
    navigate({ to: search?.redirect });
  };

  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className="flex flex-col gap-4"
      >
        <button
          type="submit"
          className="mb-2 me-2 w-3/12 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
