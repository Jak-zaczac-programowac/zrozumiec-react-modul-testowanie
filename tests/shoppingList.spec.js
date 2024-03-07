import { addToShoppingList, getNewShoppingList } from "../src/shoppingList";

test("Adding to shopping list works", () => {
    const shoppingList = getNewShoppingList();
    const newItem = "jabłka";
    addToShoppingList(shoppingList, newItem);

    expect(shoppingList).toContain(newItem);
});

test("Single item can be added only once", () => {
    const shoppingList = getNewShoppingList();
    const newItem = "makaron";

    addToShoppingList(shoppingList, newItem);
    addToShoppingList(shoppingList, newItem);
    addToShoppingList(shoppingList, newItem);

    expect(shoppingList.length).toEqual(1);
    expect(shoppingList[0]).toEqual(newItem);
});
