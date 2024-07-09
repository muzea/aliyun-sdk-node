export interface GetGatewayResponse {
    /**
     * 请求ID。
     * @example `9C96CDF8-9E6C-5AB6-B83C-8F87A10117E6`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求是否成功的描述信息
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 网关信息。
     */
    Data: {
        /**
         * 网关ID。
         * @example `12`
         */
        Id: number;
        /**
         * 网关名称。
         * @example `DEFAULT`
         */
        Name: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597cd4a9****`
         */
        GatewayUniqueId: string;
        /**
         * 地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 创建主用户User ID。
         * @example `1231254`
         */
        PrimaryUser: string;
        /**
         * 获取数据集成同步任务的结果状态。取值如下：
         * * 0: 创建中
         * * 1: 创建失败
         * * 2: 运行中
         * * 3: 变更中
         * * 4: 缩容中
         * * 6: 扩容中
         * * 8: 删除中
         * * 10: 重启中
         * * 11: 重建中
         * * 12: 升级中
         * * 13: 升级失败
         * @example `0`
         */
        Status: number;
        /**
         * VPC网络ID。
         * @example `vpc-bp1328cm01m6uel42b5zb`
         */
        Vpc: string;
        /**
         * 交换机。
         * @example `vsw-bp18zeqxx6mpuq843z4n5`
         */
        Vswitch: string;
        /**
         * 安全组。
         * @example `sg-bp11ufzqn6mmb8dtzz82`
         */
        SecurityGroup: string;
        /**
         * 网关规格。
         * @example `MSE_GTW_16_32_200_c`
         */
        Spec: string;
        /**
         * 网关副本数。
         * @example `1`
         */
        Replica: number;
        /**
         * 网关设备的创建时间，GMT格式，是用户所在地的当地时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 最后一次更新实例的时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
        /**
         * XTrace详情。
         */
        XtraceDetails: {
            /**
             * XTrace采样率。
             * @example `10`
             */
            Sample: number;
            /**
             * 是否开启XTrace采样。
             * @example `true`
             */
            TraceOn: boolean;
        };
        /**
         * 交换机2。
         * @example `vpc-bp1j6ivhav15ve7q54kq2`
         */
        Vswitch2: string;
        /**
         * 实例ID。
         * @example `mse-cn-st21ri2****`
         */
        InstanceId: string;
        /**
         * 付费模式，包括包年包月和按量付费。
         * @example `POSTPAY`
         */
        ChargeType: string;
        /**
         * 网关结束时间。
         * @example `2021-08-01 00:00:00`
         */
        EndDate: string;
        /**
         * 状态描述。
         * @example `正在重启中。`
         */
        StatusDesc: string;
        /**
         * 日志配置。
         */
        LogConfigDetails: {
            /**
             * 是否开启日志投递
             * @example `true`
             */
            LogEnabled: boolean;
            /**
             * 项目名称。
             * @example `k8s-log-c173117256e934a96b7fefdf2ef8a8057`
             */
            ProjectName: string;
            /**
             * logstore名称。
             * @example `mse_access_log`
             */
            LogStoreName: string;
        };
        /**
         * 资源标签。
         * @example `{"TagKey":"TagValue"}`
         */
        MseTag: string;
        /**
         * 资源组ID。
         * @example `rg-acfm34x43l*****`
         */
        ResourceGroupId: string;
        /**
         * 总副本数（包括自动扩容副本数）。
         * @example `3`
         */
        TotalReplica: number;
        /**
         * 是否开启自动扩容。
         * @example `true`
         */
        Elastic: boolean;
        /**
         * 自动扩容副本数。
         * @example `1`
         */
        ElasticReplica: number;
        /**
         * 自动扩容类型，目前支持：
         * * CronHPA：按时间扩容
         * @example `CronHPA`
         */
        ElasticType: string;
        /**
         * 自动扩容策略。
         */
        ElasticPolicy: {
            /**
             * 自动扩容最大实例数（水平扩容时使用）。
             * @example `5`
             */
            MaxReplica: number;
            /**
             * 自动扩容类型，目前支持：
             * - CronHPA：按时间扩容
             * @example `CronHPA`
             */
            ElasticType: string;
            /**
             * 按时间扩容策略。
             */
            TimePolicyList: {
                /**
                 * 期望副本数。
                 * @example `2`
                 */
                DesiredReplica: number;
                /**
                 * 自动扩容起始时间。
                 * @example `16:00`
                 */
                StartTime: string;
                /**
                 * 自动扩容结束时间。
                 * @example `18:00`
                 */
                EndTime: string;
            }[];
        };
    };
}
