import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70vw;
  height: 100%;
  position: relative;
  margin-left: 10vw;
`;

const FirstRect = styled.div`
  position: absolute;
  width: 50vw;
  max-width: 550px;
  height: 50vh;
  max-height: 350px;
  border-radius: 20px;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
`;

const SecondRect = styled.div`
  position: absolute;
  width: 55vw;
  max-width: 600px;
  height: 45vh;
  max-height: 300px;
  border-radius: 20px;
  background-color: #B3B3B3;
  top: calc(50px + 2.5vh);
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

const ThirdRect = styled.div`
  position: absolute;
  width: 60vw;
  max-width: 650px;
  height: 40vh;
  max-height: 250px;
  border-radius: 20px;
  background-color: #373737;
  opacity: 20%;
  top: calc(50px + 5vh);
  left: 50%;
  transform: translate(-50%);
`;

const ResultLabel = styled.label`
  position: absolute;
  left: 50%;
  top: 50%;
  white-space: pre-wrap;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5vw;
  font-weight: bold;
  z-index: 3;
  width: 70%;
  text-align: center;
`;

const ResetButton = styled.button`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%);
  width: 100px;
  height: 50px;
  border-radius: 15px;
  background-color: #333333;
  font-size: 20px;
  color: white;
  z-index: 3;
  cursor: pointer;
  outline: none;
  border-width: 0;

  transition: background-color .2s;

  :hover {
    background-color: #4A56E2;
  }
`;

const RectBackground = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background: ${props => props.background} no-repeat center;
  background-size: contain;
  transition: background .5s;
`;

class ResultDisplay extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    let result = this.props.mainResult || 'Please input your readings';
    return (
      <Container>
        <FirstRect>
          <RectBackground background={this.props.background}/>
          <ResultLabel>
            {result}
          </ResultLabel>
          {this.props.mainResult &&
            <ResetButton onClick={this.props.handleReset}>
              Reset
            </ResetButton>
          }
        </FirstRect>
        <SecondRect />
        <ThirdRect />
      </Container>
    );
  }
}

export default ResultDisplay;