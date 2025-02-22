"use client";
import { Box } from "@mui/material";
import { useState } from "react";

interface userInt {
  nombre: string;
  correo: string;
  contra: string;
}

export default function Page3() {
  const [user, setUser] = useState(
    (): userInt => ({ nombre: "", correo: "", contra: "" })
  );

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  const [nombreCorrecto, setNombreCorrecto] = useState(true);
  const [correoCorrecto, setCorreoCorrecto] = useState(true);
  const [contraCorrecto, setContraCorrecto] = useState(true);

  const checarCorreo = new RegExp(".+@.+\..+");
  const checarContra = new RegExp("(?=.*[^a-zA-Z0-9]).{8,}");

  const submitForms = () => {
    setNombreCorrecto(true);
    setCorreoCorrecto(true);
    setContraCorrecto(true);

    if (nombre && correo && correo.match(checarCorreo) && contra.match(checarContra)) {
        const u: userInt = { nombre: nombre, correo: correo, contra: contra };
        setUser(u);
    }else{
        if (!nombre){
            setNombreCorrecto(false);
        }
        if (!correo || !correo.match(checarCorreo)){
            setCorreoCorrecto(false);
        }
        if (!contra || !contra.match(checarContra)){
            setContraCorrecto(false);
        }   
    }
  };

  return (
    <div className="text-right p-5">
      <p>{user.nombre}</p>
      <div
        className="flex justify-center items-center"
        style={{ height: "80vh" }}>
        <div className="flex flex-col gap-5" style={{ width: "30%" }}>
          <input
            placeholder="Nombre"
            className="p-3 rounded-md text-black"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="Correo"
            className="p-3 rounded-md text-black"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            placeholder="Contraseña"
            className="p-3 rounded-md text-black"
            value={contra}
            onChange={(e) => setContra(e.target.value)}
          />
          <button onClick={submitForms}>Submit</button>
          {!nombreCorrecto && (
            <div className="text-center bg-red-800 rounded-md p-3">
              <p>El nombre no es válido</p>
            </div>
          )}
          {!correoCorrecto && (
            <div className="text-center bg-red-800 rounded-md p-3">
              <p>El correo no es válido</p>
            </div>
          )}
          {!contraCorrecto && (
            <div className="text-center bg-red-800 rounded-md p-3">
              <p>La contraseña no es válida. Debe tener minimo 8 caracteres y un caracter especial.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
