import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const cart = useSelector((state) => state.cart);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-[hsl(var(--border))] bg-[hsl(var(--background))] px-10 py-4">
            <div className="flex items-center gap-4">
                <Link to="/">
                    <img src="/images/logo.png" alt="logo" height={50} width={100} />
                </Link>
            </div>

            <nav className="hidden items-center gap-6 md:flex relative">
                <Link
                    className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
                    to="/"
                >
                    Home
                </Link>

                {/* Category Dropdown */}
                <div className="relative group">
                    <button className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">
                        Category
                    </button>

                    <div className="absolute top-full left-0 hidden w-40 rounded-md border border-gray-200 bg-white shadow-md z-50 group-hover:block">
                        <Link
                            to="/category/men"
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                            Men
                        </Link>
                        <Link
                            to="/category/women"
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                            Women
                        </Link>
                        <Link
                            to="/category/kids"
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                            Kids
                        </Link>
                    </div>
                </div>



                <Link
                    className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
                    to="/about-us"
                >
                    About Us
                </Link>
            </nav>

            {/* Icons & Login */}
            <div className="flex items-center gap-4">
                <button className="flex cursor-pointer items-center justify-center rounded-full p-2 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary))]">
                    <svg className="size-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span className="sr-only">Wishlist</span>
                </button>

                <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z">
                        </path>
                    </svg>
                    <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold">{cart.length}</div>
                </button>
            </div>
        </header>
    );
};

export default Header;
