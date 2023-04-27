const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

const queryString = `
  SELECT DISTINCT teachers.name as teacher_name, cohorts.name as cohort_name
  FROM assistance_requests
  JOIN students ON assistance_requests.student_id = students.id
  JOIN teachers ON assistance_requests.teacher_id = teachers.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  ORDER BY teachers.name ASC
  LIMIT $2;
  `;

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort_name}: ${user.teacher_name}`);
    });
  })
  .catch(err => console.error('query error', err.stack));




