'use client'
import { useState } from "react"
import Info from "./info"
import Inprovments from "./inprovments"
import Image from "next/image"

const Page = () => {
  const [activeTab, setActiveTab] = useState("info")

  return (
    <div className="w-full px-4">
      {/* Tabs */}
      <button
        type='button'
        className='text-primary font-headline font-semibold flex items-center gap-x-2'
      >
        <Image src='/icons/arrow-left.svg' alt='Arrow left' width={15} height={15} />
        Sector seleccionado
      </button>
      <div className="flex gap-4 border-b py-2 mt-6">
        <button
          onClick={() => setActiveTab("info")}
          className={`px-4 py-2 font-medium ${activeTab === "info" ? "border-b-2 border-cyan-500 text-cyan-500" : "text-gray-500"
            }`}
        >
          Info
        </button>
        <button
          onClick={() => setActiveTab("inprovments")}
          className={`px-4 py-2 font-medium ${activeTab === "inprovments" ? "border-b-2 border-cyan-500 text-cyan-500" : "text-gray-500"
            }`}
        >
          Inprovments
        </button>
      </div>

      {/* Contenido dinámico */}
      <div className="mt-4">
        {activeTab === "info" && <Info />}
        {activeTab === "inprovments" && <Inprovments />}
      </div>
    </div>
  )
}

export default Page
