// Assignment 1: Calculating Total Cost **************************************************************************************
// Write a TypeScript program that calculates the total cost of a shopping cart. The cart contains items with their prices.
// Use the number primitive type for prices and quantities. Start by creating the interface first.

interface Item {name : string; price : number; quantity : number}
const cart: Item[] = [];

while (true) {
    const itemName = prompt("Provide the item name: ");

    if (!itemName) {
        break;
    }

    const itemPrice = Number(prompt("Provide the item price"));
    if (!itemPrice) {
        break
    }
    const itemQuantity = Number(prompt("Provide the item quantity (integer): "));
    if (!itemQuantity) {
        break
    }

    const newItem: Item = {name: itemName, price: itemPrice, quantity: itemQuantity};
    cart.push(newItem);
}

const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);



// ASSIGNMENT 2 ***********************************************************************************************
// TODO: Implement the squareRoot function
// parameter num should be a number or null or undefined and the function shoud return a number or a string
function squareRoot(num: number | null | undefined): number | string {

    if (!num) {
        return 'Input is undefined or null'
    }

    if (isNaN(num)) {
        return 'Invalid input. Please enter a valid number.'
    }

    if (num < 0) {
        return 'Cannot calculate square root of a negative number'
    }

    const sqrt = Math.sqrt(num);
    return sqrt;
}

// Prompt the user to enter a number
const userInput = prompt("Enter a number: ")

const numberInput: number | undefined = userInput ? parseFloat(userInput) : undefined;

const result = squareRoot(numberInput);
console.log(result);


// ASSIGNMENT 3 ***********************************************************************************************
/* Create a type alias for a book with properties like title, author, and publication year. Define an object using this type alias and print its details.

Define a type alias named Book with properties title, author, and publicationYear, each having appropriate primitive types.
Prompt the user to enter details for a book (title, author, publication year) and create an object of type Book with the entered values.
Display the details of the book object to the user. */

export {}; // hack to ignore Book from task 4

type Book = {title: string; author: string; publicationYear: number}

function promptForBook(): Book {

    const bookTitle = prompt("Enter the book title: ") ?? "Unknown Title";
    const bookAuthor = prompt("Enter the author: ") ?? "Unknown Author";
    const bookPublicationYear = Number(prompt("Enter the publication year: ")) || 0;

    const book: Book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear
    };
    return book;
}

const bookDetails = promptForBook();

console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);


/* ASSIGNMENT 4 ***********************************************************************************************
Define a type alias for a product that can be either an electronic device with brand and model or a book with title and author. Create instances of this type alias for different products.

Define a type alias named Product that can represent either an ElectronicDevice or a Book.
Implement instances of the Product type for a sample electronic device and a book, prompting the user for details.
Display the details of each product, including the properties specific to the chosen type. */

export {}; // hack to ignore Book from task 3 (didn't work for me)
type ElectronicDevice = {type: "electronic"; brand: string; model: string}

type Book2 = {type: "book"; title: string; author: string}


type Product = ElectronicDevice | Book2

function createElectronicDevice(): ElectronicDevice {
    const brand = prompt("Enter the device brand: ") ?? "Unknown";
    const model = prompt("Enter the device model: ") ?? "Unknown";
    return {type: "electronic", brand, model};
}

function createBook(): Book2 {
    const title = prompt("Enter the book title: ") ?? "Unknown title";
    const author = prompt("Enter the book author: ") ?? "Unknown author"
    return {type: "book", title, author};
}

const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

function displayProductDetails(product: Product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    } else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);


// ASSIGNMENT 5 **************************************************************************************************
/*Write a function that takes a string or number and returns its length if it's a string or the square of the number if it's a number. Use union types to handle both cases.

Prompt the user to enter a value as either a string or a number.
Define a TypeScript function that takes a parameter of type string | number.
Use a type guard to check the actual type of the parameter.
If the parameter is a string, display its length. If it's a number, display its square.*/

// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * value;
    }
}

// Prompt the user to enter a value as either a string or a number
const userInput2 = prompt("Enter a string or number value: ")
const parsedValue : string | number = !isNaN(Number(userInput2)) ? Number(userInput2) : userInput2 as string;

// Call the lengthOrSquare function
const result2 = lengthOrSquare(parsedValue);
console.log(typeof result2);
console.log(result2);



// ASSIGNMENT 6 ***********************************************************************************************
/* Write a generic function that reverses the elements of an array. Test the function with arrays of numbers, strings, and other types.

Create a TypeScript function named reverseArray that takes an array as a parameter with a generic type parameter T.
Inside the function, reverse the elements of the array using a loop or the reverse method.
Return the reversed array.
Call the reverseArray function for each array type and display the reversed arrays. */

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const mixedArray: (string | number | boolean)[] = [true, 42, "hello", false];

const reverseArray = <T>(taulukko: T[]): T[] => {
    return taulukko.reverse()
}

console.log(reverseArray<number>(numberArray))
console.log(reverseArray<string>(stringArray))
console.log(reverseArray<(string | number | boolean)>(mixedArray))
