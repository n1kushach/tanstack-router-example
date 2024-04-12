import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils/util';

const buttonVariants = cva(
  'mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium e',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white bg-black',
        outline: 'bg-white text-blue-500 border border-blue-500',
      },
      size: {
        default: 'text-sm',
        lg: 'text-lg',
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      Button
    </button>
  );
};

export { Button, buttonVariants };
