// /Users/goldlabel/GitHub/flash/app/src/Flash/index.tsx
import Flash from './Flash';
import System from './lib/System';
import Trace from './lib/Trace';
import Stage from './lib/Stage';
import MovieClip from './lib/MovieClip';
import Macromedia from './movieclips/Macromedia';
import Pingpongball from './movieclips/Pingpongball';
import Bolt from './movieclips/Bolt';
import Controls from './movieclips/Controls';
import Text from './movieclips/Text';

// optional
import {setSystemKey} from './actions/setSystemKey';
import{subMUITheme} from './lib/subMUITheme';
import Icon from './lib/Icon';
import {setUbereduxKey} from './lib/store';
import UbereduxProvider from './lib/UbereduxProvider';
import {useRedux} from './hooks/useRedux';
import {useConfig} from './hooks/useConfig';
import {useSystem} from './hooks/useSystem';
import {useDispatch} from './hooks/useDispatch';
import {useIsMobile} from './hooks/useIsMobile';
import {usePrefersColorScheme} from './hooks/usePrefersColorScheme';

export {
    Flash,
    System,
    Trace,
    Stage,
    MovieClip,
    Macromedia,
    Pingpongball,
    Bolt,
    Controls, 
    Text,
}
// optional
export {
    setUbereduxKey,
    Icon,
    subMUITheme,
    UbereduxProvider,
    setSystemKey,
    useRedux,
    useSystem,
    useDispatch,
    useIsMobile,
    useConfig,
    usePrefersColorScheme,
}