import { Link } from "lucide-react";
import { Logo } from "./logo";

export const Header = () => {
  return (
   <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <h1 className="text-2xl font-bold">Calorie Tracker</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Diary
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Goals
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Profile
            </Link>
          </nav>
        </div>
      </header>
  );
}
