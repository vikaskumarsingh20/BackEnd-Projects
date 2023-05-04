const express = require("express");
const router = express.Router();


//Import Controller
const { dummyLink, likePost, unlikePost } = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");



//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//export
module.exports = router;



//"window.zoomLevel": 1,
//"workbench.iconTheme": "vscode-icons",
//"files.autoSave": "afterDelay",
//"workbench.colorTheme": "Visual Studio 2017 Dark - C++",
//"code-runner.runInTerminal": true,
//"code-runner.runInOutputWindow":
//