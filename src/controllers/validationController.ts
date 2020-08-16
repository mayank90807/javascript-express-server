import * as express from "express";
import { checkSchema, validationResult } from "express-validator/check";

export const validationController = (schema) => {
  return [
    checkSchema(schema),
    (req, res, next) => {
      const errors = validationResult(req);
      console.log( errors.array());
      if (!errors.isEmpty()) {
        return next({Errors : errors.array()});
      }
      next();
    },
  ];
};
