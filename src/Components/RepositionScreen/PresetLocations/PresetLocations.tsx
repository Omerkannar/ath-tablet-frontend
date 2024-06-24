import { Box, PresetInputBox } from "../Reposition.styles"
import basesData from "../Data/Bases.json"
import { useState } from "react"
import { BaseProps, BasePoint, Point } from "../RepositionTypesAndObjects"


export const emptyPresetBase: BaseProps = {
    id: -1,
    name: "--Select Base--",
    points: [{ id: -1, name: "--Select Location--", x: 0, y: 0, lat: 0, long: 0, additionalData: [{ info : "N\\A", lat : -1, long: -1, heading : -1, alt : -1, vel : -1, engineOn : false, inAir : false}] }]
}

export const emptyPresetLocationPoint: BasePoint = {
    id: -1, name: "--Select Location--", x: 0, y: 0, lat: 0, long: 0, additionalData: [{ info : "N\\A", lat : -1, long: -1, heading : -1, alt : -1, vel : -1, engineOn : false, inAir : false}]
}


interface presetLocationsProps {
    handlePointSelection : (p : BasePoint) => void;
}

const PresetLocations = ({ handlePointSelection }: presetLocationsProps) => {

    const [selectedBase, setSelectedBase] = useState<BaseProps>(emptyPresetBase)
    const [selectedLocationPoint, setSelectedLocationPoint] = useState<BasePoint>(emptyPresetLocationPoint)


    const baseSelectHandler = (e: any) => {
        const filterBase = basesData.filter((base : BaseProps) => {
            return base.name === e.target.value
        })
        setSelectedBase(filterBase[0])
        setSelectedLocationPoint(filterBase[0].points[0])
        handlePointSelection(filterBase[0].points[0])
    }

    const pointSelectHandler = (e: any) => {
        const filterPoint = selectedBase.points.filter((point : Point) => {
            return point.name === e.target.value
        })
        setSelectedLocationPoint(filterPoint[0])
        handlePointSelection(filterPoint[0])
    }




    return (
        <Box justify="space-between" width="100%" gap='10px' margin="15px 0px 0px 0px">
            <br />             
            <Box gap='0 20px' align='flex-end'>
                <Box direction="column" height="40px" >
                    <PresetInputBox onChange={baseSelectHandler} value={selectedBase.name} >
                        {basesData.length > 0 && basesData.map((item: BaseProps) => {
                            return <option style={{fontSize: '24px'}} value={item.name} key={item.id}>{item.name}</option>
                        })}
                    </PresetInputBox>
                </Box>
                <Box direction="column" height="40px">
                    <PresetInputBox onChange={pointSelectHandler} value={selectedLocationPoint.name}>
                        {selectedBase.points.map((point) => {
                            return <option style={{fontSize: '24px'}} value={point.name} key={point.id}>{point.name}</option>
                        })}
                    </PresetInputBox>
                </Box>
            </Box>
        </Box>
    )
}

export default PresetLocations;