const About = () => {
    return (
        <>
            <main className="flex-1 px-10 py-12">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-5xl font-bold text-white mb-12 text-center">About SoleMate</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                At SoleMate, our mission is to provide high-quality footwear that combines style, comfort, and
                                durability. We believe that the right pair of shoes can make a
                                difference in your day, whether you're hitting the gym, exploring the city, or simply enjoying a casual
                                outing. Our commitment is to offer a diverse selection of
                                shoes that cater to every lifestyle and preference, ensuring that everyone can find their perfect fit.
                            </p>
                        </div>
                        <div className="rounded-md overflow-hidden">
                            <img alt="Our Team" className="w-full h-auto object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC33Ls0uvWl-rSa16YdCxE0eOTe107LyKLd9yYwj8tvBHD0XUq3SqvlIysBRVm24YdKV0EWANVrrFGH9R6XMzWt9Y06fNoqjKNUR_wZo62qMNtkfH0bWSedz_FFIUJ4KLPMUOjQkQY2Qx06Fglqjeq3zzy2Q2Q1mLsTF_nne0wGdPFUyj0KzMe4SUdG4-RxnuILUOQdaVGQ2WelqfoNeQUdWPIbr2ioo2Vr8_3xO4KFAkldTCUy6Qbc8o3QkBgG0kyDPQdUraw881g" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="rounded-md overflow-hidden md:order-2">
                            <img alt="Store Interior" className="w-full h-auto object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClMvZFODRgULs9ng01s7ruqxaJ5RSfmTOoAQC1d65kVBxox2f00z0ny9aHQooizkFndAg-zgQ82CfJMX3bxOXyOEcFrKiZ0OsdpxP_pftCru6gyd39DYEOntiIoOkFSG_ALEGaUCUiNOE3DszvkoXoceSpNmLIOxDzis9KBbA-LvuQme339UqIgXGh9D0tZrDv8qs4nMx69-MoexDLGPld1LEoKxh1ZTBR-Qt1p0Pne5D07PHUqqcXKgzZw3Wz1OsYiEXEiKpY8ZA" />
                        </div>
                        <div className="md:order-1">
                            <h2 className="text-3xl font-bold text-white mb-4">Our History</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Founded in 2010, SoleMate started as a small boutique in downtown Metropolis with a passion for
                                footwear. Over the years, we've grown into a leading online retailer,
                                serving customers across the nation. Our journey has been marked by a dedication to quality, innovation,
                                and customer satisfaction. We've collaborated with top
                                designers and brands to bring you the latest trends and timeless classNameics, all while maintaining our
                                commitment to exceptional service.
                            </p>
                        </div>
                    </div>
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-zinc-900 p-6 rounded-md text-center">
                                <h3 className="text-xl font-bold text-white mb-2">Quality</h3>
                                <p className="text-zinc-400">We prioritize quality in every product, ensuring the highest standards of
                                    craftsmanship and materials.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-md text-center">
                                <h3 className="text-xl font-bold text-white mb-2">Customer First</h3>
                                <p className="text-zinc-400">We strive to provide a seamless shopping experience, from browsing to receiving
                                    your order.</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-md text-center">
                                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                                <p className="text-zinc-400">We constantly seek new ways to improve our products and services for a better
                                    experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 rounded-md p-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            Have questions or need assistance? Our customer support team is here to help. You can reach us by phone at
                            (555) 123-4567 or email us at support@solemate.com.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About;