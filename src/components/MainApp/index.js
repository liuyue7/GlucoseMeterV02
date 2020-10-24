import React from 'react';
import styled from 'styled-components';

import ResultDisplay from './ResultDisplay';

import typhoidImg from '../../assets/LSK-glucose-meter-coding-logic-12.png';
import drugImg from '../../assets/LSK-glucose-meter-coding-logic-11.png';
import typhoidDrugImg from '../../assets/LSK-glucose-meter-coding-logic-13.png';


const StyleMainApp = styled.div`
  height: 75vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  position: relative;
  wdith: 32vw;
  height: 100%;
  left: 8vw;
`;

const Title = styled.div`
  position: relative;
  margin-top: 50px;
  font-size: 28px;
  font-color: #333333;
  font-weight: bold;
`;

const InputDiv = styled.div`
  margin-top: 20px;
`;

const InputTitle = styled.label`
  display: block;
  color: #707070;
  font-size: 20px;
  font-weight: bold;
`;

const InputUnit = styled.label`
  display: inline-block;
  color: #707070;
  font-size: 20px;
  margin-left: 15px;
`;

const Input = styled.input`
  width: 130px;
  height: 35px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #333333;
  margin-top: 15px;
  font-size: 20px;
  outline: none;
`;

const Submit = styled.button`
  border-width: 0;
  background-color: #333333;
  font-size: 25px;
  color: white;
  margin-top: 40px;
  height: 45px;
  width: 130px;
  cursor: pointer;
  outline: none;

  transition: background-color .2s;

  :hover {
    background-color: #4A56E2;
  }
`;

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: 0,
      sample: 0,
      mainResult: '',
      instruction: '',
      background: '#333333'
    };
  }

  handleBlankChange = (e) => {
    this.setState({blank: e.target.value});
  }

  handleSampleChange = (e) => {
    this.setState({sample: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {blank, sample} = this.state;
    if ((!sample || sample == 0) && (!blank || blank == 0)) {
      return;
    }
    if (!sample || sample == 0) {
      if (blank >= 103 && blank <= 134) {
        this.setState({mainResult: 'Negative Result', background: '#04cc9c'});
      }
      else {
        this.setState({
          mainResult: 'Internal Control Failed',
          instruction: 'Error',
          background: '#ff7a89'
        });
      }
    }
    else {
      if (sample >= 103 && sample <= 134) {
        this.setState({mainResult: 'Negative Result', background: '#04cc9c'});
      }
      else if (sample >= 141 && sample <= 157) {
        this.setState({mainResult: 'Typhoid', background: 'url(\'' + typhoidImg + '\')'});
      }
      else if (sample >= 174 && sample <= 192) {
        this.setState({mainResult: 'Fluoroquinolone \nResistance\n(No typhoid)', background: 'url(\'' + drugImg + '\')'});
      }
      else if (sample >= 210 && sample <= 264) {
        this.setState({mainResult: 'Typhoid &\nFluoroquinolone \nResistance', background: 'url(\'' + typhoidDrugImg + '\')'});
      }
      else {
        this.setState({mainResult: 'Inconclusive',
          instruction: 'Please read the sample again', background: '#ff7a89'});
      }
    }
  }

  handleReset = () => {
    this.setState({blank: 0, sample: 0, mainResult: '', background: '#333333'});
  }

	render() {
    let {mainResult, instruction, background, blank, sample} = this.state;
    return (
      <StyleMainApp>
        <Container>
          <form onSubmit={this.handelSubmit}>
            <Title>
              Glucose Level
            </Title>
            <InputDiv>
              <InputTitle>
                Reading on Blank:
              </InputTitle>
              <Input type='number' value={blank} onChange={this.handleBlankChange}/>
              <InputUnit>
                mg/dL
              </InputUnit>
            </InputDiv>
            <InputDiv>
              <InputTitle>
                Reading on Sample:
              </InputTitle>
              <Input type='number' value={sample} onChange={this.handleSampleChange}/>
              <InputUnit>
                mg/dL
              </InputUnit>
            </InputDiv>
            <Submit onClick={this.handleSubmit}>
              Submit
            </Submit>
          </form>
        </Container>
        <ResultDisplay 
          mainResult={mainResult} 
          instruction={instruction} 
          background={background}
          handleReset={this.handleReset}
        />
      </StyleMainApp>
    );
  }
}

export default MainApp;