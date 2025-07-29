import { Utensils, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="h-8 w-8 text-warm-orange" />
              <span className="text-2xl font-bold">Sabor Auténtico</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              En Sabor Auténtico, cada plato cuenta una historia de tradición, pasión y 
              sabores únicos. Ven y descubre una experiencia culinaria que despertará 
              todos tus sentidos en el corazón de Quellón.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-orange">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nuestro Menú
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('location')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ubicación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Eventos Especiales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-orange">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-warm-orange mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Av. Principal 123, Centro</p>
                  <p>Quellón, Región de Los Lagos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-warm-orange flex-shrink-0" />
                <a href="tel:+56912345678" className="text-gray-300 hover:text-white transition-colors">
                  +56 9 1234 5678
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-warm-orange flex-shrink-0" />
                <a href="mailto:contacto@saborautentico.cl" className="text-gray-300 hover:text-white transition-colors">
                  contacto@saborautentico.cl
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-warm-orange mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Lun - Jue: 12:00 - 22:00</p>
                  <p>Vie - Sáb: 12:00 - 23:00</p>
                  <p>Dom: 12:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2024 Sabor Auténtico. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;