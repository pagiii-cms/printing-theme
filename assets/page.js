import { Application } from "@hotwired/stimulus";
import MainMenuController from "./controllers/main_menu_controller";
import SearchController from "./controllers/search_controller";
import SubmenuController from "./controllers/submenu_controller";
const app = Application.start();
app.register("main-menu", MainMenuController);
app.register("search", SearchController);
app.register("submenu", SubmenuController);
