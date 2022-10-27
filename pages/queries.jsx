import Head from 'next/head'
import Image from 'next/image'
import { Contactinfo } from '../components/Contactinfo/Contactinfo'
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Formcomp from '../components/ContactUs/Form'
import { Navbarcomp } from '../components/Header/header'
import { db } from '../Firebase/config';
import styles from '../components/Contactinfo/Contactinfo.module.scss'
import sty from '../styles/Home.module.css'

export default function Queries() {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "contactus"));
    onSnapshot(q, (querySnapshot) => {
      setContact(
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
      <h1 className={styles.contact}>Queries shared :-</h1>
      {contact.map((contact) => (
        <Contactinfo key={contact.id} arr={contact}/>
        ))}
        </div>
    </>
  )
}
