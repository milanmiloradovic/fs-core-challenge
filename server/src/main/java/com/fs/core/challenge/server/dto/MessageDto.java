package com.fs.core.challenge.server.dto;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record MessageDto(

	String author,
	String content,
	LocalDateTime timestamp

) {
}
