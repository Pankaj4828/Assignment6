// const { date } = require('joi');
const mongooose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2');


const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:String,
 description:String,
 posted_at:Date,
 posted_by:String,
 

})
// blogSchema.plugin(mongoosePaginate);

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;