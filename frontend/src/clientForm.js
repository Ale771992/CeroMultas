import React, { useState } from 'react'
import axios from 'axios'
import './tailwind.css';

function ClientForm() {
    const [client, setClient] = useState({ nombre_contacto: '', correo_electronico: '', nombre_empresa: '', logotipo: '', estado: '', descripcion_producto: '', fecha_registro: '' })

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(client)
        axios.post('http://localhost:8080/api/clients', client)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    return (
        <div>
            <div className=" bg-white text-black py-2 px-4 rounded-t-lg uppercase font-bold text-left border-t-4 border-yellow-500">
                Agregar empresa
            </div>
            <section className="min-h-screen bg-gray-200 flex items-center justify-center">
                <div className="container mx-auto bg-white p-6 rounded-lg shadow ">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='text-left'>
                            <label className="px-2 py-1 text-gray-500 text-left" htmlFor="nombre_contacto">Nombre del contacto</label>
                            <input type="text" name="nombre_contacto" id="nombre_contacto" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md pl-10" />
                        </div>

                        <div className='text-left'>
                            <label className="px-2 py-1 text-gray-500 text-left" htmlFor="correo_electronico">Correo electrónico</label>
                            <input type="text" name="correo_electronico" id="correo_electronico" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md pl-10" />
                        </div>

                        <div className='text-left'>
                            <label className="px-2 py-1 text-gray-500 text-left" htmlFor="nombre_empresa">Nombre de la empresa</label>
                            <input type="text" name="nombre_empresa" id="nombre_empresa" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md pl-10" />
                        </div>

                        <hr className="border-t-1 border-black my-4"></hr>

                        <div className='text-left'>
                            <label className="px-2 py-1 text-gray-500 text-left" htmlFor="logotipo">Logotipo</label>
                            <input type="file" name="logotipo" id="logotipo" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md pl-10" accept='image/*' />
                        </div>

                        <div className='text-left'>
                            <label className="px-2 py-1 text-gray-500 text-left" htmlFor="estado">Estado</label>
                            <select type="text" name="estado" id="estado" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md pl-10" >
                                <option value="">Seleccione un Estado</option>
                                <option value="Aguascalientes">Aguascalientes</option>
                                <option value="Baja California">Baja California</option>
                                <option value="Baja California Sur">Baja California Sur</option>
                                <option value="Campeche">Campeche</option>
                                <option value="Chiapas">Chiapas</option>
                                <option value="Chihuahua">Chihuahua</option>
                                <option value="Coahuila">Coahuila</option>
                                <option value="Colima">Colima</option>
                                <option value="Durango">Durango</option>
                                <option value="Estado de México">Estado de México</option>
                                <option value="Guanajuato">Guanajuato</option>
                                <option value="Guerrero">Guerrero</option>
                                <option value="Hidalgo">Hidalgo</option>
                                <option value="Jalisco">Jalisco</option>
                                <option value="Michoacán">Michoacán</option>
                                <option value="Morelos">Morelos</option>
                                <option value="Nayarit">Nayarit</option>
                                <option value="Nuevo León">Nuevo León</option>
                                <option value="Oaxaca">Oaxaca</option>
                                <option value="Puebla">Puebla</option>
                                <option value="Querétaro">Querétaro</option>
                                <option value="Quintana Roo">Quintana Roo</option>
                                <option value="San Luis Potosí">San Luis Potosí</option>
                                <option value="Sinaloa">Sinaloa</option>
                                <option value="Sonora">Sonora</option>
                                <option value="Tabasco">Tabasco</option>
                                <option value="Tamaulipas">Tamaulipas</option>
                                <option value="Tlaxcala">Tlaxcala</option>
                                <option value="Veracruz">Veracruz</option>
                                <option value="Yucatán">Yucatán</option>
                                <option value="Zacatecas">Zacatecas</option>
                            </select>
                        </div>

                        <hr className="border-t-1 border-black my-4"></hr>

                        <div className='text-left'>
                            <label className="px-2 py-1 text-gray-500 text-left" htmlFor="descripcion_producto">Descripción del producto</label>
                            <input type="text" name="descripcion_producto" id="descripcion_producto" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md pl-10" />
                        </div>

                        <div className='text-left'>
                            <label className="px-2 py-1 text-gray-500 text-left" htmlFor="fecha_registro">Fecha de registro</label>
                            <input type="date" name="fecha_registro" id="fecha_registro" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md pl-10" />
                        </div>

                        <button type="submit" onClick={handleSubmit} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Guardar</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ClientForm