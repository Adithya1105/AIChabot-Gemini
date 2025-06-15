package com.ai.chatbot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/chat")
public class AIController {


    @Autowired
    private final AIService  aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/ask")
    public ResponseEntity<String> chatwithllm(@RequestBody Map<String,String> payload)
    {
String question= payload.get("question");
String answer=aiService.getAnswer(question);

return ResponseEntity.ok(answer);



    }



}
