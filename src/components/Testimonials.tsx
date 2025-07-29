import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  date: string;
  location: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "María González",
      comment: "Una experiencia gastronómica increíble. El salmón estaba perfecto y el servicio fue excepcional. Definitivamente volveremos para celebrar nuestro aniversario el próximo año.",
      rating: 5,
      date: "Hace 2 semanas",
      location: "Quellón"
    },
    {
      name: "Carlos Rodríguez",
      comment: "El ambiente es muy acogedor y la comida simplemente deliciosa. El volcán de chocolate es imperdible. El personal siempre atento y amable. ¡Altamente recomendado!",
      rating: 5,
      date: "Hace 1 mes",
      location: "Castro"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-golden fill-golden' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Las experiencias de nuestros huéspedes son nuestra mejor recomendación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-md transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-warm-red/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <cite className="font-semibold text-foreground not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-warm-red/10 rounded-full">
            <Star className="h-5 w-5 text-warm-red fill-warm-red" />
            <span className="text-warm-red font-medium">
              ¡Únete a nuestros clientes satisfechos!
            </span>
            <Star className="h-5 w-5 text-warm-red fill-warm-red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;