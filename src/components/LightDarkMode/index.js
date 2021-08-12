// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  onCLickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getContentContainerClassName = () => {
    const {isClicked} = this.state
    
      return isClicked? 'content-container-light': 'content-container-dark'
    }
  }

  getHeadingClassName = () => {
    const {isClicked} = this.state
    
      return isClicked? 'light-mode-heading':'dark-mode-heading'
    
  }

  getButtonClassName = () => {
    const {isClicked} = this.state
    
     return isClicked? 'button-light-mode':'button-dark-mode'
    
  }

  getButtonText = () => {
    const {isClicked} = this.state
    
      return isClicked?  'Dark Mode': 'Light Mode';
    
  }

  render() {
      
    const contentContainerClass = this.getContentContainerClassName()
    const headingClass = this.getHeadingClassName()
    const buttonClass = this.getButtonClassName()
    const buttonText = this.getButtonText()

     return (
        <div className="app-container">
          <div className={contentContainerClass}>
            <h1 className={headingClass}>Click To Change Mode</h1>
            <button
                type="button"
                className={buttonClass}
                onClick={this.onCLickButton}
            >
                {buttonText}
            </button>
         </div>
        </div>
    )
  }
  
}

export default LightDarkMode
