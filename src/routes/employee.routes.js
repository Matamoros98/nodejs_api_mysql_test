import { Router } from "express";
import { pool } from "../db.js";
import {deleteEmployees, getEmployees, postEmployees, putEmployees,getEmployeesById} from "../controllers/employees.controller.js"
const  router = Router();

router.get('/employees',getEmployees)
router.get('/employees/:id',getEmployeesById)
router.post('/employees', postEmployees)
router.patch('/employees/:id',putEmployees)
router.delete('/employees/:id',deleteEmployees)
 

export default router;