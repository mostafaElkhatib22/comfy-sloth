export const formatPrice = (price) => {
  return Intl.NumberFormat("ar-US", {
    style: "currency",
    currency: "EGY",
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
