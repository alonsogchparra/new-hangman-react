import React, { Component } from 'react';
import "./Style.css";

class Loading extends Component {
  render() {
    return (
      <div className="flex_custom">
        <div class="loader">Loading...</div>
        <h2>Cargando...</h2>
      </div>
    )
  }
}

export default Loading;
