import { Form } from '../widgets/form';
import { UsersList } from '../widgets/users';

import './App.css';

const App = () => {
    return (
        <div className="content">
            <h1>Hello</h1>
            <Form />
            <UsersList />
        </div>
    );
};

export default App;
