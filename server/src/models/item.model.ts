import mongoose, { Schema, Document } from 'mongoose';

export interface InterfaceItem extends Document {
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

const ItemSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    photo: { type: String, default: '' },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<InterfaceItem>('item', ItemSchema);
