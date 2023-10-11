const schemaGetAllStay = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 1,
    },
    título: {
      type: 'string',
      example: 'Villa con Vista al Océano',
    },
    descripción: {
      type: 'Villa lujosa con impresionantes vistas al océano',
      example: 1,
    },
    precio: {
      type: 'integer',
      example: 500,
    },
    capacidad: {
      type: 'integer',
      example: 8,
    },
    imagen: {
      type: 'array',
      items: {
        type: 'string',
      },
      example: [
        'https://picsum.photos/id/1/300/300',
        'https://picsum.photos/id/2/300/300',
        'https://picsum.photos/id/3/300/300',
      ],
    },
  },
};

export const configComponents = {
  components: {
    schemas: {
      getAllStay: schemaGetAllStay,
    },
  },
};