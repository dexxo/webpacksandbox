import '../scss/styles.scss';


const hello = () => {
  return new Promise((resolve, reject) => {
    resolve({
      greet: 'hello world app!!!'
    });
  });
};

hello().then(res => console.log(res.greet));
