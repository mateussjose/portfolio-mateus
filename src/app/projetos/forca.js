import OutlineText from '../../components/OutlineText';
import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

const words = [
  'JAVASCRIPT',
  'COMPUTADOR',
  'ALGORITMO',
  'TECNOLOGIA',
  'PROGRAMACAO',
  'DESENVOLVIMENTO',
  'INTERFACE',
  'INTELIGENCIA',
  'SISTEMAS',
  'BANCO',
  'DADOS',
  'INTERNET',
  'SOFTWARE',
  'HARDWARE',
  'APLICATIVO',
  'FRAMEWORK',
  'COMPONENTE',
  'VARIAVEL',
  'FUNCAO',
  'ESTRUTURA',
  'PYTHON',
  'REACT',
  'EXPO',
  'ANDROID',
  'GITHUB',
  'SERVIDOR',
  'SEGURANCA',
  'REDES',
  'MOBILE',
  'PROJETO',
  'DESAFIO',
  'INOVACAO',
  'ENGENHARIA',
  'COMPUTACAO',
  'ESTUDANTE',
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const maxErrors = 6;

function getNewWord(currentWord) {
  let nextWord = currentWord;

  while (nextWord === currentWord) {
    nextWord = words[Math.floor(Math.random() * words.length)];
  }

  return nextWord;
}

export default function HangmanScreen() {
  const router = useRouter();
  const [word, setWord] = useState(() => getNewWord(''));
  const [guessed, setGuessed] = useState([]);
  const [errors, setErrors] = useState(0);

  const won = word.split('').every((letter) => guessed.includes(letter));
  const lost = errors >= maxErrors;
  const finished = won || lost;

  const chooseLetter = (letter) => {
    if (finished || guessed.includes(letter)) return;

    setGuessed((previous) => [...previous, letter]);

    if (!word.includes(letter)) {
      setErrors((previous) => previous + 1);
    }
  };

  const restart = () => {
    setWord((previous) => getNewWord(previous));
    setGuessed([]);
    setErrors(0);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Stack.Screen options={{ title: 'Jogo da Forca' }} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>← VOLTAR</Text>
        </Pressable>
        <Text style={styles.headerLabel}>INTERACTIVE PROJECT</Text>
      </View>

      <View style={styles.heading}>
        <Text style={styles.overline}>MINI GAME // 001</Text>
        <Text style={styles.title}>JOGO DA</Text>
        <OutlineText
        text="FORCA"
        size={48}
        width={220}
        />  
        <Text style={styles.description}>
          Descubra a palavra antes de atingir o limite de erros.
        </Text>
      </View>

      <View style={styles.gamePanel}>
        <Text style={styles.panelLabel}>ATTEMPTS REMAINING</Text>
        <Text style={styles.attempts}>
          {maxErrors - errors}
          <Text style={styles.attemptsTotal}> / {maxErrors}</Text>
        </Text>

        <View style={styles.progress}>
          <View
            style={[
              styles.progressFill,
              { width: `${(errors / maxErrors) * 100}%` },
            ]}
          />
        </View>

        <Text style={styles.wordLabel}>HIDDEN WORD</Text>
        <View style={styles.wordContainer}>
          {word.split('').map((letter, index) => (
            <View style={styles.letterBox} key={`${letter}-${index}`}>
              <Text style={styles.letter}>
                {guessed.includes(letter) || finished ? letter : ''}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.errorsLabel}>
          INCORRECT LETTERS: {guessed.filter((letter) => !word.includes(letter)).join(', ') || 'NONE'}
        </Text>
      </View>

      {finished ? (
        <View style={styles.resultPanel}>
          <Text style={[styles.result, won ? styles.win : styles.loss]}>
            {won ? 'YOU WIN!' : 'GAME OVER'}
          </Text>
          <Text style={styles.resultDescription}>
            {won
              ? 'Parabéns! Você descobriu a palavra.'
              : `A palavra era: ${word}`}
          </Text>
          <Pressable style={styles.restartButton} onPress={restart}>
            <Text style={styles.restartText}>JOGAR NOVAMENTE ↗</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.keyboardSection}>
          <Text style={styles.panelLabel}>SELECT A LETTER</Text>
          <View style={styles.keyboard}>
            {alphabet.map((letter) => {
              const selected = guessed.includes(letter);
              const correct = word.includes(letter);

              return (
                <Pressable
                  key={letter}
                  disabled={selected || finished}
                  onPress={() => chooseLetter(letter)}
                  style={[
                    styles.key,
                    selected && correct && styles.correctKey,
                    selected && !correct && styles.wrongKey,
                  ]}
                >
                  <Text style={[
                    styles.keyText,
                    selected && styles.selectedText,
                  ]}>
                    {letter}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>MATEUS // PORTFOLIO</Text>
        <Text style={styles.footerText}>WORD GAME // 2026</Text>
      </View>
    </ScrollView>
  );
}

const colors = {
  background: '#080B0D',
  surface: '#111719',
  border: '#273033',
  white: '#F5F7F7',
  muted: '#8B9699',
  cyan: '#00D9FF',
  lime: '#B8FF3B',
  red: '#FF5B68',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: 23,
    paddingBottom: 50,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  back: {
    color: colors.cyan,
    fontSize: 10,
    letterSpacing: 1,
  },
  headerLabel: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1.5,
  },
  heading: {
    paddingTop: 50,
    paddingBottom: 35,
  },
  overline: {
    color: colors.cyan,
    fontSize: 9,
    letterSpacing: 2,
    marginBottom: 17,
  },
  title: {
    color: colors.white,
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: -2,
  },
  titleOutline: {
    color: colors.background,
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: -2,
    textShadowColor: '#A5AFB0',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  description: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 21,
    marginTop: 17,
  },
  gamePanel: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  panelLabel: {
    color: colors.cyan,
    fontSize: 9,
    letterSpacing: 1.5,
  },
  attempts: {
    color: colors.white,
    fontSize: 37,
    fontWeight: '900',
    marginTop: 10,
  },
  attemptsTotal: {
    color: colors.muted,
    fontSize: 17,
  },
  progress: {
    height: 4,
    backgroundColor: '#293235',
    marginTop: 15,
    marginBottom: 35,
  },
  progressFill: {
    height: 4,
    backgroundColor: colors.red,
  },
  wordLabel: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1.5,
    marginBottom: 17,
  },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  letterBox: {
    minWidth: 25,
    height: 38,
    borderBottomWidth: 2,
    borderColor: colors.cyan,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '800',
  },
  errorsLabel: {
    color: colors.red,
    fontSize: 9,
    marginTop: 25,
    lineHeight: 17,
  },
  keyboardSection: {
    marginTop: 35,
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 7,
    marginTop: 18,
  },
  key: {
    width: '10%',
    minWidth: 28,
    aspectRatio: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  correctKey: {
    backgroundColor: '#24351D',
    borderColor: colors.lime,
  },
  wrongKey: {
    backgroundColor: '#381E23',
    borderColor: colors.red,
  },
  selectedText: {
    opacity: 0.65,
  },
  resultPanel: {
    marginTop: 30,
    padding: 22,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  result: {
    fontSize: 25,
    fontWeight: '900',
  },
  win: {
    color: colors.lime,
  },
  loss: {
    color: colors.red,
  },
  resultDescription: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 13,
    textAlign: 'center',
  },
  restartButton: {
    backgroundColor: colors.cyan,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  restartText: {
    color: colors.background,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  footer: {
    marginTop: 45,
    paddingTop: 18,
    borderTopWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1,
  },
});
