export interface DescribeDBClusterConfigResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `selectdb-cn-wny3li0****`
         */
        DbInstanceName: string;
        /**
         * 实例数字ID。
         * @example `6585`
         */
        DbInstanceId: string;
        /**
         * 集群ID。
         * @example `selectdb-cn-wny3li0****-be`
         */
        DbClusterId: string;
        /**
         * 任务ID。
         * @example `107841167`
         */
        TaskId: number;
        /**
         * 用户参数。
         */
        Params: {
            /**
             * 配置项名称。
             * @example `doris_scanner_thread_pool_thread_num`
             */
            Name: string;
            /**
             * 取值范围。
             * @example `[0-20000]`
             */
            Optional: string;
            /**
             * 字段的注释。
             * @example `存储引擎并发扫描硬盘的线程数。采用线程池统一管理。`
             */
            Comment: string;
            /**
             * 当前值。
             * @example `10`
             */
            Value: string;
            /**
             * 配置项归类。
             * @example `查询`
             */
            ParamCategory: string;
            /**
             * 参数默认值。
             * @example `15`
             */
            DefaultValue: string;
            /**
             * 是否动态生效（不需要重启）。
             * @example `true`
             */
            IsDynamic: number;
            /**
             * 是否允许用户修改。
             * @example `true`
             */
            IsUserModifiable: number;
        }[];
    };
    /**
     * 动态code，暂无使用，请忽略。
     * @example `0`
     */
    DynamicCode: string;
    /**
     * 动态消息，暂无使用，请忽略。
     * @example `An error occurred while processing your request.`
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息；只有校验RAM失败后，字段才会返回。
     * @example `failed`
     */
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `ADF42B18-43FD-5100-83A9-BE81AB70C863`
     */
    RequestId: string;
}
