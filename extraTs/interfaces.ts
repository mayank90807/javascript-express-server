export type IPattern = (size: number) => void;

export interface IUser {
  traineeEmail: string;
  reviewerEmail: string;
}

export type IValidateUsers = (user: IUser[] ) => void;
export type IValidateEmail = (email: string) => boolean;
export type IHasPermission = (moduleName: string, role: string, permissionType: string) => boolean;
