SELECT teachers.name as teacher, cohorts.name as cohort, COUNT(assistance_requests.teacher_id) as total_assistances
FROM assistance_requests
JOIN students ON assistance_requests.student_id = students.id
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name ASC;