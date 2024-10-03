import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Definição dos labirintos para diferentes níveis
const levels = [
  // Nível 1
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '.', '#', '.', '#', '.', '#'],
    ['#', '.', '#', '.', '#', '.', '#', '.', '#'],
    ['#', '.', '#', '.', '.', '.', '#', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '.', '#', '#', '#', 'X', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 2
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '#', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '.', '#', '#', '.', '#', '.', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '.', '#', '.', '#'],
    ['#', '#', '.', '#', '#', '#', '#', '.', '#', '.', '#'],
    ['#', '#', '.', '.', '.', '#', '.', '.', '#', '.', '#'],
    ['#', '#', '#', '#', '.', '#', '.', '#', '#', '.', '#'],
    ['#', '#', '.', '.', '.', '.', '.', '#', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 'X', '#', '#'],
  ],
  // Nível 3
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '#', '.', '#'],
    ['#', '.', '#', '.', '.', '#', '.', '#', '.', '#'],
    ['#', '.', '#', '#', '.', '#', '.', '.', '.', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '#', 'X', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 4
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '#', '#', '.', '.', '#'],
    ['#', '#', '#', '#', '.', '#', '#', '.', '#', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '.', '#', '#'],
    ['#', '#', '.', '#', '#', '#', '#', '.', '.', 'X'],
    ['#', '#', '.', '.', '.', '#', '.', '.', '#', '#'],
    ['#', '.', '#', '#', '.', '#', '.', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 5
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '#', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '.', '#', '.', '#'],
    ['#', 'X', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 6
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '.', '#', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '.', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '.', '#', '.', '#'],
    ['#', 'X', '.', '.', '.', '.', '.', '.', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 7
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '#', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '.', '#', '#', '#', '.', '#', '.', '#'],
    ['#', '#', '.', '.', '.', '.', '.', '#', '.', '#'],
    ['#', 'X', '#', '#', '#', '#', '#', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 8
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '.', '.', '#', '#', '#', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '.', '.', '#'],
    ['#', 'X', '#', '#', '#', '#', '.', '#', '#', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '.', '#', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '#', '.', '.', '#', '.', '#'],
    ['#', '#', '#', '.', '.', '.', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '#', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 9
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '.', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '#', '.', '#'],
    ['#', 'X', '#', '#', '#', '#', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 10
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '#', '.', '.', '#', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', 'X', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '.', '#', '#', '#', '#', '#', '.', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
];

const MazeGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [maze, setMaze] = useState(levels[currentLevel]);
  const [playerPos, setPlayerPos] = useState({ row: 1, col: 1 });
  const [time, setTime] = useState(0);
  const [levelTimes, setLevelTimes] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [hasMoved, setHasMoved] = useState(false);

  // Inicia o cronômetro ao carregar a fase
  useEffect(() => {
    resetPlayer();
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [currentLevel]);

  // Função que reseta o jogador para o início da fase
  const resetPlayer = () => {
    const newMaze = maze.map((row) =>
      row.map((cell) => (cell === 'O' ? '.' : cell)) // Reseta a posição do jogador
    );
    newMaze[1][1] = 'O'; // Reseta a posição inicial do jogador
    setMaze(newMaze);
    setPlayerPos({ row: 1, col: 1 });
    setHasMoved(false);
  };

  // Função que movimenta o rato
  const movePlayer = (direction) => {
    const { row, col } = playerPos;
    let newRow = row;
    let newCol = col;

    // Atualizando a posição do jogador com base na direção
    if (direction === 'up') newRow = row - 1;
    if (direction === 'down') newRow = row + 1;
    if (direction === 'left') newCol = col - 1;
    if (direction === 'right') newCol = col + 1;

    // Verifica se o movimento é válido
    if (newRow >= 0 && newRow < maze.length && newCol >= 0 && newCol < maze[0].length) {
      if (maze[newRow][newCol] !== '#') {
        const updatedMaze = maze.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (rowIndex === row && colIndex === col) return '.'; // Limpa a posição anterior
            if (rowIndex === newRow && colIndex === newCol) return 'O'; // Atualiza a nova posição
            return cell;
          })
        );

        setMaze(updatedMaze);
        setPlayerPos({ row: newRow, col: newCol });
        setHasMoved(true);

        // Verificar se o jogador encontrou o queijo
        if (maze[newRow][newCol] === 'X') {
          clearInterval(intervalId);
          const newLevelTimes = [...levelTimes, time];
          setLevelTimes(newLevelTimes);
          showLevelCompletionPopup(newLevelTimes);
          resetPlayer();
          setCurrentLevel((prevLevel) => {
            const nextLevel = prevLevel + 1;
            setMaze(levels[nextLevel]); // Atualiza o labirinto para o próximo nível
            return nextLevel < levels.length ? nextLevel : prevLevel; // Garante que não ultrapasse os níveis
          });
          setTime(0);
        }
      } else {
        resetPlayer(); // Volta ao início da fase se colidir com a parede
      }
    }
  };

  // Exibe o popup ao finalizar todos os níveis
  const showLevelCompletionPopup = (levelTimes) => {
    const totalTime = levelTimes.reduce((acc, curr) => acc + curr, 0);
    const formattedTimes = levelTimes.map((time, index) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `Fase ${index + 1}: ${minutes}m ${seconds}s`;
    });

    Alert.alert('Você completou o jogo!', `Tempos por fase:\n${formattedTimes.join('\n')}\n\nTempo total: ${Math.floor(totalTime / 60)}m ${totalTime % 60}s`, [
      { text: 'Reiniciar', onPress: resetGame },
      { text: 'Sair', onPress: () => console.log('Sair do jogo') },
    ]);
  };

  // Função para reiniciar o jogo
  const resetGame = () => {
    setCurrentLevel(0);
    setMaze(levels[0]);
    setPlayerPos({ row: 1, col: 1 });
    setTime(0);
    setLevelTimes([]);
  };

  return (
    <View style={styles.container}>
      {/* Exibe o cronômetro */}
      <Text style={styles.timer}>
        Tempo: {Math.floor(time / 3600)}h {Math.floor((time % 3600) / 60)}m {time % 60}s
      </Text>
      <Text style={styles.level}>Fase: {currentLevel + 1}</Text>

      {/* Renderiza o labirinto */}
      {maze.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Text key={colIndex} style={styles.cell}>
              {cell}
            </Text>
          ))}
        </View>
      ))}

      {/* Botões para movimentar o rato */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => movePlayer('up')} style={styles.controlButton}>
          <Text style={styles.controlButtonText}>↑</Text>
        </TouchableOpacity>
        <View style={styles.horizontalButtons}>
          <TouchableOpacity onPress={() => movePlayer('left')} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => movePlayer('right')} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>→</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => movePlayer('down')} style={styles.controlButton}>
          <Text style={styles.controlButtonText}>↓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e272e',
  },
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  level: {
    fontSize: 18,
    marginBottom: 20,
    color: '#aaa'
  },
  cell: {
    width: 24,
    height: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  controls: {
    marginTop: 20,
    alignItems: 'center',
  },
  controlButton: {
    padding: 15,
    backgroundColor: '#4cd137',
    borderRadius: 10,
    margin: 5,
  },
  controlButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  horizontalButtons: {
    flexDirection: 'row',
  },
});

export default MazeGame;
