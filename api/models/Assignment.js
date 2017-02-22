/**
 * Assignment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    connection: 'positiveLearningMysqlServer',
  	tableName: 'assignments',
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
  		expectations: {
  			type: 'text'
  		}, // text
  		estimatedTime: {
  			columnName: 'estimated_time',
  			type: 'string'
  		}, // varchar(255)
  		published: {
  			type: 'integer'
  		}, // tinyint(1)
  		active: {
  			type: 'integer'
  		}, // tinyint(1)
  		defaultDomain: {
  			columnName: 'default_domain',
  			type: 'string'
  		}, // varchar(255)
  		// an assignment may have many tags
  		tags: {
  			collection: 'tag',
  			via: 'assignment',
  			through: 'assignmenttag'
  		},
  		createdAt: {
  			columnName: 'created_at'
  		}, // timestamp
  		updatedAt: {
  			columnName: 'updated_at'
  		}, // timestamp
  		concepts: {
  			type: 'text'
  		}, // text
  	}
};
