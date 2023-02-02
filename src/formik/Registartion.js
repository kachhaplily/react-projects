import React, { useState } from 'react'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegDataDisplay from './RegDataDisplay';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Registartion = () => {
    const [data, setdata] = useState('')
    let myHobbies = ['music', 'cricket', 'football'];
    let education = ["school", "diploma", "graduated"];
    let cities = ["Udaipur", "Vadodara", "Pune", "Gunagradh", "Gandi Nagar"];
    let states = ["Rajsthan", "Gujrat", "UP", "MP", "Maharatra"];


    const regSchema = yup.object().shape({
        Firstname: yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your First Name !'),
        Lastname: yup.string()
            .min(2, 'To Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your First Name !'),
        Phone: yup.string()
            .min(2, 'To Short!')
            .max(10, 'Too Long!')
            .required('Please Enter phone number !'),
        email: yup.string()
            .email("Invalid email")
            .required('Please Enter mail id'),
        Address: yup.string()
            .min(4, 'To Short!')
            .max(80, 'Too Long!')
            .required('Please Enter Your First Name !'),
        password: yup.string()
            // .matches(/^(?=.[A-Za-z])(?=.[0-9])(?=.[@$!%#?&])[A-Za-z0-9@$!%*#?&]{8,}$/, 'Must use Alpha Numeric with special char and length 8 must be 8 charcarter')
            .required("Please Enter Password"),

        confirmPassword: yup.string().required("Please Enter Confirm Password").
            oneOf([null, yup.ref('password')], "password should match"),
        Zipcode: yup.string()
            .required('enter Zip code')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(6, "Must be exactly 6 digits")
            .max(6, "Must be exactly 6 digits"),
        Agree: yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
            .required(),
        Birtdate: yup.date()
            .min(1995, 'min date')
            .max(2023, 'max date')
            .required(),
        City: yup.string()
            .required('Select field is required'),
        State: yup.string()
            .required('Select field is required'),
        Hobbies: yup.array()
            .required("select")
            .min(1, 'you have to select atleast one field!'),
        Title: yup.string()
            .required('select')
    })

    return (
        <>
            <Formik
                initialValues={{
                    Title: '',
                    Firstname: '',
                    Lastname: '',
                    Birtdate: '',
                    Phone: '',
                    email: '',
                    Address: '',
                    City: '',
                    Zipcode: "",
                    State: '',
                    Hobbies: [],
                    education: "",
                    Agree: false,
                    password: '',
                    confirmPassword: "",
                }}

                validationSchema={regSchema}
                onSubmit={(values) => {
                    setdata(values)
                }}
            >
                <div className='container bg-primary d-flax align-item-center justifie'> <Form>

                    <Field name="Title" component="select">
                        <option value="Mr">Mr.</option>
                        <option value="Miss">Miss.</option>
                        <option value="Mrs">Mrs.</option>
                    </Field>

                    <div>
                        <Field type="text" name="Firstname" placeholder="firstname" />
                        <ErrorMessage name="Firstname" />
                    </div>
                    <div>

                        <Field type="text" name="Lastname" placeholder="Lastname" />
                        <ErrorMessage name="Lastname" />
                    </div>
                    <div>
                        <Field type="date" name="Birtdate" placeholder="Lastname" />
                        <ErrorMessage name="Birtdate" />
                    </div>
                    <div>
                        <Field type="text" name="Phone" placeholder="Phone" />
                        <ErrorMessage name="Phone" />
                    </div>
                    <div>
                        <Field type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email" />
                    </div>

                    <div>
                        <Field type="textarea" name="Address" placeholder="Address" />
                        <ErrorMessage name="Address" />
                    </div>
                    <div>
                        <label htmlFor="City">City</label>
                        <Field name="City" as="select">
                            {
                                cities.map((city) => {
                                    return (
                                        <option value={city}>{city}</option>
                                    );
                                })
                            }
                        </Field>
                        <ErrorMessage name="City" />
                    </div>
                    <div>  <Field type="text" name="Zipcode" placeholder="Zipcode" />
                        <ErrorMessage name="Zipcode" /></div>


                    <div>
                        <label htmlFor="state">State</label>
                        <Field name="State" as="select">
                            {
                                states.map((stat) => {
                                    return (
                                        <option value={stat}>{stat}</option>
                                    );
                                })
                            }
                        </Field>
                        <ErrorMessage name="State" />
                    </div>


                    <div role="group" aria-labelledby="checkbox-group">
                        {
                            myHobbies.map((e) => {
                                return (<label>
                                    <Field type="checkbox" name="Hobbies" value={e} />
                                    {e}
                                </label>
                                )


                            })
                        }
                        <ErrorMessage name="Hobbies" />
                    </div>

                    <div>
                        {
                            education.map((e) => {
                                return (
                                    <label>
                                        <Field type="radio" name="education" value="{e}" />
                                        {e}
                                    </label>)

                            })
                        }
                    </div>
                    <div><Field type="password" name="password" placeholder="password" />
                        <Field type="password" name="confirmPassword" placeholder="confirm password" />
                        <ErrorMessage name="password" /></div>

                    <div>   <Field type="checkbox" name="Agree" />
                        <ErrorMessage name="Agree" /></div>
                    <div>        <button type="submit" value="submit">
                        Submit
                    </button></div>
                </Form>
                </div>

            </Formik>
            <div>
                {
                    <RegDataDisplay value={data}></RegDataDisplay>
                }
            </div>
        </>

    )
}

export default Registartion