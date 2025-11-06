import styles from "./hero.module.css"
import pro from "../../assets/pro.svg"

const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
      <div className={styles.hero__title}>
        <h1>Contact us</h1>
        <p>Leave us a message and we will respond as soon as possible</p>
      </div>
      <img className={styles.hero__image} src={pro} alt="contact us" />
    </div>
    </>
  )
}

export default Hero;