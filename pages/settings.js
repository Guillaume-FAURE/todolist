import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const MyComponent = () => (
    <Image
        src="/images/profile.jpg"
        alt="Profile's picture"
        width={250}
        height={250}
    />
) 

function Settings(){
    return(
        <>
            <h1>
                Settings
            </h1>
            <h2 className={styles.title}>
                <Link href='/home'>
                    <a>Back to home</a>
                </Link>
            </h2>
            <div className={styles.profil}>
                <MyComponent/>
            </div>
        </>
    )
}

export default Settings