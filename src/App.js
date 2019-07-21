import React from 'react';
import '../src/App.css';
class App extends React.Component {
  state = {
    data: [],
    isLoaded: false,
    user: [],
    userIsLoaded: false,
  };
  useFetch = () => {
    fetch('http://uinames.com/api/?ext&amount=5')
      .then(response => response.json())
      .then(data => this.setState({ data, isLoaded: true }));
  };
  getUser(index) {
    this.setState({ user: this.state.data[index], userIsLoaded: true });
  }
  render() {
    return (
      <div className="search-bar">
        <div>
          <button className="button" onClick={this.useFetch}>
            Get Users
          </button>
        </div>
        <b>
          {this.state.isLoaded && (
            <ul className="list-users">
              {this.state.data.map((item, index) => (
                <li onClick={() => this.getUser(index)} key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </b>
        {this.state.userIsLoaded && (
          <div className="user-information">
            <img className="user-image" src={this.state.user.photo} alt="userphoto" />
            <ul>
              <b>
                <p className="user-name">
                  {' '}
                  {this.state.user.name} {this.state.user.surname}
                </p>
              </b>

              <li>Email : {this.state.user.email}</li>
              <br />
              <li>Gender : {this.state.user.gender}</li>
              <br />
              <li>Age : {this.state.user.age}</li>
              <br />
              <li>Country of origin : {this.state.user.region}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
export default App;
