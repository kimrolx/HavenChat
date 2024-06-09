import { useTheme } from "@/context/ThemeContext"
import { Switch } from "@/components/ui/switch"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex flex-col items-center">
            <Switch id="dark-mode" onCheckedChange={toggleTheme} checked={theme === 'dark'} />
            <label htmlFor="dark-mode" className="mr-2">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </label>
        </div>
    );
}

export default ThemeToggle;
