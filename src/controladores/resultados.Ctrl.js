import{conmysql} from '../db.js'

export const getResultados=
    async (req,res) => {
        try {
            const [result]= await conmysql.query(' select * from resultados')
            res.json(result)
        } catch (error) {
            return res.status(500).json({message:"Error  al consultar resultados"})
        }
    }

    export const postResultados = async (req, res) => {
        try {
            const { BPM, SpO2 } = req.body; // Cambia bpm y spo2 a BPM y SpO2
            const [rows] = await conmysql.query('INSERT INTO resultados (bpm, spo2) VALUES (?, ?)', [BPM, SpO2]);
    
            res.json({
                message: "Resultados guardados correctamente",
                id: rows.insertId
            });
        } catch (error) {
            console.error(error); // Para mostrar el error en la consola
            return res.status(500).json({ message: 'Error en el servidor', error: error.message });
        }
    };