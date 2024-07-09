export interface DescribeFlowlogsResponse {
    /**
     * 分页查询时每页的条目数。
     * @example `20`
     */
    PageSize: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 请求ID。
     * @example `F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 当前接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: string;
    FlowLogs: {
        /**
         * 流日志信息列表。
         */
        FlowLog: {
            /**
             * 流日志的状态。
             * - **Active**：已启动。
             * - **Inactive**：未启动。
             * @example `Active`
             */
            Status: string;
            /**
             * 流日志的创建时间。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
             * @example `2021-07-24T13:00:52Z`
             */
            CreationTime: string;
            /**
             * 流日志的名称。
             * @example `myFlowlog`
             */
            FlowLogName: string;
            /**
             * 流日志的描述信息。
             * @example `myFlowlog`
             */
            Description: string;
            /**
             * 存储捕获流量的Project名称。
             * @example `FlowLogProject`
             */
            ProjectName: string;
            /**
             * 云企业网实例ID。
             * @example `cen-7qthudw0ll6jmc****`
             */
            CenId: string;
            /**
             * 存储捕获流量的LogStore名称。
             * @example `FlowLogStore`
             */
            LogStoreName: string;
            /**
             * 流日志所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 流日志ID。
             * @example `flowlog-m5evbtbpt****`
             */
            FlowLogId: string;
            /**
             * 网络实例连接ID。
             * @example `tr-attach-5x4o4ynzuqbv6g****`
             */
            TransitRouterAttachmentId: string;
            TransitRouterId: string;
            LogFormatString: string;
            FlowLogVersion: string;
            /**
             * 流日志捕获流量的捕获窗口时长。单位：秒。取值：**60**或**600**。默认值：**600**。
             * @example `60`
             */
            Interval: number;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `TagKey`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `TagValue`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
