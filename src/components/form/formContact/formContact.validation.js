import * as yup from "yup";

import {
    MESSAGE_REQUIRED,
    MESSAGE_TELEPHONE_INVALID,
    MESSAGE_EMAIL_INVALID,
    REGEX_TELEPHONE,
    REGEX_EMAIL,
} from "../../../constants/regexPattern";

const validationSchema = yup.object({
    fullname: yup
        .string("Ingresa tu nombre y apellido")
        .min(3, "Ingresa un nombre y apellido que tenga entre 3 y 25 carateres")
        .required(MESSAGE_REQUIRED),
    telephone: yup
        .string("Ingresa tu teléfono")
        .matches(REGEX_TELEPHONE, MESSAGE_TELEPHONE_INVALID)
        .required(MESSAGE_REQUIRED),
    email: yup
        .string("Ingresa tu email")
        .matches(REGEX_EMAIL, MESSAGE_EMAIL_INVALID)
        .required(MESSAGE_REQUIRED),
    consult: yup
        .string("Ingresa tu consulta")
        .min(15, "Ingresa una consulta que tenga entre 15 y 50 carateres"),
});

export default validationSchema;