export interface ListTopicSubscriptionsRequest {
    /**
     * 实例ID。
     * @example `rmq-cn-zpr34udri0w`
     */
    "instanceId": string;
    /**
     * 主题名称。
     * @example `dev4-HMH_INSURANCE_NOMAL_TOPIC`
     */
    "topicName"?: string;
}
