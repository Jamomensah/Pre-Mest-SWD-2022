// really implementing the react router;
// create different components for your pages
// import all components to the App.js file
// import BrowserRouter from react-router-dom in the index.js file
// import {Routes, Route } from react-router-dom in the App.js file
// to render the components in the App.js file, wrap <Routes><Routes/> around the individual Route created
// nb; the individual Routes are the vsrious components
// so;
// function App(){
//     return(
//  <div>
//       <Routes>
//          <Route path="/" element={ <Home/> }/> (the "/" sets the component to the first page by default)
//          <Route path="about" element={ <About/> }/>
//          <Route path="blog" element={ <Blog/> }/>
//          <Route path="contact" element={ <Contact/> }/>
//          <Route path="*" element={ <Error/> }/> (the "*" means that if another item is clicked on which isnt part of the components rendered, it should take you to the error page)
//       </Routes>
//  </div>
// );
// }

// the path specifys the url path that should render the component
// 
// Routing means if someone visits a path, it should display its corresponding component
// however, a navigation is when the browser shows the components to be clicked on

// to navigate;
// use anchor tags. so;
// 
// import Routes from 
// const Header(){
//     return(

//     )
// }

// the header component should be outside the routes
// nb; anytime you want a component to render on every page, it has to be placed outside the routes
// NB; websites built in react shouldnt refresh when a link is clicked on

// TO IMPLEMENT NAVIGATION USING THE REACT WAY;
// import link from the react router dom; import {Link} from "react-router-dom"
// use the <Link></Link> for the navigation instead of the anchor tags. its attribute is "to"