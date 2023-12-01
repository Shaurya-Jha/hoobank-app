import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";;

const CardDeal = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The choice was red, green, or blue. It didn't seem like an important choice when he was making it, but it was a choice nonetheless. Had he known the consequences at that time, he would likely have considered the choice a bit longer.</p>

            <Button styles={`mt-10`} />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>
    </section>
  )
}

export default CardDeal