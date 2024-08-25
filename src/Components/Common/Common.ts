import { BE_URL, PUT_HEADERS } from "./Constants"


export const SendMalfunctionEvent = (name: string, value: boolean): void => {
    console.log(`Send malfunction ${name} event with ${value}`)
}


export const SendQuickActionEvent = (
    eventName: string, 
    eventId: string, 
    eventClass: string, 
    entityId: number, 
    eventParams: any[]): void => {
    fetch(`${BE_URL}FireEvent/SetData`, {
      method: 'PUT',
      headers: PUT_HEADERS,
      body: JSON.stringify(
        {
          "eventName": eventName,
          "eventId": eventId,
          "eventClass": eventClass,
          "entityId": entityId,
          "eventParams": eventParams
        })
    });
}