package com.example.randombillingservice.web;

import com.example.randombillingservice.entities.BillEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.function.StreamBridge;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;


@RestController
public class BillEventController {

    @Autowired
    private StreamBridge streamBridge;


    @GetMapping("/publish/{topic}")
    public BillEvent publish(@PathVariable String topic){
        BillEvent billEvent = new BillEvent(ThreadLocalRandom.current().nextLong(1, 101), new Date(),ThreadLocalRandom.current().nextLong(1, 101));
      streamBridge.send(topic,billEvent);
        return billEvent;
    }

}
