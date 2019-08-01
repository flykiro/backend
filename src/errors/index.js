export class ExternalServicesError extends Error {
  constructor(message) {
    super(message);
    this.code = 3123;
  }
}
