
const TimeLineBlock = () => {
  return (
    <div
    className="absolute w-full grid grid-cols-[1fr_auto_1fr]"

  >
    <div className="flex flex-col justify-center items-center p-4 rounded-lg  mr-4">
      <div>
        <h3 className="font-bold mb-2 text-2xl text-cyan-700">
            This is the title
        </h3>
        <p className="text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Voluptate eius possimus doloribus tempora amet
          dolorem, similique veritatis architecto eaque labore.
        </p>
      </div>
    </div>

    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-300 z-10">

    </div>

    <div className="rounded-lg ml-25">
      <img src="" width={250} height={250} className="" />
    </div>
  </div>
  )
}

export default TimeLineBlock