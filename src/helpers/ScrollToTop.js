import { useEffect } from 'react';
import {useHistory, withRouter} from 'react-router-dom';

function ScrollToTop() {

    let history = useHistory()

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return null;
}

export default withRouter(ScrollToTop);