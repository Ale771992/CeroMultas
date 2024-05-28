<?php namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\ResponseInterface;

class ClientController extends ResourceController
{
    public function create()
    {
        // Set the CORS headers
        $this->response->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
                       ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
                       ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
                       ->setHeader('Access-Control-Allow-Credentials', 'true');
        // Get the incoming data
        $data = $this->request->getPost();

        // Load the model
        $clientModel = new \App\Models\ClientModel();

        // Save the data to the database...
        try {
            $clientModel->insert($data);
            // Return a response
            return $this->respondCreated($data);
        } catch (\Exception $e) {
            // Log the error message 
            log_message('error', $e->getMessage());
            // Return a response with a 500 status code
            return $this->respond(['error' => $e->getMessage()], 500);
        }
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