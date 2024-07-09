export interface GetQueueAttributesRequest {
    /**
     * 队列名称。
     * @example `demo-queue`
     */
    "QueueName": string;
    "Tag"?: {
        Key: string;
        Value: string;
    }[];
}
