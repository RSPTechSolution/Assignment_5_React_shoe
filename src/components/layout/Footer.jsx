const Footer = () => {
    return (
       <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
              <ul className="space-y-2">
                <li><a className="text-base text-gray-300 hover:text-white" href="#">New Arrivals</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Men</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Women</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Kids</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="space-y-2">
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Customer Service</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Returns</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Shipping</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="space-y-2">
                <li><a className="text-base text-gray-300 hover:text-white" href="#">About Us</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Careers</a></li>
                <li><a className="text-base text-gray-300 hover:text-white" href="#">Press</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow Us</h3>
              <div className="flex space-x-6">
                <a className="text-gray-400 hover:text-white" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fillRule="evenodd"></path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-white" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                    </path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-white" href="#">
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.828 2.828c.248.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.828 2.828c-.636.248-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.828-2.828c-.248-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.828-2.828c.636-.248 1.363.416 2.427.465 1.024.048 1.378.06 3.808.06zM12 0C9.55 0 9.186.011 8.165.058 7.083.105 6.13.275 5.25.568A6.902 6.902 0 00.568 5.25C.275 6.13.105 7.083.058 8.165.011 9.186 0 9.55 0 12s.011 2.814.058 3.835c.047 1.082.227 2.034.51 2.913a6.902 6.902 0 004.672 4.672c.879.283 1.831.463 2.913.51 1.021.047 1.385.058 3.835.058s2.814-.011 3.835-.058c1.082-.047 2.034-.227 2.913-.51a6.902 6.902 0 004.672-4.672c.283-.879.463-1.831.51-2.913.047-1.021.058-1.385.058-3.835s-.011-2.814-.058-3.835c-.047-1.082-.227-2.034-.51-2.913A6.902 6.902 0 0018.75.568C17.87.275 16.918.105 15.835.058 14.814.011 14.45 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                      fillRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-400">© 2024 SoleMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer