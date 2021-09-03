/* eslint-disable react/jsx-props-no-spreading */
import React, {useState, Fragment} from 'react';
import {Form, FormGroup, FormFeedback, FormText, Row, Col} from 'reactstrap';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import OtpInput from 'react-otp-input';

import {FaFacebookSquare} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';

import {Input, Button, Label} from '../../../cores/components';
import {colors} from '../../../cores/components/varaibles';
import {buttonTexts, labels, errorMessages} from '../../../utils/messages';

import {authLogin} from '../../../cores/services/actions/auth';

const validationSchema = object().shape({
  email: string().trim().email(errorMessages.INVALID_EMAIL).required(errorMessages.EMAIL_REQUIRED),
  password: string().required(errorMessages.PASSWORD_REQUIRED),
  otp: string().required(errorMessages.PASSWORD_REQUIRED),
});

const LoginForm = ({isAuthenticating, doLogin}) => {
  const [errorMessage, setErrorMessage] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isOtpLogin, setOtpLogin] = useState(false);
  const [code, setCode] = useState('');

  const handleChange = code => {
    console.log(code);
    setCode(code);
  };
  const {t} = useTranslation();

  const {replace, push} = useHistory();

  const formSubmitHandler = formData => {
    setHasError(false);
    localStorage.setItem('AUTH_USER', JSON.stringify({...formData}));
    doLogin({...formData})
      .then(res => {
        // const {userType} = res;
        localStorage.setItem('AUTH_USER', JSON.stringify({...res}));
        replace('/otp');
      })
      .catch(err => {
        setHasError(true);
        setErrorMessage({...err});
      });
  };

  const {handleSubmit, getFieldProps, touched, errors} = useFormik({
    initialValues: {
      email: '',
      password: '',
      otp: '',
      rememberMe: false,
    },
    onSubmit: formSubmitHandler,
    validationSchema,
  });

  const moveToSignup = () => {
    push('/signup');
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mt-3">
          <Input
            placeholder={t(`${labels.EMAIL} or ${labels.MOBILE}`)}
            name="email"
            {...getFieldProps('email')}
            invalid={Boolean(touched.email && errors.email)}
          />
          {touched.email && errors.email ? <FormFeedback>{t(errors.email)}</FormFeedback> : null}
        </FormGroup>
        <FormGroup className="mt-3">
          {!isOtpLogin && (
            <Fragment>
              <Input
                placeholder={t(labels.PASSWORD)}
                name="password"
                {...getFieldProps('password')}
                invalid={Boolean(touched.password && errors.password)}
              />
              {touched.password && errors.password ? (
                <FormFeedback>{t(errors.password)}</FormFeedback>
              ) : null}
            </Fragment>
          )}
          {isOtpLogin && (
            <OtpInput
              value={code}
              onChange={handleChange}
              numInputs={6}
              separator={<span style={{width: '8px'}}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                border: `1px solid ${colors.formBorder}`,
                borderRadius: '8px',
                width: '44px',
                height: '44px',
                fontSize: '16px',
                color: `${colors.mainBlack}`,
                fontWeight: '700',
                caretColor: 'red',
              }}
              focusStyle={{
                border: `1px solid ${colors.mainBlue}`,
                outline: 'none',
              }}
            />
          )}
        </FormGroup>
        <Row className="justify-content-between">
          <Col>
            <FormGroup>
              <Button
                size="md"
                bgcolor="transparent"
                className="btn btn-link text-decoration-none border-0 py-2 px-0"
                onClick={() => setOtpLogin(!isOtpLogin)}> 
                {!isOtpLogin ? 'Login with OTP' : 'Login with Password'}
              </Button>
            </FormGroup>
          </Col>
          <Col className="d-flex flex-row justify-content-end">
            <FormGroup>
              <Button
                size="md"
                bgcolor="transparent"
                className="btn btn-link text-decoration-none border-0 py-2 px-0"
                to=" ">
                Forgot password?
              </Button>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="mt-3">
          <Button
            bgcolor={colors.mainBlue}
            type="submit"
            textcolor={colors.mainWhite}
            disabled={isAuthenticating}
            onClick={() => formSubmitHandler}
            className="w-100">
            {isAuthenticating ? t(buttonTexts.WAIT) : t(buttonTexts.CONTINUE)}
          </Button>
        </FormGroup>
        {hasError ? (
          <FormText>
            <p className="text-danger mb-0">{t(errorMessage.error)}</p>
          </FormText>
        ) : (
          ''
        )}
      </Form>
      <div className="dropdown-divider my-3 w-75 m-auto" />
      <Row className="mt-3">
        <Col xs="12" md="6">
          <FormGroup className="mb-3">
            <Button bgcolor={colors.mainWhite} className="w-100">
              <FcGoogle size="2em" />
            </Button>
          </FormGroup>
        </Col>
        <Col xs="12" md="6">
          <FormGroup>
            <Button textcolor={colors.primary} bgcolor={colors.mainWhite} className="w-100">
              <FaFacebookSquare size="2em" />
            </Button>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <Label className="mb-2">{`${t(labels.NEW_MEMBER)} ?`}</Label>
          <Button
            textcolor={colors.mainWhite}
            bgcolor={colors.mainBlue}
            className="w-100"
            onClick={() => moveToSignup()}>
            {t(buttonTexts.SINGUP)}
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};
LoginForm.propTypes = {
  isAuthenticating: PropTypes.bool,
  doLogin: PropTypes.func,
};

LoginForm.defaultProps = {
  isAuthenticating: false,
  doLogin: () => {},
};

const mapStateToProps = ({authReducer: {isAuthenticating}}) => ({
  isAuthenticating,
});

const mapDispatchToProps = {
  doLogin: payload => authLogin(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
