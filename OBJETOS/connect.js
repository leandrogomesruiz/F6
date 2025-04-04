const sql = require('mssql');

const sqlConfig = {
    user: 'sa',
    password: 'spypreto',
    database: 'volpeparque',
    server: 'SBD\\SQL2019',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // para Azure
        trustServerCertificate: true // mudar para true em desenvolvimento local
    }
};

async function connectToDatabase() {
    try {
        await sql.connect(sqlConfig);
        const result = await sql.query`SELECT top 10 * FROM pq_ingresso`; // substitua pelo nome da sua tabela
        console.dir(result);
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
}

connectToDatabase();