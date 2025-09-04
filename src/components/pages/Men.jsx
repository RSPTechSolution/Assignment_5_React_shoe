import { useSelector } from "react-redux";
import { useMemo } from "react";
import HeroBanner from "../reusecomponents/HeroBanner";
import Products from "../reusecomponents/Products";
import Cart from "../layout/Cart";

const Men = () => {
    const banners = useSelector((state) => state.banner);
    const allProducts = useSelector((state) => state.products);

    // ✅ Memoize derived data
    const banner = useMemo(
        () => banners.find((b) => b.for === "men"),
        [banners]
    );

    const products = useMemo(
        () => allProducts.filter((p) => p.target === "Men"),
        [allProducts]
    );

    return (
        <div className="flex flex-1">
            <main className="flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
                <div className="layout-content-container flex flex-col max-w-7xl w-full mx-auto">
                    <HeroBanner content={banner} />
                    <Products products={products} />
                </div>
            </main>
            <aside className="w-96 bg-gray-800 p-6 flex flex-col border-l border-gray-700">
                <Cart />
            </aside>
        </div>
    );
};

export default Men;
