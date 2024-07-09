export interface DescribeCloudAssistantStatusResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F****`
     */
    RequestId: string;
    /**
     * 云助手状态信息。
     */
    CloudAssistantStatus: {
        /**
         * 指定的轻量应用服务器的实例ID。
         * @example `ace0706b2ac4454d984295a94213****`
         */
        InstanceId: string;
        /**
         * 云助手状态。
         * @example `true`
         */
        Status: boolean;
    }[];
    /**
     * 命令总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     * 默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
}
