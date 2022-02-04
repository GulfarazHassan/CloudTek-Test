import { Request, Response } from 'express';
import ItemModel from '../models/item.model';

export const createItem = async (req: Request, res: Response) => {
  const { title, photo, description, shortDescription } = req.body;
  const item = new ItemModel({
    title,
    photo,
    description,
    shortDescription,
  });
  try {
    await item.save();
    return res.status(200).json({
      success: true,
      message: 'Item Created successfully',
      data: item,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error creating item', error: err.message });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const item = await ItemModel.findById(id);
    return res.status(200).json({
      success: true,
      message: 'Item found',
      data: item,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error founding item',
      error: err.message,
    });
  }
};

export const searchItem = async (req: Request, res: Response) => {
  const { title } = req.query;

  try {
    const items = await ItemModel.find({
      title: { $regex: title || '', $options: 'i' },
    });
    return res.status(200).json({
      success: true,
      message: 'Items found',
      data: items,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error founding item',
      error: err.message,
    });
  }
};
