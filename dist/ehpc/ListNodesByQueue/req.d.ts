interface ListNodesByQueueRequest {
    "RegionId": string;
    "ClusterId": string;
    "QueueName": string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListNodesByQueueRequest };