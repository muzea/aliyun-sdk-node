interface QueryRobotTaskCallListResponse {
    "Message": string;
    "RequestId": string;
    "Code": string;
    "Data": {
        "taskId": number;
        "caller": string;
        "called": string;
        "duration": string;
        "label": string;
        "dialogCount": string;
        "callResult": string;
        "hangupDirection": string;
        "transferResult": string;
        "transferNumber": string;
        "transferFailReason": string;
        "callId": string;
        "recallCurTimes": number;
        "callStartTime": string;
        "callEndTime": string;
        "sureCount": number;
        "denyCount": number;
        "rejectCount": number;
        "customCount": number;
        "konwledgeCount": number;
        "defaultCount": number;
        "knowledgeBusinessCount": number;
        "knowledgeCommonCount": number;
    }[];
}
export { QueryRobotTaskCallListResponse };