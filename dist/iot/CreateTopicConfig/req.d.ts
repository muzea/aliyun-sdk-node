export interface CreateTopicConfigRequest {
    "IotInstanceId"?: string;
    "Description"?: string;
    "ProductKey": string;
    "EnableBroadcast"?: boolean;
    "EnableProxySubscribe"?: boolean;
    "Codec"?: string;
    "Operation": string;
    "TopicFullName": string;
}
