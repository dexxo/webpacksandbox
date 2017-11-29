import '../scss/styles.scss';
import 'babel-polyfill';


const hello = () => {
  return new Promise((resolve) => {
    resolve({
      greet: 'hello world app!!!'
    });
  });
};

hello().then(res => console.log(res.greet));
