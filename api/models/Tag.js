/**
 * Tag.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  	connection: 'positiveLearningMysqlServer',
  	tableName: 'tags',
  	attributes: {
  		id: {
  			type: 'integer',
  			primaryKey: true,
  			autoIncrement: true,
  			unique: true
  		},
  		title: {
  			type: 'string'
  		}, // varchar(255)
  		description: {
  			type: 'text'
  		}, // text
  		createdAt: {
  			columnName: 'created_at'
  		}, // timestamp
  		updatedAt: {
  			columnName: 'updated_at'
  		}, // timestamp
  		// A tag may have many assignments
  		assignments: {
  			collection: 'assignment',
  			via: 'tag',
  			through: 'assignmenttag'
  		},
  	}
};
