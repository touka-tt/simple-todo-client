import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEdit, faList} from "@fortawesome/free-solid-svg-icons";

const Header = () => (
    <div data-testid="Header" className="h-screen w-48 border-r bg-white">
        <h1 className="font-semibold p-4 text-xl tracking-tight">Todo App</h1>
        <div className="h-3/4 flex flex-col justify-start text-gray-500">
            <Link to="/" className="p-4 hover:bg-gray-100 hover:text-black transition duration-200 ease-linear">
                <h2 className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faList} className="mr-2"/>Todo List
                </h2>
            </Link>
            <Link to="/new" className="p-4 hover:bg-gray-100 hover:text-black transition duration-200 ease-linear">
                <h2 className="text-sm flex items-center">
                    <FontAwesomeIcon icon={faEdit} className="mr-2"/>New Todo
                </h2>
            </Link>
        </div>
    </div>
)

export default Header