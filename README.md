<h1 align="center">Simple Profile Card with Theme Color</h1>



<p align="center">
  <strong>A simple React application to display a profile card with customizable theme color.</strong>
</p>

##  Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_profile_card_with_dynamic_theme_color.git`
2. Change directory to the project folder: `cd simple_profile_card_with_dynamic_theme_color`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

##  Usage

The application displays a profile card with a blank profile picture and details of a person. The theme color of the card can be customized by clicking on the theme color buttons. The CSS styles for the card and its elements are dynamically updated based on the selected theme color.

##  Components

The main component of the application is `App`, which manages the state and event handling for updating the theme color.

### State

The component uses the `useState` hook to manage the following state:

- `themeColor`: Stores the currently selected theme color.

### Event Handling

The `handleButtonClick` function is called when a theme color button is clicked. It updates the `themeColor` state based on the selected color.

### JSX Markup

The JSX markup in the `return` statement defines the structure and appearance of the profile card and theme color buttons. It includes an image for the profile picture, headings for the name and job title, details section with follower and following counts, and buttons for follow and message actions. The theme color buttons are displayed in a separate container.

##  Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.

##  Image Credits

The blank profile picture used in the application is sourced from [Pixabay](https://pixabay.com/) and created by [Stephanie Edwards](https://pixabay.com/users/wanderercreative-855399/).