import { Module } from '@nestjs/common';
import { BinanceCandle, BinanceCandleSchema } from './binance-candle.schema';
import { BinanceController } from './binance.controller';
import { BinanceClient } from './binance.client';
import { BinanceService } from './binance.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: BinanceCandle.name, schema: BinanceCandleSchema }]),],
  controllers: [BinanceController],
  providers: [
    BinanceClient,
    BinanceService
  ]
})
export class BinanceModule { }
