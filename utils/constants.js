const ROLES = {
    USER: 'USER',
    ADMIN: 'ADMIN',

};
const GENDER = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',

};
const ACTION = {
    CREATE: 'POST',
    READ: 'GET',
    UPDATE: 'PUT',
    DELETE: 'DELETE',
};
const REGEXP = {
    name: /^[A-Z][a-z]*$/,
    password: /(?!.*?\s)(?=.*?[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=^\w{8,100}$)/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

};

module.exports = {
    ROLES,
    GENDER,
    ACTION,
    REGEXP,
};