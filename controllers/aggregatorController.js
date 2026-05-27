import { getCompleteUserProfile }
from "../services/aggregatorService.js";

export const aggregateUserData = async (req, res) => {

    try {

        const userId = req.params.id;

        const result =
            await getCompleteUserProfile(userId);

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};