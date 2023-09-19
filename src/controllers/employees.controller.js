import { pool } from "../db.js";


export const getEmployees = async (req, res) => {
    try {
        //throw new  Error('error manual');
        const [rows] = await pool.query('SELECT id,name,birthdate,salary FROM employee')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ message: 'something goes wrong' })
    }

}
export const getEmployeesById = async (req, res) => {
    try {
        const id = req.params.id
        const [rows] = await pool.query('SELECT id,name,birthdate,salary FROM employee WHERE id=?', [id])

        if (rows.length <= 0) return res.status(404).json({ message: 'Employee not found' })

        res.json(rows)
    } catch (error) {
        res.status(500).json({ message: 'something goes wrong' })
    }
}
export const postEmployees = async (req, res) => {
    try {
        const { name, birthdate, salary } = req.body
        const date = new Date(birthdate)

        const [rows] = await pool.query('INSERT INTO employee(name,birthdate,salary) VALUES(?,?,?)', [name, date, salary])
        res.send({
            id: rows.insertId,
            name,
            birthdate,
            salary
        });
    } catch (error) {
        res.status(500).json({ message: 'something goes wrong' })
    }
}
export const putEmployees = async (req, res) => {
    try {
        const {name, birthdate, salary } = req.body
        const id = req.params.id
        console.log(id)
        const date = new Date(birthdate)
        const[result] = await pool.query('UPDATE employee SET name= IFNULL(?,name) , birthdate=IFNULL(?,birthdate) , salary=IFNULL(?,salary) WHERE ID=?', [name, date, salary, id])
        console.log(result.affectedRows)

        if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' })

        const [rows] = await pool.query('SELECT id,name,birthdate,salary FROM employee WHERE id=?', [id])

        // res.send({
        //     id: rows.insertId,
        //     name,
        //     birthdate,
        //     salary
        // });
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ message: 'something goes wrong' })
    }
}

export const deleteEmployees = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const [rows] = await pool.query('DELETE FROM employee WHERE id=?', [id])

        if (rows.affectedRows <= 0) return res.status(404).json({ message: 'Employee not found' })

       res.status(204)
    } catch (error) {
        res.status(500).json({ message: 'something goes wrong' })
    }
}