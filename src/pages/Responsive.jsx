import React from 'react'

export const Responsive = () => {
  return (
    <div className="h-screen p-4 space-y-4">
      <div className="flex h-[20%] justify-end md:justify-center">
        <div className="flex bg-[#EB3838] h-full w-[30%] md:w-full justify-center items-center">
          <span className="text-white font-bold text-[30px]">Merah</span>
        </div>
      </div>
      

      <div className="flex flex-col md:flex-col-reverse lg:flex-row w-[100%] h-[80%] gap-4">
        <div className="flex bg-[#5C38EB] w-full lg:w-[40%] h-[50%] lg:h-full justify-center items-center">
          <span className="text-white font-bold text-[30px]">Ungu</span>
        </div>

        <div className="flex flex-col-reverse md:flex-col lg:flex-col w-full lg:w-[60%] gap-4 h-full">
          <div className="flex bg-[#38EB55] w-full h-[50%] lg:h-[50%] justify-center items-center">
            <span className="text-white font-bold text-[30px]">Hijau</span>
          </div>

          <div className="flex flex-row-reverse md:flex-row w-full h-[50%] lg:h-[50%] gap-4">
            <div className="flex bg-[#38C0EB] md:bg-[#EB38AE] lg:bg-[#38C0EB] w-[50%] justify-center items-center">
              <span className="text-white font-bold text-[30px]">Biru</span>
            </div>
            <div className="flex bg-[#EB38AE] w-[50%] justify-center items-center">
              <span className="text-white font-bold text-[30px]">Pink</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
