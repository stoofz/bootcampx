SELECT assignments.day, COUNT(assignments.chapter) as number_of_assignments, SUM(assignments.duration) as total_duration
FROM assignments
GROUP BY assignments.day
ORDER BY assignemnts.day;