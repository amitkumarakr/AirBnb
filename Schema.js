// server side validation Schema
const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
        image: Joi.string().allow("",null),
        price: Joi.number().required(),
        location: Joi.string().required(),
        country: Joi.string().required()
    }).required(),
})    

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required(),
        // content: Joi.string().required(),
    }).required(),
})