const router = require("express").Router();
let Posts = require("../models/blogpost.model");

router.route("/").get((req, res) => {
  Posts.find()
    .then((posts) => res.json(posts))
    .catch((error) => res.status(400).json(`Error:  ${error}`));
});

router.route("/add").post((req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const blogpost = req.body.blogpost;
  const img = req.body.img;

  const newBlogPost = new Posts({
    author,
    title,
    blogpost,
    img,
  });

  newBlogPost
    .save()
    .then(() => res.json("New Blog Post saved!"))
    .catch((error) => res.status(400).json(`Error:  ${error}`));
});

router.route("/:id").get((req, res) => {
    Posts.findById(req.params.id)
      .then(post => res.json(post))
      .catch((error) => res.status(400).json(error));
  });

router.route("/update/:id").post((req, res) => {
  Posts.findById(req.params.id).then((post) => {
    post.author = req.body.author;
    post.title = req.body.title;
    post.blogpost = req.body.blogpost;
    post.img = req.body.img;

    post
      .save()
      .then(() => res.json("Post updated!"))
      .catch((error) => res.status(400).json(`Error:  ${error}`));
  });
});

router.route("/:id").delete((req, res) => {
  Posts.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted"))
    .catch((error) => res.status(400).json(error));
});

module.exports = router;
