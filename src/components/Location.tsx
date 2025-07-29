import { Card } from '@/components/ui/card';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Encuéntranos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ubicados en el corazón de Quellón, te esperamos en un ambiente cálido y acogedor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.123456789!2d-73.61234567!3d-43.12345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sQuellon%2C%20Chile!5e0!3m2!1sen!2scl!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del restaurante en Quellón"
                className="w-full h-96 rounded-lg"
              ></iframe>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-warm-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Principal 123, Centro<br />
                    Quellón, Región de Los Lagos<br />
                    Chile
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-warm-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horarios</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><span className="font-medium">Lunes - Jueves:</span> 12:00 - 22:00</p>
                    <p><span className="font-medium">Viernes - Sábado:</span> 12:00 - 23:00</p>
                    <p><span className="font-medium">Domingo:</span> 12:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-warm-brown" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contacto</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><span className="font-medium">Teléfono:</span> +56 9 1234 5678</p>
                    <p><span className="font-medium">Email:</span> contacto@saborautentico.cl</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-cream p-6 rounded-lg border border-warm-orange/20">
              <h4 className="font-semibold text-foreground mb-2">Reservas Recomendadas</h4>
              <p className="text-sm text-muted-foreground">
                Para garantizar tu mesa, especialmente en fines de semana y fechas especiales, 
                te recomendamos hacer una reserva con anticipación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;