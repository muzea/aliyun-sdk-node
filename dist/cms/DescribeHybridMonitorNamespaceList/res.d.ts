export interface DescribeHybridMonitorNamespaceListResponse {
    /**
     * 请求ID。
     * @example `1EC450A4-3221-5148-B77E-2827576CFE48`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 调用结果。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Specified parameter PageSize is not valid.`
     */
    Message: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录条数。
     * @example `1`
     */
    Total: number;
    /**
     * 指标仓库详情。
     */
    DescribeHybridMonitorNamespace: {
        /**
         * 指标仓库描述。
         * @example `aliyun-test`
         */
        Description: string;
        /**
         * 创建指标仓库的时间戳。
         * 单位：毫秒。
         * @example `1652682744000`
         */
        CreateTime: string;
        /**
         * 指标仓库名称。
         * @example `aliyun-test`
         */
        Namespace: string;
        /**
         * 指标仓库是否已删除。取值：
         * - 0：未删除。
         * - 1：已删除。
         * @example `0`
         */
        IsDelete: number;
        /**
         * 指标仓库ID。
         * @example `3****`
         */
        Id: string;
        /**
         * 最后一次修改指标仓库的时间戳。
         * @example `1652682744000`
         */
        ModifyTime: string;
        /**
         * 数据存储时长的详情。
         */
        Detail: {
            /**
             * 数据存储时长。取值：
             * - cms.s1.large：数据存储时长15天。
             * - cms.s1.xlarge：数据存储时长32天。
             * - cms.s1.2xlarge：数据存储时长63天。
             * - cms.s1.3xlarge：数据存储时长93天。
             * - cms.s1.6xlarge：数据存储时长185天。
             * - cms.s1.12xlarge：数据存储时长376天。
             * @example `cms.s1.3xlarge`
             */
            Spec: string;
            /**
             * 监控数据存储的地域。
             * > 当您创建指标仓库时，如果`NamespaceType`选择`m_prom_user`，则显示该参数。
             * @example `cn-hangzhou`
             */
            NamespaceRegion: string;
            /**
             * 监控数据所在的日志项目。
             * > 当您创建指标仓库时，如果`NamespaceType`选择`m_prom_user`，则显示该参数。
             * @example `cms-hybrid-120886317861****-cn-hangzhou-a83d`
             */
            SLSProject: string;
        };
        /**
         * 非阿里云产品的数据接入任务数量。
         * @example `0`
         */
        NotAliyunTaskNumber: number;
        /**
         * 阿里云产品的数据接入任务的配置详情。
         */
        AliyunProductMetricList: {
            /**
             * 创建指标仓库的账号。
             * @example `120886317861****`
             */
            UserId: number;
            /**
             * 指标仓库列表。
             */
            NamespaceList: {
                /**
                 * 阿里云产品数据命名空间。
                 * @example `acs_ecs_dashboard`
                 */
                Namespace: string;
                /**
                 * 阿里云产品的监控项列表。
                 */
                MetricList: {
                    /**
                     * 监控项的采集周期。
                     * 单位：秒。
                     * @example `60`
                     */
                    Period: number;
                    /**
                     * 监控项列表。
                     */
                    List: string[];
                }[];
            }[];
            /**
             * 接入企业云监控的阿里云产品的配置文件。
             * - namespace：阿里云产品的命名空间。
             * - metric_list：阿里云服务的监控项。
             * - dimension：企业云监控支持查询的阿里云服务的资源。dimension为空，表示监控所有资源。
             * @example `products:- namespace: acs_ecs_dashboard metric_info: - metric_list: - cpu_total dimension: ''`
             */
            YAMLConfig: string;
        }[];
        /**
         * 监控数据的存储方案。取值：
         * - m_prom_user：监控数据存储在日志服务中。
         * - m_prom_pool：监控数据存储在云监控提供的存储空间中。
         * @example `m_prom_user`
         */
        NamespaceType: string;
    }[];
}
