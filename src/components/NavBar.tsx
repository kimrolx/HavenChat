import ThemeToggle from "@/components/ThemeToggle"

const NavBar = () => {
    return (
        <div className="flex flex-row w-full items-center justify-between absolute text-black dark:text-white">
            <div className="bg-clip-text text-transparent text-4xl font-semibold bg-gradient-to-r from-[#9D8AE7] to-[#612AD8] p-6">
                Haven
            </div>
            <div className="items-center p-6 text-black dark:text-white">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default NavBar;