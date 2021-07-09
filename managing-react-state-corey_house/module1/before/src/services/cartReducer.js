export default function cartReducer(cart, action) {
    switch (action.type) {
        case "empty":
            return []

        case "add": {
            const { id, sku } = action;
            const isItemInCart = cart.find((x) => x.sku === sku)
            if (isItemInCart) {
                return cart.map((i) => {
                    return i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
                })
            } else {
                return [...cart, { id, sku, quantity: 1 }]
            }
        }

        case "update": {
            const { quantity, sku } = action
            return (quantity === 0)
                ? cart.filter((x) => (x.sku !== sku))
                : cart.map((x) => (x.sku === sku ? { ...x, quantity } : x))
        }

        default:
            throw new Error("Unhandled action type passed.")

    }
}