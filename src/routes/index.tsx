import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <Index />,
});

const Index = () => {
  return <div>Hello, It's index page</div>;
};
