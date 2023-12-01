FROM openjdk:17-jdk-slim
LABEL author="Milan Miloradović"
ADD ./target/server-*.jar server.jar
CMD ["java","-jar","server.jar"]
EXPOSE 8080
