function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",









    event => {
      let display = this.state.display;
      let value = this.state.value;
      let buttonValue = event.target.innerHTML;
      let result = event.target.value;
      let decimalCount = 0;
      // console.log(result)



      if (buttonValue === 'AC') {
        return this.clear();
      }
      if (buttonValue >= '0' && buttonValue <= '9' || buttonValue === '.') {
        if (buttonValue >= 0) {
          value = value.replace(/^0+/, '');
        }


        if (value.indexOf('.') > 0) {
          let decimal = '.';
          //console.log(value);
          //console.log(display);
          //value.slice(1,1)  
          //const result = words.filter(word => word.length > 6);
          //value.filter(decimal => decimal.length < 1)






        }

        if (buttonValue === '+' || '-' || '*' || '/') {

        } //alert('operation!')
        //  if (decimalCount > 0 && buttonValue === ['+', '-', '*', '/']){
        //    decimalCount = 0

        //  }

        // if (buttonValue.indexOf('.') < -1 && buttonValue === ['+', '-', '*', '/']) {
        //  decimalCount = 0
        //   value = !value.replace(/\.+/g,'')
        //     }


        value += buttonValue;
        this.setState({
          display: value,
          value: value });




      } else

      if (buttonValue == '=') {
        let evaluate = eval(value);

        this.setState({
          display: evaluate,
          value: evaluate });



      } else



      if (['+', '-', '*', '/']) {

        decimalCount = 0;
        console.log(decimalCount);

        /*.replace(/([\/+\-/*=])([\/+\-*=])/g, '$2' ).replace(/^0+(?=[1-9])/,"").replace(/^0+(?=\.)/,"0").replace(/\.+/g,".")*/

        // console.log(buttonValue);
        if (decimalCount === 0) {
          value += ' ' + buttonValue + ' ';

          //console.log(value);
          this.setState({
            display: value,
            value: value });

        }


        //console.log(value);                              
      }

    });this.state = { display: 0, value: '' };this.handleClick = this.handleClick.bind(this);}

  clear() {
    this.setState({ display: 0,
      value: '' });

  }

  render() {
    return (
      React.createElement("div", { id: "App_container" },

      React.createElement("div", { id: "display" }, this.state.display),


      React.createElement("div", { className: "calculator-keys" },

      React.createElement("button", { className: "operator", onClick: this.handleClick, id: "add", value: "+" }, "+"),


      React.createElement("button", { className: "operator", onClick: this.handleClick, id: "subtract", value: "-" }, "-"),
      React.createElement("button", { className: "operator", onClick: this.handleClick, id: "multiply", value: "*" }, "*"),

      React.createElement("button", { className: "operator", onClick: this.handleClick, id: "divide", value: "/" }, "/"),

      React.createElement("button", { onClick: this.handleClick, id: "one", value: "1" }, "1"),
      React.createElement("button", { onClick: this.handleClick, id: "two", value: "2" }, "2"),
      React.createElement("button", { onClick: this.handleClick, id: "three", value: "3" }, "3"),


      React.createElement("button", { onClick: this.handleClick, id: "four", value: "4" }, "4"),
      React.createElement("button", { onClick: this.handleClick, id: "five", value: "5" }, "5"),
      React.createElement("button", { onClick: this.handleClick, id: "six", value: "6" }, "6"),


      React.createElement("button", { onClick: this.handleClick, id: "seven", value: "7" }, "7"),
      React.createElement("button", { onClick: this.handleClick, id: "eight", value: "8" }, "8"),
      React.createElement("button", { onClick: this.handleClick, id: "nine", value: "9" }, "9"),



      React.createElement("button", { onClick: this.handleClick, id: "zero", value: "0" }, "0"),

      React.createElement("button", { className: "operator", onClick: this.handleClick, id: "decimal", value: "." }, "."),

      React.createElement("button", { onClick: this.handleClick, id: "clear", value: "AC" }, "AC"),

      React.createElement("button", { onClick: this.handleClick, id: "equals", value: "=" }, "="))));



  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));