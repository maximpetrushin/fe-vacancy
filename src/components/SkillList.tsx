import {Stack, Button, Group, Input, Paper, Pill, Box} from "@mantine/core";
import {useAppSelector, useAppDispatch} from "../store/hooks.ts";
import {setSkill, removeSkill} from "../store/vacancySlice.ts";
import {useState, type SyntheticEvent} from "react";





function SkillList() {

    const [skillItem, setSkillItem] = useState('')

    const skills = useAppSelector(state => state.vacancy.filters.skills);
    const dispatch = useAppDispatch();


    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newSkill = skillItem.trim()

        if (!newSkill || skills.includes(newSkill)) {
            return;
        }

        dispatch(setSkill(newSkill));
        setSkillItem('')
    }


    return (
        <Paper p={24}>
            <Stack>
                <Input.Wrapper
                    label={'Ключевые навыки'}
                >
                    <form
                        onSubmit ={handleSubmit}
                    >
                        <Group gap='xs' wrap='nowrap' w='100%'>
                            <Input
                                placeholder='Введите навык'
                                opacity='0.7'
                                value={skillItem}
                                flex={1}
                                onChange={(e) => setSkillItem(e.target.value)}
                            />
                            <Button
                                opacity='0.5'
                                type='submit'
                                variant='filled'
                                fz='xl'
                            >+</Button>
                        </Group>
                    </form>
                </Input.Wrapper>
                <Box>
                    {skills.length > 0 &&
                        skills.map((skill) =>
                            (<Pill key={skill} bg='background.0' withRemoveButton onRemove={() => dispatch(removeSkill(skill))}>{skill}</Pill>))}

                </Box>
            </Stack>
        </Paper>
    )
}

export default SkillList;