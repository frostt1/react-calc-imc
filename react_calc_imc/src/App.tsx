// hooks
import { useState } from "react";
//css
import styles from "./App.module.css";
//assets
import logo from "./assets/powered.png";

//components
import { levels, calculateImc } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {
    const [heigthField, setHeigthField] = useState<number>(0);
    const [weightField, setWeighField] = useState<number>(0);

    const handleCalculateButton = () => {
        if (heigthField && weightField) {
        } else {
            alert("Digite todos os campos.");
        }
    };

    return (
        <div>
            <header>
                <div className={styles.headerContainer}>
                    <img src={logo} alt="" width={150} />
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule o seu IMC.</h1>
                    <p>
                        IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada
                        pessoa.
                    </p>
                    <input
                        type="number"
                        placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
                        value={heigthField > 0 ? heigthField : ""}
                        onChange={(e) => setHeigthField(parseFloat(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
                        value={weightField > 0 ? weightField : ""}
                        onChange={(e) => setWeighField(parseFloat(e.target.value))}
                    />
                    <button onClick={handleCalculateButton}>Calcular</button>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.grid}>
                        {levels.map((item, key) => (
                            <GridItem key={key} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
