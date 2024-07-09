export interface TransferNodeRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif1q9o8r0008****`
     */
    "InstanceId": string;
    /**
     * 节点类型，可选值：
     * - WORKER：热节点
     * - WORKER_WARM：冷节点
     * @example `WORKER`
     */
    "nodeType": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 节点的IP地址。
         * @example `192.168.xx.xx`
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
