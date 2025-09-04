import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";
import { toast } from 'react-toastify';

const Products = (prop) => {
    const products = prop.products;
    const dispatch = useDispatch();

      const handleAddToCart = (product) => {
            dispatch(addToCart(product));
            toast.success(`${product.name} added to cart!`);
        };


    return (
        <>
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">New Arrival</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        products.map((product) => (
                            <div key={product.id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
                                        <div className="relative">
                                            <div
                                                className="w-full h-64 bg-center bg-no-repeat bg-cover"
                                                style={{ backgroundImage: `url(${product.image})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-gray-900 text-white rounded-full px-6 py-3 font-bold hover:bg-gray-800 transition-colors cursor-pointer" onClick={() => handleAddToCart(product)}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                                {product.target}
                                            </span>
                                            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                                            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                                            <p className="text-lg font-extrabold text-gray-900 mt-2">
                                                 ${product.price}
                                            </p>
                                        </div>
                                    </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Products;