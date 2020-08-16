let permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],

    delete: []
  }
};

export function hasPermission(moduleName, role, permissionType) {
  if (!permissions.hasOwnProperty(moduleName)) {
    return false;
  }

  if (
    permissions[moduleName].hasOwnProperty("all") &&
    permissions[moduleName]["all"].includes(role)
  ) {
    return true;
  }

  return (
    permissions[moduleName].hasOwnProperty(permissionType) &&
    permissions[moduleName][permissionType].includes(role)
  );
}