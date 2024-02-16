import xlsx from "xlsx";
import { fileURLToPath } from 'url';
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const xlsConvertToJson = () => {
    const plan = xlsx.readFile(
        resolve(__dirname, "..", "..", "PokemonGo.xlsx"),
        { cellDates: true }
    );
    const planSelected = plan.Sheets["Sheet1"];
    const data = xlsx.utils.sheet_to_json(planSelected);

    return data;
};

