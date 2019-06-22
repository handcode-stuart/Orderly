const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Project = require("../../../models/Project");

/**
 * @route   GET /api/v1/projects
 * @desc    Get all projects for the logged in user
 * @access  Private
 */
router.get("/", auth, async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user.id }).sort({ date: -1 });
        return res.json(projects);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

/**
 * @route   GET /api/v1/projects/{id}
 * @desc    Get project by id
 * @access  Private
 */
router.get("/:id", auth, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (project.user.toString() !== req.user.id.toString()) {
            return res.status(401).json({ msg: "User not authorised" });
        }

        return res.json(project);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

/**
 * @route   POST /api/v1/projects
 * @desc    Add a project for the logged in user
 * @access  Private
 */
router.post(
    "/",
    auth,
    [
        check("name", "A project name is required")
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const newProject = new Project({
                name: req.body.name,
                color: req.body.color,
                user: req.user.id,
            });

            const project = await newProject.save();

            return res.json(project);
        } catch (error) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    },
);

/**
 * @route   PUT /api/v1/projects/{id}
 * @desc    Edit a project
 * @access  Private
 */
router.put(
    "/:id",
    auth,
    [
        check("name", "A project name is required")
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const project = await Project.findById(req.params.id);

            if (project.user.toString() !== req.user.id.toString()) {
                return res.status(401).json({ msg: "User not authorised" });
            }

            project.name = req.body.name;

            const updatedProject = await project.save();

            return res.json(updatedProject);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    },
);

/**
 * @route   DELETE /api/v1/projects/{id}
 * @desc
 * @access
 */
router.delete("/:id", auth, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (project.user.toString() !== req.user.id.toString()) {
            return res.status(401).json({ msg: "User not authorised" });
        }

        project.remove();

        return res.status(200).json({ msg: "Project deleted" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

module.exports = router;
