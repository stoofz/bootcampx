const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`

SELECT DISTINCT teachers.name as teacher_name, cohorts.name as cohort_name
FROM assistance_requests
JOIN students ON assistance_requests.student_id = students.id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '${process.argv[2]}%'
ORDER BY teachers.name ASC

`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort_name}: ${user.teacher_name}`);
    });
  })
  .catch(err => console.error('query error', err.stack));