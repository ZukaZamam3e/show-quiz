import { Box } from "@mui/material";
import { CategoryModel, defaultCategories } from "../../models/CategoryModel";
import { useState } from "react";
import { Categories } from "../Common/Categories";
import { TurnOrder } from "../Common/TurnOrder";
import { defaultPlayers, PlayerModel } from "../../models/PlayerModel";
import { ScoreBoard } from "../Common/ScoreBoard";
import { ManagePlayers } from "./ManagePlayers";
import { ManageQuestion } from "./ManageQuestion";
import {
  CategoryQuestionModel,
  defaultQuestion,
} from "../../models/CategoryQuestionModel";

export const HostPage = () => {
  const [categories, setCategories] =
    useState<CategoryModel[]>(defaultCategories());

  const [players, setPlayers] = useState<PlayerModel[]>(defaultPlayers());
  const [selectedPlayerId, setSelectedPlayerId] = useState<number>(-1);
  const [turnOrder, setTurnOrder] = useState<number>(1);
  const [selectedQuestion, setSelectedQuestion] = useState(defaultQuestion());

  const pointIncrements = [
    ...new Set(categories.flatMap((m) => m.questions).map((m) => m.score)),
  ];

  const questionsLeftInGroup = categories
    .flatMap((category) => category.questions)
    .filter(
      (m) =>
        m.showName == selectedQuestion.showName &&
        m.score == selectedQuestion.score &&
        !m.answerRevealed
    ).length;

  const handleSelectPlayer = (playerId: number) => {
    setSelectedPlayerId(playerId);
  };

  const handleUnselectQuestion = () => {
    setSelectedQuestion(defaultQuestion());
  };

  const handleAddPoints = (points: number) => {
    const currentPlayerId = getCurrentPlayerId();

    const updatedPlayers = players.map((player) => {
      if (player.id === currentPlayerId) {
        return { ...player, score: player.score + points };
      } else {
        return player;
      }
    });

    setPlayers(updatedPlayers);
  };

  const getCurrentPlayerId = () => {
    const currentPlayerId =
      selectedPlayerId !== -1
        ? selectedPlayerId
        : (players.find((m) => m.turnOrder === turnOrder)?.id ?? -1);

    return currentPlayerId;
  };

  const handleShowHint = (hint: string) => {
    const updated = {
      ...selectedQuestion,
      shownHints: [...selectedQuestion.shownHints, hint],
    };

    handleUpdateCategoryQuestion(updated);
    setSelectedQuestion(updated);
  };

  const handleAwardPoints = () => {
    const awardedPlayerId = getCurrentPlayerId();

    handleAddPoints(selectedQuestion.score);

    const updated = {
      ...selectedQuestion,
      awardedPlayerId: awardedPlayerId,
      answerRevealed: true,
    };

    handleUpdateCategoryQuestion(updated);
    setSelectedQuestion(updated);
  };

  const handleUpdateCategoryQuestion = (
    updatedQuestion: CategoryQuestionModel
  ) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({
        ...category,
        questions: category.questions.map((q) =>
          q.questionId === updatedQuestion.questionId ? updatedQuestion : q
        ),
      }))
    );
  };

  const handleRevealAnswer = () => {
    const updated = {
      ...selectedQuestion,
      answerRevealed: true,
    };

    handleUpdateCategoryQuestion(updated);
    setSelectedQuestion(updated);
  };

  const handleGetUnRevealedQuestion = (
    showName: string,
    score: number,
    questionId?: number
  ) => {
    let randomQuestion: CategoryQuestionModel = defaultQuestion();

    const questions = categories
      .find((m) => m.name === showName)
      ?.questions.filter(
        (m) =>
          m.score === score &&
          !m.answerRevealed &&
          (!!!m.questionId || m.questionId !== questionId)
      );

    if (questions && questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      randomQuestion = questions[randomIndex];
    }

    setSelectedQuestion(randomQuestion);
  };

  const categoryQuestionView = (
    <Box>
      {selectedQuestion.questionId !== -1 ? (
        <ManageQuestion
          selectedQuestion={selectedQuestion}
          onUnselectQuestion={handleUnselectQuestion}
          onShowHint={handleShowHint}
          onAwardPoints={handleAwardPoints}
          onRevealAnswer={handleRevealAnswer}
          onGetUnRevealedQuestion={handleGetUnRevealedQuestion}
          questionsLeft={questionsLeftInGroup}
        />
      ) : (
        <Categories
          categories={categories}
          admin={true}
          onGetUnRevealedQuestion={handleGetUnRevealedQuestion}
        />
      )}
    </Box>
  );

  return (
    <div>
      {categoryQuestionView}
      <div>
        <Box
          sx={{
            display: "grid",
            columnGap: "10px",
            rowGap: "10px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <div style={{ gridColumn: "span 3" }}>
            <ManagePlayers
              players={players}
              updatePlayers={setPlayers}
              turnOrder={turnOrder}
              updateTurnOrder={setTurnOrder}
              pointIncrements={pointIncrements}
              selectedPlayerId={selectedPlayerId}
              onSelectPlayer={handleSelectPlayer}
              onAddPoints={handleAddPoints}
            />
          </div>
          <TurnOrder
            players={players}
            updatePlayers={setPlayers}
            turnOrder={turnOrder}
          />
          <ScoreBoard players={players} />
        </Box>
      </div>
    </div>
  );
};
