<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateClientesTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'nombre_empresa' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'nombre_contacto' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'correo_electronico' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'logotipo' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'descripcion_producto' => [
                'type' => 'TEXT',
            ],
            'fecha_registro' => [
                'type' => 'DATE',
            ],
            'estado_id' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => true,
            ],
        ]);

        $this->forge->addKey('id', true);
        $this->forge->addForeignKey('estado_id','estados','id','CASCADE','CASCADE');
        $this->forge->createTable('clientes');
    }

    public function down()
    {
        $this->forge->dropTable('clientes');
    }
}