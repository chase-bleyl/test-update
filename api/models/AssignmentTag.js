/**
 * AssignmentTag.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    connection: 'positiveLearningMysqlServer',
  	tableName: 'assignment_tag',
  	attributes: {
  		id: {
  			type: 'integer',
  			primaryKey: true,
  			autoIncrement: true,
  			unique: true
  		},
  		assignment: {
  			columnName: 'assignment_id',
  			model: 'assignment'
  		},
  		tag: {
  			columnName: 'tag_id',
  			model: 'tag'
  		},
		createdAt: {
			columnName: 'created_at'
		}, // timestamp
		updatedAt: {
			columnName: 'updated_at'
		}, // timestamp
  	}
};
