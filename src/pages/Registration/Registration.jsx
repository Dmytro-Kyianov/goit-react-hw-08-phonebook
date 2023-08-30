import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useAuth } from 'hooks/useAuth';

import {
  FormWrap,
  InputWrap,
  BtnWrap,
  InputTitle,
  Input,
} from '../AuthStyles/AuthStyles.styled';

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

Notify.init({
  width: '300px',
  position: 'right-top',
  closeButton: false,
  timeout: 2500,
});

const Registration = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const { error } = useAuth();

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
              <InputTitle htmlFor="name"> Name</InputTitle>
              <Input id="name" name="name" autoComplete="off" type="text" />
            </InputWrap>
            <ErrorMessage name="name">
              {msg => Notify.warning(msg)}
            </ErrorMessage>
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
              {msg => Notify.warning(msg)}
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

export default Registration;