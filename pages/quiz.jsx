import { Navbarcomp } from '../components/Header/header'
import { Quizcomp } from '../components/Quiz/Quizcomp'
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase/config';
import { Button } from '@mantine/core';
import styles from '../components/Quiz/Quizcomp.module.scss'
import sty from '../styles/Home.module.css'

export default function Quiz() {
    const [quiz, setQuiz] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "quiz"));
        onSnapshot(q, (querySnapshot) => {
            setQuiz(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }, []);
    return (
        <>
            <div className={sty.main}>
                <Navbarcomp />
                {quiz.map((quiz) => (
                    <Quizcomp key={quiz.id} arr={quiz} />
                ))}
                <Button className={styles.main}>Submit</Button>
            </div>
        </>
    )
}
