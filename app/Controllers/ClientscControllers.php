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
    public function options()
{
    return $this->response->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
                             ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
                             ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
                             ->setHeader('Access-Control-Allow-Credentials', 'true')
                             ->setStatusCode(200); // Respond with 200 OK
}
}