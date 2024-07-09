export interface ModifyClusterOnlineConfigRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 配置信息
         */
        config: any;
        /**
         * 集群信息
         */
        clusters: string[];
    };
}
