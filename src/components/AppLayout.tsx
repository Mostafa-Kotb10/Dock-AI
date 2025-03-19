import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='overflow-hidden'>
            <Outlet />
        </main>
    </div>
  )
}

export default AppLayout;
