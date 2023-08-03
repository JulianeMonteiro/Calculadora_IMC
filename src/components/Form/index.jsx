import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [imc, setImc] = useState(0);

  const calculaImc = () => {
    setImc(peso / (altura * altura));

    return imc;
  };

  const limpaDados = () => {
    setAltura(0);
    setPeso(0);
    setImc(0);
  };

  return (
    <div>
      <div className={styles.form}>
        <div>
          <label htmlFor="altura">Digite sua altura:</label>
          <input
            className={styles.formInput}
            type="number"
            value={altura}
            id="altura"
            placeholder="Altura (Ex.: 1,70)"
            onChange={(evento) => setAltura(evento.target.valueAsNumber)}
          />
        </div>
        <div>
          <label htmlFor="peso">Digite seu peso:</label>
          <input
            className={styles.formInput}
            type="number"
            value={peso}
            id="peso"
            placeholder="Peso (kg)"
            onChange={(evento) => setPeso(evento.target.valueAsNumber)}
          />
        </div>
      </div>
      <div className={styles.formBtn}>
        <button className={styles.formBtnRes} onClick={limpaDados}>
          Resetar
        </button>
        <button className={styles.formBtnCalc} onClick={calculaImc}>
          Calcular
        </button>
      </div>

      {imc > 0 && (
        <div className={styles.result}>
          <h3>
            Seu IMC é: <span>{imc.toFixed(1)}</span>
          </h3>
          {imc < 16 ? (
            <p>Magreza Grave</p>
          ) : imc >= 16 && imc < 17 ? (
            <p>Magreza Moderada</p>
          ) : imc >= 17 && imc < 18.5 ? (
            <p>Sobrepeso </p>
          ) : imc >= 18.5 && imc < 24.9 ? (
            <p>Peso Normal </p>
          ) : imc >= 25 && imc < 29.9 ? (
            <p> Sobrepeso</p>
          ) : imc >= 30 && imc < 34.9 ? (
            <p>Obesidade Grau 1</p>
          ) : imc >= 35 && imc < 39.9 ? (
            <p>Obesidade Grau 2 (Severa)</p>
          ) : (
            <p>Obesidade Grau 3 (Mórbida) </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
