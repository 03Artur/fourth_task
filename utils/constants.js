/**
 * @enum {string}
 * */
const ROLES = {
    USER: 'USER',
    ADMIN: 'ADMIN',
};
/**
 * @enum {string}
 * */
const GENDER = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',

};
/**
 * @enum {string}
 * */
const ACTION = {
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
};

const REGEXP = {
    name: /^[A-Z][a-z]*$/,
    password: /(?!.*?\s)(?=.*?[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=^\w{8,100}$)/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

const SALT = 'This_is_the_best_salt_of_the_whole_word';
const SALT_ROUND = 10;

module.exports = {
    ROLES,
    GENDER,
    ACTION,
    REGEXP,
    SALT,
    SALT_ROUND,
};