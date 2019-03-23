import React, { Component } from 'react';

class Kosan extends Component {
    render() {
        return (
            <div class="card-box">
                <img src={this.props.img} alt="" />
                <h1><a href="">{this.props.nama}</a></h1>
                <h3>Rp{formatMoney(this.props.harga)}/tahun</h3>
                <div className="fasilitas">
                    <span>{this.props.fasilitas[0]}</span>
                    <span>{this.props.fasilitas[1]}</span>
                    <span>{this.props.fasilitas[2]}</span>
                </div>
                <p>{this.props.desc}</p>
            </div>

        );
    }
}

function formatMoney(amount, decimalCount = 2, thousands = ".") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands)
    } catch (e) {
        console.log(e)
    }
};

export default Kosan;
