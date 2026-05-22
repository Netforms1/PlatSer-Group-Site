export type Product = {
  id: string;
  name: string;
  category: 'small' | 'medium' | 'large';
  protein: string;
  proteinPercent: number;
  weight: string;
  badges: string[];
  description: string;
  composition: string[];
  benefits: string[];
  accent: string;
  href: string;
};

export const products: Product[] = [
  {
    id: 'chicken-rice',
    name: 'Гипоаллергенный корм класса холистик с курицей и рисом',
    category: 'small',
    protein: 'Курица',
    proteinPercent: 43.8,
    weight: '2 кг',
    badges: ['Холистик', 'Гипоаллергенный', '0% глютена'],
    description:
      'Лёгкий белок и щадящий злак — идеально для собак с чувствительным пищеварением.',
    composition: [
      'Свежее мясо курицы',
      'Рис',
      'Льняное семя',
      'Пребиотики FOS / MOS',
      'Витаминно-минеральный премикс',
    ],
    benefits: ['Чувствительный ЖКТ', 'Здоровая кожа', 'Блестящая шерсть'],
    accent: 'from-amber-400/60 to-rose-500/40',
    href: '#product-chicken',
  },
  {
    id: 'turkey',
    name: 'Гипоаллергенный корм класса холистик с мясом индейки',
    category: 'small',
    protein: 'Индейка',
    proteinPercent: 37.5,
    weight: '2 кг',
    badges: ['Холистик', 'Гипоаллергенный', '0% глютена'],
    description:
      'Нежный диетический белок — мягкий старт для щенков и собак-аллергиков.',
    composition: [
      'Свежее мясо индейки',
      'Бурый рис',
      'Тыква',
      'Юкка Шидигера',
      'Омега-3 / Омега-6',
    ],
    benefits: ['Иммунитет', 'Лёгкое пищеварение', 'Контроль веса'],
    accent: 'from-emerald-300/60 to-teal-500/30',
    href: '#product-turkey',
  },
  {
    id: 'beef',
    name: 'Гипоаллергенный корм класса холистик с мясом',
    category: 'small',
    protein: 'Говядина',
    proteinPercent: 39.7,
    weight: '2 кг',
    badges: ['Холистик', 'Гипоаллергенный', '0% глютена'],
    description:
      'Богатый белком и железом рацион — для активных собак, которым нужна энергия.',
    composition: [
      'Свежая говядина',
      'Рис',
      'Свёкла',
      'Хондроитин и глюкозамин',
      'Витамин E',
    ],
    benefits: ['Мышечный тонус', 'Здоровые суставы', 'Сияющая шерсть'],
    accent: 'from-red-400/60 to-orange-500/40',
    href: '#product-beef',
  },
];

export const breedCategories = [
  { id: 'small', label: 'Для мелких пород', size: 'до 10 кг' },
  { id: 'medium', label: 'Для средних пород', size: '10–25 кг' },
] as const;
