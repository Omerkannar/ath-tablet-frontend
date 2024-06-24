import { Box, RoundedInputBox, CoordinatesInputField } from "../Reposition.styles"
import { RepositionParagraphComponent, RepositionParagraphComponentUnits } from "../RepositionText"

interface CoordinatesProps {
    latitude: number,
    longitude: number,
    velocity: number,
    heading: number,
    altitude: number,
}


const Coordinates = ({ latitude, longitude, velocity, heading, altitude }: CoordinatesProps) => {

    return (
        <Box  justify="space-between" width="100%" gap='10px' margin="10px 0px 0px 0px">
            <Box flex="1" justify="space-between" width="100%" gap='0 10px' direction="column">
                <Box flex="1" width="100%" margin="5px 0px 0px 0px">
                    <RoundedInputBox width="100%" disable={true}>
                        <RepositionParagraphComponent title={'Latitude'} />
                        <CoordinatesInputField textAlign="left" type='text' name='latitude' value={latitude.toFixed(4)} />
                        <RepositionParagraphComponentUnits title={'°deg'} />
                    </RoundedInputBox>
                </Box>
                <Box width="100%" margin="5px 0px 0px 0px">
                    <RoundedInputBox width="100%" disable={true}>
                        <RepositionParagraphComponent title={'Longitude'} />
                        <CoordinatesInputField textAlign="left" type='text' name="longitude" value={longitude.toFixed(4)} />
                        <RepositionParagraphComponentUnits title={'°deg'} />
                    </RoundedInputBox>
                </Box>
                <Box width="100%" margin="5px 0px 0px 0px">
                    <RoundedInputBox width="100%" disable={true}>
                        <RepositionParagraphComponent title={'Velocity'} />
                        <CoordinatesInputField textAlign="left" type='text' name="longitude" value={velocity.toFixed(1)} />
                        <RepositionParagraphComponentUnits title={'knots'} />
                    </RoundedInputBox>
                </Box>
                <Box width="100%" margin="5px 0px 0px 0px">
                    <RoundedInputBox width="100%" disable={true}>
                        <RepositionParagraphComponent title={'Heading'} />
                        <CoordinatesInputField textAlign="left" type='text' name="longitude" value={heading.toFixed(0)} />
                        <RepositionParagraphComponentUnits title={'°deg'} />
                    </RoundedInputBox>
                </Box>
                <Box width="100%" margin="5px 0px 0px 0px">
                    <RoundedInputBox width="100%" disable={true}>
                        <RepositionParagraphComponent title={'Altitude'} />
                        <CoordinatesInputField textAlign="left" type='text' name="longitude" value={altitude.toFixed(1)} />
                        <RepositionParagraphComponentUnits title={'ft'} />
                    </RoundedInputBox>
                </Box>
            </Box>
        </Box>
    )
}


export default Coordinates;
