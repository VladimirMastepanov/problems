/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  errorHandler,
  appErrorHandler,
  customErrorHandler,
} from './handlers';

import AppError from './errors/AppError';
import CustomError from './errors/CustomError';

// BEGIN (write your solution here)

function errorCatcher(error: Error): string;
function errorCatcher(error: AppError): string;
function errorCatcher(error: CustomError): string;

function errorCatcher(error: any): string {
  if (error instanceof AppError) {
    return appErrorHandler(error);
  }
  
  if (error instanceof CustomError) {
    return customErrorHandler(error);
  }
  
  if (error instanceof Error) {
    return errorHandler(error);
  }
  
  throw error;
}

export default errorCatcher;
