import { FormEventHandler, useState } from 'react';
import { useInputState } from '@mantine/hooks';
import { useForm } from '@mantine/form';
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
    Title,
    Progress
} from '@mantine/core';

import zxcvbin from 'zxcvbn';

export interface FormValues {
    username: string,
    email: string,
    password: string
}

export interface Properties {
    onSubmit: (values: FormValues) => void,
}

const Login = (props: Properties) => {
    const [passwordStrength, setPasswordStrength] = useState(-1);
    const form = useForm({
        initialValues: {
            username: '',
            email: '',
            password: '',
            terms: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value, { email }) => {
                let pw = zxcvbin(value, [email]);
                setPasswordStrength(value.length == 0 ? -1 : pw.score);
                let feedback = pw.feedback.warning || "Password too weak";
                return pw.score >= 3 ? null : feedback;
            },
        },
        validateInputOnChange: true
    });


    const bars = Array(5)
        .fill(0)
        .map((_, index) => {
            return (
                <Progress
                    styles={{ bar: { transitionDuration: '0ms' } }}
                    value={
                        passwordStrength >= index ? 100 : 0
                    }
                    color={ [
                        'red',
                        'yellow',
                        'teal',
                        'lightgreen',
                        'green'
                    ][passwordStrength]
                    }
                    key={index}
                    size={4}
                />
            )
        });

    return (
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit(values => props.onSubmit(values))}>
                <TextInput
                    required
                    label="Username"
                    placeholder="ExampleUser1"
                    value={form.values.username}
                    onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                    error={form.errors.username}
                    radius="md"
                />
                <TextInput
                    required
                    label="Email"
                    placeholder="example@mexample.com"
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    error={form.errors.email}
                    radius="md"
                />
                <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    mt="md"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password}
                />
                <Group spacing={5} grow mt="xs" mb="md">
                    {bars}
                </Group>
                <Group position="apart" mt="lg">
                    <Anchor<"a">
                        onClick={(event) => event.preventDefault()}
                        href="#"
                        size="sm"
                    >
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl" type="submit">
                    Sign in
                </Button>
            </form>
        </Paper>
    );
}


export default Login;

