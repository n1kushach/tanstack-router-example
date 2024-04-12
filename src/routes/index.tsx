import { createFileRoute } from '@tanstack/react-router';
// import { Button } from '../components/Button';

export const Route = createFileRoute('/')({
  component: () => <Index />,
});

const Index = () => {
  return (
    <div>
      Index page
      {/* <Button size="default" variant="default" /> */}
      {/* <Button size="lg" variant="outline" /> */}
    </div>
  );
};
