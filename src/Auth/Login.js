import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Toast } from 'primereact/toast';

const Login = () => {
  const toast = useRef(null);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password too short')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('Login data:', values);
      toast.current.show({
        severity: 'success',
        summary: `Success!`,
        detail: 'Login successfully',
        life: '2500',
      });
    },
  });

  return (
    <div className="grid mx-0 mt-0">
      <Toast ref={toast} />
      <div className="col-12 md:col-6 md:col-offset-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid mx-0">
            <div className="col-12">
              <h2>Login</h2>
            </div>
            <div className="col-12">
              <label htmlFor="username">Email/Mobile</label>
              <InputText
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full"
              />

              {formik.touched.email && formik.errors.email && (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
              )}
            </div>

            <div className="col-12">
              <label htmlFor="password">Password</label>
              <InputText
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full"
              />

              {formik.touched.password && formik.errors.password && (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
              )}
            </div>
            <div className="col-12">
              <Button type="submit" disabled={formik.isSubmitting}>
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
