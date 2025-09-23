// /Users/goldlabel/GitHub/flash/app/src/Flash/index.tsx
import Flash from './Flash';
import Trace from './lib/Trace';
import Stage from './lib/Stage';
import MovieClip from './lib/MovieClip';
import Macromedia from './movieclips/Macromedia';
import Pingpongball from './movieclips/Pingpongball';
import Bolt from './movieclips/Bolt';

// optional
import{subMUITheme} from './lib/subMUITheme';
import Icon from './lib/Icon';
import {setUbereduxKey} from './lib/store';
import UbereduxProvider from './lib/UbereduxProvider';
import {useRedux} from './hooks/useRedux';
import {useDispatch} from './hooks/useDispatch';
import {useIsMobile} from './hooks/useIsMobile';
import {usePrefersColorScheme} from './hooks/usePrefersColorScheme';

export {
    Flash,
    Trace,
    Stage,
    MovieClip,
    Macromedia,
    Pingpongball,
    Bolt,
}
// optional
export {
    setUbereduxKey,
    Icon,
    subMUITheme,
    UbereduxProvider,
    useRedux,
    useDispatch,
    useIsMobile,
    usePrefersColorScheme,
}