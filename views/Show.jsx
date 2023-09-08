const React = require("react");

class Show extends React.Component {
  render() {
    const { name, img } = this.props.pokemon;

    return (
      <div>
        <h1> Gotta catch em all! </h1>
        <h2> {name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <img src={img + ".jpg"} alt="" />
        <nav>
          <a href="/pokemon"> Back to Index Page </a>
        </nav>
      </div>
    );
  }
}

module.exports = Show;
