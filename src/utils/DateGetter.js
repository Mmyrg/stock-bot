function getRelativeDate(stockDateObject, lookBackFromToday) {
    const stockDateKeys = Object.keys(stockDateObject);

    return stockDateObject[stockDateKeys[lookBackFromToday]];
}

export {
  getRelativeDate
}