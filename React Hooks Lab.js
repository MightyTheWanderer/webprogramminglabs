Implementation in Hooks:

import React, {useState} from 'react'

import ColorSlider from './ColorSlider'

import ColorOutput from './ColorOutput'

import styles from './ColorBrowser.module.css'

const colorBrowser = (props) => {

    //colorBrowserState keeps track of current state

    //setState is a function returned to set a new state

    const [colorBrowserState, setState] = useState({

        red: Math.floor(Math.random() * 256),

        green: Math.floor(Math.random() * 256),

        blue: Math.floor(Math.random() * 256)

    });

const updateColor = (e) => {

        //setState in Hooks doesn't merge the state but replaces it. Therefore we spread the currentState too

        setState({

            ...colorBrowserState,

            [e.target.name]: Number(e.target.value)

        });

    }

const getRandomColor = () => {

        //setState in Hooks doesn't merge the state but replaces it. Therefore we spread the currentState too

        setState({

            ...colorBrowserState,

            red: Math.floor(Math.random() * 256),

            green: Math.floor(Math.random() * 256),

            blue: Math.floor(Math.random() * 256)

        })

    }

    return (

        <section className={styles["color-browser"]}>

            <h1>Welcome to the Color Browser</h1>

            <div className={styles.sliders}>

                <ColorSlider

                    name="red"

                    label="Red"

                    min={0}

                    max={255}

                    value={colorBrowserState.red}

                    onChange={updateColor}

                />

                <ColorSlider

                    name="green"

                    label="Green"

                    min={0}

                    max={255}

                    value={colorBrowserState.green}

                    onChange={updateColor}

                />

                <ColorSlider

                    name="blue"

                    label="Blue"

                    min={0}

                    max={255}

                    value={colorBrowserState.blue}

                    onChange={updateColor}

                />

            </div>

            <ColorOutput

                red={colorBrowserState.red}

                green={colorBrowserState.green}

                blue={colorBrowserState.blue}

            />

            <br />

            <button onClick={getRandomColor}>Random Color</button>

        </section>

    )

}

export default colorBrowser;
