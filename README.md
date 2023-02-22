# React TypeScript Docker Boilerplate

React TypeScript Docker Boilerplate is a starter project for building scalable and maintainable web applications with React 18, TypeScript, Redux and Docker. This boilerplate provides a robust and configurable development environment that supports hot-reloading, testing, linting, and building of React applications in a containerized environment. With TypeScript, developers can benefit from a statically-typed language that provides better type-checking and IDE support, resulting in fewer runtime errors and faster development cycles. Use this boilerplate to jumpstart your React projects and streamline your development workflow.

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/liyajosh-GS/react-typescript-docker-boilerplate.git
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

This will start the development server at `http://localhost:3000`.

## Build and Run with Docker

1. Build the Docker image:

  ```sh
  docker build -t <image-name> .
  ```


2. Run the Docker container:

  ```sh
  docker run -it -p 3000:3000 <image-name>
  ```


This will start the container and map port 3000 on the host to port 3000 in the container. You can access the application at `http://localhost:3000`.

## Folder Structure

The folder structure is as follows:

```
react-typescript-docker-boilerplate/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ ├── store/
│ ├── index.tsx
│ └── ...
├── Dockerfile
├── package.json
└── ...
```


- `public/`: Contains the HTML file and other static assets used in the application.
- `src/`: Contains the source code of the application.
- `src/components/`: Contains React components.
- `src/store/`: Contains Redux store configurations.
- `src/index.tsx`: The entry point of the application.
- `Dockerfile`: Contains the instructions to build a Docker image.
- `package.json`: Contains the dependencies and scripts for the application.

## Contributing

Contributions are always welcome! If you have any suggestions, bug reports, or pull requests, please open an issue or a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
