import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleTodoData = ({ data, number, handleDeleteTodo }) => {
  return (
    <tr>
      <th>{number + 1}</th>
      <td>{data.name}</td>
      <td>{data.description}</td>
      <td>{data.priority}</td>
      <td>{data.deadline}</td>
      <td>{data.status}</td>
      <td className="text-2xl transition duration-700 hover:text-[#5eacff]">
        <Link to={`/dashboard/editTodo/${data._id}`}>
          <RiPencilFill />
        </Link>
      </td>
      <td className="text-3xl transition duration-700 hover:text-red-500">
        <MdDeleteForever onClick={() => handleDeleteTodo(data._id)} />
      </td>
    </tr>
  );
};

SingleTodoData.propTypes = {
  data: PropTypes.object,
  number: PropTypes.number,
  handleDeleteTodo: PropTypes.func,
};
export default SingleTodoData;
