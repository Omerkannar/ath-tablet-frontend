import { Box, RoundedInputBox, CoordinatesInputField } from "../Reposition.styles"

interface GroundAndEngine {
    onGround: boolean,
    engineOn: boolean,
}


const GroundAndEngine = ({ onGround, engineOn }: GroundAndEngine) => {

    return (
        <Box flex="1" justify="flex-end" width="100%" gap='10px' margin="10px 0px 0px 0px">
            <Box flex="1" justify="space-between" width="100%" gap='0 10px'>
                <Box flex="1" >
                    <RoundedInputBox width="100%" disable={true}>
                        <CoordinatesInputField width="100%" type='text' name='onGround' value={onGround ? "On Ground" : "In Air"} />
                    </RoundedInputBox>
                </Box>
                <Box >
                    <RoundedInputBox width="100%" disable={true}>
                        <CoordinatesInputField width="100%" type='text' name="engineOn" value={engineOn ? "Engine On" : " Engine Off"} />
                    </RoundedInputBox>
                </Box>

            </Box>
        </Box>
    )
}


export default GroundAndEngine;
