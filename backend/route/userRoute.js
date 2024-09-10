const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
const { verifyToken } = require("../middleware/verifyToken")

router.post("/signup", async (req, res) => {
    try {
        await userController.signupUser(req, res)
    } catch (error) {
        console.log("error", error);
    }

})

router.post("/login", async (req, res) => {
    try {
        await userController.login(req, res)
    } catch (error) {
        console.log("error", error);
    }
})

router.get("/userdata", verifyToken, async (req, res) => {
    try {
        await userController.userData(req, res)
    } catch (error) {
        console.log("error", error);
    }
})
module.exports = router