export const getStudents = async (req, res, db) => {
  try {
    const students = await db('students').select('*');
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Error fetching students' });
  }
};

export const addStudent = async (req, res, db) => {
  const { name, email, course, enrollment_date } = req.body;
  try {
    const newStudent = await db('students').insert({ name, email, course, enrollment_date });
    res.status(201).json({ id: newStudent[0], name, email, course, enrollment_date });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ message: 'Error adding student' });
  }
};

export const updateStudent = async (req, res, db) => {
  const { id } = req.params;
  const { name, email, course, enrollment_date } = req.body;
  try {
    await db('students').where({ id }).update({ name, email, course, enrollment_date });
    res.status(200).json({ message: 'Student updated successfully' });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ message: 'Error updating student' });
  }
};

export const deleteStudent = async (req, res, db) => {
  const { id } = req.params;
  try {
    await db('students').where({ id }).del();
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ message: 'Error deleting student' });
  }
};
