interface DialExRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Caller": string;
    "Callee": string;
    "RoutPoint": string;
    "AnswerMode": number;
    "Provider"?: string;
}
export { DialExRequest };