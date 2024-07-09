export interface UpdateInstanceRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1ptcb30009****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 配置变更类型，可选值：
     * - upgrade（默认）：升配
     * - downgrade：降配
     * @example `upgrade`
     */
    "orderActionType"?: string;
    /**
     * 请求体参数。
     * @example `{   "nodeSpec": {     "spec": "elasticsearch.r5.xlarge"   } }`
     */
    "body"?: {
        /**
         * 节点数量。
         * @example `3`
         */
        nodeAmount: number;
        /**
         * 数据节点配置。
         */
        nodeSpec: any;
        /**
         * 专有主节点配置。
         */
        masterConfiguration: any;
        /**
         * 协调节点配置。
         */
        clientNodeConfiguration: any;
        /**
         * 冷数据节点配置。
         */
        warmNodeConfiguration: any;
        /**
         * kibana节点配置。
         */
        kibanaConfiguration: any;
        /**
         * 弹性节点配置。
         */
        elasticDataNodeConfiguration: any;
        /**
         * 版本类型。可选值：
         * - x-pack：商业版实例
         * - advanced：增强版实例
         * - IS：开启Indexing Service的增强版实例
         * - community：基础版实例
         * > 创建增强版开启OpenStore的实例需要同时开启Indexing Service。
         * @example `advanced`
         */
        instanceCategory: string;
    };
    /**
     * 是否强制重启：
     * - true：是
     * - false（默认）：否
     * @example `false`
     */
    "force"?: boolean;
}
