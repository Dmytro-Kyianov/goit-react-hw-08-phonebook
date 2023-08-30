import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  FormWrap,
  InputWrap,
  BtnWrap,
  InputTitle,
  Input,
} from '../AuthStyles/AuthStyles.styled';
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

Notify.init({
  width: '300px',
  position: 'right-top',
  closeButton: false,
  timeout: 2500,
});

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const { error } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div>
      {error !== 'Valid token does not exist' && Notify.warning(error)}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <FormWrap>
            <InputWrap>
              <InputTitle htmlFor="email">Email</InputTitle>
              <Input id="email" name="email" autoComplete="off" type="email" />
            </InputWrap>

            <ErrorMessage name="email">
              {msg => Notify.warning(msg)}
            </ErrorMessage>
            <InputWrap>
              <InputTitle htmlFor="password">Password</InputTitle>
              <Input
                id="password"
                name="password"
                autoComplete="off"
                type="password"
              />
            </InputWrap>
            <ErrorMessage name="password">
              {msg => Notify.failure(msg)}
            </ErrorMessage>
            <div>
              <BtnWrap type="submit">Submit</BtnWrap>
            </div>
          </FormWrap>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;