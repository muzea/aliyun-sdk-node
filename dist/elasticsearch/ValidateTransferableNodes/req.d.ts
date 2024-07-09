export interface ValidateTransferableNodesRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif1q9o8r0008****`
     */
    "InstanceId": string;
    /**
     * 节点类型，可选值：
     * - WORKER：热节点
     * - WORKER_WARM：冷节点
     * > 不支持COORDINATING（协调节点）和KIBANA（Kibana节点）。
     * @example `WORKER`
     */
    "nodeType": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 节点的IP地址。
         * @example `172.16.xx.xx`
         */
        host: string;
        /**
         * 节点的访问端口号。
         * @example `9200`
         */
        port: number;
        /**
         * 实例节点所在的可用区ID。例如，上海可用区C为cn-shanghai-c。
         * @example `cn-shanghai-c`
         */
        zoneId: string;
    }[];
}
