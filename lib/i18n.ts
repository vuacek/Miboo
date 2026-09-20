export type Lang = "cs" | "en"

type MenuItem = {
  name: string
  priceM?: string
  priceL?: string
  price?: string
  note?: string
}

type Category = {
  name: string
  tagline: string
  note?: string
  image: string
  items: MenuItem[]
}

type Review = {
  name: string
  rating: number
  text: string
}

export type Dictionary = {
  nav: {
    menu: string
    gallery: string
    hours: string
    location: string
    reviews: string
    visit: string
  }
  hero: {
    badge: string
    titleLead: string
    titleHighlight: string
    desc: string
    ctaMenu: string
    ctaLocation: string
    address: string
    hoursShort: string
    imageAlt: string
  }
  menu: {
    eyebrow: string
    title: string
    subtitle: string
    sizeM: string
    sizeL: string
    milkNote: string
    showMore: string
    showLess: string
    categories: Category[]
  }
  gallery: {
    eyebrow: string
    title: string
    subtitle: string
    alts: string[]
  }
  hours: {
    eyebrow: string
    title: string
    descPre: string
    descBold: string
    descPost: string
    days: string[]
    today: string
    range: string
  }
  location: {
    eyebrow: string
    title: string
    subtitle: string
    addressLabel: string
    address: string
    hoursLabel: string
    hoursValue: string
    navigate: string
    mapTitle: string
    mapLang: string
  }
  reviews: {
    eyebrow: string
    ratingSuffix: string
    title: string
    items: Review[]
    seeAll: string
    starsLabel: (rating: number) => string
  }
  footer: {
    tagline: string
    contactTitle: string
    menuTitle: string
    menuItems: string[]
    rights: string
  }
  toggle: {
    label: string
    next: Lang
  }
}

