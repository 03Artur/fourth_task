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
const URL = {
    DB: 'mongodb://localhost/',
};
const PORT = process.env.PORT || 3000;


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

const DBNAME = 'developer_db';

const REGEXP = {
    name: /^[A-Z][a-z]*$/,
    password: /(?!.*?\s)(?=.*?[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=^\w{8,100}$)/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

const SALT_ROUND = 10;

module.exports = {
    ROLES,
    GENDER,
    ACTION,
    REGEXP,
    SALT_ROUND,
    URL,
    DBNAME,
    PORT,
};