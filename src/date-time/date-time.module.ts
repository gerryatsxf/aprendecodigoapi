import { Module } from '@nestjs/common';
import { DateTimeService } from './date-time.service';
import { DateTimeController } from './date-time.controller';

@Module({
  controllers: [DateTimeController],
  providers: [DateTimeService]
})
export class DateTimeModule {}
