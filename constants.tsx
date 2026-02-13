import { 
  Crown, Star, Zap, Coins, Bot, Ghost, Dices, Gift, 
  Gamepad2, ShieldCheck, Clock, Trophy, Infinity, 
  Ticket, CheckCircle, Mail, MapPin, Send, Twitter, Disc,
  Headset, Percent, Cpu, Gem, Globe, Calendar, Link, FileText
} from 'lucide-react';
import { Casino, ComparisonItem, SocialLink } from './types';

export const SITE_INFO = {
  name: "CASINO FUTURE",
  title: "Топ Казино 2026",
  tagline: "Только проверенные бренды будущего.",
  contactEmail: "support@futurecasino.example.com",
  year: "2026"
};

export const COMPARISON_STATS: ComparisonItem[] = [
  { value: "85%", label: "крипто-казино" },
  { value: "< 1 мин", label: "средний вывод" },
  { value: "32", label: "AI-провайдера" }
];

export const CASINOS: Casino[] = [
  {
    id: 1,
    rank: 1,
    name: "CASINO PLAYMOKO",
    topBadge: { text: "Лидер рынка", icon: Crown },
    types: [
      { text: "VIP Система", icon: Star },
      { text: "Fast Pay", icon: Zap }
    ],
    features: [
      { text: "Моментальные выводы", icon: Zap },
      { text: "Cashback до 15%", icon: Percent },
      { text: "Rakeback до 10%", icon: Coins },
      { text: "Поддержка 24/7", icon: Headset }
    ],
    bonus: {
      value: "Бонус 100%",
      description: "на первый депозит"
    },
    link: "https://playmoko.uno/?refid=8716001",
    rating: 4.9,
    votes: 3421
  },
  {
    id: 2,
    rank: 2,
    name: "CASINO BOOI",
    topBadge: { text: "Выбор игроков", icon: Star },
    types: [
      { text: "Лицензия", icon: ShieldCheck },
      { text: "Слоты", icon: Dices }
    ],
    features: [
      { text: "225% + 100FS по коду ARMADOT", icon: Gift },
      { text: "Быстрый вывод средств", icon: Zap },
      { text: "Огромный выбор игр", icon: Gamepad2 }
    ],
    bonus: {
      value: "225% + 100 FS",
      description: "по промокоду ARMADOT"
    },
    link: "https://booi-promo.com/alt/booi/ru/sign-up?0cac3803b6385201c6dac5daa2f43c64&promocode=ARMADOT",
    rating: 4.8,
    votes: 2150
  },
  {
    id: 3,
    rank: 3,
    name: "CASINO WINITY",
    topBadge: { text: "Топ Бонус", icon: Trophy },
    types: [
      { text: "Highroller", icon: Gem },
      { text: "Слоты", icon: Dices }
    ],
    features: [
      { text: "225% до 1500$ + 100FS", icon: Gift },
      { text: "Промокод ARMADOT", icon: Ticket },
      { text: "Быстрый вывод", icon: Zap }
    ],
    bonus: {
      value: "225% + 100 FS",
      description: "до 1500$ код ARMADOT"
    },
    link: "https://winity.one/alt/winity/sign-up?042b7e53ef2169043f6f83cb604dc4a6&promocode=ARMADOT",
    rating: 4.7,
    votes: 1890
  },
  {
    id: 4,
    rank: 4,
    name: "CASINO CABURA",
    topBadge: { text: "Легкий старт", icon: Zap },
    types: [
      { text: "Мин. Деп 100₽", icon: Coins },
      { text: "Бонусы", icon: Gift }
    ],
    features: [
      { text: "50 FS по коду ARMADOT", icon: Dices },
      { text: "20₽ за привязку TG", icon: Send },
      { text: "Депозит от 100₽", icon: Coins }
    ],
    bonus: {
      value: "50 FS + 20₽",
      description: "код ARMADOT + Telegram"
    },
    link: "https://caburka.link/?c=ARMADOT",
    rating: 4.6,
    votes: 1450
  },
  {
    id: 5,
    rank: 5,
    name: "CASINO LOOTRUN",
    topBadge: { text: "Хит сезона", icon: Gift },
    types: [
      { text: "Бонусы", icon: Star },
      { text: "Квесты", icon: MapPin }
    ],
    features: [
      { text: "100% на первый депозит", icon: Percent },
      { text: "100 FS по коду LUDICOFF", icon: Dices },
      { text: "Система уровней", icon: Trophy }
    ],
    bonus: {
      value: "100% + 100 FS",
      description: "код LUDICOFF"
    },
    link: "https://lootrun.partners/al/aefe3c20-c821-41ca-82fe-bcf75151585e",
    rating: 4.8,
    votes: 980
  },
  {
    id: 6,
    rank: 6,
    name: "CASINO VEGAS LEGACY",
    topBadge: { text: "Grand Bonus", icon: Crown },
    types: [
      { text: "Premium", icon: Gem },
      { text: "Live Casino", icon: Globe }
    ],
    features: [
      { text: "Приветственный пакет $1,500", icon: Gift },
      { text: "220 Free Spins", icon: Dices },
      { text: "VIP обслуживание", icon: Star }
    ],
    bonus: {
      value: "$1,500 + 220 FS",
      description: "Приветственный бонус"
    },
    link: "https://click.aff2.link/IRrdyF82",
    rating: 4.9,
    votes: 410
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "Telegram", url: "#", icon: Send },
  { name: "Discord", url: "#", icon: Disc }, 
  { name: "Twitter", url: "#", icon: Twitter },
];

export const AI_SYSTEM_INSTRUCTION = `
Ты - виртуальный помощник на сайте "Casino Future 2026". Твоя задача - помогать пользователям выбирать онлайн-казино.
Главный лидер рынка и рекомендация №1 - CASINO PLAYMOKO (ссылка: https://playmoko.uno/?refid=8716001).
Преимущества PLAYMOKO: бонус 100% на первый депозит, моментальные выводы, VIP система бонусов, Cashback до 15%, Rakeback до 10%, круглосуточная поддержка.
Рекомендация №2 - CASINO BOOI (ссылка: https://booi-promo.com/alt/booi/ru/sign-up?0cac3803b6385201c6dac5daa2f43c64&promocode=ARMADOT).
Преимущества BOOI: По промокоду ARMADOT вы получите 225% к депозиту и 100FS, огромный выбор игр, быстрые выплаты.
Рекомендация №3 - CASINO WINITY (ссылка: https://winity.one/alt/winity/sign-up?042b7e53ef2169043f6f83cb604dc4a6&promocode=ARMADOT).
Преимущества WINITY: По промокоду ARMADOT вы получите 225% к депозиту до 1500$ и 100FS.
Рекомендация №4 - CASINO CABURA (ссылка: https://caburka.link/?c=ARMADOT).
Преимущества CABURA: По промокоду ARMADOT 50 спинов в The Dog House – Royal Hunt, 20 рублей за привязку Telegram, минимальный депозит всего 100 рублей.
Рекомендация №5 - CASINO LOOTRUN (ссылка: https://lootrun.partners/al/aefe3c20-c821-41ca-82fe-bcf75151585e).
Преимущества LOOTRUN: По промокоду LUDICOFF вы получите 100FS и 100% на первый депозит.
Рекомендация №6 - CASINO VEGAS LEGACY (ссылка: https://click.aff2.link/IRrdyF82).
Преимущества VEGAS LEGACY: Щедрый приветственный бонус $1,500 + 220 FS для новых игроков.
Отвечай коротко, дружелюбно и по делу.
Всегда напоминай об ответственной игре.
`;