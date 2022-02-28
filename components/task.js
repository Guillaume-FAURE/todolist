import styles from './task.module.css'
import styled from 'styled-components'
import {AddButton,EditButton} from './button'

const BorderLeftSuperCase = styled.div`
    width: 2px;
    height: auto;
    box-shadow: 3px 0px 3px ${props=>props.theme.color};
    display: flex;
`
const Priority = styled.div`
    width:30px;
    height:30px;
    background-color:${props=> props.theme.color};
    border-radius:30px;
    display:flex;
    box-shadow: 0px 0px 2px grey;
`

function Task ({children}){
    return (
        <div className={styles.superTaskCase}>
            <BorderLeftSuperCase theme={{color:"red"}}></BorderLeftSuperCase>
            <div className={styles.contentSuperCase}>
                <div className={styles.taskCase}>
                    <div className={styles.taskColumn1}>
                        <Priority theme={{ color:"red"}}></Priority>
                    </div>
                    <div className={styles.taskColumn2}>
                        <textarea className={styles.input} autoFocus></textarea>
                    </div>
                    <div className={styles.taskColumn3}>
                        <AddButton></AddButton>
                        <EditButton></EditButton>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Task