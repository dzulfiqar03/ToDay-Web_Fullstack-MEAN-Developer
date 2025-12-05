
const {Todo} = require('../db/db');
const { ObjectId } = require("mongodb");

module.exports.create = async (req, res) => {
  try {
    const todo = await Todo.create({
      userId: req.body.userId,
      todo: req.body.todo
    });

    return res.status(201).json({
      message: "Todo berhasil dibuat",
      data: todo
    });

  } catch (error) {
    return res.status(500).json({
      message: "Gagal membuat todo",
      error: error.message
    });
  }
};



module.exports.readAll = async function (req, res, next) {
    try {
        await Todo.find().then(result => {
            if (result.length === 0) {
                res.status(404);
                res.send({ message: "No Todo found" });
                return;
            }
            res.status(200).send({
                message: "All Todo found",
                data: result
            });
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }

}

module.exports.readOne = async function (req, res) {
    try {
        const userId = req.params.id;

        // Cari berdasarkan userId
        const todos = await Todo.find({ userId: userId });

        // Jika tidak ada todo
        if (todos.length === 0) {
            return res.status(404).json({
                message: "No Todo found for this user",
                data: []
            });
        }

        // Jika ada
        return res.status(200).json({
            message: "Todos found",
            data: todos
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports.update = async function (req, res, next) {
    try {
        let id = req.params.id;
        let Todos = req.body;

        await Todo.findOneAndUpdate(
            { _id: id },
            Todos,
            { new: true }
        ).then(
            (result) => {
                if (!result) {
                    res.status(404);
                    res.send({ message: "Todos not found" });
                    return;
                }
                res.status(200).send(
                    {
                        message: "Todos updated",
                        data: result
                    });
            }
        );

        res.status(200).send(
            {
                message: "Todos updated",
                data: result
            });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports.delete = async function (req, res, next) {
    try {
        if (await Todo.length === 0) {
            res.status(404);
            res.send({ message: "No Todo found" });
            return;
        }
        let id = req.params.id;
        await Todo.findOneAndDelete({ '_id': id }).then(result => {
            if (result.id === undefined) {
                res.status(404);
                res.send({ message: "Todos not found" });
                return;
            }
            res.status(200).
                send({
                    message: "Todos deleted",
                    data: Todos
                });
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }

}

module.exports.deleteAll = async function (req, res, next) {
    try {
        if (await Todo.length === 0) {
            res.status(404);
            res.send({ message: "No Todo found" });
            return;
        }
        await Todo.deleteMany().then(result => {
            res.status(200).send({
                message: "All Todo deleted",
                data: result,
                counts: Todo.length
            });
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}