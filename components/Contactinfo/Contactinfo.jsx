import { createStyles, Text, Avatar, Group, Paper } from '@mantine/core';
import styles from './Contactinfo.module.scss'

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

export function Contactinfo({ arr }) {
  const { classes } = useStyles();
  return (
    <div className={styles.contact}>
      <Paper withBorder shadow="lg" p={30} mt={30} radius="lg">
        <Group>
          <div>
            <Text size="xl"> Name : {arr.data.name}</Text>
            <Text size="md" color="dimmed">
              Email : {arr.data.email}
            </Text>
            <hr></hr>
            <Text size="md">
              Subject : {arr.data.subject}
            </Text>
          </div>
        </Group>
        <Text className={classes.body} size="lg">
        <b>Query :</b> <br></br>{arr.data.query}
        </Text>
        <Text className={classes.body} size="lg">
        <b>Message :</b> <br></br> {arr.data.message}
        </Text>
      </Paper>
    </div>
  );
}