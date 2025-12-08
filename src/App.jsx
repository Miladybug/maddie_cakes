import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-serif text-gray-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white backdrop-blur-md shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Placeholder */}
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">
              Madcakes
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-pink-400 hover:text-pink-500 transition-colors relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-pink-400 hover:text-pink-500 transition-colors relative group"
                >
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-pink-400 hover:text-pink-500 transition-colors relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-pink-400 hover:text-pink-500 transition-colors relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-pink-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 text-pink-400 hover:bg-pink-50 rounded transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-4 py-2 text-pink-400 hover:bg-pink-50 rounded transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-pink-400 hover:bg-pink-50 rounded transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-pink-400 hover:bg-pink-50 rounded transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-50/50 to-pink-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-4 md:mb-6">
            Madcakes
          </h1>
          {/* <p className="text-xl sm:text-2xl md:text-3xl text-pink-400 italic mb-6 md:mb-8">
            [Your Tagline]
          </p> */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Hello! I'm Madelynn, the girl behind Madcakes. I create custom cakes
            that bring joy, using fresh, high-quality ingredients. I believe
            that every cake should not only look stunning but also taste
            amazing. I specialize in custom cakes for weddings, birthdays and
            all special occasions. Order yours today!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Hola! Soy Madelynn, la chica detrás de MadCakes. Creo pasteles
            personalizados que traen felicidad, usando ingredientes frescos y de
            alta calidad. Creo que cada pastal no solo debe verse impresionante
            sino también ser rico. Me especializo en pasteles personalizados
            para bodas, cumpleaños y toda ocasión especial. ¡Haz tu pedido hoy!
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-block px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Order Your Cake
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-3 md:mb-4">
            Our Creations
          </h2>
          <p className="text-center text-gray-500 italic text-base md:text-lg mb-12 md:mb-16">
            A glimpse of our delicious artistry
          </p>

          {/* Gallery Grid - Add your images here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-6xl md:text-7xl cursor-pointer overflow-hidden group">
              <img src="assets/img_1.jpg" />
            </div>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-6xl md:text-7xl cursor-pointer overflow-hidden group">
              <img src="/assets/img_2.jpg" />
            </div>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-6xl md:text-7xl cursor-pointer overflow-hidden group">
              <img src="./assets/img_3.jpg" />
            </div>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-6xl md:text-7xl cursor-pointer overflow-hidden group">
              <img src="src/assets/img_4.jpg" />
            </div>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-6xl md:text-7xl cursor-pointer overflow-hidden group">
              <img src="/src/assets/img_5.jpg" />
            </div>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-6xl md:text-7xl cursor-pointer overflow-hidden group">
              <img src="./src/assets/img_6.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-pink-50/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-pink-400 mb-3 md:mb-4">
            Menu & Pricing
          </h2>
          <p className="text-center text-gray-400 italic text-base md:text-lg mb-8 md:mb-12">
            Custom creations for every occasion
          </p>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl mb-8 md:mb-12 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6 text-center">
              Flavors
            </h3>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6">
              <div>
                <h4 className="font-semibold text-pink-300 mb-3 text-lg">
                  Cake Base
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Vanilla Bean, Yellow Vanilla, Chocolate, Red Velvet, Funfetti,
                  Banana, Strawberry, Brown Sugar
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-pink-300 mb-3 text-lg">
                  Fillings
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Vanilla Custard, Chocolate Custard, Chocolate Ganache,
                  Strawberry, Banana Custard, Biscoff, Peanut Butter, Oreo,
                  Cheesecake
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-pink-300 mb-3 text-lg">
                  Buttercream
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Vanilla Bean, Vanilla Classic, Chocolate, Cream Cheese,
                  Strawberry, Biscoff, Peanut Butter, Oreo
                </p>
              </div>
            </div>

            <p className="text-center text-pink-300 italic text-sm md:text-base mt-6">
              Other flavors can be discussed ;)
            </p>
            <p className="text-center text-gray-500 text-xs md:text-sm mt-3">
              All can be made gluten/sugar/dairy free if desired (except brown
              sugar/biscoff/cream cheese)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4 text-center">🎂</div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4 text-center">
                Custom Cakes
              </h3>
              <p className="text-gray-500 text-sm text-center mb-6 italic">
                Circle and heart shaped
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">6" (10-12 servings)</span>
                  <span className="font-semibold text-pink-400">$45+</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">8" (20-24 servings)</span>
                  <span className="font-semibold text-pink-400">$55+</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">10" (35-40 servings)</span>
                  <span className="font-semibold text-pink-400">$75+</span>
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-4 space-y-2 text-sm">
                <p className="text-gray-600">
                  • Each cake comes with two layers
                </p>
                <p className="text-gray-600">• Add $5 for extra cake layer</p>
                <p className="text-gray-600">
                  • Add $10 for gluten/dairy/sugar-free
                </p>
                <p className="text-gray-600">
                  • Fancier designs raise total cost
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4 text-center">🍮</div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4 text-center">
                ChocoFlans
              </h3>
              <p className="text-gray-500 text-sm text-center mb-6 italic">
                Comes with dulce de leche
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">6" ChocoFlan</span>
                  <span className="font-semibold text-pink-400">$35</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">8" ChocoFlan</span>
                  <span className="font-semibold text-pink-400">$45</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">10" ChocoFlan</span>
                  <span className="font-semibold text-pink-400">$55</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">Mini ChocoFlan Cupcakes</span>
                  <span className="font-semibold text-pink-400">$25/dozen</span>
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-4 space-y-2 text-sm">
                <p className="text-gray-600">
                  • Can be made with Vanilla/Strawberry/Red Velvet cake
                </p>
                <p className="text-gray-600">• Strawberry decor $5 extra</p>
                <p className="text-gray-600">
                  • Mini cupcakes come with dulce de leche or whipped cream
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4 text-center">🧁</div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6 text-center">
                Cupcakes
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">Per Dozen</span>
                  <span className="font-semibold text-pink-400">$25</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">Add Filling</span>
                  <span className="font-semibold text-pink-400">+$5</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">Gluten/Dairy/Sugar-Free</span>
                  <span className="font-semibold text-pink-400">+$5</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl mb-4 text-center">💒</div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6 text-center">
                Wedding Cakes
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">2-Tier (8", 6")</span>
                  <span className="font-semibold text-pink-400">$120+</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">3-Tier (10", 8", 6")</span>
                  <span className="font-semibold text-pink-400">$200+</span>
                </div>
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-gray-700">Cake Tasting (30 min)</span>
                  <span className="font-semibold text-pink-400">$30</span>
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-4 space-y-2 text-sm">
                <p className="text-gray-600">• Delivery: $5/mile</p>
                <p className="text-gray-600">• Stacking fee: $10</p>
                <p className="text-gray-600">• Fancy cake board: $15+</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-400 to-pink-300 rounded-3xl p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Special Discounts
            </h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-white text-center">
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">🎈</div>
                <p className="font-semibold mb-1">Baby's 1st Birthday</p>
                <p className="text-sm">
                  Free smash cake with birthday cake order
                </p>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">✨</div>
                <p className="font-semibold mb-1">New Customer</p>
                <p className="text-sm">10% off your first order</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-2">💕</div>
                <p className="font-semibold mb-1">1st Anniversary</p>
                <p className="text-sm">10% off anniversary cake</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-3 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 italic text-base md:text-lg mb-8 md:mb-12">
            Let's create something beautiful together
          </p>

          {/* Contact Info - Update with actual details */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <div className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-600">
              <span className="text-2xl">📧</span>
              <span>madelynnwarren@mail.weber.edu</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-600">
              <span className="text-2xl">📱</span>
              <span>801-703-0540</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-base md:text-lg text-gray-600">
              <span className="text-2xl">📷</span>
              <span>m_warren1227</span>
            </div>
          </div>

          <a
            href="mailto:madelynnwarren@mail.weber.edu"
            className="inline-block px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Send a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-400 to-pink-300 text-white text-center py-6 md:py-8 px-4">
        <p className="text-sm md:text-base">
          &copy; 2025 Madcakes. Made with love and sugar ♡
        </p>
      </footer>
    </div>
  );
}

export default App;
