import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='relative overflow-hidden'>
            <Outlet />
        </main>
    </div>
  )
}

export default AppLayout;
