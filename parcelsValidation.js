import { isEmpty, isInteger } from './UT/validator';

export const createParcelValidator = (data) => {
  const errors = {};
  data.weight = !isEmpty(data.weight) ? parseInt(data.weight, 10) : null;
  data.quantity = !isEmpty(data.quantity) ? parseInt(data.quantity, 10) : null;

  if (isEmpty(data.collectionlocation)) {
    errors.collectionlocation= 'Please enter your Collection Location';
  }
  if (isEmpty(data.deliverylocation)) {
    errors.deliverylocation = 'Please enter your Delivery Location';
  }
  if (!isInteger(data.weight)) {
    errors.quantity = 'please enter a positive weight';
  }
  if (isEmpty(data.weight)) {
    errors.quantity = 'Quantity is required';
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
