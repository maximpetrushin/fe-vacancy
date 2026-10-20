import {Grid, Text, Badge, NavLink, Group, Image, Paper} from "@mantine/core";
import {UserCircleIcon} from "@phosphor-icons/react"

import MainLogo from "../assets/MainLogo.png";

function Header() {
    return (
        <Paper shadow='sm' radius={0}>
            <Grid align="center" columns={3} px={20}>
                <Grid.Col span={1} h={60}>
                    <Group h="100%" align="center" wrap="nowrap" gap='xs'>
                        <Image
                            w={30}
                            h={30}
                            src={MainLogo}
                            alt="FrontEnd"
                        />
                        <Text fw={600}>.FrontEnd</Text>
                    </Group>
                </Grid.Col>

                <Grid.Col span={1} h={60}>
                    <Group
                        h="100%"
                        justify="center"
                        align="center"
                        wrap="nowrap"
                    >
                        <NavLink
                            w="max-content"
                            label="Вакансии FE"
                            rightSection={
                                <Badge
                                    w={6}
                                    h={6}
                                    circle
                                    bg="primary"
                                />
                            }
                        />

                        <NavLink
                            w="max-content"
                            label="Обо мне"
                            disabled
                            leftSection={<UserCircleIcon/>}
                        />
                    </Group>
                </Grid.Col>

                <Grid.Col span={1} h={60} />
            </Grid>
        </Paper>
    );
}

export default Header;