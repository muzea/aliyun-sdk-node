export interface GetTopicAttributesRequest {
    /**
     * 主题的名称。
     * @example `demo-topic`
     */
    "TopicName": string;
    "Tag"?: {
        Key: string;
        Value: string;
    }[];
}
