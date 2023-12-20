import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-jost '>
            <Outlet/>
        </div>
    );
};

export default Root;