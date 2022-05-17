import {
  navComponent,
  filterComponent,
  sortComponent,
  pointEditorComponent,
  infoComponent,
  pointComponent,
  pointsListComponent,
} from "./components/components";
import { FILTERS } from "./mock/filters";
import { SORTS } from "./mock/sorts";
import { POINT } from "./mock/events";

const tripMain = document.querySelector(".trip-main");

const tripControls = document.querySelector(".trip-controls__filters");
const tripEvents = document.querySelector(".trip-events");

const render = (container, adjHtml, position = "beforeEnd") => {
  if (container) {
    container.insertAdjacentHTML(position, adjHtml);
  } else {
    console.log(null);
  }
};

render(tripMain, infoComponent(), "afterBegin");
render(tripControls, navComponent());
render(tripControls, filterComponent(FILTERS));
render(tripEvents, sortComponent(SORTS), "afterBegin");
render(tripEvents, pointsListComponent(["none"])); // props is events and loading state

const tripEventsList = document.querySelector(".trip-events__list");

render(tripEventsList, pointEditorComponent());
render(tripEventsList, pointComponent(POINT));
