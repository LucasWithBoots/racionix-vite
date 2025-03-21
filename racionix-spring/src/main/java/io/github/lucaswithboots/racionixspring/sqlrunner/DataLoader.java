package io.github.lucaswithboots.racionixspring.sqlrunner;

import io.github.lucaswithboots.racionixspring.model.Game;
import io.github.lucaswithboots.racionixspring.repository.GameRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    public CommandLineRunner loadInitialData(GameRepository gameRepository) {
        return args -> {
            if (gameRepository.count() == 0) {
                Game game1 = new Game();
                game1.setName("Minesweeper");

                Game game2 = new Game();
                game2.setName("Sudoku");

                gameRepository.save(game1);
                gameRepository.save(game2);

                System.out.println("Jogos iniciais adicionados ao banco de dados.");
            }
        };
    }
}