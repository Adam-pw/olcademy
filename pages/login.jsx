import { Navbarcomp } from '../components/Header/header'
import { Logincomp } from '../components/Login/Logincomp'
import sty from '../styles/Home.module.css'

export default function Login() {
  return (
    <>
    <div className={sty.main}>
      <Navbarcomp />
      <Logincomp />
    </div>
    </>
  )
}
