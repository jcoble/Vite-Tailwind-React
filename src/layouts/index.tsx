import { Outlet } from 'react-router'

/* export type LayoutMainProps = {
  children?: React.ReactNode
} */

const LayoutMain = (): JSX.Element => {
  return (
    <>
      <div className='sticky top-0 z-50 px-5 py-5 w-full border-b-2 bg-white dark:bg-neutral-900 dark:text-slate-500 border-red-600'>
        Navbar
      </div>
      <main className='layout py-4'>
        <Outlet />
      </main>
      <div className='footer px-5 py-5 dark:text-slate-500 '>Footer</div>
    </>
  )
}

export default LayoutMain
