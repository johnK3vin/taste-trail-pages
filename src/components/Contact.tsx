import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto"
    });
    
    setFormData({ name: '', phone: '', message: '' });
  };

  const whatsappMessage = `Hola, soy ${formData.name || '[Nombre]'}. ${formData.message || 'Quiero hacer una reserva.'}`;
  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¡Haz tu Reserva Hoy Mismo!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para hacer de tu experiencia algo inolvidable. 
            Contáctanos y asegura tu mesa en nuestro restaurante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-soft">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Envíanos un Mensaje</h3>
              <p className="text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+56 9 XXXX XXXX"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tu reserva: número de personas, fecha preferida, ocasión especial..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" variant="cta" className="w-full" size="lg">
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>

          {/* Contact Options */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <Card className="p-8 shadow-soft bg-green-50 border-green-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Reserva por WhatsApp
                </h3>
                <p className="text-muted-foreground mb-6">
                  La forma más rápida de hacer tu reserva. ¡Te respondemos al instante!
                </p>
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chatear en WhatsApp
                </Button>
              </div>
            </Card>

            {/* Phone Contact */}
            <Card className="p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm-red/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-warm-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Llámanos</h4>
                  <p className="text-muted-foreground">+56 9 1234 5678</p>
                  <p className="text-sm text-muted-foreground">Lun - Dom: 12:00 - 22:00</p>
                </div>
              </div>
            </Card>

            {/* Email Contact */}
            <Card className="p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warm-orange/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-warm-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">contacto@saborautentico.cl</p>
                  <p className="text-sm text-muted-foreground">Respuesta en 24 hrs</p>
                </div>
              </div>
            </Card>

            {/* Special Note */}
            <div className="bg-warm-red/5 border border-warm-red/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">Eventos Especiales</h4>
              <p className="text-sm text-muted-foreground">
                ¿Planeas una celebración? Contáctanos para conocer nuestros menús especiales 
                y opciones para grupos grandes. ¡Hacemos de tu evento algo memorable!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;