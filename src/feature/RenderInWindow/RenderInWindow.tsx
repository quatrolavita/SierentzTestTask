import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const css =
    '.wrapper { display: flex} ' +
    '.buttonsWrapper { width: 100px; height 100px;' +
    ' display: flex; flex-direction: column; }';

type RenderInWindowProps = {
    children: ReactNode;
};

function RenderInWindow({ children }: RenderInWindowProps) {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const newWindow = useRef<Window | null>(window);

    useEffect(() => {
        const div = document.createElement('div');
        div.className = 'wrapper';
        setContainer(div);
    }, []);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (container) {
            newWindow.current = window.open(
                '',
                '',
                'width=900,height=700,left=200,top=200'
            );
            const style = document.createElement('style');

            style.innerText = css;
            newWindow.current?.document.body.appendChild(style);
            newWindow.current?.document.body.appendChild(container);

            const curWindow = newWindow.current;
            return () => curWindow?.close();
        }
    }, [container]);

    return container && createPortal(children, container);
}

export default RenderInWindow;
