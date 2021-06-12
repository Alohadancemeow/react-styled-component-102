import React from 'react'
import Video from '../../videos/video3.mp4'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormWrap,
    Icon,
    Text,
    FormLabel
} from './signin.element'

import { HeroBg, VideoBg } from '../heroSction/hero.element'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>
                        <IoArrowBackCircleSharp />
                    </Icon>

                    <HeroBg>
                        <VideoBg
                            autoPlay
                            loop
                            muted
                            src={Video}
                            type="video/mp4"
                        />
                    </HeroBg>

                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>

                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
