import express from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import router from './routes/routes';
import { SwaggerSpecification } from './tools/swagger/swagger.specification';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export class Application {
  private app: express.Application = express();
  private port = process.env.PORT || 3000;
  private swaggerSpecification = new SwaggerSpecification();
  private specs = swaggerJSDoc(this.swaggerSpecification.options);

  constructor() {
    this.config();
    this.start();
  }

  config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '350mb' }));
    this.app.use(router);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(this.specs, { explorer: true }));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server started in http://localhost:${this.port}`);
    });
  }
}

new Application();
