package io.github.lucaswithboots.racionixspring.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}
