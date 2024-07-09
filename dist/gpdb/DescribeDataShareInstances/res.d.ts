export interface DescribeDataShareInstancesResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 本页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D5**********`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 实例列表。
         */
        DBInstance: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-j`
             */
            ZoneId: string;
            /**
             * 实例ID。
             * @example `gp-bp***************`
             */
            DBInstanceId: string;
            /**
             * 实例资源类型，取值说明：
             * - **Serverless**：Serverless版本。
             * - **StorageElasic**：存储弹性模式。
             * - **Classic**：存储预留模式。
             * @example `Serverless`
             */
            DBInstanceMode: string;
            /**
             * 实例描述。
             * @example `gp-bp***************`
             */
            Description: string;
            /**
             * 数据共享的状态，取值说明：
             * - **opening**：开通中。
             * - **opened**：已开通。
             * - **closing**：关闭中。
             * - **closed**：已关闭。
             * @example `opened`
             */
            DataShareStatus: string;
        }[];
    };
}
