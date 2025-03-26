package io.github.lucaswithboots.racionixspring.controller;

import io.github.lucaswithboots.racionixspring.dto.FrontendScoresDTO;
import io.github.lucaswithboots.racionixspring.dto.ScoreDTO;
import io.github.lucaswithboots.racionixspring.model.Game;
import io.github.lucaswithboots.racionixspring.model.Score;
import io.github.lucaswithboots.racionixspring.repository.GameRepository;
import io.github.lucaswithboots.racionixspring.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/scores")
public class ScoreController {

    @Autowired
    private ScoreRepository scoreRepository;
    @Autowired
    private GameRepository gameRepository;

    @GetMapping
    public List<FrontendScoresDTO> getAllScores() {
        List<Game> games = gameRepository.findAll();

        return games.stream().map(game -> {
            FrontendScoresDTO dto = new FrontendScoresDTO()
        })
    }
}
