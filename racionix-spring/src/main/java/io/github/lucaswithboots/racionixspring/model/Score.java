package io.github.lucaswithboots.racionixspring.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "scores")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_user", referencedColumnName = "id")
    private User idUser;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_game", referencedColumnName = "id")
    private Game idGame;

    private Integer score;
}
