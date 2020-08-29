const express = require("express")

const expressEdge = require("express-edge")

const mongoose = require("mongoose")

const User = require("./models/User")

const Message = require("./models/Message")

const Contact = require("./models/Contact")

const bodyParser = require("body-parser")

const fs = require("fs")

const path = require("path")

const expressSession = require("express-session")

const connectMongo = require("connect-mongo")

const getContactsController = require("./controllers/getContacts")

const getMessagesController = require("./controllers/getMessages")

const displayHomeController = require("./controllers/displayHome")

const displayProfileController = require("./controllers/displayProfile")

const displayUpdateController = require("./controllers/displayUpdate")

const displayAuthController = require("./controllers/displayAuth")

const authenticateController = require("./controllers/authenticateUser")

const activateContactController = require("./controllers/activateContact")

const deactivateContactController = require("./controllers/deactivateContact")

const loginController = require("./controllers/login")

const registerController = require("./controllers/register")

const logoutController = require("./controllers/logout")

const sendController = require("./controllers/sendMessage")

const display404Controller = require("./controllers/display404")

const searchPeopleController = require("./controllers/searchPeople")

const updateProfileController = require("./controllers/updateProfile")

mongoose.connect('mongodb://localhost/messenger', {useNewUrlParser: true})

const app = express()

const mongoStore = connectMongo(expressSession);

app.use(express.static('res'))

app.use(expressEdge)

app.use(bodyParser.json({ limit: '50mb' }))

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(expressSession({
  secret: 'secret' ,
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}))

app.get("/profile/update", authenticateController, getContactsController, displayUpdateController)

app.get("/profile", authenticateController, getContactsController, displayProfileController)

app.get("/profile/:user", authenticateController, getContactsController, displayProfileController)

app.post("/auth/login", loginController)

app.post("/auth/register", registerController)

app.get("/auth/logout", authenticateController, logoutController)

app.get("/auth", authenticateController, displayAuthController)

app.post("/send/message", authenticateController, sendController)

app.post("/profile/update/image", authenticateController, updateProfileController)

app.get("/404", display404Controller)

app.post("/search", searchPeopleController)

app.post("/get/messages", authenticateController, getMessagesController)

app.get("/add/:user", authenticateController, activateContactController)

app.get("/remove/:user", authenticateController, deactivateContactController)

app.get("/", authenticateController, getContactsController, getMessagesController, displayHomeController)

app.get("/:user", authenticateController, getContactsController, getMessagesController, displayHomeController)

app.listen(8888, function(){
  console.log("Server started")
})

