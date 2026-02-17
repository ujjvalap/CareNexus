import React from "react";
import { TextInput, PasswordInput } from '@mantine/core';
const LoginPage = () => {
    return (
        <div
            style={{ backgroundImage: 'url("/bg.jpg")' }}
            className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        >
            <div className="w-[450px]">
                <form>
                    <div>Login</div>
                    <TextInput variant="unstyled" size="md" radius="md" placeholder="Input placeholder" />
                    <PasswordInput variant="unstyled" size="md" radius="md" placeholder="Input placeholder" />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
