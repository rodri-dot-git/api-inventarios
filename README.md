# API Inventarios

In this API we fetch and post data to make inventory on multiple warehouses and dates.

## Getting Started

To test the API you can go to the link in description or copy the project.

### Prerequisites

To be able to run this project you need:

```
Node.JS
MongoDB
```

### Installing

Download the project and place on preferred directory
Initialize project with:

```
npm i
```

### Running the server

Run the project with:

```
npm start
```

## Examples
For more information go to the API playground

### Queries

```
query Inventario($inv: String!){
  entradaInventario(inventario: $inv){
    __typename,
    cantidad,
    idArticulo{
      nombre,
      codigo
    }
  }
  inventario(inventario: $inv){
    nombre,
    almacen{
      nombre
    }
  }
}
```

### Mutations

```
mutation EntradaInventario($inv: String!, $art: String!){
  addEntradaInventario(cantidad: 22, idInventario: $inv, idArticulo: $art){
    id
  }
}
```

## Built With

* [ApolloServer](https://www.apollographql.com/docs/apollo-server/) - The framework used
* [GraphQL](https://graphql.org) - Query language used
* [NodeJS](https://nodejs.org) - Runtime environment
* [MongoDB](https://www.mongodb.com) - Database engine

* **Rodrigo de Leon** - [rodri-dot-git](https://github.com/rodri-dot-git)

## Acknowledgments

* https://stackoverflow.com/questions/58148448/nested-mongoose-queries-data-not-showing-on-graphql-query/58149233?noredirect=1#comment102721437_58149233
