import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import LoginForm, {FormValues as LoginFormValues} from '../components/LoginForm';

import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Container,
    Title
} from '@mantine/core';

import zxcvbin from 'zxcvbn';


const Login = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            terms: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => {
                let pw = zxcvbin(value, [form.values['email']]);
                return pw.score >= 3 ? null : "Password too weak"
            },
        },
    });

    const handleLogin = (values: LoginFormValues) => {
        console.dir(values);
    };

    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900,
                })}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor<"a">
                    href="#"
                    size="sm"
                    onClick={(event) => event.preventDefault()}
                >
                    Create account
                </Anchor>
            </Text>

           <LoginForm onSubmit={handleLogin}/>
        </Container>
    );
}


export default Login;

