interface QueryRobotTaskDetailResponse {
    "Message": string;
    "RequestId": string;
    "Code": string;
    "Data": {
        "id": number;
        "taskName": string;
        "robotId": number;
        "robotName": string;
        "corpName": string;
        "caller": string;
        "numberStatusIdent": boolean;
        "status": string;
        "scheduleType": string;
        "retryType": number;
        "recallStateCodes": string;
        "recallTimes": number;
        "recallInterval": number;
        "createTime": string;
        "fireTime": string;
        "completeTime": string;
        "called": {
            "fileName": string;
            "ossFilePath": string;
        }[];
    };
}
export { QueryRobotTaskDetailResponse };