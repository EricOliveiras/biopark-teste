import { body } from 'express-validator';
import { messages } from '../errorMessages';

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
      .isInt().withMessage(messages.intValue)
  ],

  id: [
    body('id')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),
  ]
};
