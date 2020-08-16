import * as jwt from "jsonwebtoken";
import { default as hasPermissions } from "../../extraTs/utils/permissions";
import configurations from "../../src/config/configuration";
import UserRepository from "../../src/repositories/user/UserRepository";

export const authMiddleWareTrainee = (module, permissionType) => (req, res, next) => {
  let token = req.headers.authorization;
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  // res.send(token);
  if (token) {
    jwt.verify(token, configurations.secretKey, (err, decoded) => {
      if (err) {
        // tslint:disable-next-line: no-console
        console.log(err);
        return res.status(403).json({
          message: "Unauthorized Access",
          success: false,
        });
      } else {
        if (hasPermissions(module, decoded.role, permissionType)) {
          res.send("Successfully Authenticated");
        } else {
          next({
            error: "Authorization  error",
            message: "Not authorized",
            status: 403,
          });
        }
      }
    });
  } else {
    return res.json({
      message: "Auth token is not supplied",
      success: false,
    });
  }
};

export const authMiddleWareUser = () => (req, res, next) => {
  let token = req.headers.authorization;
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  // res.send(token);
  if (token) {
    jwt.verify(token, configurations.secretKey, (err, decoded) => {
      if (err) {
        // tslint:disable-next-line: no-console
        console.log(err);
        return res.status(403).json({
          message: "Unauthorized Access",
          success: false,
        });
      } else {
        const { email } = decoded;

        UserRepository.getUser({ email })
          .then((result) => {
            if (result == null) {
              console.log("Email not exists");
              next(err = {message: "Email does not exists"});
            } else {
              res.user = result;
              console.log(res.user);
              next();
            }
          });
          //   res.user = result;
          //   console.log(res.user);
          // }).catch((err) => {
          //   console.log("Email not exists");
          //   next(err = {message: "Email does not exists"});
          // });
      }
    });
  } else {
    return res.json({
      message: "Auth token is not supplied",
      success: false,
    });
  }
};
