import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Utensils } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Utensils className="h-8 w-8 text-warm-red" />
          <span className="text-xl font-bold text-foreground">Sabor Auténtico</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-warm-red transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-foreground hover:text-warm-red transition-colors"
          >
            Menú
          </button>
          <button 
            onClick={() => scrollToSection('location')}
            className="text-foreground hover:text-warm-red transition-colors"
          >
            Ubicación
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-warm-red transition-colors"
          >
            Contacto
          </button>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            Reservar
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left text-foreground hover:text-warm-red transition-colors py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-left text-foreground hover:text-warm-red transition-colors py-2"
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-left text-foreground hover:text-warm-red transition-colors py-2"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-foreground hover:text-warm-red transition-colors py-2"
            >
              Contacto
            </button>
            <Button 
              variant="hero" 
              className="mt-2"
              onClick={() => scrollToSection('contact')}
            >
              Reservar Mesa
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;