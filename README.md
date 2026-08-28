## Rick and Morty API ##

Aplicación web full stack inspirada en el universo de Rick and Morty donde los usuarios pueden consultar el catálogo de personajes, realizar búsquedas por nombre o ID, aplicar filtros por estado y especie, y gestionar sus personajes favoritos en tiempo real.

Proyecto desarrollado con Angular, Express y MongoDB Atlas desplegado en Render.

---

## Producción

Frontend:
https://rick-morty-ltb8.onrender.com

Backend:
https://rick-morty-bk.onrender.com

---

## Tecnologías Utilizadas
Frontend
- Angular 19+
- Angular Material
- CSS3
- HttpClient (Consumo de APIs)

Backend
- Node.js
- Express
- REST API

Base de Datos
- MongoDB Atlas (Cloud Database)
- Mongoose (ODM)

Deploy
- Render (Frontend y Backend)

---

## Funcionalidades

Personajes
- Listado de personajes consumido desde la API pública de Rick and Morty.
- Búsqueda dinámica en tiempo real por nombre o ID.
- Filtros combinados por estado y especie.

Sistema de Favoritos
- Agregar y eliminar personajes de la lista de favoritos.
- Persistencia de datos mediante backend propio conectado a MongoDB Atlas.

---

## Arquitectura

El Frontend consume la API pública de Rick and Morty para los personajes y se comunica con la API REST personalizada para la gestión de favoritos.
El Backend maneja las rutas de la API controlando peticiones GET, POST y DELETE.
MongoDB Atlas gestiona el almacenamiento y persistencia de los datos en la nube.

---

## Objetivo del Proyecto

Este proyecto fue desarrollado en base a la Prueba Técnica con el objetivo de demostrar conocimientos fundamentales de desarrollo, capacidad para resolver problemas y criterio técnico.

Consumo de API: Integración con la API pública de Rick and Morty:
- Listar personajes.
- Buscar personajes.
- Filtrar personajes.
- Ver el detalle de un personaje.
- Favoritos.

---

## Autor

Desarrollado por Iván Santiago Valencia Hernández
Full Stack Developer Junior
