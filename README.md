# About You Coding Task (Frontend)

This is a test task within our technical recruiting process.

Please provide as discussed the results in 7 calendar days.
In doubt of technical issues you can send an email with your questions.

Please share your results **PRIVATELY.** Do not upload your code as a public repository.
You can use Bitbucket for that, or just send us a ZIP archive with your code.

## Develop UI

Develop fully working UI based on [design](https://zpl.io/scene/Z2pTPM8).

Mock 30 or more products with different data by your own (static JSON is enough) to demonstrate work of "Load more" and filters.
Be sure there are enough products for both genders.

By default user sees first 9 products. Clicking the "Load more" button will show 9 more products based on current filters.
Filter changes should immediately apply to the products list, scroll the page to the top and reset "Load more" state.

### Required tech stack:

-   Webpack 3
-   ES6+
-   Css modules or styled components (or any css-in-js solution)
-   ReactJS (+ Redux, if you need it)

### Requirements for markup:

-   Browser support: IE 11+ and 2 last versions of other browsers
-   Pixel perfect
-   Should work fine for at least 786px wide

### Requirements for UI and markup:

1.  Gender selector - use radio buttons
2.  Sorting — customized select element (third party, or your own solution)
3.  Product image should be centered vertically and horizontally inside image area
4.  When hovering on product show shadow with animation
5.  By default "add to wishlist" is not visible. Show it when user hovers on product or has added product to wishlist.
6.  "Add to wishlist" should be clickable. Active state — heart filled with red.
7.  Keep added to wishlist state even after the reload of the page
8.  Implementing not mentioned states for buttons and other elements is up to you

### Filters logic:

1.  Man/Woman switch filters data by gender
2.  Sorting
    -   by price ASC/DESC
    -   by rating ASC/DESC (we don't show rating in UI, but it should be in your product data)

**_Good luck!_**

# Steps to build the Application

#### Install Dependencies

`yarn`

#### Build the Application

`yarn build`

#### Start the development Server

`yarn dev`

#### View the application on the following URL

http://localhost:8080/

### Live Demo

https://shashankkeshava.github.io/about-you-test/
