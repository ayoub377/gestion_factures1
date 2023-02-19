package org.sid.billingservice.services;
import org.sid.billingservice.entities.BillEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.function.Consumer;


@Service
public class BillingEventService {

    @Bean
    public Consumer<BillEvent> billEventConsumer(){
        return (input) -> {
            System.out.println("*************************");
            System.out.println(input.toString());
            System.out.println("*************************");
        };
    }
}
