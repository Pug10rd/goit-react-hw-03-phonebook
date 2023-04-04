import { ErrorMessage, Field, Form, Formik } from 'formik';

import PropTypes from 'prop-types';
export function ContactForm({addContact}) {
  const initialValues = {
      name: '',
      number: ''
  };

  const handleSubmit = (values, {resetForm}) => {
      addContact(values);
      resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};