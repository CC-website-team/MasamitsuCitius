export interface MenuItem {
  id: number;
  title: string;
  path: string;
  newTab?: boolean;
}

const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Services",
    path: "/solutions",
  },
  {
    id: 4,
    title: "Insights",
    path: "/insights",
  },
];

export default menuData;
