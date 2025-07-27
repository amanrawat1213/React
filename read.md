React is a popular JavaScript library for building user interfaces, chosen for several key reasons:
Component-Based Architecture:
React promotes building UIs with reusable, isolated components. This modularity simplifies development, improves code organization, and makes it easier to maintain and scale applications.
Virtual DOM:
React utilizes a Virtual DOM, an in-memory representation of the actual DOM. This allows React to efficiently update and render only the necessary parts of the UI when data changes, leading to improved performance, especially in complex applications.
Declarative Syntax:
React's declarative approach makes UI code more predictable and easier to understand. Developers describe what the UI should look like based on the current state, and React handles the updates to achieve that state.
Strong Community and Ecosystem:
React has a large and active community, providing extensive documentation, numerous third-party libraries, tools, and a wealth of online resources for learning and troubleshooting.
Flexibility and Versatility:
React is a library, not a rigid framework, offering flexibility in how it's integrated into projects. It can be used for various applications, including single-page applications, mobile apps (with React Native), and server-side rendering.
Ease of Testing:
React's component-based nature and the availability of testing utilities like Jest make it relatively easy to write and run unit and integration tests for individual components and larger parts of the application.



1:Need to know the difference between props and component using props.html
2:See how react will solve the problem using with react and without react example
3:Steps to install react and create a new app: 
npx create-react-app with react
to start the server first go into cd with-react folder then give command npm start

folder strucuter: node-modules: for node packages
public for static files like html,favicon,images that you want directly.
The main files for us to work is app.js that is present in src folder.
The css of this file is mentioned in app.css

you can see the code inside the app.js file is JSX that looks like HTML but is converted into JS

Now we will remove the code and will write it from scratch



The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

Import useState
To use the useState Hook, we first need to import it into our component.

Note:Make sure you change the extension to jsx react in order to use emmet



Making components like nav bar and gallary can be done easier by downloading the extensions
ES7 React/Redux/GraphQL/React-Native snippets
ES7+ React/Redux/React-Native snippets

Components making: 
Create a folder named components in src folder with a file named as navbar.js which will be used for creating a nav bar which can be used in application
create a navbar in the navbarjs file and import it in the app and place it.
Important rule!:
Component names must start with a capital letter.
The import statement should match the file and export name correctly.

We can adda component inside another component so that it loads once the primary component is added.
First create the component and then import it in the primary component
