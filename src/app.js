// Final output is:
// Post with findAll method that returns a Promise .then(ui.renderPosts)
import Post from "./post";
import User from "./user";
import ui from "./ui";

Post.findAll()
	.then(ui.renderPosts)
	.catch((error) => {
		console.log(error);
});

User.findRecent()
	.then(ui.renderUsers)
	.catch((error) => {
		console.log(error);
});