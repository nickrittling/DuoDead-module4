import React , {useState, useEffect} from "react";
import {Button, Text , View, StyleSheet, Alert, SliderComponent} from 'react-native';
import { ProgressBar, Colors , TextInput} from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import food from "../food_lesson.json"
import AppButton from "../assets/AppButton"
const Sound = require('react-native-sound')


const Mod3Screen = () => {
	const [status, setStatus] = useState();
  const [backgroundColor, setBackgroundColor] = useState('#9d78ec');
  const [progressColor , setProgessColor] = useState('white');
  const [totalCount, setTotalCount] = useState(food.length);
  const [answers, setAnswers] = useState([]);
  const [words, setWords] = useState(food);
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[0])
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sound, setSound] = useState(() => {
    new Sound(
      currentWord.audio,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log("failed to load the sound", error);
          return;
        }
        sound.play(() => sound.release());
      }
    );
  });

	useEffect(() => {
		if(status === 1){
		setProgessColor('#33CC66');
        Alert.alert("You have completed the lesson! Your score was: "+countCorrectAnswers*100);
        }
    }, [status])

    useEffect(() => {
        const word = words[currentWordIndex];
        setCurrentWord(word);
        setSound(()=>{
          new Sound(
            currentWord.audio,
            Sound.MAIN_BUNDLE,
            error => {
              if (error) {
                console.log("failed to load the sound", error);
                return;
              }
              sound.play(() => sound.release());
            }
          );
        })
        setAnswers(reorderAnswers(word));
    }, [currentWordIndex]);

    const reorderAnswers = question => {
    const answers = [question.correct, ...question.incorrect];

    //Randomize the answers
    for (let index = 0; index < answers.length; index++) {
        const j = Math.floor(Math.random() * index);
        const tmp = answers[index];
        answers[index] = answers[j];
        answers[j] = tmp;
    }

    return answers;
  };

  const selectAnswer = answer => {
    setIsSubmitting(true);
    setSelectedAnswer(answer);

    if (answer === currentWord.correct) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
      setBackgroundColor('#339966');
    }else{
      setBackgroundColor('#A50021');
    }

    setTimeout(() => {
      const newWordIndex = currentWordIndex + 1;

      if (newWordIndex === words.length) {
        setStatus(1);
      } else {
        setStatus(newWordIndex/words.length)
        setCurrentWordIndex(newWordIndex);
        setIsSubmitting(false);
        setSelectedAnswer(null);
      }
    }, 750);
  };

  return(
    <View padding={30} height={'100%'} width={'100%'} backgroundColor={backgroundColor}>
      <ProgressBar progress={status} color={progressColor} />
      <Button title={"|>"} onPress={sound.play(() => sound.release())}/>
      <View>
        <AppButton 
          title= {answers[0]} 
          onPress={() => {
            selectAnswer(answers[0])
        }}/>
        <AppButton 
          title= {answers[1]} 
          onPress={() => {
            selectAnswer(answers[1])
        }}/>
        <AppButton 
          title= {answers[2]} 
          onPress={() => {
            selectAnswer(answers[2])
        }}/>
        <AppButton 
          title= {answers[3]} 
          onPress={() => {
            selectAnswer(answers[3])
        }}/>
      </View>
    </View>
  )

}

export default Mod3Screen ;

const styles = StyleSheet.create({
	container :{
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#9d78ec'
	},
    headline: {
        textAlign: "center",
        paddingTop: 30,
        fontSize: 36,
        marginTop: 0,
        width: '100%',
        color: "white"
	},
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
  },
    textInput:{
		marginTop : 60,
		borderColor: "#A50021"
	}
})