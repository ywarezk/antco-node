/**
 * Will contain our task model
 */

const Model = require('sequelize').Model

module.exports = function (sequelize, DataTypes) {
    class User extends Model {

    }



    User.init({
        firstName: DataTypes.STRING,
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                isProperId: function (value) {
                    // if not passing validation
                    // throw new Error();
                }
            }
        },
        password: DataTypes.VIRTUAL,
        passwordRepeat: DataTypes.VIRTUAL,
        passwordHash: {
            type: DataTypes.STRING
        }
    }, {
            tableName: 'users',
            validate: {
                isPasswordAndRepeatMatch: function () {
                    if (this.password !== this.passwordRepeat) {
                        throw new Error('password and repeat has to match');
                    }
                }
            }
        });

    User.beforeCreate(async function (user) {
        const password = user.get('password'); // user.password;
        // bcrypt
        //user.set('passwordHash', encryptedPassword)
    });

    return User;
}