import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button, H2 } from 'native-base';
import Question from './Question';
import Result from './Result';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~sqlitedatabase.db'});

class QuestionView extends Component {

  constructor() {
    super();
    this.calculateScore = this.calculateScore.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.isEnded = this.isEnded.bind(this);
    this.state = {
      questions: [],
      score: 0,
      questionCounter: 0,
    };

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM question WHERE category=? ORDER BY RANDOM() LIMIT 16', [this.props.category], (tx, results) => {
        var len = results.rows.length;
        var questions = this.state.questions;
        if(len > 0) {
          for (var i = 0; i < len; i++) {
            let row = results.rows.item(i);
            questions.push(row);
          }
        }
        this.setState({questions: questions});

      })
    })
  }

  calculateScore() {
    let score = this.state.score;
    score++;
    this.setState({ score: score });
  }

  nextQuestion() {
    this.setState({questionCounter: this.state.questionCounter + 1});
  }

  isEnded() {
    if(this.state.questions.length > 0) {
      return this.state.questionCounter+1 === this.state.questions.length;
    }
  }

  render() {
    let counter = this.state.questionCounter;
    var answers = [];
    if(this.state.questions.length > 0) {
      answers.push(
        this.state.questions[counter].answer1,
        this.state.questions[counter].answer2,
        this.state.questions[counter].answer3,
        this.state.questions[counter].answer4
      )
    }

    var currentIndex = answers.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = answers[currentIndex];
      answers[currentIndex] = answers[randomIndex];
      answers[randomIndex] = temporaryValue;
    }

    return(
      <View>
        {
          this.isEnded() === true &&
            <Result score={this.state.score} />
        }
        {
          this.isEnded() === false &&
            <View>
              {
                this.state.questions.length > 0 &&
                  <View>
                    <Question
                      questionText={this.state.questions[counter].question_text}
                      answers={answers}
                      correctAnswer={this.state.questions[counter].correct_answer}
                      calculateScore={this.calculateScore}
                      nextQuestion={this.nextQuestion}
                    />
                    <Text style={styles.numerator}>Pitanje {counter+1} / {this.state.questions.length-1}</Text>
                  </View>
              }
            </View>
        }
      </View>
    )
  }

}

export default QuestionView;

const styles = StyleSheet.create({
  numerator: {
    marginTop: 5,
    fontSize: 16,
    color: '#4400cc',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
