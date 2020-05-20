import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const OptionsSlider = withStyles({
    root: {
      color: 'whitesmoke',
      height: 2,
      padding: '15px 0',
    },
    thumb: {
      height: 14,
      width: 14,
      backgroundColor: '#fff',

    //   marginTop: -14,
    //   marginLeft: -14,
      '&:hover': {
          boxShadow: 'none'
      }

    },
    active: {},
    valueLabel: {
      left: 'calc(-50% - 4px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: 'whitesmoke',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: 'purple',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);

export default OptionsSlider