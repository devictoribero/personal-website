import React from 'react';
import Switch from 'react-ios-switch';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    }
  }

  render() {
    const switch_class_block = 'vrg-switch';
    const switch_classes = [switch_class_block];

    this.state.checked && switch_classes.push(`${switch_class_block}--checked`);
    !this.state.checked && switch_classes.push(`${switch_class_block}--unchecked`);

    return(
      <React.Fragment>
        <header className="intro">
          <h1 className="intro__hello">Hello!<i className="em em-wave"></i></h1>

          <h2 className="intro__tagline">
            I'm
            <span className="name">Victor Ribero</span>
            , a front-end software engineer focused on building high-quality products to give the best experiences to the users
            <i className="em em-male-technologist"></i>
          </h2>

          <h3 className="intro__contact">
            <span>Get in touch </span><i className="em em-e-mail smooth-bounce-animation"></i>
            <span>
              <a
                href="mailto:victor.ribero3@gmail.com"
                target="_blank"
                className="link highlight-link">victor.ribero3@gmail.com</a>
            </span>
          </h3>

        </header>

        <aside className="vrg-switch-wrapper">
          <i class="vrg-switch-sun em em-sunny"></i>
          <Switch
            className={switch_classes.join(' ')}
            checked={this.state.checked}
            onChange={checked => this.setState({ checked })}
            offColor={'grey'}
            onColor={'#bae67e'}
          />
          <i class="vrg-switch-moon em em-last_quarter_moon_with_face"></i>
        </aside>
      </React.Fragment>
    );
  }
};
