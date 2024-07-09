export interface ListMqSofamqWarnHistoryResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 查询到的报警日志集合
     */
    Data: {
        /**
         * 页码
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数
         * @example `10`
         */
        Total: number;
        /**
         * 报警日志信息
         */
        Content: {
            /**
             * 报警 ID
             * @example `1`
             */
            WarnId: number;
            /**
             * Group ID
             * @example `GID_TEST`
             */
            GroupId: string;
            /**
             * Topic 名称
             * @example `TP_TEST`
             */
            Topic: string;
            /**
             * 创建时间
             * @example `1570701259403`
             */
            GmtCreate: number;
            /**
             * 报警信息
             * @example `"Alert: 消息积压: 609 大于阈值: 600, 消息延时: 23478710ms 大于阈值: 10ms, "`
             */
            WarnInfo: string;
            /**
             * 实例 ID
             * @example `SOFAMQ_INSTANCE_000001`
             */
            InstanceId: string;
            /**
             * 修改时间
             * @example `1570701259403`
             */
            GmtModified: number;
            /**
             * 单元名称
             * @example `RZ00A`
             */
            Cell: string;
        }[];
    };
}
