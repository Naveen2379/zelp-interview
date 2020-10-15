import React, {Component} from "react";
import {connect} from "react-redux";
import {convertCurrency} from "../redux/store";


export class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            selectedCountry: 'India'
        }
    }

    handleAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleCountry = (e) => {
        this.setState({
            selectedCountry: e.target.value
        })
        //this.props.handleCountry(e.target.value);
    }
    currencyConverter = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.convertCurrency(this.state);
    }

    render() {
        console.log('render method class component');
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.currencyConverter}>
                    <input type={'text'} value={this.state.amount} onChange={this.handleAmount} />
                    <select value={this.state.selectedCountry} onChange={this.handleCountry}>
                        <option value={'India'}>India</option>
                        <option value={'USA'}>USA</option>
                        <option value={'Russia'}>Russia</option>
                    </select>
                    <button type={'submit'}>Submit</button>
                </form>
                <h5>Currency value in Indian Rs. {this.props.totalAmount}</h5>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        totalAmount: state.amount
    }
}


/*const mapDispatchToProps = (dispatch) => {
    return {
        currencyConverter: () => dispatch(currencyConverter())
    }
}*/
export default connect( mapStateToProps, {convertCurrency, })(CurrencyConverter);