import { IsString, IsNotEmpty, IsPositive, IsNumber, IsBoolean } from 'class-validator'

export class CreateCandleDataDto {
    @IsString()
    @IsNotEmpty()
    eventType: string

    @IsNotEmpty()
    @IsPositive()
    eventTime: number

    @IsString()
    @IsNotEmpty()
    symbol: string

    @IsNotEmpty()
    @IsPositive()
    startTime: number

    @IsNotEmpty()
    @IsPositive()
    closeTime: number

    @IsNotEmpty()
    @IsPositive()
    firstTradeId: number

    @IsNotEmpty()
    @IsPositive()
    lastTradeId: number

    @IsString()
    @IsNotEmpty()
    open: string

    @IsString()
    @IsNotEmpty()
    high: string

    @IsString()
    @IsNotEmpty()
    low: string

    @IsString()
    @IsNotEmpty()
    close: string

    @IsString()
    @IsNotEmpty()
    volume: string
    
    @IsNotEmpty()
    @IsNumber()
    trades: number

    @IsString()
    @IsNotEmpty()
    interval: string

    @IsNotEmpty()
    @IsBoolean()
    isFinal: boolean

    @IsString()
    @IsNotEmpty()
    quoteVolume: string

    @IsString()
    @IsNotEmpty()
    buyVolume: string

    @IsString()
    @IsNotEmpty()
    quoteBuyVolume: string 
}