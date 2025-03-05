const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">GUMOHH!</h1>
          <p className="mt-4">© 2025 GUMOHH, All rights reserved.</p>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                History
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Privacy Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Privacy</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter/X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="#top" className="hover:underline">
          Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
