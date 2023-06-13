import PixtCard from "../../entities/interfaces/PixtCard";

export default interface PixtCardGenerator {
    generatePixtCard(amountOfMoney: number, hashedPassword: string, cashBackAccount_id:number, user_id: number): PixtCard;
}