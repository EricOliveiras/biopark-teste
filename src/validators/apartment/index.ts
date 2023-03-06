import { body, param } from 'express-validator';
import { messages } from '../errorMessages';
import { HttpException } from '../../errors/HttpException';

export const apartmentValidator = {
  create: [
    body('buildingId')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),

    body('rooms')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('bathrooms')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('parkingSpaces')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('rentAmount')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('squareMeter')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      })
  ],

  update: [
    body('rooms')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('bathrooms')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('parkingSpaces')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number.isInteger(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('rentAmount')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .custom(value => {
        if(!Number(value)) {
          throw new HttpException(400, `${messages.intValue}`);
        }

        return true;
      }),

    body('squareMeter')
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
    param('id')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),
  ],

  idBody: [
    body('id')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),
  ]
};
