import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description, user: req.user.id });
  await newTask.save();
  res.status(201).json(newTask);
};
