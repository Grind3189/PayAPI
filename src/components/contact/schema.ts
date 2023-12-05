import * as yup from "yup"

export const contactFormSchema = yup.object().shape({
    name: yup.string().required("This field can't be empty"),
    email: yup.string().email("Invalid email").required("This field can't be empty"),
    company: yup.string().required("This field can't be empty"),
    title: yup.string().required("This field can't be empty"),
    message: yup.string().required("This field can't be empty")
})