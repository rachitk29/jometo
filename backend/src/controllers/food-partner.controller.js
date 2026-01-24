const foodPartnerModel = require('../models/foodPartner.model');
const foodModel = require('../models/food.model');

async function getFoodPartnerById(req, res) {
    try {
        const foodPartnerId = req.params.id;

        const foodPartner = await foodPartnerModel.findById(foodPartnerId);

        if (!foodPartner) {
            return res.status(404).json({
                message: "Food Partner not found"
            });
        }

        const foodItemsByFoodPartner = await foodModel.find({
            foodPartner: foodPartnerId
        });

        res.status(200).json({
            message: "Food partner retrieved successfully",
            foodPartner: {
                ...foodPartner.toObject(),
                foodItems: foodItemsByFoodPartner
            }
        });

    } catch (error) {
        console.error("Error fetching food partner:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = {
    getFoodPartnerById
};
