import styles from './task.module.css'

function Task ({children}, {props}){
    return (
        <div className={styles.superTaskCase}>
            <div className={styles.taskCase}>
                <div className={styles.priorityCase}>

                </div>
                <div className={styles.inputCase}>
                    <input type='text' autoFocus></input>
                </div>
                <div className={styles.addSubTaskCase}>

                </div>
            </div>
        {children}
        </div>
    )
}

export default Task