export interface DescribeDBInstancesByPerformanceResponse {
    /**
     * 请求ID。
     * @example `23907437-79B9-411A-9EE6-75A8F0F1C619`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前页实例个数。
     * @example `28`
     */
    PageRecordCount: number;
    /**
     * 查询出的总实例数量。
     * @example `28`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 返回信息列表。
         */
        DBInstancePerformance: {
            /**
             * 实例的当前CPU使用率。单位：%。
             * @example `0.70`
             */
            CPUUsage: string;
            /**
             * 会话连接数。
             * @example `0.10`
             */
            SessionUsage: string;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5xxxxxx`
             */
            DBInstanceId: string;
            /**
             * 实例的名称。
             * @example `DatabaseTest`
             */
            DBInstanceDescription: string;
            /**
             * 实例的当前IOPS使用量。单位：%。
             * @example `0.15`
             */
            IOPSUsage: string;
            /**
             * 实例的当前磁盘使用率。单位：%。
             * @example `14.56`
             */
            DiskUsage: string;
        }[];
    };
}
