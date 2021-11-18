import ItemCartContainer from '../ItemCartContainer/ItemCartContainer';
import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import CartContext from '../../Context/CartContext';
import { Button, TextField, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import db from '../../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const Cart = () => {
  let idCompra = " ";
  const cartData = useContext(CartContext);
  const pagar = () => {
    const order = {
      buyer: {
        name: name + " " + lastname,
        email: email,
        phone: phone
      },
      items: cartData.items,
      total: cartData.precioTotal
    }
    pushOrderFirebase(order);
  }

  async function pushOrderFirebase(order) {
    const orderFirebase = collection(db, "orders");
    const orderDoc = await addDoc(orderFirebase, order);
    cartData.setIdUltimaCompra(orderDoc.id);
    updateItemStock(order.items);
    cartData.clear();

  }
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(true)
  const [errorNameMsj, setErrorNameMsj] = useState("NOMBRE");

  const [lastname, setLastname] = useState("");
  const [errorLastname, setErrorLastname] = useState(true)
  const [errorLastnameMsj, setErrorLastnameMsj] = useState("APELLIDO");

  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(true);
  const [errorPhoneMsj, setErrorPhoneMsj] = useState("TELEFONO");

  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorEmailMsj, setErrorEmailMsj] = useState("EMAIL");

  async function updateItemStock(items) {
    for (let item of items) {
      const itemDoc = doc(db, "productos", item.id);

      await updateDoc(itemDoc, {
        stock: item.stock - item.cantidad
      })
    };
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <h4>Precio total de la compra: $ {cartData.precioTotal}</h4>
          <ItemCartContainer />
          <br />
        </Grid>
        <br />
        {cartData.cartCantTotal > 0 ?
          <Grid item xs={4} alignItems="center">
            <>
              <br />
              <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-around" alignItems="center">
                <h4> Ingrese sus datos personales:</h4>
                <br />
              </Grid>
              <br />
              <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-around" alignItems="center">
                <TextField
                  required
                  id="form-nombre"
                  label="Nombres"
                  onChange={(e) => {
                    setName(e.target.value);
                    if (name.length < 2) {
                      setErrorName(true);
                      setErrorNameMsj("NOMBRE");
                    }
                    else {
                      setErrorName(false)
                      setErrorNameMsj("");
                    }
                  }}
                  error={errorName}
                  helperText={errorNameMsj}
                />
                <br />
              </Grid>
              <br />

              <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-around" alignItems="center">
                <TextField
                  required
                  id="form-apellido"
                  label="Apellidos"
                  onChange={(e) => {
                    setLastname(e.target.value);
                    if (lastname.length < 0) {
                      setErrorLastname(true);
                      setErrorLastnameMsj("APELLIDO");
                    }
                    else {
                      setErrorLastname(false);
                      setErrorLastnameMsj("");
                    }
                  }}
                  error={errorLastname}
                  helperText={errorLastnameMsj}
                />
                <br />
              </Grid>
              <br />
              <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-around" alignItems="center">
                <TextField
                  type="number"
                  required
                  id="form-telefono"
                  label="Telefono"
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phone.length < 2) {
                      setErrorPhone(true);
                      setErrorPhoneMsj("TELEFONO");
                    }
                    else {
                      setErrorPhone(false);
                      setErrorPhoneMsj("");
                    }
                  }}
                  error={errorPhone}
                  helperText={errorPhoneMsj}
                />
                <br />
              </Grid>
              <br />
              <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-around" alignItems="center">
                <TextField
                  required
                  id="form-mail"
                  label="Ingrese Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (email.length < 2) {
                      setErrorEmail(true);
                      setErrorEmailMsj("EMAIL");
                    }
                    else {
                      setErrorEmail(false);
                      setErrorEmailMsj("");
                    }
                  }}
                  error={errorEmail}
                  helperText={errorEmailMsj}
                />
                <br />
              </Grid>
              <br />
              <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-around" alignItems="center">
                <TextField
                  required
                  id="form-mail-2"
                  label="Repita Email"
                  onChange={(e) => {
                    setEmail2(e.target.value);
                    if (email2.length < 2) {
                      setErrorEmail(true);
                      setErrorEmailMsj("REINGRESAR EMAIL");
                    }
                    else {
                      if (email != email2) {
                        setErrorEmail(true);
                        setErrorEmailMsj("NO COINCIDEN LOS EMAILS");
                      }
                      else {
                        setErrorEmail(false);
                        setErrorEmailMsj("");
                      }
                    }
                  }}
                  error={errorEmail}
                  helperText={errorEmailMsj}
                />
                <br />
              </Grid>
              <br />

              {
                (errorName || errorLastname || errorPhone || errorEmail) ? <></> :
                  <NavLink to="/Gracias" exact>
                    <Button onClick={() => pagar()} color="success" variant="contained">Pagar</Button>
                  </NavLink>
              }

            </>
          </Grid>
          :
          <></>

        }
      </Grid>
    </div>
  );
}

export default Cart;