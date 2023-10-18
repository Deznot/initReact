import React, {Component} from 'react';
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
      <Clock/>
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
  date : new Date().toLocaleTimeString()
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
          <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  };
}



root.render(
  <Comment author={comment.author} text={comment.text} date={comment.date} />
  );
