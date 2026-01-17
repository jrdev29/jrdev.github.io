export default function ThemeToggle() {
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    };

    return (
        <button onClick={toggleTheme} className="px-2 py-1 border rounded">
            🌓
        </button>
    );
}
