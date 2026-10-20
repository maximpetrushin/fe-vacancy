import Header from "../components/Header.tsx";
import {Box, Container, Divider, Grid, Stack} from "@mantine/core";
import SearchField from "../components/SearchField.tsx";
import CityList from "../components/CityList.tsx";
import SkillList from "../components/SkillList.tsx";
import VacancyList from "../components/VacancyList.tsx";

function AppLayout() {
    return (
        <Box bg='background.0'>
            <Header />

            <Container size={1000}>
                <SearchField />
            </Container>
            <Divider my='xs' opacity='0.1' m={0} mb={24}/>
            <Container size={1000} mb={85}>
                <Grid >
                    <Grid.Col span={4}>
                        <Stack>
                            <SkillList />
                            <CityList />
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <VacancyList />
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    )
}

export default AppLayout;