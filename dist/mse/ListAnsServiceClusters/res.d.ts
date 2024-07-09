export interface ListAnsServiceClustersResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `52BA6DA6-A702-4362-A32F-DFF79655****`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 保护阈值。
         * @example `0`
         */
        ProtectThreshold: number;
        /**
         * 服务所属服务组。
         * @example `DEFAULT_GROUP`
         */
        GroupName: string;
        /**
         * 集群信息。
         */
        Clusters: {
            /**
             * 默认检查端口。
             * @example `80`
             */
            DefaultCheckPort: number;
            /**
             * 健康检查类型。
             * @example `connection：链接存活检查
            tcp: TCP连接检查
            http：HTTP连接检查`
             */
            HealthCheckerType: string;
            /**
             * 服务端是否主动发起端到端健康状态检查，当服务为非临时服务时此值有效。
             * @example `true`
             */
            UseIPPort4Check: boolean;
            /**
             * 全量服务名。
             * @example `DEFAULT_GROUP@@nacos.test.3`
             */
            ServiceName: string;
            /**
             * 集群名称。
             * @example `test`
             */
            Name: string;
            /**
             * 默认端口。
             * @example `80`
             */
            DefaultPort: number;
            /**
             * 集群元数据。
             * @example `111`
             */
            Metadata: any;
        }[];
        /**
         * 服务名称。
         * @example `nacos.test.3`
         */
        Name: string;
        /**
         * 选举模式。
         * @example `none`
         */
        SelectorType: string;
        /**
         * 服务元数据。
         * @example `111`
         */
        Metadata: any;
        /**
         * 是否临时节点，取值如下：
         * - `true`：是。
         * - `false`：否。
         * @example `true`
         */
        Ephemeral: boolean;
        /**
         * 服务类型，取值如下：
         * * console：控制台注册。
         * * sdk：SDK注册。
         * * governance：服务治理注册。
         * @example `console`
         */
        Source: string;
        /**
         * 服务类型为服务治理注册时，服务所关联的服务治理应用信息。
         */
        AppDetail: {
            /**
             * 服务治理应用id。
             * @example `hkhon1po62@904cba2c0xxxxxx`
             */
            AppId: string;
            /**
             * 服务治理应用名。
             * @example `spring-cloud-b`
             */
            AppName: string;
            /**
             * 服务治理应用端口。
             * @example `6001`
             */
            Port: number;
            /**
             * 健康检查协议，取值如下：
             * * connection：链接存活检查。
             * * tcp: TCP连接检查。
             * * http：HTTP连接检查。
             * @example `connection`
             */
            CheckType: string;
            /**
             * 健康检查路径（健康检查类型为http时携带）。
             * @example `/health`
             */
            CheckPath: string;
            /**
             * 健康检查响应超时时间，单位：秒。
             * @example `5`
             */
            CheckTimeout: number;
            /**
             * 健康检查间隔，单位：秒。
             * @example `2`
             */
            CheckInternal: number;
            /**
             * 健康检查健康阈值，指实例从不健康变为健康过程中健康探测重试次数。
             * @example `2`
             */
            HealthyCheckTimes: number;
            /**
             * 健康检查不健康阈值，指实例从健康变为不健康过程中健康探测重试次数。
             * @example `2`
             */
            UnhealthyCheckTimes: number;
        };
    };
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
}
