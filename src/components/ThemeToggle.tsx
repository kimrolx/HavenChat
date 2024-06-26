import { useTheme } from "@/providers/ThemeContext"
import { Switch } from "@/components/ui/switch"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex flex-col items-center space-y-1.5">
            <Switch id="dark-mode" onCheckedChange={toggleTheme} checked={theme === 'dark'} />
            <label htmlFor="dark-mode" className="mr-2">
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </label>
        </div>
    );
}

export default ThemeToggle;
