/**
 * @name websocketService
 * @author Massih Hazrati
 * @contributors []
 * @since 10/15/2015
 * @copyright Binary Ltd
 * Handles websocket functionalities
 */

angular
    .module("binary")
    .factory(
        "validationService",
        ($state) => {
            const validationService = {};
            const validateGeneralRegex = /[`~!@#$%^&*)(_=+[}{\]\\/";:?><|]+/;
            const validateAddressRegex = /[`~!$%^&*_=+[}{\]\\"?><|]+/;
            const validatePostcodeRegex = /^([a-zA-Z\d-\s])*$/;
            const validatePhoneRegex = /^\+?[0-9\s]*$/;
            const validateTaxIdentificationNumberRegex = /^[\w-]{0,20}$/;

            const validator = (val, regexPattern, reverse) => {
                return {
                    test(val) {
                        return reverse ? !regexPattern.test(val) : regexPattern.test(val);
                    }
                }
            };


            validationService.validateGeneral = (val => validator(val, validateGeneralRegex, true))();
            validationService.validateAddress = (val => validator(val, validateAddressRegex, true))();
            validationService.validatePostcode = (val => validator(val, validatePostcodeRegex))();
            validationService.validatePhone = (val => validator(val, validatePhoneRegex))();
            validationService.validateTaxIdentificationNumber = (val => validator(val, validateTaxIdentificationNumberRegex))();

            validationService.length = {
                name: {
                    min: 2,
                    max: 30,
                },
                tin: {
                    max: 20,
                },
                address: {
                    max: 70,
                },
                city: {
                    max: 35,
                },
                postcode: {
                    max: 20,
                },
                phone: {
                    min: 6,
                    max: 35
                },
                secret_answer: {
                    min: 4,
                    max: 50
                }
            }

            return validationService;
        }
);
