import { IValidateEmail } from "./../interfaces";
let validateEmail: IValidateEmail;
export default validateEmail = (email) => {
    return /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/.test(email);
};
