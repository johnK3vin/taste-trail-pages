import { Card } from '@/components/ui/card';
import { Coffee, Utensils, Cake } from 'lucide-react';
import appetizerImage from '@/assets/appetizer.jpg';
import mainCourseImage from '@/assets/main-course.jpg';
import dessertImage from '@/assets/dessert.jpg';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
  image: string;
}

const Menu = () => {
  const menuCategories: MenuCategory[] = [
    {
      title: "Entradas",
      icon: <Coffee className="h-6 w-6" />,
      image: appetizerImage,
      items: [
        {
          name: "Bruschetta Artesanal",
          description: "Pan tostado con tomates frescos, albahaca y aceite de oliva extra virgen",
          price: "$8.500"
        },
        {
          name: "Tabla de Quesos Gourmet",
          description: "Selección de quesos locales con frutos secos y mermelada casera",
          price: "$12.900"
        },
        {
          name: "Ceviche Tradicional",
          description: "Pescado fresco marinado en limón con cebolla morada y cilantro",
          price: "$11.500"
        }
      ]
    },
    {
      title: "Platos Principales",
      icon: <Utensils className="h-6 w-6" />,
      image: mainCourseImage,
      items: [
        {
          name: "Salmón a la Parrilla",
          description: "Salmón fresco con risotto de espárragos y salsa de eneldo",
          price: "$18.900"
        },
        {
          name: "Cordero al Vino Tinto",
          description: "Cordero cocido lentamente con puré de papas trufado y vegetales de temporada",
          price: "$22.500"
        },
        {
          name: "Pasta Carbonara Especial",
          description: "Fettuccine con panceta artesanal, huevo y queso parmesano",
          price: "$14.900"
        }
      ]
    },
    {
      title: "Postres",
      icon: <Cake className="h-6 w-6" />,
      image: dessertImage,
      items: [
        {
          name: "Volcán de Chocolate",
          description: "Bizcocho de chocolate caliente con helado de vainilla y frutos rojos",
          price: "$7.500"
        },
        {
          name: "Tiramisú Casero",
          description: "Clásico italiano con café, mascarpone y cacao",
          price: "$6.900"
        },
        {
          name: "Cheesecake de Frutos del Bosque",
          description: "Cremoso cheesecake con salsa de frutos rojos",
          price: "$6.500"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestro Menú
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada plato es preparado con ingredientes frescos y locales, 
            creando una experiencia gastronómica memorable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-warm-red/10 flex items-center justify-center">
                  <div className="text-warm-red">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                <div className="w-16 h-1 bg-warm-red mx-auto rounded-full"></div>
              </div>

              {/* Category Image */}
              <div className="relative h-48 rounded-lg overflow-hidden shadow-soft">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Menu Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-warm-red">{item.price}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            * Los precios pueden variar según temporada y disponibilidad
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-red/10 rounded-full">
            <span className="text-warm-red font-medium">
              ¿Preguntas sobre alérgenos? Consulta con nuestro personal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;