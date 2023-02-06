import React from 'react'
import Container from '@mui/material/Container';
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';

export const UseFormik = () => {
    let gender = ["Male", "Female", "Other"];
    let cities = ["Udaipur", "Vadodara", "Pune", "Gunagradh", "Gandi Nagar"];
    let states = ["Rajsthan", "Gujrat", "UP", "MP", "Maharatra"]

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your First Name !'),

        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your Last Name !'),

        dob: Yup.date()
            .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
            .required('Please Enter Your DOB!'),

        email: Yup.string()
            .email('Invalid email')
            .required('Please Enter Your Email!'),

        password: Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/, ' Must use Alpha Numeric with special char and length 8 must be 8 charcarter')
            .required("Please Enter Password"),

        confirmPassword: Yup.string().required("Please Enter Confirm Password").
            oneOf([null, Yup.ref('password')], "password should match"),

        phoneNO: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .max(10, "Must be exactly 10 digits"),

        zipcode: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(5, "Must be exactly 6 digits")
            .max(6, "Must be exactly 6 digits"),

        acceptTerm: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")

    });



    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            dob: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNO: '',
            Address: '',
            City: '',
            State: '',
            zipcode: '',
            acceptTerm: false,
        },

        validationSchema: SignupSchema,

        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Container maxWidth="sm" sx={{
            marginTop: 8,
            textAlign: 'center',
        }}
        >
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>


            <Box
                component="form" noValidate sx={{ mt: 1 }}
                onSubmit={formik.handleSubmit}
            >

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="First Name"
                    name="firstName"
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Last Name"
                    name="lastName"
                    onChange={formik.handleChange}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                />

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    onClick={formik.handleChange}
                >
                    {
                        gender.map((gen) => {
                            return (
                                <FormControlLabel 
                                name="gender"
                                value={gen} 
                                control={<Radio />} 
                                label={gen} />
                            );
                        })
                    }

                </RadioGroup>

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    type="date"
                    name="dob"
                    helperText={formik.touched.dob && formik.errors.dob}
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                    onChange={formik.handleChange}

                />

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    helperText={formik.touched.email && formik.errors.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    onChange={formik.handleChange}

                />

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="password"
                    name="password"
                    autoComplete="password"
                    helperText={formik.touched.password && formik.errors.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    onChange={formik.handleChange}

                />

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    autoComplete="confirmPassword"
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    onChange={formik.handleChange}

                />

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Mobile No"
                    name="phoneNO"
                    onChange={formik.handleChange}
                    helperText={formik.touched.phoneNO && formik.errors.phoneNO}
                    error={formik.touched.phoneNO && Boolean(formik.errors.phoneNO)}
                />

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Address"
                    name="Address"
                    onChange={formik.handleChange}
                />
                <FormControl fullWidth variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">Select City</InputLabel>
                    <Select
                        required
                        name='City'
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={formik.values.City}
                        onChange={formik.handleChange}
                    >
                        {
                            cities.map((city) => {
                                return (
                                    <MenuItem value={city}>{city}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>

                <FormControl fullWidth variant="filled" sx={{mt : 2}}>
                    <InputLabel id="demo-simple-select-filled-label">Select State</InputLabel>
                    <Select
                        required
                        name='State'
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={formik.values.State}
                        onChange={formik.handleChange}
                    >
                        {
                            states.map((state) => {
                                return (
                                    <MenuItem value={state}>{state}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>

                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Zipcode"
                    name="zipcode"
                    onChange={formik.handleChange}
                    helperText={formik.touched.zipcode && formik.errors.zipcode}
                    error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
                />

                <FormControlLabel
                    control={<Checkbox typeof='checkbox' name="acceptTerm" value="remember" color="primary"
                        helperText={formik.touched.acceptTerm && formik.errors.acceptTerm}
                        error={formik.touched.acceptTerm && Boolean(formik.errors.acceptTerm)}
                        onClick={formik.handleChange} />}
                    label="Remember me"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    )
}