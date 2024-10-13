import express from 'express';
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController.js';

const router = express.Router();

export default (db) => {
  router.get('/', (req, res) => getStudents(req, res, db));
  router.post('/', (req, res) => addStudent(req, res, db));
  router.put('/:id', (req, res) => updateStudent(req, res, db));
  router.delete('/:id', (req, res) => deleteStudent(req, res, db));
  
  return router;
};
