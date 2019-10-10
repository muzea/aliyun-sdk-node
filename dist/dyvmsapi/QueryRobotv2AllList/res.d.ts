interface QueryRobotv2AllListResponse {
    "Message": string;
    "RequestId": string;
    "Code": string;
    "Data": {
        "id": number;
        "robotName": string;
        "robotType": string;
    };
}
export { QueryRobotv2AllListResponse };