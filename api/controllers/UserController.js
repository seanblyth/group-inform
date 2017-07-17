/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/**
	 * `UserController.login()`
	 */
	login: function(req, res) {
		return res.login({
			successRedirect: '/'
		});
	},

	/**
	 * `UserController.logout()`
	 */
	logout: function(req, res) {
		req.logout();
		return res.ok('Logged out successfully.');
	},

	/**
	 * `UserController.signup()`
	 */
	signup: function(req, res) {
		User.create(req.params.all()).exec(function(err, user) {
			if (err) return res.negotiate(err);
			req.login(user, function(err) {
				if (err) return res.negotiate(err);
				return res.redirect('/welcome');
			});
		});
	},

	/**
	 * `UserController.index()`
	 */
	index: function(req, res) {
		return res.json({
			todo: 'index() is not implemented yet!'
		});
	},


	/**
	 * `UserController.create()`
	 */
	create: function(req, res) {
		return res.json({
			todo: 'create() is not implemented yet!'
		});
	},


	/**
	 * `UserController.show()`
	 */
	show: function(req, res) {
		return res.json({
			todo: 'show() is not implemented yet!'
		});
	},


	/**
	 * `UserController.edit()`
	 */
	edit: function(req, res) {
		return res.json({
			todo: 'edit() is not implemented yet!'
		});
	},


	/**
	 * `UserController.delete()`
	 */
	delete: function(req, res) {
		return res.json({
			todo: 'delete() is not implemented yet!'
		});
	}
}
