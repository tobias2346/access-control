'use client'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

const page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div className='w-11/12 h-auto gap-y-4 bg-dark flex flex-col items-center justify-around shadow rounded-xl text-light p-4'>
      <h4 className='text-2xl font-semibold font-headline'>Iniciar sesión</h4>
      <h6 className='font-medium text-base'>Ingresa al Control de Acceso</h6>
      <div className='flex flex-col gap-y-4 w-full'>
        <div className='w-full flex flex-col'>
          <label className="text-sm font-medium">Correo electronico</label>

          <input className='w-full h-12 px-2 text-sm bg-background rounded-lg' />
        </div>
        <div>
          <label className="text-sm font-medium">Contraseña</label>
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pr-10 border-none w-full h-12 px-2 text-sm bg-background rounded-lg" // espacio para el botón
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          {/* <FormMessage /> */}
        </div>
      </div>
      <button type='button' className='w-full h-11 bg-primary text-dark flex justify-center items-center rounded-xl font-semibold'>
        Iniciar sesión
      </button>
    </div>
  )
}

export default page