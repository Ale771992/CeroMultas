<?php namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class ClientsController extends ResourceController
{
    public function create()
    {
        // Get the incoming data
        $data = $this->request->getPost();

        // Save the data to the database...

        // Return a response
        return $this->respondCreated($data);
    }
}