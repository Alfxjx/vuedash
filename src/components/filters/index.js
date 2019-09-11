import { formatDate } from "./date";

export const dashFilters = {
  install: Vue => {
    Vue.filter("formatDate", formatDate);
  }
};
