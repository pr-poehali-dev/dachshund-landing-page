import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'breeding', 'puppies', 'gallery', 'testimonials', 'standards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const breedingDogs = [
    {
      name: 'Граф Золотой Луч',
      title: 'Чемпион России, Гранд Чемпион РКФ',
      breed: 'Длинношерстная такса',
      color: 'Рыжий',
      achievements: 'BIS-1, 15x CACIB',
      image: 'https://cdn.poehali.dev/projects/59a420c1-6aa6-47f9-92a8-673796ed956b/files/c4b0ef30-9400-4a15-8145-866576fb5ae6.jpg'
    },
    {
      name: 'Баронесса фон Штайн',
      title: 'Чемпион Европы, Интерчемпион',
      breed: 'Жесткошерстная такса',
      color: 'Кабаний',
      achievements: 'BOB, 12x CACIB',
      image: 'https://cdn.poehali.dev/projects/59a420c1-6aa6-47f9-92a8-673796ed956b/files/eb02c09f-38be-4f2c-befa-7b928721cc61.jpg'
    },
    {
      name: 'Императрица Диана',
      title: 'Юный Чемпион России',
      breed: 'Длинношерстная такса',
      color: 'Черно-подпалый',
      achievements: 'Junior BIS, 8x JCAC',
      image: 'https://cdn.poehali.dev/projects/59a420c1-6aa6-47f9-92a8-673796ed956b/files/90ff6488-eda6-440f-8df8-d0753cf63762.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Волкова',
      text: 'Приобрели щенка длинношерстной таксы год назад. Профессионализм заводчиков на высшем уровне! Собака с идеальной родословной и темпераментом.',
      city: 'Москва'
    },
    {
      name: 'Дмитрий Смирнов',
      text: 'Жесткошерстная такса от этого питомника - настоящий аристократ! Помощь и консультации заводчиков неоценимы. Рекомендую всем!',
      city: 'Санкт-Петербург'
    },
    {
      name: 'Мария Петрова',
      text: 'Наша такса - гордость семьи! Здоровье, характер, экстерьер - всё на высшем уровне. Спасибо за такого замечательного друга!',
      city: 'Казань'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Элит Такса</h1>
            <div className="hidden md:flex gap-8 items-center">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'breeding', label: 'Производители' },
                { id: 'puppies', label: 'Щенки' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'testimonials', label: 'Отзывы' },
                { id: 'standards', label: 'Стандарты' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/chatgpt"
                className="ml-4 px-4 py-2 bg-primary/20 text-primary rounded-lg border border-primary/30 hover:bg-primary/30 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <Icon name="Bot" size={16} />
                AI Помощник
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <div className="container mx-auto px-6 text-center z-20 animate-fade-in-up">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
            Питомник премиум-класса
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Благородство
            <br />
            <span className="text-primary">в каждой линии</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Разведение элитных длинношерстных и жесткошерстных такс с безупречной родословной
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              onClick={() => scrollToSection('puppies')}
            >
              Выбрать щенка
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">О питомнике</Badge>
              <h2 className="text-5xl font-bold mb-6">Традиции качества с 2005 года</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наш питомник специализируется исключительно на длинношерстных и жесткошерстных таксах. Мы создали
                уникальные племенные линии, объединяющие лучших представителей породы из Европы и России.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Каждая собака нашего питомника - это результат многолетней селекционной работы, направленной на
                сохранение породных качеств, здоровья и аристократичного характера.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Чемпионов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Щенков</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">18</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/59a420c1-6aa6-47f9-92a8-673796ed956b/files/c4b0ef30-9400-4a15-8145-866576fb5ae6.jpg"
                    alt="Такса"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/59a420c1-6aa6-47f9-92a8-673796ed956b/files/eb02c09f-38be-4f2c-befa-7b928721cc61.jpg"
                    alt="Такса"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="breeding" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Племенные собаки</Badge>
            <h2 className="text-5xl font-bold mb-6">Наши производители</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Чемпионы с безупречной родословной и выдающимися породными качествами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {breedingDogs.map((dog, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dog.name}</h3>
                  <p className="text-primary text-sm mb-4">{dog.title}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Порода:</span>
                      <span className="font-medium">{dog.breed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Окрас:</span>
                      <span className="font-medium">{dog.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Достижения:</span>
                      <span className="font-medium">{dog.achievements}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="puppies" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Актуальные пометы</Badge>
            <h2 className="text-5xl font-bold mb-6">Доступные щенки</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Элитные щенки с документами РКФ/FCI от чемпионов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border p-8 animate-fade-in-up">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon name="Heart" size={40} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Помет "A"</h3>
                  <p className="text-muted-foreground mb-4">
                    Длинношерстные таксы, родители - чемпионы России
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>Дата рождения: 15.12.2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} className="text-primary" />
                      <span>Доступно: 2 щенка</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="bg-card border-border p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon name="Sparkles" size={40} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Помет "B"</h3>
                  <p className="text-muted-foreground mb-4">
                    Жесткошерстные таксы, титулованные родители
                  </p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>Дата рождения: 05.01.2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} className="text-primary" />
                      <span>Доступно: 3 щенка</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Галерея</Badge>
            <h2 className="text-5xl font-bold mb-6">Наши выпускники</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Гордость питомника - собаки с идеальным экстерьером
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[...breedingDogs, ...breedingDogs].map((dog, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Отзывы</Badge>
            <h2 className="text-5xl font-bold mb-6">Что говорят наши клиенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Счастливые владельцы наших щенков делятся впечатлениями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="standards" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Стандарты породы</Badge>
            <h2 className="text-5xl font-bold mb-6">Таксы премиум-класса</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Характеристики идеальных представителей породы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border p-8 animate-fade-in-up">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Длинношерстная такса</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Шелковистая, длинная шерсть с блеском</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Элегантный силуэт, пропорциональное сложение</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Дружелюбный, уравновешенный характер</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Крепкое здоровье, проверенная генетика</span>
                </li>
              </ul>
            </Card>
            <Card className="bg-card border-border p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Жесткошерстная такса</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Жесткая, густая шерсть с подшерстком</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Мускулистое телосложение, выносливость</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Смелый, активный темперамент</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>Отличные охотничьи инстинкты</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Связь с нами</Badge>
              <h2 className="text-5xl font-bold mb-6">Получить консультацию</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Наши эксперты ответят на все вопросы о породе, уходе и доступных щенках
              </p>
            </div>
            <Card className="bg-card border-border p-10 animate-scale-in">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Петров" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="bg-background border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тема консультации</label>
                  <Input placeholder="Интересует щенок длинношерстной таксы" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите подробнее о ваших пожеланиях..."
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-10 pt-10 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Phone" size={24} className="text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                    <p className="font-medium">+7 (495) 123-45-67</p>
                  </div>
                  <div>
                    <Icon name="Mail" size={24} className="text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">info@elittaksa.ru</p>
                  </div>
                  <div>
                    <Icon name="MapPin" size={24} className="text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Адрес</p>
                    <p className="font-medium">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Элит Такса</h3>
              <p className="text-sm text-muted-foreground">Питомник премиум-класса © 2026</p>
            </div>
            <div className="flex gap-6">
              <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="MessageCircle" size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;