package com.fs.core.challenge.server.service;

import com.fs.core.challenge.server.dto.MessageDto;
import com.fs.core.challenge.server.mapper.MessageMapper;
import com.fs.core.challenge.server.model.MessageEntity;
import com.fs.core.challenge.server.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageMapper messageMapper;
    private final MessageRepository messageRepository;

    public List<MessageDto> getMessages() {
        log.info("Getting all messages...");
        List<MessageEntity> entities = messageRepository.findAllByOrderByTimestampAsc();
        return messageMapper.mapEntityToDto(entities);
    }

    public void saveNewMessage(MessageDto messageDto) {
        log.info("Saving new message...");
        MessageEntity message = new MessageEntity();
        message.setAuthor(messageDto.author());
        message.setContent(messageDto.content());
        message.setTimestamp(LocalDateTime.now());
        messageRepository.save(message);
    }

}
