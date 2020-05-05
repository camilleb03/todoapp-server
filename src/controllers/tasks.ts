import { Request, Response } from 'express';
import pool from '../connexion';

const getTasks = async (req: Request, res: Response) => {
    pool.query('SELECT * FROM TASKS', (err, result) => {
        if (err) {
            throw err;
        }
        return res.status(200).json(result.rows);
    });
};

const getTaskById = (req: Request, res: Response) => {
    const id: Number = parseInt(req.params.id);
        pool.query('SELECT * FROM TASKS WHERE id = $1',[id], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.rowCount === 0)
            return res.status(404).json(`Task ${id} not found`);
        return res.status(200).json(result.rows);
    });
}
const createTask = (req: Request, res: Response) => {
    const {name , description } = req.body;
    pool.query('INSERT INTO TASKS (NAME, DESCRIPTION) VALUES ($1, $2)', [name, description],
    (err, result) => {
        if (err) {
            throw err;
        }
        return res.status(200).json({
                message: 'Task successfully created',
                body: {
                    task: {
                        name,
                        description
                    }
                }
            });
    });
}
const updateTask = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const {name , description } = req.body;
    pool.query('UPDATE TASKS SET name = $1, description = $2 WHERE id = $3',[name, description, id],
    (err, result) => {
        if (err) {
            throw err;
        }
        if (result.rowCount === 0)
            return res.status(404).json(`Task ${id} not found`);
        return res.status(200).json(`Task ${id} updated succesfully`);
    });
}
const deleteTask = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    pool.query('DELETE FROM TASKS WHERE id = $1',[id],
    (err, result) => {
        if (err) {
            throw err;
        }
        if (result.rowCount === 0)
            return res.status(404).json(`Task ${id} not found`);
        return res.status(200).json(`Task ${id} deleted succesfully`);
    });
}

export default {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}