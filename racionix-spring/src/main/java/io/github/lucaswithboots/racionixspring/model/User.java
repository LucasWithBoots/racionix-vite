package io.github.lucaswithboots.racionixspring.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String birthDate;

    @Column(unique = true)
    private String email;

    private String password;


}
