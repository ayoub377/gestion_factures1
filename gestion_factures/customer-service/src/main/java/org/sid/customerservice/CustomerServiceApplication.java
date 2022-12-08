package org.sid.customerservice;

import org.sid.customerservice.entities.Customer;
import org.sid.customerservice.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CustomerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerServiceApplication.class, args);
    }
    @Bean
    public CommandLineRunner commandLineRunner(CustomerRepository customerRepository){
        return args -> {
            customerRepository.saveAll(
                    List.of(
                            Customer.builder().name("Hassan").email("Hassan@gmail.com").build(),
                            Customer.builder().name("Youssef").email("Youssef@gmail.com").build(),
                            Customer.builder().name("Imane").email("Imane@gmail.com").build()
                    )
            );
            customerRepository.findAll().forEach(
                    System.out::println
            );
        };

    }

}
