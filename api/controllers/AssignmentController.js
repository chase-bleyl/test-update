/**
 * AssignmentController
 *
 * @description :: Server-side logic for managing assignments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		Assignment.find({id: 9})
		 .populate("tags")
		 .exec(function (err, assignment) {
			 if (err) {
				 return res.serverError(err);
			 }

			 return res.json({
				 assignment
			 });
		 });
	},

	update: function (req, res) {

		// Previous tags = [32,47,48,60,61,62,63,64,65,66,67,68,69,70,239,240,241,242,243];
		let newTags = [ 5,
			6,
			7,
			8,
			32,
			47,
			48,
			60,
			61,
			62,
			63,
			64,
			65,
			67,
			68,
			69,
			70
		];

		Assignment.update({id: 9}, {tags: newTags})
         .exec(function afterwards(err, updated) {
            if (err) {
                return res.serverError(err);
            }

            // Must populate Assignment again
			Assignment.find({id: 9})
			 .populate("tags")
			 .exec(function (err, assignment) {
				 if (err) {
					 return res.serverError(err);
				 }

				 return res.json({
					 assignment
				 });
			 });
        });
	}
};
