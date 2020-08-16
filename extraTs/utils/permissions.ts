import * as constants from "./../constants";
import { IHasPermission } from "./../interfaces";
let hasPermission: IHasPermission;
const permissions = {
  [constants.MODULE_USER]: {
    [constants.PERMISSION_ALL]: [constants.ROLL_OF_HEAD_TRAINER],
    [constants.PERMISSION_READ]: [constants.ROLE_OF_TRAINEE, constants.ROLE_OF_TRAINER],

    [constants.PERMISSION_DELETE]: [],
  },
};

export default hasPermission = (moduleName, role, permissionType) => {
  if (!permissions.hasOwnProperty(moduleName)) {
    return false;
  }

  if (
    permissions[moduleName].hasOwnProperty("all") &&
    permissions[moduleName].all.includes(role)
  ) {
    return true;
  }

  return (
    permissions[moduleName].hasOwnProperty(permissionType) &&
    permissions[moduleName][permissionType].includes(role)
  );
};
