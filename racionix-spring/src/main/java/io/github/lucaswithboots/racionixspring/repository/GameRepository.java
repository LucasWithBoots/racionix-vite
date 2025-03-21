package io.github.lucaswithboots.racionixspring.repository;

import io.github.lucaswithboots.racionixspring.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
