import React , {useState, useEffect} from "react";
import {Button, Text , View, StyleSheet, Alert, SliderComponent, TouchableHighlight} from 'react-native';
import { ProgressBar, Colors , TextInput} from "react-native-paper";
import { white, black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import food from "../food_lesson.json"
import AppButton from "../assets/AppButton"
import SButton from "../assets/SButton";

const Mod4Screen = () => {
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
  
	useEffect(() => {
		if(status === 1){
		setProgessColor('#33CC66');
        Alert.alert("You have completed the lesson! Your score was: "+countCorrectAnswers*100);
        }
    }, [status])

    /*var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
      activeOpacity: 1,
      underlayColor: 'white',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnPress, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(true),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => null,                 // <-- "onPress" is apparently required
    };*/
  const [sentence, setSentence] = useState('');
  const [answer, setAnswer] = useState('wine or water ');

  const updateSentence = (title) => {
    setSentence(sentence  + title);
  }//end setSentence

  const clearSentence = ()=>{
    setSentence('');
  }//end clearSentence
  
  const checkAnswer = () => {
    setAnswer("wine or water ");
    if(answer === sentence){
      setCountCorrectAnswers(countCorrectAnswers + 1);
      setBackgroundColor('#339966');
    }else{
      setBackgroundColor('#A50021');
    }
  }//end checkAnswer

   
  
  return(
    <View padding={30} height={'100%'} width={'100%'} backgroundColor={backgroundColor}>
      <ProgressBar progress={status} color={progressColor} />
      <Text style={styles.headline}>Wein oder Wasser</Text>

      <View style={{ flexWrap: 'wrap', justifyContent: 'space-evenly', flexDirection:"row" }}>
        <AppButton 
          title= "wine"
          //buttonColor= {bgColor || "#ffffff"}
          //style={{backgroundColor: "#000000" || "#222222"}}
          onPress={()=>updateSentence('wine ')} />
          
        
        <AppButton 
          title= "bread" 
          onPress={() => updateSentence('bread ')
            
        }/>
        <AppButton 
          title= "tea" 
          onPress={() => updateSentence('tea ') 
            
        }/>
        <AppButton 
          title= "or" 
          onPress={() => updateSentence('or ')
            
        }/>
        <AppButton 
          title= "you" 
          onPress={() => updateSentence('you ')
            
        }/>
        <AppButton 
          title= "water" 
          onPress={() => updateSentence('water ')
            
        }/>
        <AppButton 
          title= "hello" 
          onPress={() => updateSentence('hello ')
            
        }/>
      </View>

      <View style={{ flexWrap: 'wrap', justifyContent: 'space-evenly', flexDirection:"row" }}>
      <Text 
          //title= "              " 
          style={styles.headline}        
        >{sentence} </Text>
      </View>
      <View style={{ flexWrap: 'wrap', justifyContent: 'space-evenly', flexDirection:"row" }}>
        <AppButton
        title= "clear"
        onPress={()=> clearSentence()
        }/>
        <AppButton 
        title= "submit"
        onPress={()=> checkAnswer()
        }/>
          

    </View>
  </View> //parent View

    
  )

}

export default Mod4Screen ;

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
/*var btnStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
    backgroundColor: 'white'
  },
  btnPress: {
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    width: 100,
  }
})*/