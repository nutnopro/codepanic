const dbConnection = require('./dbConnection');

exports.getAllDatasets = async (req, res, next) => {
    try {
        const pool = await dbConnection();
        const [rows] = await pool.query('SELECT * FROM panic_attack_dataset');
        res.json(rows);
    } catch (error) {
        next(error);
    }
};

exports.createDataset = async (req, res, next) => {
    const { name, description } = req.body;
    try {
        const pool = await dbConnection();
        await pool.query('INSERT INTO panic_attack_dataset (name, description) VALUES (?, ?)', [name, description]);
        res.json({ message: 'Dataset created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.updateDataset = async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const pool = await dbConnection();
        await pool.query('UPDATE panic_attack_dataset SET name = ?, description = ? WHERE id = ?', [name, description, id]);
        res.json({ message: 'Dataset updated successfully' });
    } catch (error) {
        next(error);
    }
};

exports.deleteDataset = async (req, res, next) => {
    const { id } = req.params;
    try {
        const pool = await dbConnection();
        await pool.query('DELETE FROM panic_attack_dataset WHERE id = ?', [id]);
        res.json({ message: 'Dataset deleted successfully' });
    } catch (error) {
        next(error);
    }
};
