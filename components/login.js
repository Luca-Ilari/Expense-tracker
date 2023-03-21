import { useRef, useState, useEffect } from "react"
import Alert from "../components/login/alert";
import { getUserId } from "../lib/api_query";
import { Button, Input, Container, Row, Col, Spacer, Text } from "@nextui-org/react";
import { Mail } from "./login/mail";
import { Password } from "./login/password";

//login form
function Login({ setUserName, setUserId }) {
    const name = useRef(null)
    const pw = useRef(null)
    const [showLoginAlert, setShowLoginAlert] = useState(false)

    async function postLogin() {
        const response = await getUserId(name.current.value, pw.current.value)

        if (response) {
            setUserId(response)
            setUserName(name.current.value)
            setShowLoginAlert(false)
        } else {
            setShowLoginAlert(true)
        }
    }

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                postLogin();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <>
            <Container align="center" xs responsive fluid>
                <Container justify="center" fluid responsive>
                    <Row justify="center" align="center">
                        <Col>
                            <Text h3>Login</Text>
                            <Spacer y={1.5} />
                            <Input
                            ref={name}
                                clearable
                                bordered
                                width="60%"
                                color="primary"
                                size="lg"
                                placeholder="Email"
                                contentLeft={<Mail fill="currentColor" />}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Spacer y={1} />
                            <Input.Password
                                ref={pw}
                                clearable
                                bordered
                                width="60%"
                                color="primary"
                                size="md"
                                placeholder="Password"
                                contentLeft={<Password fill="currentColor" />}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Spacer y={1} />
                            <Button onPress={postLogin} color="gradient" className="btn btn-outline-primary background-color:#172231">Entra</Button>
                        </Col>
                    </Row>
                </Container>

                <div>
                    <Alert show={showLoginAlert} message='Incorrect password or username' />
                </div>
            </Container>

        </>
    )
}

export default Login