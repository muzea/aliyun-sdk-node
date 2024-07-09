export interface ListAllNodeResponse {
    /**
     * 请求ID。
     * @example `0D71B597-F3FF-5B56-88D7-74F9D3F7****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * JVM内存使用率。
         * @example `21.6%`
         */
        heapPercent: string;
        /**
         * 节点所在可用区。
         * @example `cn-hangzhou-i`
         */
        zoneId: string;
        /**
         * CPU使用率。
         * > 当**extended**为**true**且节点的监控信息在同步时，参数值会返回null，此时需要等待10秒重新发送请求获取该值。
         * @example `4.2%`
         */
        cpuPercent: string;
        /**
         * 节点IP。
         * @example `10.15.XX.XX`
         */
        host: string;
        /**
         * 节点类型，支持：
         * - MASTER：专有主节点
         * - WORKER：热节点
         * - WORKER_WARM：冷节点
         * - COORDINATING：协调节点
         * - KIBANA：Kibana节点
         * @example `WORKER`
         */
        nodeType: string;
        /**
         * 磁盘使用率。
         * @example `1.0%`
         */
        diskUsedPercent: string;
        /**
         * 节点访问端口。
         * @example `9200`
         */
        port: number;
        /**
         * 一分钟负载。
         * @example `0.12`
         */
        loadOneM: string;
        /**
         * 节点健康状态。支持：GREEN、YELLOW、RED和GRAY。
         * @example `GREEN`
         */
        health: string;
    }[];
}
