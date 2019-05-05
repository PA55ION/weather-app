import React from "react";
import "../App.css";
import styled from "styled-components"


const Header = styled.div`
    margin: 0 auto;
    padding: 0;
    text-align: center;
`

const Input = styled.input`
    width: 200px;
    height: 32px;
    border-radius: 7px;
    display: inline-block;
    font-size: 16px;
    margin: 15px;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-family: 'Source Code Pro', monospace;
`;

const Button = styled.button`
    width: 110px;
    height: 32px;
    border-radius: 7px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: var(--danger);
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    font-family: 'Source Code Pro', monospace;
`;


class Form extends React.Component {
    render() {
        return(
        <Header>
              <form onSubmit={this.props.getWeather}>
                  <div>
                    <h1>Weather</h1>
                    <Input 
                        type="text"
                        name="city"
                        placeholder="City..."
                        // onChange={this.handleChange}         
                    />
                <Button>Get Weather</Button>
         
                </div>
            </form>
        </Header>
        )
    }
}
export default Form;