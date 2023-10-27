import { React, useEffect, useState, useRef } from "react";
import styles from "./ImgSlide.module.css"
import { motion } from "framer-motion"
import image1 from "../imgs/img1.jpg"
import image2 from "../imgs/img2.jpg"
import image3 from "../imgs/img3.jpg"
const images = [image1, image2, image3]

function ImgSlide() {

    const carrosel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {

        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth
        )
    }, [])

    return (<>

        <h2 className={styles.h2}>Imagens da casa</h2>
        <div className={styles.slide_container}>

            <motion.div ref={carrosel} className={styles.carrosel} whileTap={{ cursor: "grabbing" }}>
                <motion.div className={styles.inner}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>

                    {images.map(image => (
                        <motion.div className={styles.item} key={image}>
                            <img src={image} alt="imagem text" />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    </>
    )
}
export default ImgSlide