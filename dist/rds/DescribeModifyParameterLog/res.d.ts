export interface DescribeModifyParameterLogResponse {
    /**
     * 请求ID。
     * @example `C8E88DED-533F-4B3C-9207-731FBF394CCA`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 日志记录总数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 数据库类型。
     * @example `mysql`
     */
    Engine: string;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据库版本。
     * @example `5.6`
     */
    EngineVersion: string;
    Items: {
        /**
         * 日志记录列表。
         */
        ParameterChangeLog: {
            /**
             * 状态。取值：
             * * **Applied**：已生效。
             * * **Syncing**：正在应用，尚未生效。
             * @example `Syncing`
             */
            Status: string;
            /**
             * 修改前参数值。
             * @example `8`
             */
            OldParameterValue: string;
            /**
             * 参数名称。
             * @example `innodb_stats_sample_pages`
             */
            ParameterName: string;
            /**
             * 修改后参数值。
             * @example `3`
             */
            NewParameterValue: string;
            /**
             * 修改参数的Unix时间戳。单位：毫秒。
             * @example `1584076066000`
             */
            ModifyTime: string;
        }[];
    };
}
