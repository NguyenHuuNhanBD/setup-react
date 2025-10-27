import { useEffect } from 'react'

import { toast } from 'sonner'

export function meta() {
  return [{ title: 'ERP - Yarn code' }, { name: 'ERP Yarn code', content: 'Welcome to ERP' }]
}

const YarnCode = () => {
  useEffect(() => {
    toast.success('Welcome yarn code !')
  }, [])
  return (
    <section className='p-5 w-full h-full'>
      <p>YarnCode</p>
      {/* <section className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[400px]'>
        <LoaderPage />
      </section> */}
    </section>
  )
}

export default YarnCode
