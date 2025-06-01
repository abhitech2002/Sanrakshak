import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import generateTokens from "../utils/generateTokens.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: true, message: "User already exists" });
        }

        const user = await User.create({ name, email, password });
        const tokens = generateTokens(user._id);
        res.status(201).json({ success: true, message: "User registered successfully", data: user, ...tokens });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const tokens = generateTokens(user._id);
        res.status(200).json({ success: true, message: "User logged in successfully", data: user, ...tokens });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "User profile fetched successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

