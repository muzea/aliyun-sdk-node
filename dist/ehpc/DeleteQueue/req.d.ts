export interface DeleteQueueRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 需要删除的队列名称。
     * 您可以通过调用[ListQueues](~~92176~~)获取队列名称。
     * @example `workq`
     */
    "QueueName": string;
}
