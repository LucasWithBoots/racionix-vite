package io.github.lucaswithboots.racionixspring.dto;

import lombok.Data;

import java.util.List;


@Data
public class FrontendScoresDTO {
    private String gameName;
    private List<FrontendScoreDTO> scores;
}
