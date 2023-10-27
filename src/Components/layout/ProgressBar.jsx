import React from 'react'
import { Progress } from 'antd'
import './ProgressBar.css'

function ProgressBar({ percent }) {

    return (
        <>
            <div className='bar'>
                <Progress percent={percent} size={'small'} />
            </div>
        </>
    )
}
export default ProgressBar