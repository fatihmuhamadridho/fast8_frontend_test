import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "antd";

const inputSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Minimum characters are 2")
    .max(50, "Maxsimum characters are 50")
    .required("Required"),
  age: Yup.number().positive().min(1, "Must more than 0"),
  address: Yup.string()
    .min(3, "Minimum characters are 3")
    .max(50, "Maxsimum characters are 50")
    .required("Required"),
});

const FormCore = ({ modalHandleCancel, formHandleSubmit }) => {
  const inputField = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Age",
      name: "age",
      type: "number",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
    },
  ];

  return (
    <Formik
      initialValues={{
        name: "",
        age: 0,
        address: "",
      }}
      validationSchema={inputSchema}
      onSubmit={(values, { resetForm }) => {
        formHandleSubmit(values)
        resetForm()
      }}
    >
      {({ errors, touched, values, resetForm, isSubmitting, submitForm }) => (
        <Form style={{ display: "flex", flexDirection: "column" }}>
          {inputField.map((data, index) => {
            return (
              <div
                style={{
                  marginBottom: "12px",
                  display: "grid",
                  gridTemplateColumns: "100px 70%",
                  justifyContent: "space-between"
                }}
                key={index}
              >
                <label htmlFor="">{data.label}</label>
                <div style={{ width: "100%" }}>
                  <Field
                    style={{ width: "100%", padding: "4px", border: "1px solid black" }}
                    name={data.name}
                    type={data.type}
                  />
                  {errors?.[data.name] && touched?.[data.name] && (
                    <p style={{ margin: 0, color: "red" }}>
                      {errors?.[data.name]}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              style={{
                marginRight: "8px",
              }}
              type="button"
              onClick={(e) => {
                modalHandleCancel(e);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => submitForm()}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormCore;
