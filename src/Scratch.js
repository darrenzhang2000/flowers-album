import React, { Component } from "react"
import { Button } from "@material-ui/core"
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

const Scratch = () => {
    return (
        <div>
            <div>hi</div>
            <div>
                <a
                    class="MuiButtonBase-root MuiButton-root jss86 MuiButton-contained jss4 MuiButton-containedPrimary"
                    tabindex="0"
                    role="button"
                    aria-disabled="false"
                    href="/store/items/devias-kit-pro/"
                >
                    <span class="MuiButton-label">Buy now</span>
                    <span class="MuiTouchRipple-root"></span>
                </a>
            </div>
            <SentimentSatisfiedIcon/>
            <Button>Alstroemerias</Button>
            <SentimentSatisfiedIcon/>
        </div>
    )
}

export default Scratch
