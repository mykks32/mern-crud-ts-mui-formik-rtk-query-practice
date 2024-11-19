import express, { Request, Response } from "express";
import { createBook, getBooks, getBook, updateBook, deleteBook } from "../controllers/bookController";

const router = express.Router();

// Define routes for creating, retrieving, updating, and deleting books
router.route("/").post(createBook).get(getBooks);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

export default router;