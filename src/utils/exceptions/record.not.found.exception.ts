import { response } from 'express';

export class RecordNotFoundException {
  constructor(private message: string = '') {}

  private getMessage() {
    if (this.message === '') {
      this.message = 'Record Not Found';
    }
    return this.message;
  }

  public getResponse() {
    return response.status(404).json(this.getMessage());
  }
}
