import React, { Component } from "react";
import "../styles/store/Material.css";
import axios from "axios";
/*import { Papa } from "papaparse/papaparse.min.js";
*/
class Material extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stock:'',
      description: '',
      price: '',
      sellerId: '',
      brandId: '',
      categoryId:'',
      active: '',
      salePrice: '',
      referenceCode: '',
      csvfile: undefined,
      product:[]
    };
    
    this.setMaterial =this.setMaterial.bind(this);
    this.getTableProducts=this.getTableProducts.bind(this);
  }
 /* handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0],
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  updateData(result) {
    var data = result.data;
    console.log(data);
  }*/
  getTableProducts(){
    const vm = this;
    const api = 'http://webdevelopersgdl.com/comercializadora-material/api/product/';
    const config = {
      headers: {
        'Authorization': `Basic ${localStorage.getItem("jwt")}`
      },
    };
    axios.get(api,config)
      .then(function (response) {
        console.log( response.data.data);
        vm.setState({
          product: response.data.data
        });
       
      }
    ).catch(function (error) {
     console.log(error);
      
    });
  }
  componentDidMount(){
   this.getTableProducts();
  }
  setMaterial(event) {
    const rthis = this;
    event.preventDefault();
    let credentials = {
      "name": this.state.name,
      "stock": this.state.stock,
      "description": this.state.description,
      "price": this.state.price,
      "sellerId": 0,
      "brandId": 'none',
      "categoryId": 1,
      "active": 0,
      "salePrice": this.state.salePrice,
      "referenceCode": this.state.referenceCode
    };

    console.log(credentials);
    
    const api = 'http://webdevelopersgdl.com/comercializadora-material/api/product/';
    const config = {
      headers: {
        'Authorization': `Basic ${localStorage.getItem("jwt")}`
      },
    };
    axios.post(api, JSON.stringify(credentials),config)
      .then(function (response) {
          console.log(response);
          this.getTableProducts();
         document.getElementById("boton-cerrar-modal").click();

          
      }
    ).catch(function (error) {
      localStorage.clear();
      window.location.href="/store/login/";
      
    });
  }

  openModal() {}

  render() {
    const {product } = this.state;
    return (
      <div className="container container-material">
        <div className="row">
          <div className="col-md-2 offset-5">
            <h1>Materiales</h1>
            <hr className="hr-title" />
          </div>
          <div className="col-md-3 offset-1"></div>
        </div>
        <div className="row tables">
          <div className="col-md-10 offset-1">
            <table class="table  table-hover table-material">
              <thead>
                <tr>
                  <th scope="col">Stock</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Codigo</th>
                  <th scope="col">Precio Mayoreo</th>
                  <th scope="col">Descripción</th>
                  <th>
                    <i
                      className="fas fa-file-csv add-exel"
                      data-toggle="modal"
                      data-target="#modal-csv"
                    ></i>
                    <i
                      className="fas fa-plus-circle add-one"
                      data-toggle="modal"
                      data-target="#modal-add-one"
                    ></i>
                  </th>
                </tr>
              </thead>
              <tbody>
              {product.map(item => (         
          
          <tr key={item.id}>
            <th className="text-center" >{item.stock}</th>
            <td className="text-center">{item.name}</td>
            <td className="text-center">{item.price}</td>
            <td className="text-center">{item.type}</td>
            <td className="text-center">{item.referenceCode}</td>
            <td className="text-center">{item.salePrice}</td>
            <td className="text-center">{item.description}</td>
          </tr>

        ))}
                  
              </tbody>
            </table>

            <div
              class=" modal fade"
              id="modal-csv"
              data-bs-backdrop="static"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="staticBackdropLabel">
                      Importar / Exportar
                    </h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <div class="modal-body">
                    <button
                      type="button"
                      class="btn btn-success opt"
                      onClick=""
                    >
                      Agregar Excel
                    </button>
                    <input
                      className="csv-input"
                      type="file"
                      
                      name="file"
                      placeholder={null}
                      onChange=""
                    />
                    <p />
                    <button
                      type="button"
                      class="btn btn-primary opt"
                      onClick=""
                    >
                      Descargar Excel
                    </button>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn  boton-cancelar"
                      data-dismiss="modal"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="modal-add-one"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="staticBackdropLabel">
                      Agregar Producto
                    </h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <form onSubmit={this.setMaterial}>
                  <div class="modal-body">
                 

                    <div className="row">
                      <div className="col-md-6 input-add-one">
                        <input placeholder="Nombre"  required value={this.state.nmae} onChange={(event) => this.setState({ name: event.target.value})} />
                      </div>
                      <div className="col-md-3  input-add-one">
                        <input placeholder="Stock"  required value={this.state.stock} onChange={(event) => this.setState({ stock: event.target.value})}/>
                      </div>
                      <div className="col-md-3 input-add-one">
                        <input placeholder="Precio"  required value={this.state.price} onChange={(event) => this.setState({ price: event.target.value})}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                      <select id="select-add-one"  required value={this.state.type} onChange={(event) => this.setState({ type: event.target.value})}>
                       <option value="Toneladas" select>Toneladas</option>
                       <option value="Kilogramos">Kilogramos</option>
                       <option value="Costales">Costales</option>
                       <option value="Metros">Metros</option>
                      </select>
                      </div>
                        <div className="col-md-5">
                     
                      <input className="codigo-producto" placeholder="codigo"  required value={this.state.referenceCode} onChange={(event) => this.setState({ referenceCode: event.target.value})} />
                      
                      </div>
                      <div className="col-md-3 ">
                        <input  className="codigo-producto" placeholder="Precio Mayoreo"  required value={this.state.salePrice} onChange={(event) => this.setState({ salePrice: event.target.value})}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea id="text-area" placeholder="Descripción del Producto"  required value={this.state.description} onChange={(event) => this.setState({ description: event.target.value})}></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                    id="boton-cerrar-modal"
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <button type="submit" class="btn acept-add-one">
                      Agregar
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}
export default Material;
