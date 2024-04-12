import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard')({
  component: () => <DashboardPage />,
  beforeLoad: async ({ context, location }) => {
    console.log(context, 'CONTEXT ROUTER');
    if (!context.token) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

const DashboardPage = () => {
  return <div>Dashboard Page</div>;
};
