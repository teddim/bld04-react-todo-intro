# React TODO intro app

This is a basic app to showcase simple React functionality.

It is meant to accompany [this tutorial](https://github.com/gSchool/cnd-timeline/blob/master/react/react-intro.md)

## Setup

```
fork
git clone
cd react-todo-intro
npm install -g yarn // if yarn is not already installed on your machine
yarn install
yarn start
```

## Instructions

1. Once you have started the app, look at it in the browser and observe its behavior.  Click all the buttons to see what they do.  Take a look at the code.
1. Notice that styles have been added so that you can see which components are rendered in the browser.
1. Once you have looked at the app and the code, complete the following:
    1. Connect the `Add` button to an input so that you can add your own ToDos.
    1. In the `UserView` component, display the user's last name and make it editable.
    1. Answer this question: When you change the user's name in the `UserView` component, does it change `state.user` in the App component? Prove your answer by displaying the name in App component and observe it if changes.