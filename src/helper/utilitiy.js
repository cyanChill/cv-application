import { format } from "date-fns";

const getTermDate = (date) => {
  return format(new Date(date), "MMMM yyyy");
};

export { getTermDate };
