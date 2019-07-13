import odtweg from 'odtweg';
import names from 'nodejs-randomnames';
import Mailchimp from 'react-mailchimp-form'
import './odtwe.css';

const React = require('react')

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "name"
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome to the One Day the World Ended</h1>
        <p>Below is everything you need to get started with a game, select the number of players to generate characters and off you go!</p>
        <p><a href="/">Read the game rules</a></p>
        <Reason />
        <Setting />
        <CharacterNumber />
        <h2>Mailing list</h2>
        <p>Join our mailing list for updates</p>
        <Mailchimp
          action='https://gregariousmammal.us10.list-manage.com/subscribe/post?u=a177a7811dd28fcd87829f78f&amp;id=ae210e49a5'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            }
          ]}
        />
      </div>
    );
  }
}

class CharacterNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ number: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true })
  }

  renderUserInfo() {
    return <Characters number={this.state.number} />
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number of players:
        <input type="number" number={this.state.number} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.submitted && this.renderUserInfo()}
      </div>
    )
  }
}

class Character extends React.Component {

  generateStat() {
    return Math.floor(Math.random() * 6 + 1)
  }
  state = {
    name: names.getFullName(),
    brains: this.generateStat(),
    braun: this.generateStat(),
    charisma: this.generateStat()
  }
  render() {
    return (
      <div>
        <h3>Character</h3>
        <p><b>Name:</b> {this.state.name}</p>
        <p><b>Brains:</b> {this.state.brains}</p>
        <p><b>Braun:</b> {this.state.braun}</p>
        <p><b>Charisma:</b> {this.state.charisma}</p>
        <p><b>You now have 3 points to distribute among these stats.</b></p>

        <Background />
        <Features />
        <Items />
      </div>
    );
  }
}

class Background extends React.Component {
  state = {
    background: odtweg.generateBackgrounds()
  }
  render() {
    return (
      <div>
        <p><b>Background:</b> {this.state.background}</p>
      </div>
    );
  }
}

class Features extends React.Component {
  state = {
    features: odtweg.generateFeatures()
  }
  render() {
    return (
      <div>
        <p><b>Features:</b> {this.state.features}</p>
      </div>
    );
  }
}

class Items extends React.Component {
  state = {
    item1: odtweg.generateItems(),
    item2: odtweg.generateItems(),
    item3: odtweg.generateItems()
  }
  render() {
    return (
      <div>
        <p><b>Items:</b> {this.state.item1}, {this.state.item2}, {this.state.item3}</p>
      </div>
    );
  }
}

class Characters extends React.Component {
  createCharacters(x) {
    x = this.props.number;
    var characters = [];
    for (var i = 0; i < x; i++) {
      characters.push(<Character key={i} />);
    }
    return characters;
  }

  render() {
    return (
      <div>
        <h2>Characters</h2>
        {this.createCharacters(4)}
      </div>
    );
  }
}

class Reason extends React.Component {
  state = {
    reason: odtweg.generateReason("app")
  }
  render() {
    return (
      <div>
        <h2>Reason</h2>
        <p>{this.state.reason}</p>
      </div>
    );
  }
}

class Setting extends React.Component {
  state = {
    setting: odtweg.generateSetting()
  }
  render() {
    return (
      <div>
        <h2>World Setting</h2>
        <p>{this.state.setting}</p>
      </div>
    );
  }
}


export { Session }