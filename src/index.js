import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// const elem = <h2>Hello world!</h2>; 
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world!');

const root = ReactDOM.createRoot(document.getElementById('root'));

// class Welcome extends React.Component {
//   render(){
//     return <h2>Hello, {this.props.name}</h2>;
//   }
//   // <Welcome name="vasya" surname="qwert"/>
// }


// function SomeTest(prop) {
//     return (
//       <div>
//         <h1>Your name is {prop.name}</h1>
//         <h2>Your surname is {prop.surname} Isn't it?</h2>
//       </div>      
//     );
// }

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

function Avatar(props){
  return (
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  );
};

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

const comment = {
  author: {
    avatarUrl: 'http://qwert.by',
    name: 'denis'
  },
  text : 'qweqweqwewqe',
  data : new Date().toLocaleDateString()
};



root.render(<Comment author={comment.author} text={comment.text} date={comment.data} />);
