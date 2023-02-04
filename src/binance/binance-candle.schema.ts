import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BinanceCandleDocument = HydratedDocument<BinanceCandle>

@Schema({ versionKey: false, timestamps: true })
export class BinanceCandle {
    @Prop()
    eventType: string

    @Prop()
    eventTime: number

    @Prop()
    symbol: string

    @Prop()
    startTime: number

    @Prop()
    closeTime: number

    @Prop()
    firstTradeId: number

    @Prop()
    lastTradeId: number

    @Prop()
    open: string

    @Prop()
    high: string

    @Prop()
    low: string

    @Prop()
    close: string

    @Prop()
    volume: string
    
    @Prop()
    trades: number

    @Prop()
    interval: string

    @Prop()
    isFinal: boolean

    @Prop()
    quoteVolume: string

    @Prop()
    buyVolume: string

    @Prop()
    quoteBuyVolume: string 
}

export const BinanceCandleSchema = SchemaFactory.createForClass(BinanceCandle)