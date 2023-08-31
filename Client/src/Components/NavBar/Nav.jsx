import '/src/indexStyles.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Navigation() {

    return (
        <div className="text-3xl font-semibold border text-slate-400">
            <nav className="flex justify-end">
                <ul className="flex space-x-20 py-8 me-28">
                    <li>
                        <Link to="/homeApp">
                            Collection
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
