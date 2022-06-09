import { response } from 'express';

export class RecordNotFoundException {
  constructor(private message: string = '') {}

  getMessage() {
    if (this.message === '') {
      this.message = 'Record Not Found';
    }
    return this.message;
  }

  getResponse() {
    return (response.status(404).statusMessage = this.getMessage());
  }

  recordNotFoundException = new RecordNotFoundException().getMessage();
}
