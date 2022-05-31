import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello';
  }

  @Post()
  createMessages(@Body() body: createMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
