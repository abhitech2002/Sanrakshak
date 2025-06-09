import User from "../Models/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users,
            count: users.length
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Server error while retrieving users",
            error: error.message
        });
    }
};
