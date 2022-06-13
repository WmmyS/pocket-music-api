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
      components: {
        schemas: {},
        securitySchemes: {
          Bearer: {
            type: 'http',
            description: 'Enter JWT Bearer token **_only_**',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          Bearer: [],
        },
      ],
      servers: [
        {
          url: 'http://localhost:3000/api',
        },
      ],
    },
    apis: ['./src/**/*.ts'],
    controllers: ['./src/controllers/*.ts'],
  };
}
