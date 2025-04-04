import  InventoryTable  from '@/components/InventoryTable'

const Inventory = () => {
  return (
    <>
     <h1 className='text-4xl font-bold'>Inventory</h1>
     <div className='mt-10'>
      <InventoryTable />
     </div>
    </>
  )
}

export default Inventory