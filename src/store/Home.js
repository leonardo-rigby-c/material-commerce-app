import React, { Component } from "react";
import "../styles/store/Home.css";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buscar: "",
      productos: [],
      config: {
        headers: {
          Authorization: `Basic ${localStorage.getItem("jwt")}`,
        },
      },
      contador: 0,
    };
    this.inputSearch = this.inputSearch.bind(this);
    this.addCarrito = this.addCarrito.bind(this);
  }
  inputSearch(event) {
    const vm = this;

    let data = {
      searchWord: this.state.buscar,
    };

    console.log(data);

    const api =
      "https://webdevelopersgdl.com/comercializadora-material/v1/api/search/";

    axios
      .post(api, JSON.stringify(data), vm.state.config)
      .then(function (response) {
        console.log(response.data.data);
        if (response.data.data == 0) {
          document.getElementById("mensaje-no-data").style.display = "inline";
          document.getElementById("buscador-usado").style.display = "inline";
          document.getElementById("ocultar-al-buscar").style.display = "none";
          vm.setState({
            productos: [],
          });
        } else {
          vm.setState({
            productos: response.data.data,
          });
          document.getElementById("mensaje-no-data").style.display = "none";
          document.getElementById("buscador-usado").style.display = "inline";
          document.getElementById("ocultar-al-buscar").style.display = "none";
        }
      });
  }
  componentDidMount() {
    document.getElementById("buscador-usado").style.display = "none";
    document.getElementById("mensaje-no-data").style.display = "none";
    document.getElementById("ocultar-al-buscar").style.display = "inline";
    localStorage.setItem("CantidadAgregada", 0);
  }
  addCarrito() {
    this.state.contador += 1;
    localStorage.setItem("CantidadAgregada", this.state.contador);
  }
  render() {
    const { productos } = this.state;

    return (
      <div className="container container-home">
        <div id="ocultar-al-buscar">
          <div className="row ">
            <div className="col-md-4 offset-4 input-text">
              <h1>Nombre Empresa</h1>
              <h4 className="slogan">¡Slogan de la Empresa!</h4>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-8 offset-2 input">
              <input
                className="form-control"
                placeholder="¿ Qué deseas buscar ?"
                value={this.state.buscar}
                onChange={(event) =>
                  this.setState({ buscar: event.target.value })
                }
              />
              <i
                className="fas fa-search "
                onClick={this.inputSearch.bind(this)}
              ></i>
            </div>
          </div>
        </div>
        <div id="buscador-usado">
          <div className="row">
            <div className="col-md-12 fondo-input">
              <input
                type="text"
                class="form-control"
                placeholder="Buscar ..."
                value={this.state.buscar}
                onChange={(event) =>
                  this.setState({ buscar: event.target.value })
                }
              />
              <div className="b-icon">
                <i
                  className="fas fa-search icon-buscador-activo"
                  onClick={this.inputSearch.bind(this)}
                ></i>
              </div>
            </div>
          </div>
          <div className="row products ">
            <div className="col-md-3 filter">
              <h6>Precio:</h6>
              <div className="row">
                <div className="col-md-12 div-price">
                  <div className="row">
                    <div className="col-md-1">De:</div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        class="form-control price"
                        placeholder="00.00"
                      />
                    </div>
                    <div className="col-md-1">Hasta:</div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        class="form-control price"
                        placeholder="00.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row"></div>
              <button className="btn ">Filtrar</button>
            </div>
            <div className="col-md-9">
              <div className="row">
                <h5 id="mensaje-no-data">
                  {" "}
                  ! Upss No se encontraron resultados con " {
                    this.state.buscar
                  }{" "}
                  ", Intentente una nueva busqueda ¡
                </h5>
                {productos.map((item) => (
                  <div key={item.id} className="col-md-2 card">
                    <i
                      className="fas fa-plus "
                      onClick={this.addCarrito.bind(this)}
                    ></i>
                    <img src="/assets/ilustrations/cemento.jpg" />
                    <h6>{item.name}</h6>
                    <p>{item.categoryName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
