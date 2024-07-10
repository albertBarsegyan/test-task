import styles from './styles.module.css';
import {Button} from "../button";

export function Header() {
    return (
    <div className={styles.headerWrapper}>
        <div className={styles.navbar}>
            <div className={styles.iconsWrapper}>
                <Button variant='icon' content={<img width={80} height={80} src="/icons/insta.png" alt="Insta"/>}/>
                <Button variant='icon' content={<img width={80} height={80} src="/icons/teleg.png" alt="Teleg"/>}/>
                <Button variant='icon' content={<img width={80} height={80} src="/icons/x.png" alt="X"/>}/>

            </div>

            <div>
            <Button content='MENG laboratory' onClick={() => {}} />
            </div>
        </div>

        <div className={styles.pageLayout}>
            <img src="/icons/meng.png" alt="Kong"/>

            <div className={styles.textWrapper}>
                <span>HI, I'M $MENG!</span>
                <span>
                    INSPIRED BY AH MENG, HERE TO BRING SMILES AND SWAY INTO YOUR HEARTS!
                </span>
                <span>I AM JUST A SWINGIN' ORANGUTAN!</span>

                <Button style={{width: 'fit-content'}} content='JOIN COMMUNITY' onClick={() => {
                }}/>
            </div>
         <div className={styles.imageWrapper}>
            <img className={styles.tree} src="/icons/tree.png" alt="Kong"/>
            <img className={styles.kong} src="/icons/kong.png" alt="Kong"/>
            <img className={styles.hands} src="/icons/hands.png" alt="hands"/>
         </div>
        </div>
    </div>
    );
}
