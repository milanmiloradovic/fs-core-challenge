package com.fs.core.challenge.server.controller;

import com.fs.core.challenge.server.dto.MessageDto;
import com.fs.core.challenge.server.service.MessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
