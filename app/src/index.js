import React from 'react';
import { render } from 'react-dom';

class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      name: 'top secret!',
      user: {
        name: 'name',
        colors: {
          favourite: '',
        },
      },
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  onButtonClick() {
    const newuser = this.state.user;
    // 拷贝后修改实现深合并
    newuser.colors.favourite = this.state.color;
    this.setState(() => ({
      // user中没有name字段，在点击按钮后会进行浅合并，原先的name状态会被覆盖
      user: newuser,
    }));
  }
  handleInput(event) {
    this.setState(() => ({
      color: event.target.value,
    }));
  }
  render() {
    return (
      <div>
        <h1>My name is {this.state.user.name}</h1>
        <h2>My favourite color is {this.state.user.colors.favourite}</h2>
        <input
          type="text"
          placeholder="Your favourite color"
          value={this.state.favc}
          onChange={this.handleInput}
        ></input>
        <button onClick={this.onButtonClick}>Reveal the secret!</button>
      </div>
    );
  }
}

render(<Secret />, document.getElementById('root'));
