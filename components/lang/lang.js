import styles from './lang.module.css'

const Lang = () => {
    return (
        <div className={styles.Languages}>
            <p className={styles.text}>
               Google offered in: 
            </p>
            <span>हिन्दी</span>
            <span>বাংলা</span>
            <span>অসমীয়া</span>
            <span>తెలుగు</span>
            <span>मराठी</span>
            <span>தமிழ்</span>
            <span> ગુજરાતી</span>
            <span>ಕನ್ನಡ</span>
            <span>മലയാളം</span>
            <span>ਪੰਜਾਬੀ</span>
        </div>
    )
}

export default Lang;