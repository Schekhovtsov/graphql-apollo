import { CreateButton } from '../../../features/users/create';
import { FetchButton } from '../../../features/users/fetch';
import styles from './Form.module.scss';

export const Form = () => {
    return (
        <form className={styles.container}>
            <input type="text"></input>
            <input type="number"></input>
            <div className={styles.buttons}>
                <CreateButton />
                <FetchButton />
            </div>
        </form>
    );
};
