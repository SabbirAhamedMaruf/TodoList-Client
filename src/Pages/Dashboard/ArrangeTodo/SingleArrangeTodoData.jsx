import PropTypes from 'prop-types';
import { MdOutlineTaskAlt } from "react-icons/md";
import {useDrag} from 'react-dnd';

const SingleArrangeTodoData = ({data}) => {
    const [{isDragging},drag]=useDrag(()=>({
        type:"task",
        item : {id:data._id},
        collect:(monitor)=>({
            isDragging: !!monitor.isDragging()
        })
      }))

      console.log(isDragging)
    
    return (
        <div ref={drag} className='grid grid-cols-6 gap-5 bg-white p-3 rounded-md'>
            <MdOutlineTaskAlt />
            <h1 className='grid-cols-1'>{data.priority}</h1>
            <h1 className='grid-cols-4'>{data.name}</h1>
        </div>
    );
};

SingleArrangeTodoData.propTypes={
    data : PropTypes.object
}
export default SingleArrangeTodoData;