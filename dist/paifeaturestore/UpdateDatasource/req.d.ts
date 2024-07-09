export interface UpdateDatasourceRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 数据源ID，可通过接口ListDatasources获取。
     * @example `3`
     */
    "DatasourceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 数据源名称。
         * @example `datasource1`
         */
        Name: string;
        /**
         * 资源地址。
         * @example `igraph_instance1`
         */
        Uri: string;
        /**
         * 资源配置。
         * @example `{"address": ""}`
         */
        Config: string;
    };
}
