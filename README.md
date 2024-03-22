# React

- Parcel

- Dev Build
- Local server
- HMR = Hot Module Replacement
- File watching algo - written in c++
- Caching - faster Builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential bundling - support older browsers
- Diagnostics
- Error handling
- HTTPS
- Tree Shaking - remove unused code

- Namste Food
    1. Header
        1. Logo
        2. Nav items
    2. Body
        1. Search
        2. RestaurantContainer
            1. RestaurantCard
                1. Image
                2. Name, Rating, Cuisine, Delivery Time
    3. Footer
        1. Copyrights
        2. Links
        3. Address
        4. Contact info

- Two types of Export/Import:
    1. Default Export/Import
        1. export default Component
        2. import Component from "path";

    2. Named Export/Import
        1. export const Component
        2. import {Component} from "path";

- React Hooks
    1. Normal JS utility functions
        1. UseState() - Superpowerful state variables in React
        2. UseEffect()

- Reconciliation Algorithm (React Fiber)
    1. Eg: 7 ResCards => 3 filter cards

    2. Virtual DOM is a representation of actual DOM

- How Web apps / UI apps fetch data from backend :
    1. Web page Loads -> API -> Render
    2. Web page Loads -> Render -> API -> Render  => (Better UX)

- Whenever state variable update, react triggers a reconciliation cycle(re-render the component)

- 2 types of of Routing in web browser
    1. Client side routing
    2. Server side routing

- Prop Drilling : data used by the leaf which is send by parent/root by passing through intermediate parents. (Avoid prop drilling in large applications)

- React-Context : use to avoid prop drilling (like global objects)

- Redux:
    1. Writing data : event => dispatch(Action) => calls reducer(function) => modify slice of redux store
    2. Reading data : slice of Redux => selector => display (subscribing to the store)

- Redux Toolkit:
    1. Install @reduxjs/toolkit and reat-redux
    2. Build our store
    3. Connect our store to our app
    4. Slice(cartSlice)
    5. dispatch(action)
    6. selector

- Types of Testing
    1. Unit Testing
    2. Integration Testing
    3. End to end Testing (e2e testing)

- Setting up Testing in our app
    1. Install React Testing Library
    2. Install jest
    3. Install Babel dependencies
    4. Configure Babel
    5. Configure Parcel config file to disable default babel transpilation
    6. Jest configuration => npx jest --init
    7. Install jsdom library -> like a browser for testing
    8. Install @babel/preset-react -> to make JSX work in test cases
    9. Include @babel/preset-react in our babel config
    10. Install @testing-library/jest-dom
