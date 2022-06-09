export class SwaggerSpecification {
  public options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Pocket Music',
        version: '1.0.0',
        description: 'API Music',
        license: {
          name: 'MIT',
          url: 'https://choosealicense.com/licenses/mit/',
        },
      },
      servers: [
        {
          url: 'http://localhost:3000/index',
        },
      ],
    },
    apis: ['./routes/*.ts'],
    controllers: ['src/controllers/*.ts'],
  };
}
