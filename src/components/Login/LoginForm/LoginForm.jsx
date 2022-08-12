import { Formik, Form, Field } from "formik";
import React from "react";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    if(props.isAuth){
        return <Navigate to={'/profile/' + props.userId}/>
    }
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}

            onSubmit={(values, { setSubmitting }) => {
                props.loginThunkCreator(values.email, values.password, values.rememberMe);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <Field type="password" name="password" />
                    <p>Remember me</p>
                    <Field type="checkbox" name="rememberMe"/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;