import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BinanceCandle, BinanceCandleDocument } from './binance-candle.schema';
import { CreateCandleDataDto } from "./dtos/create-candle-data.dto";

@Injectable()
export class BinanceService {
    
    constructor(@InjectModel(BinanceCandle.name) private binanceCandleModel: Model<BinanceCandleDocument>) { }
    
    async saveCandleData(candleData: CreateCandleDataDto) {
        return this.binanceCandleModel.create(candleData)
    }

    async findCandleData() {
        // find the last candle data that was saved in the database
        const [ singleCandleData ] = await this.binanceCandleModel.find().sort({ createdAt: -1 }).limit(1)
        return singleCandleData
    }
}