export const translations: Record<Lang, Dictionary> = {
  cs: {
    nav: {
      menu: "Menu",
      gallery: "Galerie",
      hours: "Otevírací doba",
      location: "Kde nás najdete",
      reviews: "Recenze",
      visit: "Navštivte nás",
    },
    hero: {
      badge: "Bubble tea & čerstvé nápoje v Praze",
      titleLead: "Osvěžení, které si",
      titleHighlight: "zamiluješ",
      desc: "V Miboo připravujeme poctivý bubble tea, svěží limonády, voňavou kávu a ovocné smoothie. Přijď si vychutnat kousek radosti do centra Prahy.",
      ctaMenu: "Prohlédnout menu",
      ctaLocation: "Kde nás najdete",
      address: "Husova 8, Praha 1",
      hoursShort: "Každý den 10:00–22:00",
      imageAlt: "Dva barevné bubble tea nápoje s tapiokovými perličkami",
    },
    menu: {
      eyebrow: "Naše menu",
      title: "Co si dáš dnes?",
      subtitle:
        "Každý nápoj připravujeme čerstvě na počkání. Vyber si svou oblíbenou kategorii.",
      sizeM: "M",
      sizeL: "L",
      milkNote: "Ovesné mléko +15 Kč · Bezlaktózové mléko +15 Kč",
      showMore: "Zobrazit celé menu",
      showLess: "Zobrazit méně",
      categories: [
        {
          name: "Winter Specials",
          tagline: "Zahřej se s naší zimní nabídkou",
          note: "Novinka",
          image: "/images/winter-specials.png",
          items: [
            { name: "Hot Chocolate", note: "Čokoláda · Mléko", priceM: "125 Kč", priceL: "140 Kč" },
            { name: "Strawberry Matcha", note: "Matcha · Jahoda · Mléko", priceM: "135 Kč", priceL: "155 Kč" },
            { name: "Caramel Latte", note: "Káva · Karamel · Mléko", priceM: "145 Kč", priceL: "165 Kč" },
          ],
        },
        {
          name: "Káva",
          tagline: "Poctivá zrna, připravená s láskou",
          image: "/images/coffee.png",
          items: [
            { name: "Iced Latte", priceM: "125 Kč", priceL: "140 Kč" },
            { name: "Cream Cheese Iced Latte", priceM: "140 Kč", priceL: "160 Kč" },
            { name: "Vietnamese Iced Coffee", priceM: "135 Kč", priceL: "160 Kč" },
            { name: "Cream Cheese Vietnamese Coffee", priceM: "155 Kč", priceL: "175 Kč" },
            { name: "Latte", price: "90 Kč", note: "350 ml" },
            { name: "Cappuccino", price: "85 Kč", note: "200 ml" },
            { name: "Americano", price: "80 Kč", note: "200 ml" },
            { name: "Espresso", price: "70 Kč", note: "40 ml" },
            { name: "Double Espresso", price: "95 Kč", note: "80 ml" },
          ],
        },
        {
          name: "Matcha",
          tagline: "Čistá matcha, čerstvá energie",
          image: "/images/matcha-latte.png",
          items: [
            { name: "Matcha Latte", priceM: "135 Kč", priceL: "150 Kč" },
            { name: "Strawberry Matcha", priceM: "140 Kč", priceL: "160 Kč" },
            { name: "Mango Matcha", priceM: "140 Kč", priceL: "160 Kč" },
            { name: "Matcha Latte Cream Cheese", priceM: "145 Kč", priceL: "160 Kč" },
          ],
        },
        {
          name: "Milk Tea",
          tagline: "Krémové mléčné čaje",
          note: "Tapioka zdarma",
          image: "/images/milk-tea.png",
          items: [
            { name: "Oreo Milk Tea Cream Cheese", priceM: "160 Kč", priceL: "175 Kč" },
            { name: "Brown Sugar Fresh Milk Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Oolong & Black Milk Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Taro Milk", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Matcha Milk Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Matcha Milk Tea Cream Cheese", priceM: "160 Kč", priceL: "175 Kč" },
          ],
        },
        {
          name: "Bubble Tea",
          tagline: "Zelený čaj s tapiokovými perličkami",
          note: "2 toppingy zdarma",
          image: "/images/bubble-tea.png",
          items: [
            { name: "Peach Lychee Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Lychee Green Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Strawberry Green Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Mango Green Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Peach Green Tea", priceM: "140 Kč", priceL: "155 Kč" },
            { name: "Passion Fruit Green Tea", priceM: "140 Kč", priceL: "155 Kč" },
          ],
        },
        {
          name: "Smoothies",
          tagline: "Husté ovocné smoothie plné vitaminů",
          image: "/images/smoothie.png",
          items: [
            { name: "Mango Passion Fruit", priceM: "145 Kč", priceL: "160 Kč" },
            { name: "Strawberry Banana", priceM: "145 Kč", priceL: "160 Kč" },
            { name: "Blueberry Banana", priceM: "145 Kč", priceL: "160 Kč" },
            { name: "Blueberry Raspberry", priceM: "145 Kč", priceL: "160 Kč" },
          ],
        },
        {
          name: "Iced Matcha",
          tagline: "Ledové matcha latte",
          image: "/images/matcha.png",
          items: [
            { name: "Matcha Latte with Coconut Jelly", priceM: "135 Kč", priceL: "150 Kč" },
            { name: "Strawberry Matcha Latte", priceM: "135 Kč", priceL: "150 Kč" },
            { name: "Mango Matcha Latte", priceM: "135 Kč", priceL: "150 Kč" },
            { name: "Matcha Latte Cream Cheese", priceM: "145 Kč", priceL: "160 Kč" },
          ],
        },
        {
          name: "Hot Drinks",
          tagline: "Zahřej se a udělej si radost",
          image: "/images/hot-drinks.png",
          items: [
            { name: "Hot Matcha Latte", priceM: "125 Kč", priceL: "140 Kč" },
            { name: "Hot Chocolate", priceM: "125 Kč", priceL: "140 Kč" },
            { name: "Vanilla Latte", priceM: "125 Kč", priceL: "140 Kč" },
            { name: "Hot Milk Tea", priceM: "125 Kč", priceL: "140 Kč" },
            { name: "Hot Matcha White Chocolate", priceM: "135 Kč", priceL: "150 Kč" },
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Nahlédněte k nám",
      subtitle:
        "Barevné nápoje, útulný interiér a spousta dobré nálady. Takhle to u nás v Miboo vypadá.",
      alts: [
        "Interiér obchodu Miboo",
        "Bubble tea v ruce u okna",
        "Nabídka nápojů shora",
        "Příprava bubble tea baristou",
        "Přátelé s nápoji v centru Prahy",
        "Smoothie a limonáda z čerstvého ovoce",
      ],
    },
    hours: {
      eyebrow: "Otevírací doba",
      title: "Otevřeno každý den",
      descPre: "Zastav se za námi kdykoliv od ",
      descBold: "10:00 do 22:00",
      descPost: " — sedm dní v týdnu, včetně víkendů a svátků.",
      days: ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"],
      today: "Dnes",
      range: "10:00 – 22:00",
    },
    location: {
      eyebrow: "Kde nás najdete",
      title: "Přijď na návštěvu",
      subtitle:
        "Najdeš nás v samém srdci Prahy, jen pár kroků od Staroměstského náměstí.",
      addressLabel: "Adresa",
      address: "Husova 8, 110 00 Praha 1",
      hoursLabel: "Otevírací doba",
      hoursValue: "Každý den 10:00 – 22:00",
      navigate: "Navigovat na Google Maps",
      mapTitle: "Mapa — Miboo, Husova 8, Praha 1",
      mapLang: "cs",
    },
    reviews: {
      eyebrow: "Hodnocení na Google",
      ratingSuffix: "na základě 240+ recenzí",
      title: "Co o nás říkají",
      items: [
        {
          name: "Tereza N.",
          rating: 5,
          text: "Nejlepší bubble tea v Praze! Brown sugar milk tea je naprostá pecka a personál moc milý.",
        },
        {
          name: "Jakub M.",
          rating: 5,
          text: "Skvělá limonáda s yuzu a super poloha v centru. Chodím sem pravidelně na kávu.",
        },
        {
          name: "Anna K.",
          rating: 4,
          text: "Smoothie jsou opravdu husté a čerstvé. Rychlá obsluha i o víkendu.",
        },
      ],
      seeAll: "Zobrazit všechny recenze na Google",
      starsLabel: (rating) => `Hodnocení ${rating} z 5`,
    },
    footer: {
      tagline: "Bubble tea, limonáda, káva a smoothie v srdci Prahy.",
      contactTitle: "Kontakt",
      menuTitle: "Menu",
      menuItems: ["Winter Specials", "Bubble Tea", "Milk Tea", "Matcha", "Smoothies", "Hot Drinks"],
      rights: "Všechna práva vyhrazena.",
    },
    toggle: {
      label: "EN",
      next: "en",
    },
  },
  en: {
    nav: {
      menu: "Menu",
      gallery: "Gallery",
      hours: "Opening hours",
      location: "Find us",
      reviews: "Reviews",
      visit: "Visit us",
    },
    hero: {
      badge: "Bubble tea & fresh drinks in Prague",
      titleLead: "Refreshment you will",
      titleHighlight: "love",
      desc: "At Miboo we craft proper bubble tea, crisp lemonades, aromatic coffee and fruity smoothies. Come enjoy a little bit of joy in the heart of Prague.",
      ctaMenu: "View the menu",
      ctaLocation: "Find us",
      address: "Husova 8, Prague 1",
      hoursShort: "Every day 10:00–22:00",
      imageAlt: "Two colorful bubble tea drinks with tapioca pearls",
    },
    menu: {
      eyebrow: "Our menu",
      title: "What will you have today?",
      subtitle:
        "Every drink is made fresh to order. Pick your favorite category.",
      sizeM: "M",
      sizeL: "L",
      milkNote: "Oat milk +15 CZK · Lactose-free milk +15 CZK",
      showMore: "Show full menu",
      showLess: "Show less",
      categories: [
        {
          name: "Winter Specials",
          tagline: "Warm up with our winter lineup",
          note: "New",
          image: "/images/winter-specials.png",
          items: [
            { name: "Hot Chocolate", note: "Chocolate · Milk", priceM: "125 CZK", priceL: "140 CZK" },
            { name: "Strawberry Matcha", note: "Matcha · Strawberry · Milk", priceM: "135 CZK", priceL: "155 CZK" },
            { name: "Caramel Latte", note: "Coffee · Caramel · Milk", priceM: "145 CZK", priceL: "165 CZK" },
          ],
        },
        {
          name: "Coffee",
          tagline: "Honest beans, prepared with love",
          image: "/images/coffee.png",
          items: [
            { name: "Iced Latte", priceM: "125 CZK", priceL: "140 CZK" },
            { name: "Cream Cheese Iced Latte", priceM: "140 CZK", priceL: "160 CZK" },
            { name: "Vietnamese Iced Coffee", priceM: "135 CZK", priceL: "160 CZK" },
            { name: "Cream Cheese Vietnamese Coffee", priceM: "155 CZK", priceL: "175 CZK" },
            { name: "Latte", price: "90 CZK", note: "350 ml" },
            { name: "Cappuccino", price: "85 CZK", note: "200 ml" },
            { name: "Americano", price: "80 CZK", note: "200 ml" },
            { name: "Espresso", price: "70 CZK", note: "40 ml" },
            { name: "Double Espresso", price: "95 CZK", note: "80 ml" },
          ],
        },
        {
          name: "Matcha",
          tagline: "Pure matcha, fresh energy",
          image: "/images/matcha-latte.png",
          items: [
            { name: "Matcha Latte", priceM: "135 CZK", priceL: "150 CZK" },
            { name: "Strawberry Matcha", priceM: "140 CZK", priceL: "160 CZK" },
            { name: "Mango Matcha", priceM: "140 CZK", priceL: "160 CZK" },
            { name: "Matcha Latte Cream Cheese", priceM: "145 CZK", priceL: "160 CZK" },
          ],
        },
        {
          name: "Milk Tea",
          tagline: "Creamy milk teas",
          note: "Free tapioca",
          image: "/images/milk-tea.png",
          items: [
            { name: "Oreo Milk Tea Cream Cheese", priceM: "160 CZK", priceL: "175 CZK" },
            { name: "Brown Sugar Fresh Milk Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Oolong & Black Milk Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Taro Milk", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Matcha Milk Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Matcha Milk Tea Cream Cheese", priceM: "160 CZK", priceL: "175 CZK" },
          ],
        },
        {
          name: "Bubble Tea",
          tagline: "Green tea with tapioca pearls",
          note: "2 free toppings",
          image: "/images/bubble-tea.png",
          items: [
            { name: "Peach Lychee Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Lychee Green Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Strawberry Green Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Mango Green Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Peach Green Tea", priceM: "140 CZK", priceL: "155 CZK" },
            { name: "Passion Fruit Green Tea", priceM: "140 CZK", priceL: "155 CZK" },
          ],
        },
        {
          name: "Smoothies",
          tagline: "Thick fruit smoothies packed with vitamins",
          image: "/images/smoothie.png",
          items: [
            { name: "Mango Passion Fruit", priceM: "145 CZK", priceL: "160 CZK" },
            { name: "Strawberry Banana", priceM: "145 CZK", priceL: "160 CZK" },
            { name: "Blueberry Banana", priceM: "145 CZK", priceL: "160 CZK" },
            { name: "Blueberry Raspberry", priceM: "145 CZK", priceL: "160 CZK" },
          ],
        },
        {
          name: "Iced Matcha",
          tagline: "Iced matcha lattes",
          image: "/images/matcha.png",
          items: [
            { name: "Matcha Latte with Coconut Jelly", priceM: "135 CZK", priceL: "150 CZK" },
            { name: "Strawberry Matcha Latte", priceM: "135 CZK", priceL: "150 CZK" },
            { name: "Mango Matcha Latte", priceM: "135 CZK", priceL: "150 CZK" },
            { name: "Matcha Latte Cream Cheese", priceM: "145 CZK", priceL: "160 CZK" },
          ],
        },
        {
          name: "Hot Drinks",
          tagline: "Warm up and feel good",
          image: "/images/hot-drinks.png",
          items: [
            { name: "Hot Matcha Latte", priceM: "125 CZK", priceL: "140 CZK" },
            { name: "Hot Chocolate", priceM: "125 CZK", priceL: "140 CZK" },
            { name: "Vanilla Latte", priceM: "125 CZK", priceL: "140 CZK" },
            { name: "Hot Milk Tea", priceM: "125 CZK", priceL: "140 CZK" },
            { name: "Hot Matcha White Chocolate", priceM: "135 CZK", priceL: "150 CZK" },
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Take a peek inside",
      subtitle:
        "Colorful drinks, a cozy interior and plenty of good vibes. This is what Miboo looks like.",
      alts: [
        "Interior of the Miboo shop",
        "Bubble tea in hand by the window",
        "Drinks lineup from above",
        "Barista preparing bubble tea",
        "Friends with drinks in central Prague",
        "Smoothie and lemonade made from fresh fruit",
      ],
    },
    hours: {
      eyebrow: "Opening hours",
      title: "Open every day",
      descPre: "Drop by anytime from ",
      descBold: "10:00 to 22:00",
      descPost: " — seven days a week, weekends and holidays included.",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      today: "Today",
      range: "10:00 – 22:00",
    },
    location: {
      eyebrow: "Find us",
      title: "Come visit",
      subtitle:
        "You'll find us right in the heart of Prague, just a few steps from the Old Town Square.",
      addressLabel: "Address",
      address: "Husova 8, 110 00 Prague 1",
      hoursLabel: "Opening hours",
      hoursValue: "Every day 10:00 – 22:00",
      navigate: "Get directions on Google Maps",
      mapTitle: "Map — Miboo, Husova 8, Prague 1",
      mapLang: "en",
    },
    reviews: {
      eyebrow: "Google rating",
      ratingSuffix: "based on 240+ reviews",
      title: "What people say about us",
      items: [
        {
          name: "Tereza N.",
          rating: 5,
          text: "The best bubble tea in Prague! The brown sugar milk tea is amazing and the staff is super friendly.",
        },
        {
          name: "Jakub M.",
          rating: 5,
          text: "Great yuzu lemonade and a perfect spot in the center. I come here regularly for coffee.",
        },
        {
          name: "Anna K.",
          rating: 4,
          text: "The smoothies are really thick and fresh. Fast service even on weekends.",
        },
      ],
      seeAll: "See all reviews on Google",
      starsLabel: (rating) => `Rating ${rating} out of 5`,
    },
    footer: {
      tagline: "Bubble tea, lemonade, coffee and smoothies in the heart of Prague.",
      contactTitle: "Contact",
      menuTitle: "Menu",
      menuItems: ["Winter Specials", "Bubble Tea", "Milk Tea", "Matcha", "Smoothies", "Hot Drinks"],
      rights: "All rights reserved.",
    },
    toggle: {
      label: "CS",
      next: "cs",
    },
  },
}
