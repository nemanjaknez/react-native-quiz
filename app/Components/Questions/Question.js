import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Content, H2, CardItem, Card, Button, Icon } from 'native-base';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 15,
      modalVisible: false,
      isCorrect: false,
    }
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
    this.props.nextQuestion();
    this.setState({time: 15, isCorrect: false});
  }

  checkAnswer(answer) {
    if(answer === this.props.correctAnswer) {
      this.props.calculateScore();
      this.setState({isCorrect: true});
    }
    this.openModal();
    this.setState({time: this.state.time});
  }

  modalColor() {
    if(this.state.isCorrect === true) {
      return '#66cc66'
    } else {
      return '#ff6666'
    }
  }

  countdown() {
    let remainingTime = this.state.time;
    if(remainingTime > 0 && this.state.modalVisible === false) {
      remainingTime--;
      this.setState({time: remainingTime});
    } else {
      this.openModal();
    }
  }

  componentDidMount() {
    if(this.state.time > 0) {
      setInterval(() => this.countdown(), 1000);
    }
  }


  render() {
    return(
      <View>

        <Modal
          transparent
          visible={this.state.modalVisible}
          animationType={'fade'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.content}>

            <View style={{backgroundColor: this.modalColor(), borderRadius: 10}}>
              <View style={styles.modalBox}>
                <Text style={styles.modalText}>
                  <Text style={styles.modalText}>
                    {
                      this.state.isCorrect ?
                      <Icon name='happy' style={{ fontSize: 45, color: '#fff' }} /> :
                      <Icon name='sad' style={{ fontSize: 45, color: '#fff' }} />
                    }
                  </Text>
                  {
                    this.state.isCorrect ? ' Odgovor je tačan' : ' Pogrešan odgovor'
                  }
                </Text>
                <Button style={styles.modalBtn} onPress={() => this.closeModal()}>
                  <Text style={styles.modalBtnTxt}>Sledeće pitanje</Text>
                </Button>
              </View>
            </View>

          </View>
        </Modal>

        <View elevation={3} style={styles.question}>
          <Text style={styles.q_text}>{this.props.questionText}</Text>
        </View>
        <View>
          {
            this.props.answers.map((answer, index) => {
              return(
                <Button key={index} style={styles.btn} onPress={() => this.checkAnswer(answer)}>
                  <Text style={styles.btnText}>{answer}</Text>
                </Button>
              )
            })
          }
        </View>
        <Text style={styles.time}>Vreme: {this.state.time}</Text>
      </View>
    )
  }
}

export default Question;

const styles = StyleSheet.create({
  question: {
    width: 280,
    height: 150,
    backgroundColor: '#009999',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 15,
    padding: 16,
    borderRadius: 2,
    borderBottomWidth: 0,
  },
  q_text: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 280,
    backgroundColor: '#009999',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
    padding: 16
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    color: '#4400cc',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  content:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    // backgroundColor:'#ef553a',
    width:300,
    height: 150,
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    // borderRadius: 10,
  },
  modalText: {
    fontWeight:'bold',
    color:'#fff',
    justifyContent: 'center',
    alignSelf:'center',
    fontSize:20,
    marginBottom: 20,
  },
  modalBtn: {
    justifyContent: 'center',
    alignSelf:'center',
    width: 150,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  modalBtnTxt: {
    color: '#003366',
  }
});
