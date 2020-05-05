import { Pool } from 'pg'

const pool = new Pool({
    user: 'Camille',
    host:'localhost',
    password:'',
    database:'todoapi',
    port:5432
});

export default pool;