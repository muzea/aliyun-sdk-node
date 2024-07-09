export interface SetQueueRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 目标队列名称。
     * @example `work`
     */
    "QueueName": string;
    /**
     * 队列中节点信息列表。
     */
    "Node": {
        /**
         * 需要移动的计算节点主机名称。
         * @example `compute1`
         */
        Name: string;
    }[];
}
