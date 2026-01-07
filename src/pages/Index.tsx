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
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
              Элит Такса
            </h1>
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
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/chatgpt"
                className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center gap-2 shadow-md"
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
        className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10" />
        <div className="container mx-auto px-6 text-center z-20 animate-fade-in-up">
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 text-base px-6 py-2 font-medium">
            Питомник премиум-класса
          </Badge>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tight text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Благородство
            <br />
            <span className="text-primary">в каждой линии</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto leading-relaxed">
            Разведение элитных длинношерстных и жесткошерстных такс с безупречной родословной
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('puppies')}
            >
              Выбрать щенка
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5 px-10 py-7 text-lg shadow-md"
              onClick={() => scrollToSection('contact')}
            >
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">О питомнике</Badge>
              <h2 className="text-6xl font-bold mb-8 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
                Традиции качества с 2005 года
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наш питомник специализируется исключительно на длинношерстных и жесткошерстных таксах. Мы создали
                уникальные племенные линии, объединяющие лучших представителей породы из Европы и России.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Каждая собака нашего питомника - это результат многолетней селекционной работы, направленной на
                сохранение породных качеств, здоровья и аристократичного характера.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Чемпионов</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>200+</div>
                  <div className="text-sm text-muted-foreground font-medium">Щенков</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>18</div>
                  <div className="text-sm text-muted-foreground font-medium">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 animate-scale-in">
              <div className="space-y-5">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://cdn.poehali.dev/projects/59a420c1-6aa6-47f9-92a8-673796ed956b/files/c4b0ef30-9400-4a15-8145-866576fb5ae6.jpg"
                    alt="Такса"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-5 pt-10">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://cdn.poehali.dev/projects/59a420c1-6aa6-47f9-92a8-673796ed956b/files/eb02c09f-38be-4f2c-befa-7b928721cc61.jpg"
                    alt="Такса"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="breeding" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">Племенные собаки</Badge>
            <h2 className="text-6xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Наши производители
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Чемпионы с безупречной родословной и выдающимися породными качествами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {breedingDogs.map((dog, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-fade-in-up rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                    {dog.name}
                  </h3>
                  <p className="text-primary text-sm mb-6 font-medium">{dog.title}</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Порода:</span>
                      <span className="font-semibold text-foreground">{dog.breed}</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Окрас:</span>
                      <span className="font-semibold text-foreground">{dog.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Достижения:</span>
                      <span className="font-semibold text-foreground">{dog.achievements}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="puppies" className="py-32 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">Актуальные пометы</Badge>
            <h2 className="text-6xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Доступные щенки
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Элитные щенки с документами РКФ/FCI от чемпионов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border p-10 animate-fade-in-up hover:shadow-xl transition-shadow rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-28 h-28 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="Heart" size={48} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Помет "A"</h3>
                  <p className="text-muted-foreground mb-5 text-base leading-relaxed">
                    Длинношерстные таксы, родители - чемпионы России
                  </p>
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={18} className="text-primary" />
                      <span className="font-medium">Дата рождения: 15.12.2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Users" size={18} className="text-primary" />
                      <span className="font-medium">Доступно: 2 щенка</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="bg-card border-border p-10 animate-fade-in-up hover:shadow-xl transition-shadow rounded-2xl" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-6">
                <div className="w-28 h-28 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="Sparkles" size={48} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Помет "B"</h3>
                  <p className="text-muted-foreground mb-5 text-base leading-relaxed">
                    Жесткошерстные таксы, титулованные родители
                  </p>
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={18} className="text-primary" />
                      <span className="font-medium">Дата рождения: 05.01.2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Users" size={18} className="text-primary" />
                      <span className="font-medium">Доступно: 3 щенка</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
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
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">Галерея</Badge>
            <h2 className="text-6xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Наши выпускники
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Гордость питомника - собаки с идеальным экстерьером
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[...breedingDogs, ...breedingDogs].map((dog, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">Отзывы</Badge>
            <h2 className="text-6xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Что говорят наши клиенты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Счастливые владельцы наших щенков делятся впечатлениями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border p-10 animate-fade-in-up hover:shadow-xl transition-shadow rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={22} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-base">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.city}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="standards" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">Стандарты породы</Badge>
            <h2 className="text-6xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Таксы премиум-класса
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Характеристики идеальных представителей породы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border p-10 animate-fade-in-up hover:shadow-xl transition-shadow rounded-2xl">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="Award" size={40} className="text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                  Длинношерстная такса
                </h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Шелковистая, длинная шерсть с блеском</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Элегантный силуэт, пропорциональное сложение</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Дружелюбный, уравновешенный характер</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Крепкое здоровье, проверенная генетика</span>
                </li>
              </ul>
            </Card>
            <Card className="bg-card border-border p-10 animate-fade-in-up hover:shadow-xl transition-shadow rounded-2xl" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="Shield" size={40} className="text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                  Жесткошерстная такса
                </h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Жесткая, густая шерсть с подшерстком</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Мускулистое телосложение, выносливость</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Смелый, активный темперамент</span>
                </li>
                <li className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-base">Отличные охотничьи инстинкты</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">Связь с нами</Badge>
              <h2 className="text-6xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
                Получить консультацию
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Наши эксперты ответят на все вопросы о породе, уходе и доступных щенках
              </p>
            </div>
            <Card className="bg-card border-border p-12 animate-scale-in hover:shadow-xl transition-shadow rounded-2xl">
              <form className="space-y-7">
                <div className="grid md:grid-cols-2 gap-7">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground">Ваше имя</label>
                    <Input placeholder="Иван Петров" className="bg-background border-border h-12 text-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-foreground">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="bg-background border-border h-12 text-base" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-foreground">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="bg-background border-border h-12 text-base" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-foreground">Тема консультации</label>
                  <Input placeholder="Интересует щенок длинношерстной таксы" className="bg-background border-border h-12 text-base" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-foreground">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите подробнее о ваших пожеланиях..."
                    rows={6}
                    className="bg-background border-border resize-none text-base"
                  />
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-7 text-lg font-semibold shadow-lg">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-12 pt-12 border-t border-border">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Icon name="Phone" size={28} className="text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Телефон</p>
                    <p className="font-semibold text-foreground text-lg">+7 (495) 123-45-67</p>
                  </div>
                  <div>
                    <Icon name="Mail" size={28} className="text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Email</p>
                    <p className="font-semibold text-foreground text-lg">info@elittaksa.ru</p>
                  </div>
                  <div>
                    <Icon name="MapPin" size={28} className="text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Адрес</p>
                    <p className="font-semibold text-foreground text-lg">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-border bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Элит Такса
              </h3>
              <p className="text-sm text-muted-foreground">Питомник премиум-класса © 2026</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={22} className="text-primary" />
              </button>
              <button className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={22} className="text-primary" />
              </button>
              <button className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Icon name="MessageCircle" size={22} className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
