class Mycomponent extends
React.Component{
    render(){
        return <h1>Hello,
{this.props.name}</h1>;
    }
}


const handleClick = () => {
    console.log('Button clicked!');
}

<button onClick={handleClick}
>click me</button>


const name='React';
let count=0;


const items=['Item1', 'Item2','Item3'];

const List=items.map(item => <Li key={item}>{item}</Li>);

<ul>{List}</ul>


const Mycomponent = ({ name,age }) => {
    return <P>{name} is {age} years old</P>;
}


// mymodule.js
export const sayhello = () =>
'Hello!';

// anotherFile.js
import{ sayHello } from './myModule';

console.Log(sayHello());


const isLoggedIn = true;

const Greeting = () => (
    <div>
      {isLoggedIn ? <h1>Welcome back !</h1>:<h1>Please Log in</h1>}
    </div>
);


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  //{ a: 1, b: 2, c: 3 }

const newProps = { ...props, extraProp: 'value' };
<Mycomponent {...newProps} />