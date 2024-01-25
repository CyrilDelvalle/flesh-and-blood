import React from "react";
import Link from "next/link";
import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import Image from 'next/image'

const Navbar = () => {
    return (
        <Flex width='100%' height='max-content' position='fixed' gap='8' style={{ padding: '0.5rem 3rem', borderRadius: '1rem', background: '#191919', zIndex: 10 }}>
            <Box>
                <Link href="/">
                    <Image key='logo' alt='logo' width={160} height={84} src={'https://dhhim4ltzu1pj.cloudfront.net/static/8c9ec5c0/fabsite/img/fab_logo_reg.png'} />
                </Link>
            </Box>
            <Flex gap="3" align="center">
                <Link href='/'> <Text> Heroes </Text></Link>
                <Separator orientation="vertical" />
                <Link href='/'> <Text> Extensions </Text></Link>
                <Separator orientation="vertical" />
                <Link href='/'> <Text> Coming soon </Text></Link>
                <Separator orientation="vertical" />
                <Link href='/'> <Text> Themes </Text></Link>
            </Flex>

        </Flex  >
    );
};

export default Navbar;