import style from "./Table.module.css";

const Table = () => {
  return (
    <table border="1 solid #000" className={style.table}>
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Menor que 16</td>
          <td>Magreza grave</td>
        </tr>
        <tr>
          <td>16,0 a 17,0</td>
          <td>Magreza moderada</td>
        </tr>
        <tr>
          <td>17,0 a 18,5</td>
          <td>Magreza leve</td>
        </tr>
        <tr>
          <td>18,5 a 24,9</td>
          <td>Peso normal</td>
        </tr>
        <tr>
          <td>25,0 a 29,9</td>
          <td>Sobrepeso</td>
        </tr>
        <tr>
          <td>30,0 a 34,9</td>
          <td>Obesidade Grau 1</td>
        </tr>
        <tr>
          <td>35,0 a 39,9</td>
          <td>Obesidade Grau 2 (Severa)</td>
        </tr>
        <tr>
          <td>Maior ou igual a 40</td>
          <td>Obesidade Grau 3 (Mórbida)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
