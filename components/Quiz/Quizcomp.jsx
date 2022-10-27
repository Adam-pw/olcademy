import React from "react";
import { Checkbox, Paper } from '@mantine/core';
import styles from './Quizcomp.module.scss'

export function Quizcomp({ arr }) {
  return (
    <>
      <div className={styles.main}>
        <Paper withBorder shadow="lg" p={30} mt={30} radius="lg">
          <h1>{arr.data.question}</h1>
          <Checkbox
            label={arr.data.a}
          />
          <Checkbox
            label={arr.data.b}
          />
          <Checkbox
            label={arr.data.c}
          />
          <Checkbox
            label={arr.data.d}
          />
        </Paper>
      </div>
    </>
  );
}
