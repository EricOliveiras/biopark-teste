import { body } from 'express-validator';
import { messages } from '../errorMessages';
import { HttpException } from '../../errors/HttpException';

export const buildingValidator = {
  create: [
    body('name')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),

    body('address')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),

    body('numberOfApartments')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      })
  ],

  id: [
    body('id')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),
  ]
};
