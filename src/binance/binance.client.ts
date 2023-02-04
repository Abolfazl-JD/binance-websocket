import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { BinanceCandle } from './binance-candle.schema';
import { BinanceService } from './binance.service';
const Binance = require('binance-api-node').default;

@Injectable()
export class BinanceClient implements OnModuleInit {

    private readonly logger = new Logger(BinanceClient.name)
    public binanceClient: any

    constructor(private readonly binanceService: BinanceService) {
        this.binanceClient = Binance()
    }

    // when module is initialized, start live feed candle data
    onModuleInit() {
        this.subscribeToCandle()
    }

    subscribeToCandle() {
        let dataIsFetched = false
        const data = this.binanceClient.ws.candles('BTCUSDT', '1m', async (candleData: BinanceCandle) => {
            // if a candle data has been already saved, end the live candle data 
            if (dataIsFetched) {
                this.logger.log('ready to get candle data')
                data()
            }
            // if it's the first candle data, so save candle data to the database
            else {
                this.logger.log('saving candle data to the database')
                await this.binanceService.saveCandleData(candleData)
                this.logger.log('candle data was saved')
                dataIsFetched = true
            }
        })
    }
}
