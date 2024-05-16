<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateEstadosTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'          => [
                'type'           => 'INT',
                'constraint'     => 5,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'estado'       => [
                'type'       => 'VARCHAR',
                'constraint' => '100',
            ],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('estados');
    }

    public function down()
    {
        $this->forge->dropTable('estados');
    }
}