import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className="bg-accent text-white w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="transition-colors">
            <Image
              src="/croppedlog.jpg"
              alt="Logo"
              width={150} // Adjust width based on your needs
              height={50} // Adjust height based on your needs
              className="hover:opacity-80 transition-opacity rounded-lg"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-secondary transition-colors">
            Home
          </a>
          <a href="/about" className="text-white hover:text-secondary transition-colors">
            About
          </a>
          <a href="/features" className="text-white hover:text-secondary transition-colors">
            Features
          </a>
          <a href="/contact" className="text-white hover:text-secondary transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="/signup"
            className="bg-highlight text-white px-4 py-2 rounded-lg shadow hover:bg-muted transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
