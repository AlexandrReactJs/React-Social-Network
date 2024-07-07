import { Formik, Form, Field } from "formik";
import React from "react";
import { Navigate } from "react-router-dom";
import styles from './LoginForm.module.css'
import showPasswordIcon from '../../../assets/images/eye.png'


interface Props {
    userId: number | null;
    isAuth: boolean;
    login: (email: string, password: string, rememberMe: boolean) => void
}



const LoginForm : React.FC<Props> = ({userId, isAuth, login}) => {

    const [showPassword, setShowPassword] = React.useState<boolean>(false)



    if (isAuth) {
        return <Navigate to={'/profile/' + userId} />
    }




    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}

            onSubmit={(values, { setSubmitting }) => {
                login(values.email, values.password, values.rememberMe);
                setSubmitting(false);
            }}
        >

            {({ isSubmitting }) => (
                <div className={styles.login}>

                
                    <Form className={styles.form}>
                        <div className={styles.title}>
                            <h1>Вход</h1>
                        </div>
                        <div className={styles.authData}>
                            <Field className={styles.authData_input} type="email" name="email" />
                            <div className={styles.authData_password__wrapper}>
                                <Field className={styles.authData_input} type={showPassword ? "text" : "password"} name="password" />
                                <img onClick={() => {setShowPassword(!showPassword)}} className={styles.showPassword_icon} src={showPasswordIcon} alt="show password" />
                            </div>

                        </div>
                        <div className={styles.rememberMe}>
                            <Field type="checkbox" name="rememberMe" />
                            <span>Запомнить меня</span>

                        </div>
                        <button className={styles.authorizeBt} type="submit" disabled={isSubmitting}>
                            Войти
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default LoginForm;