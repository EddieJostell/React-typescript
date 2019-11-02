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

export interface ContactItem {
  id: number;
  medium: string;
  link: string;
  img: string;

}

export const contactInfo: ContactItem[] = [
  {
  id: 1,
  medium: "Phone number",
  link: "+46 73 026 30 92",
  img: "",
 
},
{
  id: 2,
  medium: "Github",
  link: "https://github.com/EddieJostell",
  img: "",
},
{
  id: 3,
  medium: "Email",
  link: "eddie.jostell@gmail.com",
  img: "",
},
{
  id: 4,
  medium: "LinkedIn",
  link: "img/linkedin_qr.jpg",
  img: "",
}
];



