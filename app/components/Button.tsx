"use client"

import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium font-['Lexend_Peta'] uppercase tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-white hover:text-black border-2 border-black",
        outline: "border-2 border-black text-black hover:bg-black hover:text-white",
        ghost: "text-black hover:bg-black/10",
        white: "bg-white text-black hover:bg-gray-200 border-2 border-white",
        whiteOutline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2",
        lg: "h-14 px-10 py-4",
        full: "w-full h-12 px-8 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  href?: string
  className?: string
}

export function Button({ 
  children, 
  className, 
  variant, 
  size, 
  href, 
  ...props 
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button 
      className={cn(buttonVariants({ variant, size, className }))} 
      {...props}
    >
      {children}
    </button>
  )
} 