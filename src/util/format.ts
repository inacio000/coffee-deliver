export const { format: formatedPrice } = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
});