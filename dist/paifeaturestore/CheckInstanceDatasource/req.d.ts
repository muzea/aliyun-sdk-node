export interface CheckInstanceDatasourceRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 数据源类型。
         * ● Hologres
         * ● GraphCompute
         * ● Redis
         * ● MaxCompute
         * @example `Hologres`
         */
        Type: string;
        /**
         * 资源地址。
         * @example `igraph1`
         */
        Uri: string;
        /**
         * 资源配置。
         * @example `{"address": ""}`
         */
        Config: string;
    };
}
