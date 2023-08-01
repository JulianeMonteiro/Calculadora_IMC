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
        </div>
      )}
    </div>
  );
};

export default Form;
