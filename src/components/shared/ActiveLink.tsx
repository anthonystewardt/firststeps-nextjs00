"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


interface Props {
  path: string;
  name: string;
}

const ActiveLink = ({ path, name }: Props) => {
  const currentPath = usePathname()




  return (
    <Link href={path}
      className={`${currentPath === path ? "text-blue-500" : "text-gray-500"
        }`}
    >{name}</Link>
  )
}
export default ActiveLink