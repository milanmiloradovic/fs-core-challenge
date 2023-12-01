package com.fs.core.challenge.server.mapper;

import com.fs.core.challenge.server.dto.MessageDto;
import com.fs.core.challenge.server.model.MessageEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MessageMapper {

    public List<MessageDto> mapEntityToDto(List<MessageEntity> entities) {
        return entities.stream()
                .map(entity -> MessageDto
                        .builder()
                        .author(entity.getAuthor())
                        .content(entity.getContent())
                        .timestamp(entity.getTimestamp())
                        .build())
                .collect(Collectors.toList());
    }

}
