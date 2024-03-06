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
    Header
        Logo
        Nav items
    Body
        Search
        RestaurantContainer
            RestaurantCard
                Image
                Name, Rating, Cuisine, Delivery Time
    Footer
        Copyrights
        Links
        Address
        Contact info

- Two types of Export/Import:
    Default Export/Import
        export default Component
        import Component from "path";

    Named Export/Import
        export const Component
        import {Component} from "path";

- React Hooks
    Normal JS utility functions
        UseState() - Superpowerful state variables in React
        UseEffect()

- Reconciliation Algorithm (React Fiber)
    Eg: 7 ResCards => 3 filter cards

    Virtual DOM is a representation of actual DOM

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
    Writing data : event => dispatch(Action) => calls reducer(function) => modify slice of redux store
    Reading data : slice of Redux => selector => display (subscribing to the store)

- Redux Toolkit:
    Install @reduxjs/toolkit and reat-redux
    Build our store
    Connect our store to our app
    Slice(cartSlice)
    dispatch(action)
    selector
