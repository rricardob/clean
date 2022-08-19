import mysql from 'mysql2';

export const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test_ddd',
  port: 3306
});

export const conectarMysql = () => {
   dbconnection.connect(err => {
  err
    ? console.error(`Connection Failed ${err.stack}`)
    : console.log('✌️ DB loaded and connected!');
});
}
