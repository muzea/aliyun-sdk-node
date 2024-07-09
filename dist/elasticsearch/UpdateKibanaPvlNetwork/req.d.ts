export interface UpdateKibanaPvlNetworkRequest {
    /**
     * 实例ID。
     * @example `es-cn-vo93ngti8000a****`
     */
    "InstanceId": string;
    /**
     * Kibana私网连接ID。
     * @example `es-cn-vo93ngti8000a****-kibana-internal-internal`
     */
    "pvlId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 终端节点名称。
         * @example `es-cn-text-kibana`
         */
        endpointName: string;
        /**
         * 安全组列表。
         */
        securityGroups: string[];
    };
}
