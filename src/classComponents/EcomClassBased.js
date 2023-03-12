import React from 'react';
class EcomClassBased extends React.Component {
  constructor(props) {
    super(props);

    this.count = this.props.initialCount;
    this.state = {
      products: [
        { name: 'default1', price: 123 },
        { name: 'default2', price: 120 },
      ],
    };
    // this.showFirstProduct = this.showFirstProduct.bind(this);
  }
  /*
  showFirstProduct() {
    alert(this.state.products[0].name);
  }
  */
  componentDidMount() {
    console.log('COUNT MOUNT = ', this.count);
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log('COUNT UPDATE = ', this.count);
    console.log('componentDidUpdate');
    console.log('prevProps = ', prevProps);
    console.log('this.props.initialCount= ', this.props.initialCount);
    console.log('prevState = ', prevState);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {}
  showFirstProduct = () => {
    alert(this.state.products[0].name);
  };

  updateManual = () => {
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <h4>{this.count}</h4> <br />
        {this.state.products.map((product, id) => {
          <div> {product.name}</div>;
        })}
        <button onClick={this.showFirstProduct}>Show First Product</button>
        <button onClick={this.updateManual}> Force Update</button>
        <button
          onClick={() => {
            this.count = this.count + 1;
          }}
        >
          {' '}
          Increment in Ecom
        </button>
      </div>
    );
  }
}

EcomClassBased.defaultProps = {
  initialCount: 30,
};
export default EcomClassBased;
