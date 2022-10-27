import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import { DatePicker } from '@mantine/dates';
  
  export function Logincomp() {
    return (
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Create Your account
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          {"Let's dive in at Olcademy"}{' '}
          <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Create account
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Name" placeholder="Bill gates" required />
          <br></br> 
          <TextInput label="Email" placeholder="xyz@gmail.com" required />
          <br></br>
          <DatePicker placeholder="Enter Date Of Birth" label="Birth date" withAsterisk />
          <br></br>
          Gender : 
          <Checkbox
          label="Male"
        />
          <Checkbox
          label="Female"
        />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    );
  }