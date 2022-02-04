import express from 'express';
import { validateAuth } from '../middlewares/validate-request';
import {
  createItem,
  searchItem,
  getItemById,
} from '../controllers/item.controller';
import { createItemDto } from '../dtos/item.dto';

const router = express.Router();

router.post('/api/item', validateAuth(createItemDto), createItem);
router.get('/api/item/search', searchItem);
router.get('/api/item/:id', getItemById);

export { router as itemRouter };
