import React from 'react'
import { ConfigurationBox, InputMonitor, InputBoxMonitor, InputTitle, InputValueMonitor } from './Configuration.styles'

export interface ConfigurationInputProps {
    title: string;
    value: number;
}

const ConfigurationMonitor = (props: ConfigurationInputProps) => {

    const { title, value } = props;
    
    return (
        <InputBoxMonitor width={'45%'}>
            <ConfigurationBox width='100%' justify='space-between' gap='10px' >
                <InputTitle>{title.charAt(0).toUpperCase() + title.slice(1)}</InputTitle>
                <InputValueMonitor>
                    <InputMonitor type="number" inputsize="md" value={value} disabled />
                </InputValueMonitor>
            </ConfigurationBox>
        </InputBoxMonitor>
    )
}

export default ConfigurationMonitor