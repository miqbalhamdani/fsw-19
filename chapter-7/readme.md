# Design Pattern

### MVC

It makes clear separation between frontend/backend and logic , makes the code more readable and easy to modify.

### Analogy

MVC can be metaphorically related to a TV.

- You have various channels, with different information on them supplied by your cable provider (the model).
- The TV screen displays these channels to you (the view).
- You pressing the buttons on the remote controls affects what you see and how you see it (the controller).

MVC can be metaphorically to a Politics.

- Model: Propaganda. Hides the ugliness of raw data from the user(public).
- View: Politician. Gives a rosy picture of our present conditions.
- Controller: Beaurocrat. Deals with the ugly details of problem-solving.

### MVC in the real-world

For instance, let’s imagine you’re creating a To-do list app. This app will let users create tasks and organize them into lists.

The Model in a todo app might define what a “task” is and that a “list” is a collection of tasks.

The View code will define what the todos and lists looks like, visually. The tasks could have large font, or be a certain color.

Finally, the Controller could define how a user adds a task or marks another as complete. The Controller connects the View’s add button to the Model, so that when you click “add task,” the Model adds a new task.

### Benefits

1. Accelerated Development Process
2. Multiple View Components for your Model
3. Supports Asynchronous Method Invocation
4. Ideal for Developing Large Size Web Application
