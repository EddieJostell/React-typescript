export interface PortfolioItem {
  id: number;
  title: string;
  tech: string;
  link: string;
  img: string;
}

export const myProjects: PortfolioItem[] = [
  {
    id: 1,
    title: "COOP.se",
    tech: "#HTML #CSS/LESS #jQuery #TypeScript #ASP.NET/MVC #EPiServer",
    link: "https://www.coop.se",
    img: "img/coop.JPG"
  },
  {
    id: 2,
    title: "Cloud9 Reborn",
    tech: "#HTML #CSS/SASS #JavaScript/jQuery #AJAX",
    link: "https://eddiejostell.github.io/Cloud9-Reborn/",
    img: "img/cloud9.JPG"
  },
  {
    id: 3,
    title: "News Hub",
    tech: "#HTML #CSS/SASS #JavaScript/jQuery #AJAX",
    link: "https://eddiejostell.github.io/News-Hub/",
    img: "img/news-hub.JPG"
  },
  {
    id: 4,
    title: "MovieDatabase",
    tech: "#HTML #CSS/SASS #JavaScript",
    link: "https://eddiejostell.github.io/MovieDatabase/",
    img: "img/moviedatabase.JPG"
  },
  {
    id: 5,
    title: "TODO-APP",
    tech: "#HTML #CSS #JavaScript",
    link: "https://eddiejostell.github.io/todo-app/",
    img: "img/todo.JPG"
  },
  {
    id: 6,
    title: "FOOD-APP",
    tech: "#HTML #CSS #JavaScript",
    link: "https://eddiejostell.github.io/food-app/",
    img: "img/food-app.JPG"
  }
];

export interface QuoteItem {
  id: number;
  quote: string;
  author: string;
}

export const quoteInfo: QuoteItem[] = [
  {
    id: 1,
    quote: "A tree falls in the forest, no one puts it on YouTube, did it ever really happen?",
    author:"Bodhi Point Break 2015"
  },
  {
    id: 2,
    quote: "Reality can never live up to that fantasy that you have in your head. You'll be much happier if you accept the fact that real life is never perfect",
    author: "Unknown"
  },
  {
    id: 3,
    quote: "Of all the things I've lost I miss my mind the most.",
    author: "Ozzy Osburne."
  },
  {
    id: 4,
    quote: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    author: "Bruce Lee."
  },
  {
    id: 5,
    quote: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare."
  },
  {
    id: 6,
    quote: "We need fantasy to survive reality.",
    author: "Lady Gaga."
  },
  {
    id: 7,
    quote: "I am become death, the destroyer of worlds.",
    author: "J. Robert Oppenheimer."
  }
]



