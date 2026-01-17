import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
            <h1 className="text-xl font-bold">JRDEV</h1>
            <div className="flex gap-4 items-center">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
}
