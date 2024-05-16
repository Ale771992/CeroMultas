<?php

namespace App\Middleware;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Middleware\BaseMiddleware;

class CORSMiddleware extends BaseMiddleware
{
    public function handle(RequestInterface $request, \Closure $next)
    {
        // Headers para permitir solicitudes CORS desde http://localhost:3000
        $response = $next($request)
            ->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
            ->setHeader('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}
