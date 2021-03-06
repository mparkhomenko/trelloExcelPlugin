import { Sequelize, Model, DataTypes } from "sequelize";
import { ModelType } from "../ModelType";

interface Card extends Model {
  readonly id: string;

  cardName: string;
  cardId: string;
  listName: string;
  dateCreate: string;
  dateUpdate: string;
  shortlinkCard: string;
  isSended: boolean;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export type CardModel = ModelType<Card>;

export const Card = (dbService: Sequelize) => {
  const attributes = {
    id: {
      type: DataTypes.STRING(250),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    cardId: { type: DataTypes.STRING(250), allowNull: false },
    listName: { type: DataTypes.STRING(250), allowNull: false },
    cardName: { type: DataTypes.STRING(250), allowNull: false },
    dateCreate: { type: DataTypes.STRING(250), allowNull: false },
    dateUpdate: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    shortlinkCard: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    isSended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  };

  const model = dbService.define("cards", attributes) as CardModel;

  return model;
};
