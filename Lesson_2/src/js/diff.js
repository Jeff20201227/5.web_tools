import { DateTime } from "../modules/luxon.js";

export const diffDate = (firstDate, secondDate) => {
  const firstDateDT = DateTime.fromISO(firstDate);
  const secondDateDT = DateTime.fromISO(secondDate);

  return secondDateDT.diff(firstDateDT, ["years", "months", "days"]).toObject();
};

export const diffToHTML = (diff) =>
  `
  <span>
    ${diff.years ? "Лет: " + diff.years : ""}
    ${diff.months ? "Месяцев: " + diff.months : ""}
    ${diff.days ? "Дней: " + diff.days : ""}
  </span>
  `;
