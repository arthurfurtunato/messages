import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello';
  }

  @Post()
  createMessages(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
