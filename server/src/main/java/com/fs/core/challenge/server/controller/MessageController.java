package com.fs.core.challenge.server.controller;

import com.fs.core.challenge.server.dto.MessageDto;
import com.fs.core.challenge.server.service.MessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class MessageController {

    private final MessageService messageService;

    @GetMapping("/messages")
    public ResponseEntity<List<MessageDto>> getMessages() {
        log.info("Received request for all messages");
        List<MessageDto> messages = messageService.getMessages();
        return ResponseEntity.ok(messages);
    }

    @PostMapping("/message")
    public ResponseEntity<MessageDto> sendMessage(@RequestBody MessageDto message) {
        log.info("Received request for new message");
        messageService.saveNewMessage(message);
        return ResponseEntity.ok(message);
    }

}
