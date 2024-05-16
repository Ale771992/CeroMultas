import React, { useState } from 'react'
import axios from 'axios'

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
        axios.post('http://localhost:8080/apli/clients', client)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="nombre_contacto" placeholder="Nombre del contacto" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
            <input type="text" name="correo_electronico" placeholder="Correo electrónico" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="text" name="nombre_empresa" placeholder="Nombre de la empresa" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="text" name="logotipo" placeholder="Logotipo" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"/>
            <input type="text" name="estado" placeholder="Estado" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"  />
            <input type="text" name="descripcion_producto" placeholder="Descripción del producto" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="date" name="fecha_registro" placeholder="Fecha de registro" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"  />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default ClientForm