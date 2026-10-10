import { Pool } from 'pg';

const pool = new Pool({
    user: 'your_db_user',
    host: 'localhost',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 5432,
});


export async function queryDatabase(queryText: string, params: any[] = []) {
    const client = await pool.connect();
    try {
        const result = await client.query(queryText, params);
        return result.rows;
    }   finally {
        client.release();
    }
}