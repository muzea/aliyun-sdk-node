export interface ShrinkNodeRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif1q9o8r0008****`
     */
    "InstanceId": string;
    /**
     * 需要缩容的节点类型，可选值：
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
     * 是否忽略集群健康状态：
     * - true：忽略
     * - false：不忽略
     * @example `false`
     */
    "ignoreStatus"?: boolean;
    /**
     * 缩节点数量。
     * ><notice> 此参数仅适用于ACK架构实例，且不支持填写body中的host参数。
     * ></notice>
     * @example `2`
     */
    "count"?: number;
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
         * 实例节点所在的可用区ID。例如，上海可用区C为cn-shanghai-c。
         * @example `cn-shanghai-c`
         */
        zoneId: string;
        /**
         * 需要缩容的节点类型，可选值：
         * - WORKER：热节点
         * - WORKER_WARM：冷节点
         * @example `WORKER`
         */
        nodeType: string;
        /**
         * 节点的访问端口号。
         * @example `9200`
         */
        port: number;
        /**
         * 云原生ACK架构集群的节点名称，可调用[ListAllNode](~~183958~~)接口获取。
         * @example `es-cn-pl32xxxxxxx-data-f-1`
         */
        hostName: string;
    }[];
}
