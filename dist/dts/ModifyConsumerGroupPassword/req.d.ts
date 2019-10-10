interface ModifyConsumerGroupPasswordRequest {
    "RegionId"?: string;
    "SubscriptionInstanceId": string;
    "ConsumerGroupID": string;
    "ConsumerGroupPassword": string;
    "consumerGroupNewPassword": string;
    "ConsumerGroupName"?: string;
    "ConsumerGroupUserName"?: string;
    "OwnerId"?: string;
}
export { ModifyConsumerGroupPasswordRequest };