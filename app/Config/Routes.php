<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->options('api/clients', 'ClientController::options');
$routes->post('api/clients', 'ClientController::create');

