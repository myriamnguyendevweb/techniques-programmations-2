import Container from "./Container";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StarComponent from "./StarComponent";
import Button from "./Button";

function App() {
    const handleStarComponentClick = (event) => {
        console.log(event);
    }

    const handleButtonClick = (event) => {
        alert(event.target.innerHTML);
    }



    return (
        <div className="App">
            <Container>
                <Button onClick={handleStarComponentClick} round placement="left"> <StarComponent /> </Button>
                <Heading />
                <Paragraph />
                <div className="button-group-container">
                    <Button class="navitem" round onClick={handleButtonClick}>1</Button>
                    <Button class="navitem" round onClick={handleButtonClick}>2</Button>
                    <Button class="navitem" round onClick={handleButtonClick}>3</Button>
                    <Button class="navitem" round onClick={handleButtonClick}>4</Button>
                    <Button class="navitem" round onClick={handleButtonClick}>5</Button>
                </div>
            </Container>
        </div>
    );
};

export default App;
