<?php namespace App\Models;

use CodeIgniter\Model;

class ClientModel extends Model
{
    protected $table = 'clientes'; // the name of your clients table in the database

    protected $allowedFields = ['id', 'nombre_empresa','nombre_contacto', 'correo_electronico', 'logotipo', 'descripcion_producto', 'fecha_registro', 'estado_id']; // the fields that can be inserted or updated
}