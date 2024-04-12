import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { AuthContextType } from '../context/AuthContext';

export const Route = createRootRouteWithContext<AuthContextType>()({
  component: () => <RootComponent />,
});

const RootComponent = () => {
  return (
    <>
      <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
              className="h-8"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              TanStack Router
            </span>
          </a>
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex rounded-lg p-4 font-medium md:mt-0  md:border-0">
              <li>
                <Link
                  activeProps={{ className: 'bg-blue-600' }}
                  className="block rounded  px-3 py-2 text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeProps={{ className: 'bg-blue-600' }}
                  to="/posts"
                  className="block rounded  px-3 py-2 text-white"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  activeProps={{ className: 'bg-blue-600' }}
                  search={{ redirect: '/' }}
                  to="/login"
                  className="block rounded  px-3 py-2 text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  activeProps={{ className: 'bg-blue-600' }}
                  to="/dashboard"
                  className="block rounded  px-3 py-2 text-white"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <div className="mx-auto max-w-screen-xl">
        <Outlet />
      </div>
    </>
  );
};
