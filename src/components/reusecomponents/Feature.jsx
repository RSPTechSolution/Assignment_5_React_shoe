import { useSelector } from "react-redux";

const Feature = () => {
  const category = useSelector((state) => state.category);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {category.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="relative group w-full aspect-square rounded-lg overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url("${item.image}")` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{item.name}</p>
              <p className="text-gray-300 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
