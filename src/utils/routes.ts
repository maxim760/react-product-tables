import { MainPage } from "../pages/MainPage";

export enum RouteNames {
  Home = "/",
  Product = "/product/"
}

export const routes = [
  {path: RouteNames.Home, component: MainPage},
  {path: RouteNames.Product + ":id", component: MainPage},
]