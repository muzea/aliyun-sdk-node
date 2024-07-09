export interface UpdateLogstashRequest {
    /**
     * 实例ID。
     * @example `ls-cn-n6w1o5jq****`
     */
    "InstanceId": string;
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
         * 节点规格配置。
         */
        nodeSpec: {
            /**
             * 规格信息，可在[产品规格](~~271718~~)中查看。
             * @example `elasticsearch.sn1ne.large`
             */
            spec: string;
            /**
             * 磁盘大小，单位：GB。
             * @example `20`
             */
            disk: number;
            /**
             * 磁盘类型。可选值：
             * - cloud_efficiency：高效云盘
             * - cloud_ssd：ssd云盘
             * @example `cloud_efficiency`
             */
            diskType: string;
        };
        /**
         * 节点数量。
         * @example `3`
         */
        nodeAmount: number;
    };
}
