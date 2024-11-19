import { Request, Response } from "express";
import Book, { IBook } from "../models/Book";

// Create a new book
export const createBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const book: IBook = await Book.create(req.body);
        res.status(201).json(book);  // Respond with the created book
    } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all books
export const getBooks = async (req: Request, res: Response): Promise<void> => {
    try {
        const books: IBook[] = await Book.find();
        res.status(200).json(books);  // Respond with a list of books
    } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single book by ID
export const getBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const book: IBook | null = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json(book);  // Respond with the found book
    } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a book by ID
export const updateBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const book: IBook | null = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!book) {
            res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json(book);  // Respond with the updated book
    } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a book by ID
export const deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const book: IBook | null = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json({ success: true, message: "Book deleted successfully" });
    } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
    }
};