import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import http from 'http';
import bodyParser from 'body-parser';
import { join } from 'path';
import router from './routes/routes';
import { SwaggerSpecification } from './tools/swagger/swagger.specification';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export class Application {
  private app: express.Application = express();
  private port = process.env.PORT || 3000;
  //public server = http.createServer(this.app);
  private swaggerSpecification = new SwaggerSpecification();
  private specs = swaggerJSDoc(this.swaggerSpecification.options);

  constructor() {
    this.config();
    this.start();
  }

  config() {
    //this.app.use(bodyParser);
    //this.app.use('/static', express.static(join(__dirname, 'public')));
    //this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(json));
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '350mb' }));
    this.app.use('/api', router);
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(this.specs, { explorer: true }),
    );
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server started in http://localhost:${this.port}`);
    });
  }
}

const application = new Application();
