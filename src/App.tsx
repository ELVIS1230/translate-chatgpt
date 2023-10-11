import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGES } from './constants'
import { ArrowIcons } from './components/Icons.tsx'
export function App () {
  const { fromLanguage, toLanguage, setFromLanguage, interchangeLanguages } = useStore()

  console.log({ fromLanguage })

  return (
    <Container fluid>
   <h1> Translate </h1>

    <Row>
      <Col>
        <h2>From</h2>
        {fromLanguage}
      </Col>
      <Col>
        <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGES} onClick={interchangeLanguages}><ArrowIcons/></Button>
      </Col>
      <Col>
        <h2>To</h2>
        {toLanguage}
      </Col>
    </Row>

    </Container>
  )
}
