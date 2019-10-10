interface QueryRobotTaskListResponse {
    "Message": string;
    "RequestId": string;
    "Code": string;
    "Data": {
        "id": number;
        "taskName": string;
        "robotId": number;
        "robotName": string;
        "status": string;
        "scheduleType": string;
        "createTime": string;
        "completeTime": string;
        "fireTime": string;
        "totalCount": number;
        "finishCount": number;
    }[];
}
export { QueryRobotTaskListResponse };