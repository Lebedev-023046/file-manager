const sayHello = (name) => {
  console.log(`Welcome to the File Manager, ${name}!`);
};

const sayCurrPath = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

export { sayHello, sayCurrPath };
