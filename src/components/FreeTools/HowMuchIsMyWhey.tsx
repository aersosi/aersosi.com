import React, {useState} from "react";

// Define the interface for input state
interface ProteinInputs {
    desiredProteinPerDay: number;
    proteinPercentage: number;
    pricePerKilo: number;
    days: number;
}

// Define the interface for calculation result
interface ProteinCalculation {
    requiredAmount: number;
    cost: number;
}

function HowMuchIsMyWhey() {
    const [inputs, setInputs] = useState<ProteinInputs>({
        desiredProteinPerDay: 180,
        proteinPercentage: 72,
        pricePerKilo: 18,
        days: 30,
    });

    const [result, setResult] = useState<ProteinCalculation | null>(null);

    function calculateProteinCost({
                                      desiredProteinPerDay,
                                      proteinPercentage,
                                      pricePerKilo,
                                      days,
                                      roundTo = 2
                                  }: ProteinInputs & { roundTo?: number }): ProteinCalculation {
        // Prevent division by zero and ensure positive values
        if (proteinPercentage <= 0 || days <= 0) {
            throw new Error("Percentage and days must be positive values");
        }

        // Calculate required quantity and cost with more precise rounding
        const requiredAmount = Number(
            ((desiredProteinPerDay / (proteinPercentage / 100)) * days).toFixed(roundTo)
        );

        const cost = Number(
            ((requiredAmount / 1000) * pricePerKilo).toFixed(roundTo)
        );

        return {requiredAmount, cost};
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value === '' ? 0 : parseFloat(value)
        }));
    }

    function handleCalculate() {
        try {
            const calculation = calculateProteinCost(inputs);
            setResult(calculation);
        } catch (error) {
            alert(error instanceof Error ? error.message : "An error occurred");
        }
    }

    return (
        <div style={{fontFamily: "Arial, sans-serif", maxWidth: "400px", margin: "auto"}}>
            <div>
                <label>
                    Desired Protein (g/day):
                    <input
                        type="number"
                        name="desiredProteinPerDay"
                        value={inputs.desiredProteinPerDay}
                        onChange={handleChange}
                        min="0"
                        style={{marginBottom: "10px", width: "100%"}}
                    />
                </label>

                <label>
                    Protein Percentage in Food (%):
                    <input
                        type="number"
                        name="proteinPercentage"
                        value={inputs.proteinPercentage}
                        onChange={handleChange}
                        min="0"
                        max="100"
                        style={{marginBottom: "10px", width: "100%"}}
                    />
                </label>

                <label>
                    Price per Kilo (€):
                    <input
                        type="number"
                        name="pricePerKilo"
                        value={inputs.pricePerKilo}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        style={{marginBottom: "10px", width: "100%"}}
                    />
                </label>

                <label>
                    Number of Days:
                    <input
                        type="number"
                        name="days"
                        value={inputs.days}
                        onChange={handleChange}
                        min="1"
                        style={{marginBottom: "10px", width: "100%"}}
                    />
                </label>

                <button
                    onClick={handleCalculate}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",

                    }}
                >
                    Calculate
                </button>
            </div>

            {result && (
                <div style={{marginTop: "20px"}}>
                    <p>
                        You need <strong>{result.requiredAmount} g</strong> of the food over{" "}
                        <strong>{inputs.days}</strong> day(s).
                    </p>
                    <p>
                        The cost for this amount is <strong>{result.cost} €</strong>.
                    </p>
                </div>
            )}
        </div>
    );
}

export default HowMuchIsMyWhey;