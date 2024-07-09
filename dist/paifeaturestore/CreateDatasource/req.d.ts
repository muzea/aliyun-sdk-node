export interface CreateDatasourceRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `featureStore-cn-test1`
     */
    "InstanceId": string;
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
         * 工作空间ID，可从接口[ListWorkspaces](~~449124~~)获取。
         * @example `234`
         */
        WorkspaceId: string;
        /**
         * 数据源类型，取值如下：
         * ● Hologres
         * ● GraphCompute
         * ● Redis
         * ● MaxCompute
         * @example `Hologres`
         */
        Type: string;
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
