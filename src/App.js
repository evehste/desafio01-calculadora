import { Container, Content, Row } from './styles';
import Input from './components/Input/Index';
import Botton from './components/Botton/Index';
import { useState } from 'react';


const App = () => {
 const [currentNumber, setCurrentNumber] = useState('0');
 const [firstNumber, setFirstNumber] = useState('0');
 const [operation, setOperation] = useState('');

 const handleAddNumber = (number) => {
  setCurrentNumber( prev => `${prev === '0' ? '' : prev}${number}`);
 }

 const handleClear = () => {
  setCurrentNumber('0');
  setFirstNumber('0');
  setOperation('');
 }

 const handleSumNumbers = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('+');
  } else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber('0');
    setOperation('');
  }
 }

 const handleMinusNumbers = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('-');
  } else {
    const minus = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(minus));
    setFirstNumber('0');
    setOperation('');
  }
 }

 const handleEquals = () => {
  if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){

    switch(operation) {
      case '+':
        handleSumNumbers();
        break;

      case '-':
        handleMinusNumbers();
        break;
      default:
        break;
    }
  }
 }

  return (
    <Container> 
      <Content>
        <Input value={currentNumber}/>

        <Row>
          <Botton label={'%'} onclick={() => handleAddNumber('')}/>
          <Botton label={'CE'} onclick={() => handleAddNumber('')}/>
          <Botton label={'C'} onclick={handleClear}/>
          <Botton label={'/'} onclick={() => handleAddNumber('')}/>
        </Row>

        <Row>
          <Botton label={7} onclick={() => handleAddNumber('7')}/>
          <Botton label={8} onclick={() => handleAddNumber('8')}/>
          <Botton label={9} onclick={() => handleAddNumber('9')}/>
          <Botton label={'x'} onclick={() => handleAddNumber('')}/>
        </Row>

        <Row>
          <Botton label={4} onclick={() => handleAddNumber('4')}/>
          <Botton label={5} onclick={() => handleAddNumber('5')}/>
          <Botton label={6} onclick={() => handleAddNumber('6')}/>
          <Botton label={'-'} onclick={handleMinusNumbers}/>
        </Row>

        <Row>
          <Botton label={1} onclick={() => handleAddNumber('1')}/>
          <Botton label={2} onclick={() => handleAddNumber('2')}/>
          <Botton label={3} onclick={() => handleAddNumber('3')}/>
          <Botton label={'+'} onclick={handleSumNumbers}/>
        </Row>

        <Row>
          <Botton label={'+/-'} onclick={() => handleAddNumber('')}/>
          <Botton label={'0'} onclick={() => handleAddNumber('0')}/>
          <Botton label={'.'} onclick={() => handleAddNumber('')}/>
          <Botton label={'='} onclick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
