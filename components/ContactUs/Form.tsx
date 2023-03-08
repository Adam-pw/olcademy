import React from "react";
import { useState } from "react";
import {
  TextInput,
  createStyles,
  Button,
  Textarea,
  Paper,
} from "@mantine/core";
import { db } from "../../Firebase/config";
import { collection, addDoc } from "firebase/firestore";
import styles from "./Contact.module.scss";

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: {
      position: "relative",
      margin: "0vw 15vw 2vw 15vw",
    },

    label: {
      position: "absolute",
      zIndex: 2,
      top: 7,
      left: theme.spacing.sm,
      pointerEvents: "none",
      color: floating
        ? theme.colorScheme === "dark"
          ? theme.white
          : theme.black
        : theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        "transform 150ms ease, color 150ms ease, font-size 150ms ease",
      transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : "none",
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
    },

    required: {
      transition: "opacity 150ms ease",
      opacity: floating ? 1 : 0,
    },

    input: {
      "&::placeholder": {
        transition: "color 150ms ease",
        color: !floating ? "transparent" : undefined,
      },
    },
  })
);

export default function Formcomp() {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [query, setQuery] = useState<string>();
  const [subject, setSubject] = useState<string>();

  const addContact = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    addDoc(collection(db, "contactus"), {
      email: email,
      name: name,
      message: message,
      subject: subject,
      query: query,
    });
    setEmail("");
    setName("");
    setMessage("");
    setQuery("");
    setSubject("");
  };

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <b> Welcome to Olcademy </b>
        </div>
        <div className={styles.right}>
          <Paper withBorder shadow="md" p={10} mt={10} radius="md">
          <h1 className={styles.heading}>Contact us page :</h1>
          <br></br>
            <TextInput
              label="Your Email"
              placeholder="Example: xyz@gmail.com"
              required
              classNames={classes}
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="md"
              radius="lg"
              autoComplete="nope"
            />
            <TextInput
              label="Your Name"
              placeholder="Example Bill Gates"
              required
              classNames={classes}
              value={name}
              radius="lg"
              onChange={(event) => setName(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="md"
              autoComplete="nope"
            />
            <TextInput
              label="Subject"
              placeholder="Example Social Science"
              required
              classNames={classes}
              value={subject}
              radius="lg"
              onChange={(event) => setSubject(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="md"
              autoComplete="nope"
            />
            <Textarea
              label="Message you want to convey"
              placeholder="Anything you want to say"
              required
              classNames={classes}
              value={message}
              onChange={(event) => setMessage(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="md"
              radius="lg"
              autoComplete="nope"
            />
            <Textarea
              label="Any Query"
              placeholder="Any questions ? ? :)"
              radius="lg"
              required
              classNames={classes}
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="md"
              autoComplete="nope"
            />
            <Button radius="lg" className={styles.button} onClick={addContact}>
              Submit
            </Button>
          </Paper>
        </div>
      </div>
    </>
  );
}
