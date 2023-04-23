SELECT cohorts.name as cohort, COUNT(assignment_submissions.*) AS total_submissions
FROM students
INNER JOIN cohorts ON cohorts.id = students.cohort_id
INNER JOIN assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY cohort
ORDER BY total_submissions DESC;