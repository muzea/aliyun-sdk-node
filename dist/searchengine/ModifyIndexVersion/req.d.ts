export interface ModifyIndexVersionRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 集群名称
     * @example `vpc_hz_domain_2`
     */
    "clusterName"?: string;
    /**
     * 请求结构。
     * @example `{}`
     */
    "body"?: {
        /**
         * 索引名称
         * @example `main_index`
         */
        indexName: string;
        /**
         * 索引版本
         * @example `1`
         */
        version: string;
        /**
         * 数据源部署id
         * @example `277`
         */
        buildDeployId: string;
    }[];
}
