
import { Contactinfo } from '../components/Contactinfo/Contactinfo'
import Formcomp from '../components/ContactUs/Form'
import { Navbarcomp } from '../components/Header/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <Navbarcomp />
      <Formcomp />
    </div>
    </>
  )
}
