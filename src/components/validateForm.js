import React, { useCallback, useState } from "react";
import { emailRegex, nameRegex } from "../context/regex";
import { CurrentUserContext } from "../context/CurrentUserContext";

//хук управления формой
// export function useForm() {
//     const [values, setValues] = React.useState({});

//     const handleChange = (event) => {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         setValues({ ...values, [name]: value });
//     };

//     return { values, handleChange, setValues };
// }

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [apiError, setApiError] = useState(true);

    const currentUser = React.useContext(CurrentUserContext);

    const setIsValidFoo = (value) => {
        setIsValid(value)
    }

    const setValuesFoo = () => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        });
    }

    const setApiErrorFoo = (value) => {
        setApiError(value);
    };

    const validateName = (name) => {
        return nameRegex.test(name);
    };

    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues((prevValues) => {
            setApiError(false);
            const updatedValues = { ...prevValues, [name]: value };

            // Проверяем валидность всех полей, включая текущее поле
            const isFormValid = Object.keys(updatedValues).every((fieldName) => {
                if (fieldName === 'name') {
                    return validateName(updatedValues[fieldName]);
                } else if (fieldName === 'email') {
                    return validateEmail(updatedValues[fieldName]);
                }
                // Другие поля валидны по умолчанию
                return true;
            });

            // Проверяем, были ли внесены изменения в поля и хотя бы одно поле валидно
            const isDataChanged = currentUser.name !== updatedValues.name || currentUser.email !== updatedValues.email;
            const isValidAndChanged = isFormValid && isDataChanged;
            
            setIsValid(isValidAndChanged && target.closest("form").checkValidity());

            return updatedValues; // Возвращаем обновленные значения
        });

        if (name === 'name') {
            if (!validateName(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Введите корректное имя' }));
                setIsValid(false);
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: target.validationMessage }));
            }
        } else if (name === 'email') {
            if (!validateEmail(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Введите корректный email' }));
                setIsValid(false);
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
            }
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: target.validationMessage }));
        }
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm, apiError, setApiErrorFoo, setValuesFoo, setIsValidFoo };
}
