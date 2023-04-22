SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions
INNER JOIN students ON students.id = assignment_submissions.student_id
INNER JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'FEB12';