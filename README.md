# Tudooo

Tudooo is a simple, intuitive, and responsive Todo List application built with Next.js, Tailwind CSS, and Framer Motion. It helps you stay organized and productive by allowing you to manage your tasks dynamically.

## Features

- **Task Management:** Add, check off, and remove tasks using an interactive UI.
- **Smooth Animations:** Enjoy smooth animations powered by Framer Motion (see [src/components/Todo.tsx](src/components/Todo.tsx)).
- **Persistent Storage:** Tasks are saved in the browser's local storage to maintain your list between sessions (see [src/components/VanishList.tsx](src/components/VanishList.tsx)).
- **Responsive Design:** The application adapts to different screen sizes for optimal usability.


## File Structure

```
tudooo/
├── src/
│   ├── app/
│   │   └── page.tsx            # Main page component
│   ├── components/
│   │   ├── Header.tsx          # Header component
│   │   ├── Todo.tsx            # Todo item component
│   │   ├── Todos.tsx           # List of todos component
│   │   └── VanishList.tsx      # Component handling vanished items
│   └── types/                  # Type definitions
│       └── index.ts
├── .env                        # Environment variables (if applicable)
├── package.json
└── README.md
```


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/tudooo.git
    cd tudooo
    ```
2. Navigate to the project directory:

   ```sh
   cd tudooo
   ```

3. **Install dependencies:**

    ```sh
    npm install
    ```
    or

    ```sh
    yarn install
    ```

### Running the Development Server

Start the Next.js development server:

```sh
npm run dev
```

or

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

Build the application using:

```sh
npm run build
```

or

```sh
yarn build
```

Then start the production server with:

```sh
npm run start
```

or 

```sh
yarn start
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
