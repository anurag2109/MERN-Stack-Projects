import React from 'react';
import Articles from './Articles';
import Header from './Header';
import Heading from './Heading';
import News from './News';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Container = styled(Box)`
    margin-top: 110;
    width: 59%;
    margin: 0 auto;
`
const Home = () => {
    const article = {
        url: 'https://imgk.timesnownews.com/story/Karnataka_Home_Minister_Araga_Jnanendra-ani_0.jpg?tr=w-400,h-300,fo-auto',
        title: "Both hijab and saffron shawl not allowed in colleges: Karnataka Home Minister",
        author: 'Shreyasi Banerjee / 04:53 pm on 07 Feb 2022,Monday',
        description: `Amid the ongoing hijab row, Karnataka Home Minister Araga Jnanendra on Tuesday said that the government's order did not differentiate on religion. Jnanendra further said that both hijab and saffron shawl are not allowed inside college premises. "All are equal and [are the] children of Mother India...Students should think beyond religion. Uniform dress is the symbol of equality,"`,
        publisher: 'Times Now',
        link: 'https://www.timesnownews.com/amp/india/article/both-hijab-saffron-shawl-not-allowed-in-colleges-students-should-think-beyond-religion-karnataka-home-minister/856648?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts'
    }
    return(
        <Container>
            <Header/>
            <Heading/>
            <Articles/>
        </Container>
    );
};

export default Home;
