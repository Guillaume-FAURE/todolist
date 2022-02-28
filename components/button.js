import styles from  './button.module.css'
import Image from "next/image"

function AddButton(){
    return(
        <div className={styles.button}>
            <Image src="/images/addButton.png" alt="addButton" width="50px" height="50px"/>
        </div>
    )
}
function EditButton(){
    return(
        <div className={styles.button}>
            <Image className="editButton" src="/images/editButton.png"alt="editButton" width="50px" height="50px"/>
        </div>
    )
}

export {AddButton,EditButton}