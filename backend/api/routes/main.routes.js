const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main.controllers");
const userController = require("../controllers/user.controllers");

const todoController = require("../controllers/todo.controllers");

router.get("/", (req, res) => {
  res.json({ message: "API OK" });
});

router.post("/providers", mainController.create);
router.get("/providers", mainController.readAll);
router.get("/providers/:id", mainController.readOne);
router.put("/providers/:id", mainController.update);
router.delete("/providers/:id", mainController.delete);
router.delete("/providers", mainController.deleteAll);

router.post("/userLogin", userController.login);
router.post("/userRegister", userController.register);
router.get("/user", userController.readAll);
router.get("/user/:id", userController.readOne);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);
router.delete("/user", userController.deleteAll);


router.post("/todoCreate", todoController.create);
router.get("/todo/:id", todoController.readOne);
router.put("/todo/:id", todoController.update);
router.delete("/todo/:id", todoController.delete);



module.exports = router;
