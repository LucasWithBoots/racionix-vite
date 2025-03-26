package io.github.lucaswithboots.racionixspring.dto;

import io.github.lucaswithboots.racionixspring.model.Score;
import lombok.Data;

@Data
public class ScoreDTO {
    private Long id;
    private Integer score;
    private String gameName;
    private String userName;

    public ScoreDTO(Score score) {
        this.id = score.getId();
        this.score = score.getScore();
        this.gameName = score.getIdGame().getName();
        this.userName = score.getIdUser().getFullName();
    }
}
