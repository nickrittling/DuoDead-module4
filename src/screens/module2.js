import React, { useEffect, useState } from "react";
import { Alert, Button, SliderComponent, StyleSheet, Text, View, Image } from 'react-native';
import { Colors, ProgressBar, TextInput } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import AppButton from "../assets/AppButton";
import Imgs from "../assets/Images";
import food from "../food_lesson.json";

const Mod2Screen = () => {

	const [status, setStatus] = useState();
  const [image, setImage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#9d78ec');
	const [progressColor , setProgessColor] = useState('white');
  const [totalCount, setTotalCount] = useState(food.length);
  const [words, setWords] = useState(food);
  const [answers, setAnswers] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[0])
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if(status === 1){
		setProgessColor('#33CC66');
    Alert.alert("You have completed the lesson! Your score was: "+countCorrectAnswers*100);
    }
  }, [status])

  useEffect(() => {
    const word = words[currentWordIndex];
    setCurrentWord(word);
    setAnswers(reorderAnswers(word));
  }, [currentWordIndex]);

  const reorderAnswers = question => {
    const answers = [question.correct, ...question.incorrect];

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
      setBackgroundColor('green');
    }else{
      setBackgroundColor('red');
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
      <Image source={Imgs[currentWord.image]} style={styles.stretch}/>
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

export default Mod2Screen ;

const styles = StyleSheet.create({
	
	container :{
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#9d78ec'
	},  
  stretch: {
    marginLeft: 30,
    marginTop: 30,
    alignContent: "center",
    width: 200,
    height: 200,
    resizeMode: 'stretch',
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