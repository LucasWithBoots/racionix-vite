package io.github.lucaswithboots.racionixspring.repository;

import io.github.lucaswithboots.racionixspring.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Long> {
}
