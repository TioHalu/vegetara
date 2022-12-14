import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ButtonFilled, TextInput, Footer, ModalExpired } from '../../components/elements';
import { ROUTES, API } from '../../configs';
import axios from 'axios';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { registerSchema } from '../../utils/schemas';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
      phone: '',
      hintUsername: false,
      hintPassword: false,
      hintName: false,
      hintEmail: false,
      hintPhone: false,
      error: false,
      errorMessage: ''
    };
  }

  handleRegister = (values) => {
    const { username, password, name, email, phone } = values
    const body = {
      "userName": username,
      "password": password,
      "name": name,
      "email": email,
      "phoneNumber": phone
    }
    axios.post(API.register, body, API.headerRegister)
      .then((res) => {window.location.href = ROUTES.LOGIN() })
      .catch((err) => {
        const { response } = err;
        console.log(response, err)
        this.setState({ error: true, errorMessage: response.data });
      }
      );
  }

  handleCloseModal = () => this.setState({ error: false, errorMessage: '' })
  renderModal = () => {
    const { error, errorMessage } = this.state;
    return (
      <ModalExpired
        open={error}
        message={errorMessage}
        onClose={this.handleCloseModal}
      />
    );
  }
  handleFocus = (field) => this.setState(prevState => ({ [field]: !prevState[field] }))
  renderFormRegister = ({ values, errors, touched, handleChange: _handleChange, handleBlur: _handleBlur, handleSubmit: handleRegister, isSubmitting }) => {
    const { hintUsername, hintPassword, hintName, hintEmail, hintPhone } = this.state;
    return (
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <TextInput
            name="name"
            label="Nama"
            value={values.name}
            onChange={_handleChange}
            onBlur={_handleBlur}
            hint={hintName && !touched.name && ('Contoh: Loken Hong')}
            hinterror={touched.name && errors.name}
            type="text"
            onFocus={this.handleFocus.bind(this, 'hintUsername')}
            />
          <TextInput
            name="email"
            label="Email"
            value={values.email}
            onChange={_handleChange}
            onBlur={_handleBlur}
            hint={hintEmail && !touched.email && ('Contoh: jhoni@gmail.com')}
            hinterror={(touched.email && errors.email)}
            type="text"
            onFocus={this.handleFocus.bind(this, 'hintEmail')}
          />
          
          <TextInput
            name="username"
            label="Username"
            value={values.username}
            onChange={_handleChange}
            onBlur={_handleBlur}
            hint={hintUsername && !touched.username && ('Contoh: lokenHong')}
            hinterror={(touched.username && errors.username)}
            type="text"
            onFocus={this.handleFocus.bind(this, 'hintUsername')}
          />
          <TextInput
            name="phone"
            label="Nomor Telepon"
            value={values.phone}
            onChange={_handleChange}
            onBlur={_handleBlur}
            hint={hintPhone && !touched.phone && ('Contoh: 0812345xxxxx')}
            hinterror={(touched.phone && errors.phone)}
            type="text"
            onFocus={this.handleFocus.bind(this, 'hintPhone')}
          />
          <TextInput
            name="password"
            label="Password"
            value={values.password}
            onChange={_handleChange}
            onBlur={_handleBlur}
            hint={!touched.password && hintPassword && ('Sandi setidaknya terdiri dari 8 karakter alfanumerik')}
            hinterror={(touched.password && errors.password)}
            type="password"
            onFocus={this.handleFocus.bind(this, 'hintPassword')}
          />
          <div className="buttonWrapper">
            <ButtonFilled type="submit" disabled={isSubmitting} >
              Daftar
            </ButtonFilled>
          </div>
          <div className="registerWrapper">
            <p className="registerText">Sudah punya akun?</p>
            <Link to={ROUTES.LOGIN()} className="registerLink">Login</Link>
          </div>
        </div>
      </form>
    );
  }

  render() {
    const { classes } = this.props;
    const { username, password, email, phone, name } = this.state;
    const initialValues = { username, password, email, phone, name };
    return (
      <div className={classes.container}>
        <CssBaseline />
        <div className={classes.cardRegister}>
          <div className="cardRegisterHeader">
            <Link to={ROUTES.LANDING_PAGE()} className="backButton">
              <ArrowBackIcon />
            </Link>
            <h1>Daftar</h1>
          </div>
          <div className="cardRegisterBody">
            <Formik
              initialValues={initialValues}
              component={this.renderFormRegister}
              validationSchema={registerSchema}
              onSubmit={this.handleRegister}
            />
          </div>
          {this.renderModal()}
        </div>
        <Footer />
      </div>
    );
  }
}