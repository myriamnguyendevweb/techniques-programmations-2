import React from "react";
import Container from "react-bootstrap/Container";

const LoginForm = () => {
    const signinWithEmailAndPassword = useEmailPasswordSignin();
    const signinWithGoogle = useGoogleSignin();

    const onSubmit = (values) => {
        signinWithEmailAndPassword(values.email, values.password);
    };

    return (
        <Container fluid className="vh-100">
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <Formik
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validateOnChange
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .required("This field is required")
                            .email("Enter a valid email"),
                        password: Yup.string()
                            .required("The password is required")
                            .matches(
                                passwordRegex,
                                "Password must contain 8 characters, at least one letter and number"
                            ),
                    })}>
                    <Form as={BsForm} noValidate>
                        <Row>
                            <Col>
                                <Input id="email" label="Email" type="email" required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    id="password"
                                    type="password"
                                    label="Password"
                                    autoComplete="current-password"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <Button className="w-100" type="submit">
                                    Connexion
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
                <Row className="ml-5">
                    <Col>
                        <Button onClick={signinWithGoogle} type="button" variant="secondary">
                            Connexion avec Google
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default LoginForm;