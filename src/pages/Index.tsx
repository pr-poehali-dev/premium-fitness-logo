import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const trainings = [
    {
      title: "Персональные тренировки",
      description: "Индивидуальный подход к достижению ваших целей",
      icon: "User",
      features: ["1 на 1 с тренером", "Персональная программа", "Гибкий график"]
    },
    {
      title: "Групповые программы",
      description: "Мотивация в команде единомышленников",
      icon: "Users",
      features: ["Йога и пилатес", "Функциональный тренинг", "HIIT тренировки"]
    },
    {
      title: "Premium зона",
      description: "Эксклюзивный доступ к VIP оборудованию",
      icon: "Crown",
      features: ["Новейшие тренажеры", "Приватная зона", "Персональные душевые"]
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/f7f6731e-cd28-476c-b236-0e02c6700f4e/files/e09a1c35-dfd9-4dcd-a4b4-df515e3d6039.jpg",
      title: "Премиум зал"
    },
    {
      url: "https://cdn.poehali.dev/projects/f7f6731e-cd28-476c-b236-0e02c6700f4e/files/dbc6ce57-6d53-4c92-afd8-eda20ac2ac95.jpg",
      title: "Тренировочная зона"
    },
    {
      url: "https://cdn.poehali.dev/projects/f7f6731e-cd28-476c-b236-0e02c6700f4e/files/e09a1c35-dfd9-4dcd-a4b4-df515e3d6039.jpg",
      title: "Функциональная зона"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/f7f6731e-cd28-476c-b236-0e02c6700f4e/files/94e39b4b-c0d1-4ac1-9ab4-69253359d1e5.jpg" 
              alt="ЧIST ЛИST Logo" 
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">ЧIST</span>
              <span className="text-secondary ml-2">ЛИST</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#trainings" className="text-sm font-medium hover:text-secondary transition-colors">Тренировки</a>
            <a href="#gallery" className="text-sm font-medium hover:text-secondary transition-colors">Галерея</a>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full">
                  <span className="text-secondary text-sm font-semibold tracking-wide">ПРЕМИУМ ФИТНЕС</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                  Твоё тело —<br />
                  <span className="text-secondary">твой проект</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Эксклюзивный фитнес-клуб для тех, кто выбирает совершенство
                </p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-secondary text-secondary hover:bg-secondary/10">
                  Экскурсия
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Членов клуба</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Тренеров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Доступ</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/f7f6731e-cd28-476c-b236-0e02c6700f4e/files/e09a1c35-dfd9-4dcd-a4b4-df515e3d6039.jpg" 
                alt="Premium Gym" 
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="trainings" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full">
              <span className="text-secondary text-sm font-semibold tracking-wide">ПРОГРАММЫ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Наши тренировки</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая соответствует вашим целям
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainings.map((training, index) => (
              <Card 
                key={index} 
                className="bg-background border-border hover:border-secondary transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon name={training.icon as any} size={32} className="text-secondary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{training.title}</h3>
                    <p className="text-muted-foreground">{training.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {training.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full">
              <span className="text-secondary text-sm font-semibold tracking-wide">ГАЛЕРЕЯ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Наше пространство</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современное оборудование и премиум атмосфера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.poehali.dev/projects/f7f6731e-cd28-476c-b236-0e02c6700f4e/files/94e39b4b-c0d1-4ac1-9ab4-69253359d1e5.jpg" 
                  alt="ЧIST ЛИST Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-xl font-bold">
                  <span className="text-foreground">ЧIST</span>
                  <span className="text-secondary ml-2">ЛИST</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Премиум фитнес-клуб для достижения ваших целей
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-secondary">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@chistlist.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-secondary">График работы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Круглосуточно, 24/7</p>
                <p>Администратор: 8:00 - 22:00</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 ЧIST ЛИST. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
