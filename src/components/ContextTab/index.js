import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ContextTab = ({ children, title }) => {
    return ReactDOM.createPortal(
        <div className='wtc-context-container'>
            <div className="title">{title}</div>
            <div className="content">
                {children}
            </div>
        </div>,
        document.getElementById('right-context')
    )
}

/**
 * HOC to render the context to right side bar
 * @param Component _ React JSX element to render
 * @param trigger _ className of element that trigger the context to appear
 */
const withContext = (Component) => ({ ...props }) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState({
        render: () => null,
        title: '',
    });

    const openContext = (content, title) => {
        setOpen(true);
        setContent({
            title,
            render: () => content,
        })
    }

    return <>
        <Component {...props} openContext={openContext} />
        {
            open && <ContextTab title={content.title}>
                {content.render()}
            </ContextTab>
        }
    </>
}

export default withContext;