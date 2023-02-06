import React from 'react'
import { Formik, useFormik } from 'formik';
import { Box, TextField, Container, Button } from '@mui/material';

function DyanamicFormFormik() {
    const myFormik = useFormik({
        initialValues:
        {
            basicInfo: {
                firstName: "",
                lastName: ""
            },
            education: [{
                uniName: "",
                startDate: "",
                endDate: "",
                educationLevel: ""
            }],

        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    const deleteEducation = (index) => {
        const m = [...myFormik.values.education]
        m.splice(index, 1);
        myFormik.setValues({...myFormik.values, education: m });
        
    }
    const addmore = () => {
        myFormik.setFieldValue('education', [...myFormik.values.education, {
            uniName: "",
            startDate: "",
            endDate: "",
            educationLevel: ""
        }])
    }
   
    return (
        <>

            <Box
                component="form" noValidate sx={{ mt: 1 }}
                onSubmit={myFormik.handleSubmit}
            >
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="First Name"
                    name="basicInfo.firstName"
                    onChange={myFormik.handleChange}

                />
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Last Name"
                    name="basicInfo.lastName"
                    onChange={myFormik.handleChange}

                />
                <Container maxWidth="sm">
                    {
                        myFormik.values.education.map((value, index) => {

                            return (
                                <Container maxWidth="sm">

                                    <TextField
                                        variant="filled"
                                        margin="normal"
                                        required
                                        label="Uni name"
                                        name={`education[${index}].uniName`}
                                        onChange={myFormik.handleChange}
                                    />
                                    <TextField
                                        variant="filled"
                                        margin="normal"
                                        required

                                        label="start date"
                                        name={`education[${index}].startDate`}
                                        onChange={myFormik.handleChange}
                                    /> <TextField
                                        variant="filled"
                                        margin="normal"
                                        required

                                        label="end date"
                                        name={`education[${index}].endDate`}
                                        onChange={myFormik.handleChange}
                                    /> <TextField
                                        variant="filled"
                                        margin="normal"
                                        required

                                        label="level"
                                        name={`education[${index}].educationLevel`}
                                        onChange={myFormik.handleChange}
                                    />

                                    {
                                        index == 0 ? "" : <Button type='button' onClick={() => { deleteEducation(index)}}>Delete</Button>
                                    }
                                    {
                                        myFormik.values.education.length - 1 == index ? <button type='button' onClick={addmore}>AddMore</button> : ""
                                    }

                                </Container>

                            )

                        })
                    }
                </Container>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>



            </Box>
        </>
    )
}

export default DyanamicFormFormik