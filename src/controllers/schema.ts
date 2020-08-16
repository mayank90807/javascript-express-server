export default {
  create: {
    email: {
      in: ["body", "params"],
      isEmail: {
        errorMessage: "Should be a email ",
        negated: false,
      },
      isEmpty: {
        errorMessage: "Id is Required",
        negated: true,
      },
    },
    id: {
      in: ["body", "params"],
      isEmpty: {
        errorMessage: "Id is Required",
        negated: false,
      },
    },
    name: {
      in: ["body", "params"],
      isEmpty: {
        errorMessage: "Name is Required",
        negated: true,
      },
      isLength: {
        errorMessage: "Name should be of minimum 3 characters",
        options: {min: 3},
      },
    },
    password: {
      in: ["body", "params"],
      isEmpty: {
        errorMessage: "Password is Required",
        negated: true,
      },
      isLength: {
        errorMessage: "Password should be of minimum 3 characters",
        options: {min: 3},
      },
    },
    state: {
      in: ["body", "params"],
      isEmpty: {
        errorMessage: "State is Required",
        negated: true,
      },
      isLength: {
        errorMessage: "State should be of minimum 2 characters",
        options: {min: 2},
      },
    },
  },
  delete: {
    id: {
      in: ["body", "params"],
      isEmpty: {
        errorMessage: "Id is Required",
        negated: true,
      },
    },
  },
  get: {
    email: {
      in: ["body", "params"],
      isEmail: {
        errorMessage: "Should be a email ",
        negated: false,
      },
      isEmpty: {
        errorMessage: "Id is Required",
        negated: true,
      },
    },
    password: {
      in: ["body", "params"],
      isEmpty: {
        errorMessage: "Password is Required",
        negated: true,
      },
      isLength: {
        errorMessage: "Password should be of minimum 3 characters",
        options: {min: 3},
      },
    },
    // limit: {
      // customSanitizer: {
      //   options: (value) => {
      //     let defaultValue;
      //     if (value) {
      //       defaultValue = value;
      //     } else {
      //       defaultValue = 0;
      //     }
      //     return defaultValue;
      //   },
      // },
      // in: ["query"],
      // isNumeric: {
      //   errorMessage: "should be a number",
      //   negated: false,
      // },
  //   skip: {
  //     customSanitizer: {
  //       options: (value) => {
  //         let defaultValue;
  //         if (value) {
  //           defaultValue = value;
  //         } else {
  //           defaultValue = 0;
  //         }
  //         return defaultValue;
  //       },
  //     },
  //     in: ["query"],
  //     isNumeric: {
  //       errorMessage: "should be a number",
  //       negated: false,
  //     },
  //   },
  // },
  },
  update: {
    custom: {
// tslint:disable-next-line: no-empty
    },
    dataToUpdate: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Id is Required",
        negated: true,
      },
    },
    id: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Id is Required",
        negated: true,
      },
      isString: {
        errorMessage: "Id should be a string",
        negated: false,
      },
    },
  },
};
