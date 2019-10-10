interface QueryAlarmHistoryRequest {
    "RegionId": string;
    "ClusterId": string;
    "StartTimeStamp": number;
    "EndTimeStamp": number;
    "Cursor"?: string;
    "Size"?: number;
}
export { QueryAlarmHistoryRequest };