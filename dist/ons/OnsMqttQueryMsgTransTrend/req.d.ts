interface OnsMqttQueryMsgTransTrendRequest {
    "RegionId"?: string;
    "TransType": string;
    "ParentTopic": string;
    "BeginTime": number;
    "EndTime": number;
    "TpsType": string;
    "SubTopic"?: string;
    "MsgType"?: string;
    "Qos"?: number;
    "InstanceId"?: string;
}
export { OnsMqttQueryMsgTransTrendRequest };