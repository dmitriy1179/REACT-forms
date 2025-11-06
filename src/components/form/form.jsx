import React from 'react';
import { useFormik } from 'formik';
import styles from "./form.module.css";

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 4) {
    errors.name = "Username must be at least 4 characters long";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^(\+380)[0-9]{9}$/.test(values.phone)) {
    errors.phone = "Phone must be in the format +380";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 10) {
    errors.message = "The message must contain at least 10 characters";
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      notification: true,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [focused, setFocused] = React.useState(null);

  const handleFocus = (e) => {
    setFocused(e.target.name);
  }
  
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.form__item}>
        <input
          id={styles.name}
          className={`${styles.form__input} ${focused === "name" ? styles.focused : ''} ${formik.touched.name && formik.errors.name ? styles.errors : ''}`}
          name="name"
          type="text"
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={(e) => {
            formik.handleBlur(e);
            setFocused(null);
          }}
          value={formik.values.name}
          placeholder="Name"
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className={styles.form__item}>
        <input
          id={styles.email}
          className={`${styles.form__input} ${focused === "email" ? styles.focused : ''} ${formik.touched.email && formik.errors.email ? styles.errors : ''}`}
          name="email"
          type="email"
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={(e) => {
            formik.handleBlur(e);
            setFocused(null);
          }}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className={styles.form__item}>
        <input
          id={styles.phone}
          className={`${styles.form__input} ${focused === "phone" ? styles.focused : ''} ${formik.touched.phone && formik.errors.phone ? styles.errors : ''}`}
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={(e) => {
            formik.handleBlur(e);
            setFocused(null);
          }}
          value={formik.values.phone}
          placeholder="Phone (in the format +380)"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className={styles.form__item}>
        <input
          id={styles.message}
          className={`${styles.form__input} ${focused === "message" ? styles.focused : ''} ${formik.touched.message && formik.errors.message ? styles.errors : ''}`}
          name="message"
          type="text"
          onChange={formik.handleChange}
          onFocus={handleFocus}
          onBlur={(e) => {
            formik.handleBlur(e);
            setFocused(null);
          }}
          value={formik.values.message}
          placeholder="Message"
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
      </div>

      <div className={styles.form__item}>
        <label>
          <input
            type="checkbox"
            name="notification"
            onChange={formik.handleChange}
            id={styles.notification}
            value={formik.values.notification}
            checked={formik.values.notification}
            hidden
          />
          <span>Send me updates about the academy</span>
        </label>
      </div>

      <button className={styles.form__button} type="submit">Submit</button>
    </form>
  );
};

export default Form;