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
    ['#', '#', '.', '.', '.', '.', '.', '#', '#', '.', '#'],
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
    ['#', '#', '.', '#', '#', '#', '#', '.', '#', 'X'],
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
    ['#', '.', '#', '.', '.', '.', '.', '#', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '.', '#', '.', '#'],
    ['#', 'X', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
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
    ['#', '0', '.', '#', '.', '.', '.', '#', '.', '#'],
    ['#', '.', '.', '#', '#', '#', '.', '#', '.', '#'],
    ['#', '#', '.', '.', '.', '.', '.', '#', '.', '#'],
    ['#', 'X', '#', '#', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 8
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '.', '#', '#', '#', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '.', '.', '#'],
    ['#', 'X', '#', '#', '#', '#', '.', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 9
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '#', '.', '#'],
    ['#', 'X', '#', '#', '#', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
  // Nível 10
  [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '0', '.', '.', '.', '.', '#', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '#', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', 'X', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ],
];

const MazeGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [maze, setMaze] = useState(levels[currentLevel]);
  const [playerPos, setPlayerPos] = useState({ row: 1, col: 1 });
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Inicia o cronômetro ao carregar a fase
  useEffect(() => {
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [currentLevel]);

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
    if (maze[newRow][newCol] !== '#') {
      const updatedMaze = maze.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === row && colIndex === col) return '.';
          if (rowIndex === newRow && colIndex === newCol) return 'O';
          return cell;
        })
      );

      setMaze(updatedMaze);
      setPlayerPos({ row: newRow, col: newCol });

      // Verificar se o jogador encontrou o queijo
      if (maze[newRow][newCol] === 'X') {
        clearInterval(intervalId);
        alert(`Você encontrou o queijo! Tempo: ${time} segundos`);
        setTime(0);
        nextLevel();
      }
    }
  };

  // Passa para o próximo nível
  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel((prevLevel) => prevLevel + 1);
      setMaze(levels[currentLevel + 1]);
      setPlayerPos({ row: 1, col: 1 });
    } else {
      alert('Parabéns! Você completou todos os níveis!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Exibe o cronômetro */}
      <Text style={styles.timer}>Tempo: {time}s</Text>

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
          <Text style={styles.controlButtonText}>Up</Text>
        </TouchableOpacity>
        <View style={styles.horizontalButtons}>
          <TouchableOpacity onPress={() => movePlayer('left')} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>Left</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => movePlayer('right')} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>Right</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => movePlayer('down')} style={styles.controlButton}>
          <Text style={styles.controlButtonText}>Down</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos do layout
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
