const defaultHandler = (name:string, err: Error) => `Catched ${name}: ${err.message}`;

const errorHandler = (err: Error) => defaultHandler('Error', err);

const appErrorHandler = (err: Error) => defaultHandler('AppError', err);

const customErrorHandler = (err: Error) => defaultHandler('CustomError', err);

export {
  errorHandler,
  appErrorHandler,
  customErrorHandler,
};
