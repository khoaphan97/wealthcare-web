import React, { useState } from 'react';
import './style.scss';

const spriteNameList = [
    'exit',
    'minimize',
    'maximize',
    'restore',
    'caretUp',
    'caretDown',
    'setting',
    'caretLeft',
    'caretRight',
    'pin',
    'unpin',
    'expandRight',
    'expandLeft',
    'expandDown',
    'expandUp',
    'refresh',
    'plus',
    'minus',
    'scope',
    'save',
    'info',
    'print',
    'tree',
    'note'
]

const ToolSprites = ({ spriteName }) => {
    //comment
    const getSpritePosition = () => {
        const index = spriteNameList.findIndex(name => name === spriteName);
        const yPosition = -index * 15;
        return yPosition;
    }

    return (
        <button
            style={{ backgroundPositionY: getSpritePosition() + 'px' }}
            className={'wtc-tool-sprite'}
        />
    )
}

export default ToolSprites
