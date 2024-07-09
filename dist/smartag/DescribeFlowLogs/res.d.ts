export interface DescribeFlowLogsResponse {
    /**
     * 总条目数。
     * @example `5`
     */
    TotalCount: number;
    FlowLogs: {
        /**
         * 流日志实例信息列表。
         */
        FlowLogSetType: {
            /**
             * 流日志实例的状态：
             * - **Active**：已启动。
             * - **Inactive**：未启动。
             * @example `Active`
             */
            Status: string;
            /**
             * 流日志实例关联的智能接入网关实例数目。
             * @example `2`
             */
            TotalSagNum: number;
            /**
             * 存储流日志的Netflow服务器地址。
             * @example `192.168.0.1`
             */
            NetflowServerIp: string;
            /**
             * 日志服务的Project名称。
             * @example `sag-flowlog-shanghai`
             */
            ProjectName: string;
            /**
             * 日志服务的地域ID。
             * @example `cn-shanghai`
             */
            SlsRegionId: string;
            /**
             * 活跃流输出间隔。单位：秒。
             * @example `300`
             */
            ActiveAging: number;
            /**
             * 流日志输出类型。
             * - **sls**：流日志存储在阿里云日志服务中。
             * - **netflow**：流日志存储在您配置的Netflow服务器上。
             * - **all**：流日志同时存储在阿里云日志服务和您配置的Netflow服务器上。
             * @example `sls`
             */
            OutputType: string;
            /**
             * 流日志实例描述。
             * @example `aaa`
             */
            Description: string;
            /**
             * 存储流日志的Netflow协议版本号，默认值为**V9**。
             * @example `V9`
             */
            NetflowVersion: string;
            /**
             * 非活跃流输出间隔。单位：秒。
             * @example `15`
             */
            InactiveAging: number;
            /**
             * 存储流日志的Netflow服务器端口，默认值为**9995**。
             * @example `9995`
             */
            NetflowServerPort: string;
            /**
             * 流日志实例名称。
             * @example `DDE`
             */
            Name: string;
            /**
             * 流日志实例ID。
             * @example `fl-7a56mar1kfw9vj****`
             */
            FlowLogId: string;
            /**
             * 日志服务的日志库名称。
             * @example `config-operation-log`
             */
            LogstoreName: string;
            /**
             * 流日志实例所属的资源组ID。
             * @example `rg-acfm2iu4fnc****`
             */
            ResourceGroupId: string;
        }[];
    };
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `44F4E2D0-77F7-4DEC-969B-061688946143`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
}
