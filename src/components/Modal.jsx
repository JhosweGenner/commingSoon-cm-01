import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import React, { useState } from "react";

const Modal = ({ children, toggleModal, show }) => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        surname: "",
      },
      validationSchema: basicSchema,
      onSubmit: async (values, actions) => {
        setSubmitting(true);
        try {
          // Aquí podrías agregar el código para hacer la llamada a una API o procesar los datos enviados
          await new Promise((resolve) => setTimeout(resolve, 3000));

          // Mostrar un mensaje de éxito al usuario
          setError(null);

          // Resetea el formulario
          actions.resetForm();

          // Cierra el modal
          toggleModal();
        } catch (err) {
          // Mostrar un mensaje de error al usuario
          setError(err);

          // También podrías registrar el error en un servicio de logging
          console.error(err);
        } finally {
          setSubmitting(false);
        }
      },
    });

  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#1d2b3a] p-8 flex justify-center items-center z-[3]">
        <div className="modal-content">
          {children}
          <h5 onClick={toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </h5>
          <h3>Ingresa tu correo electrónico</h3>
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              type="text"
              required="required"
              className="mb-10"
            />
            {errors.name && touched.name && (
              <p className="error lg:top-[9rem] top-[9rem]">{errors.name}</p>
            )}
            <span className="name">Nombre</span>
            <input
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
              id="surname"
              type="text"
              required="required"
              className="mb-10"
            />
            {errors.surname && touched.surname && (
              <p className="error lg:top-[15rem] top-[15rem]">
                {errors.surname}
              </p>
            )}
            <span className="surname">Apellido</span>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              type="text"
              required="required"
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
            <span className="email">Correo Electrónico</span>
            <div>
              <a href="#" className="btn2">
                <button type="submit">
                  <span>Enviar</span>
                  <i></i>
                </button>
              </a>
            </div>
            {submitting && !error && (
              <p className="success">
                El correo electrónico ha sido registrado con éxito
              </p>
            )}
            {error && (
              <p className="error">
                Ha ocurrido un error al enviar el correo electrónico
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
