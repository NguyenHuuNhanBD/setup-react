import React from 'react'

interface IBaseLayoutContentProps {
  children?: React.ReactNode
}
const BaseLayoutContent = ({ children }: IBaseLayoutContentProps) => {
  return <section className='flex flex-col gap-[30px] w-full'>{children}</section>
}

export default BaseLayoutContent
