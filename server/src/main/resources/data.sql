CREATE TABLE IF NOT EXISTS message (
        id SERIAL PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        content TEXT NOT NULL
);

INSERT INTO message (author, content, timestamp) VALUES ('Joffrey', 'Brilliant', '2023-11-28 15:00:00');
INSERT INTO message (author, content) VALUES ('NINJA', 'Great resource, thanks');
INSERT INTO message (author, content, timestamp) VALUES ('I am mister brilliant', 'THANKS!', '2023-11-29 15:30:00');
INSERT INTO message (author, content, timestamp) VALUES ('martin57', 'Thanks Peter', '2023-11-27 13:35:00');
INSERT INTO message (author, content, timestamp) VALUES ('Patricia', 'Sounds good to me!', '2023-11-29 15:31:00');
