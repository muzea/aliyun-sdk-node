interface ModifyNotificationConfigRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "ProducerId": string;
    "AccessPoint": string;
    "Topic": string;
    "Subscriptions": string[];
}
export { ModifyNotificationConfigRequest };