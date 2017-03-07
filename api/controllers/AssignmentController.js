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

		// Previous tags = [32,47,48,60,61,62,63,64,65,66,67,68,69,70];
		let newTags = [1,2,3,4,5,6,7,8,9,10];

		Assignment.update({id: 9}, {tags: newTags})
         .exec(function (err, updated) {
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
